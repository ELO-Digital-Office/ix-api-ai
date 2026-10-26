# Workflows

Example: `examples/rest/javascript/workflow.js` (`startWorkflow`,
`startAdHocWorkflow`, `startWorkflowFromDiagram`, `findWorkflowTasks`,
`takeWorkflowTask`, `forwardWorkflowTask`).
Details: `knowledge/guides/workflows.md`.

## Start

| Kind | Call |
| --- | --- |
| From template | `startWorkFlow({ templFlowId, flowName, objId })` -> flow ID |
| Ad hoc | `startAdHocWorkFlow({ name, objId, arrUserIds, nodeName, forValidation, serialFlow, cancelUserId, cancelMessage, finishedUserId, finishedMessage, finishedScript })` |
| User-defined | `checkoutWorkFlow({ flowId: template, typeZ: CONST.WORKFLOW_TYPE.TEMPLATE, workFlowDiagramZ: CONST.WORKFLOW.mbAll, lockZ: CONST.LOCK.NO })`, set `type = CONST.WORKFLOW_TYPE.ACTIVE`, `id = -1`, `name`, `objId`, then `checkinWorkFlow({ wf, workFlowDiagramZ, unlockZ })` |

Ad hoc: `serialFlow` = one user after another, else parallel.
`forValidation: true` adds a return path to the initiator on rejection.

## Find tasks of the current user

```javascript
var findInfo = {
	inclWorkflows: true, inclGroup: true, inclDeputy: true,
	lowestPriority: CONST.USER_TASK_PRIORITY.LOWEST,
	highestPriority: CONST.USER_TASK_PRIORITY.HIGHEST
};
// findFirstTasks({ findInfo, max }) / findNextTasks({ searchId, idx, max }) / findClose({ searchId })
// keep only result.tasks[i].wfNode (others are reminders/activities)
```

Tasks of other users need a session of that user (`login` with `runAs`).

## Forward a task

1. Group or deputy task: `takeWorkFlowNode({ nFlowId, nNodeId, sUserId: '', nFlags: CONST.TAKE_NODE.RESET_IN_USE_DATE, lockZ: CONST.LOCK.IF_FREE })`.
2. `beginEditWorkFlowNode({ nFlowId, nNodeId, lockZ: CONST.LOCK.YES })` ->
   `WFEditNode` with `node` and `succNodes`; locks the whole workflow.
3. `endEditWorkFlowNode({ nFlowId, nNodeId, bTerminate: false, bCancel: false, sName: node.name, sComment, arrEnterNodesIds })`.
   If `node.flags & CONST.WORKFLOW_NODE.FLAG_ONE_SUCCESSOR`, pass exactly one ID.
4. On any error: `endEditWorkFlowNode` with `bCancel: true` in `finally`, or the
   workflow stays locked.
