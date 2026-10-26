/**
 * This example demonstrates how to start workflows, list the workflow tasks
 * of the current user, and forward a workflow task.
 *
 * Workflows can be started in three ways:
 *   - startWorkFlow:       standard workflow based on a workflow template
 *   - startAdHocWorkFlow:  serial or parallel ad hoc workflow, "for information"
 *                          or "for validation" (adds a return path to the initiator)
 *   - checkinWorkFlow:     user-defined workflow, e.g. a modified template diagram
 *
 * Forwarding a task is a two-step operation:
 *   1. beginEditWorkFlowNode reads the task and its possible successors and locks the workflow.
 *   2. endEditWorkFlowNode activates the selected successors and releases the lock.
 * Group tasks and tasks of a substituted user must be taken with takeWorkFlowNode first.
 */
async function workflowExample() {

	// Login, see login.js for details.
	// Make sure you have already read the constants into a global variable.

	var objId = await insertFolder(config.parentId, 'workflowExample-' + Date.now());

	// Send the folder to the current user. A serial "for information" workflow
	// with one user consists of: start node -> person node -> end node.
	var flowId = await startAdHocWorkflow(objId, [config.loginUser], false, true);
	console.log('started ad hoc workflow', flowId);

	// Find the task created by the workflow.
	var tasks = await findWorkflowTasks();
	var task = tasks.find(wfNode => wfNode.flowId === flowId);
	if (!task) {
		throw new Error('Workflow task not found, flowId=' + flowId);
	}
	console.log('task', task.nodeName, 'for', task.objName);

	// Forward the task to all (or the first) successor node(s).
	await forwardWorkflowTask(task.flowId, task.nodeId, 'Forwarded via REST API');

	return flowId;
}

/**
 * Start a standard workflow from a workflow template.
 * @param templateId Template ID, GUID or name, e.g. 'Hotel Reservation'.
 * @param objId ID or GUID of the document or folder the workflow is attached to.
 * @param flowName Name of the new workflow.
 * @return ID of the started workflow.
 */
async function startWorkflow(templateId, objId, flowName) {
	return await xhr.restcall('IXServicePortIF/startWorkFlow', {
		templFlowId: String(templateId),
		flowName: flowName,
		objId: String(objId)
	});
}

/**
 * Start an ad hoc workflow.
 * @param objId ID or GUID of the document or folder.
 * @param userIds Array of user names or IDs receiving the task.
 * @param forValidation true: "for validation" with return path to the initiator on rejection,
 *                      false: "for information".
 * @param serialFlow true: users receive the task one after another, false: at the same time.
 * @return ID of the started workflow.
 */
async function startAdHocWorkflow(objId, userIds, forValidation, serialFlow) {
	return await xhr.restcall('IXServicePortIF/startAdHocWorkFlow', {
		name: 'Ad hoc workflow ' + (serialFlow ? 'serial' : 'parallel') + (forValidation ? ', validation' : ', fyi'),
		objId: String(objId),
		arrUserIds: userIds,
		nodeName: 'Please review',
		forValidation: forValidation,
		serialFlow: serialFlow,
		cancelUserId: config.loginUser,
		cancelMessage: 'Workflow canceled',
		finishedUserId: config.loginUser,
		finishedMessage: 'Workflow finished',
		finishedScript: ''
	});
}

/**
 * Start a user-defined workflow based on a copy of a workflow template.
 * The diagram could be modified (nodes, users, time limits) before checkin.
 * @param templateId Template ID, GUID or name.
 * @param objId ID or GUID of the document or folder.
 * @param flowName Name of the new workflow.
 * @return ID of the started workflow.
 */
async function startWorkflowFromDiagram(templateId, objId, flowName) {
	var wf = await xhr.restcall('IXServicePortIF/checkoutWorkFlow', {
		flowId: String(templateId),
		typeZ: CONST.WORKFLOW_TYPE.TEMPLATE,
		workFlowDiagramZ: CONST.WORKFLOW.mbAll,
		lockZ: CONST.LOCK.NO
	});

	// Convert the template into a new active workflow.
	wf.type = CONST.WORKFLOW_TYPE.ACTIVE;
	wf.id = -1;
	wf.name = flowName;
	wf.objId = String(objId);

	// Checkin starts the workflow.
	return await xhr.restcall('IXServicePortIF/checkinWorkFlow', {
		wf: wf,
		workFlowDiagramZ: CONST.WORKFLOW.mbAll,
		unlockZ: CONST.LOCK.NO
	});
}

/**
 * Collect the workflow tasks of the current user, including group and deputy tasks.
 * @return Array of WFCollectNode objects.
 */
async function findWorkflowTasks() {
	var findInfo = {
		inclWorkflows: true,
		inclGroup: true,
		inclDeputy: true,
		lowestPriority: CONST.USER_TASK_PRIORITY.LOWEST,
		highestPriority: CONST.USER_TASK_PRIORITY.HIGHEST
	};
	var maxPerBatch = 100;
	var wfNodes = [];

	var findResult = await xhr.restcall('IXServicePortIF/findFirstTasks', {
		findInfo: findInfo,
		max: maxPerBatch
	});
	var searchId = findResult.searchId;
	try {
		var index = 0;
		while (true) {
			for (var userTask of findResult.tasks) {
				// Tasks can also be reminders or activities.
				if (userTask.wfNode) {
					wfNodes.push(userTask.wfNode);
				}
			}
			if (!findResult.moreResults) {
				break;
			}
			index += findResult.tasks.length;
			findResult = await xhr.restcall('IXServicePortIF/findNextTasks', {
				searchId: searchId,
				idx: index,
				max: maxPerBatch
			});
		}
	}
	finally {
		await xhr.restcall('IXServicePortIF/findClose', {
			searchId: searchId
		});
	}

	for (var wfNode of wfNodes) {
		console.log('flowId=' + wfNode.flowId + ', nodeId=' + wfNode.nodeId +
			', task=' + wfNode.nodeName + ', object=' + wfNode.objName +
			(wfNode.timeLimitIso ? ', time limit=' + wfNode.timeLimitIso : '') +
			(wfNode.overTimeLimit ? ', over time' : ''));
	}
	return wfNodes;
}

/**
 * Take a group task or a task of a substituted user before forwarding it.
 * LockC.IF_FREE fails if the workflow is locked; main administrators can use LockC.FORCE.
 */
async function takeWorkflowTask(flowId, nodeId) {
	await xhr.restcall('IXServicePortIF/takeWorkFlowNode', {
		nFlowId: flowId,
		nNodeId: nodeId,
		sUserId: '',
		nFlags: CONST.TAKE_NODE.RESET_IN_USE_DATE,
		lockZ: CONST.LOCK.IF_FREE
	});
}

/**
 * Forward a workflow task.
 * @param flowId Workflow ID.
 * @param nodeId Node ID of the person node (task).
 * @param comment Comment stored in the node.
 * @param successorIds Optional successor node IDs. Default: all successors,
 *                     or only the first one if the node allows one successor.
 */
async function forwardWorkflowTask(flowId, nodeId, comment, successorIds) {

	// Read the task and lock the whole workflow against concurrent forwarding.
	var editNode = await xhr.restcall('IXServicePortIF/beginEditWorkFlowNode', {
		nFlowId: flowId,
		nNodeId: nodeId,
		lockZ: CONST.LOCK.YES
	});

	var forwarded = false;
	try {
		var node = editNode.node;
		var oneSuccessor = (node.flags & CONST.WORKFLOW_NODE.FLAG_ONE_SUCCESSOR) !== 0;
		for (var succNode of editNode.succNodes) {
			console.log('successor id=' + succNode.id + ', user=' + succNode.userName + ', name=' + succNode.name);
		}

		// A forwarding dialog would let the user choose here.
		if (!successorIds) {
			successorIds = editNode.succNodes.map(succNode => succNode.id);
		}
		if (oneSuccessor && successorIds.length > 1) {
			successorIds = successorIds.slice(0, 1);
		}

		await xhr.restcall('IXServicePortIF/endEditWorkFlowNode', {
			nFlowId: flowId,
			nNodeId: nodeId,
			bTerminate: false,
			bCancel: false,
			sName: node.name,
			sComment: comment,
			arrEnterNodesIds: successorIds
		});
		forwarded = true;
	}
	finally {
		// bCancel: true only releases the lock without forwarding.
		if (!forwarded) {
			await xhr.restcall('IXServicePortIF/endEditWorkFlowNode', {
				nFlowId: flowId,
				nNodeId: nodeId,
				bTerminate: false,
				bCancel: true,
				sName: '',
				sComment: '',
				arrEnterNodesIds: []
			});
		}
	}
}

/**
 * Create a folder below the given parent.
 * @param parentId Parent ID, GUID or ARCPATH.
 * @param name Folder name.
 * @return Object ID of the new folder.
 */
async function insertFolder(parentId, name) {
	var editInfo = await xhr.restcall('IXServicePortIF/createSord', {
		parentId: String(parentId),
		maskId: CONST.DOC_MASK.GUID_FOLDER,
		editInfoZ: CONST.EDIT_INFO.mbSord
	});
	var sord = editInfo.sord;
	sord.name = name;
	return await xhr.restcall('IXServicePortIF/checkinSord', {
		sord: sord,
		sordZ: CONST.SORD.mbAll,
		unlockZ: CONST.LOCK.NO
	});
}
