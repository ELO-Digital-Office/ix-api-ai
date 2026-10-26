# Workflows

Example: [workflow.js](../../examples/rest/javascript/workflow.js).
`workflowExample()` creates a folder, sends it to the current user in an ad hoc
workflow, finds the task, and forwards it.

```javascript
var flowId = await startWorkflow('Hotel Reservation', objId, 'Hotel Reservation for ' + objId);
var tasks = await findWorkflowTasks();
await forwardWorkflowTask(tasks[0].flowId, tasks[0].nodeId, 'Done');
```

## Functions

| Function | Parameters | Purpose |
| --- | --- | --- |
| `startWorkFlow` | `templFlowId`, `flowName`, `objId` | Start a workflow from a template (ID, GUID, or name); returns the workflow ID |
| `startAdHocWorkFlow` | `name`, `objId`, `arrUserIds`, `nodeName`, `forValidation`, `serialFlow`, `cancelUserId`, `cancelMessage`, `finishedUserId`, `finishedMessage`, `finishedScript` | Start an ad hoc workflow |
| `checkoutWorkFlow` / `checkinWorkFlow` | `flowId`, `typeZ`, `workFlowDiagramZ`, `lockZ` / `wf`, `workFlowDiagramZ`, `unlockZ` | Start a user-defined workflow from a `WFDiagram` |
| `findFirstTasks` / `findNextTasks` / `findClose` | `findInfo`, `max` / `searchId`, `idx`, `max` | Collect tasks of the current user (`FindResult.tasks[].wfNode`) |
| `takeWorkFlowNode` | `nFlowId`, `nNodeId`, `sUserId`, `nFlags`, `lockZ` | Take a group or deputy task before forwarding |
| `beginEditWorkFlowNode` | `nFlowId`, `nNodeId`, `lockZ` | Read a task (`WFEditNode`) and its successors, lock the workflow |
| `endEditWorkFlowNode` | `nFlowId`, `nNodeId`, `bTerminate`, `bCancel`, `sName`, `sComment`, `arrEnterNodesIds` | Forward to the given successors, or only release the lock with `bCancel: true` |

## Start

- **Template:** `startWorkFlow` with template ID, GUID, or name.
- **Ad hoc:** `serialFlow: true` sends the task to the users one after another,
  otherwise in parallel. `forValidation: true` adds a return path to the
  initiator if a user rejects the task; `false` means "for information".
- **User-defined:** check out a template with
  `typeZ: CONST.WORKFLOW_TYPE.TEMPLATE`, set `wf.type = CONST.WORKFLOW_TYPE.ACTIVE`,
  `wf.id = -1`, `wf.name`, `wf.objId`, optionally modify nodes, then
  `checkinWorkFlow` starts it.

## Find tasks

Set `inclWorkflows`, `inclGroup`, `inclDeputy`, and the priority range
(`CONST.USER_TASK_PRIORITY.LOWEST` / `HIGHEST`) in `FindTasksInfo`. Results
can also be reminders or activities; only entries with `wfNode` are workflow
tasks. Page through results like Sord searches and always call `findClose`.
Tasks of other users require a session of that user (e.g. `runAs`).

## Forward

1. Group tasks and tasks of a substituted user must first be taken with
   `takeWorkFlowNode` (`nFlags: CONST.TAKE_NODE.RESET_IN_USE_DATE`,
   `lockZ: CONST.LOCK.IF_FREE`; main administrators may use `CONST.LOCK.FORCE`).
2. `beginEditWorkFlowNode` with `CONST.LOCK.YES` reads the node and its
   successors (`succNodes`) and locks the whole workflow.
3. `endEditWorkFlowNode` with the selected successor IDs forwards the task and
   releases the lock. If `node.flags` contains
   `CONST.WORKFLOW_NODE.FLAG_ONE_SUCCESSOR`, pass exactly one successor ID.
4. On errors, call `endEditWorkFlowNode` with `bCancel: true` in `finally` to
   release the lock without forwarding.

```javascript
var editNode = await xhr.restcall('IXServicePortIF/beginEditWorkFlowNode', {
	nFlowId: flowId, nNodeId: nodeId, lockZ: CONST.LOCK.YES
});
var forwarded = false;
try {
	await xhr.restcall('IXServicePortIF/endEditWorkFlowNode', {
		nFlowId: flowId, nNodeId: nodeId, bTerminate: false, bCancel: false,
		sName: editNode.node.name, sComment: 'Done',
		arrEnterNodesIds: editNode.succNodes.map(n => n.id)
	});
	forwarded = true;
} finally {
	if (!forwarded) {
		await xhr.restcall('IXServicePortIF/endEditWorkFlowNode', {
			nFlowId: flowId, nNodeId: nodeId, bTerminate: false, bCancel: true,
			sName: '', sComment: '', arrEnterNodesIds: []
		});
	}
}
```

## Rights

Starting workflows requires `FLAG_STARTWF`; editing templates requires
`FLAG_EDITWF`. See [Permissions](../concepts/permissions.md).
