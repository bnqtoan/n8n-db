[](https://github.com/n8n-io/n8n-docs/edit/main/docs/flow-logic/error-handling.md "Edit this page")

# Error handling[#](#error-handling "Permanent link")

When designing your flow logic, it's a good practice to consider potential errors, and set up methods to handle them gracefully. With an error workflow, you can control how n8n responds to a workflow execution failure.

Investigating errors

To investigate failed executions, you can:

*   Review your [Executions](../../workflows/executions/), for a [single workflow](../../workflows/executions/single-workflow-executions/) or [all workflows you have access to](../../workflows/executions/all-executions/). You can [load data from previous execution](../../workflows/executions/debug/) into your current workflow.
*   Enable [Log streaming](../../log-streaming/).

## Create and set an error workflow[#](#create-and-set-an-error-workflow "Permanent link")

For each workflow, you can set an error workflow in **Workflow Settings**. It runs if an execution fails. This means you can, for example, send email or Slack alerts when a workflow execution errors. The error workflow must start with the [Error Trigger](../../integrations/builtin/core-nodes/n8n-nodes-base.errortrigger/).

You can use the same error workflow for multiple workflows.

1.  Create a new workflow, with the Error Trigger as the first node.
2.  Give the workflow a name, for example `Error Handler`.
3.  Select **Save**.
4.  In the workflow where you want to use this error workflow:
    1.  Select **Options** ![Options menu icon](../../_images/common-icons/three-dot-options-menu.png) > **Settings**.
    2.  In **Error workflow**, select the workflow you just created. For example, if you used the name Error Handler, select **Error handler**.
    3.  Select **Save**. Now, when this workflow errors, the related error workflow runs.

## Error data[#](#error-data "Permanent link")

The default error data received by the Error Trigger is:

 1
 2
 3
 4
 5
 6
 7
 8
 9
10
11
12
13
14
15
16
17
18
19

`[ 	{ 		"execution": { 			"id": "231", 			"url": "https://n8n.example.com/execution/231", 			"retryOf": "34", 			"error": { 				"message": "Example Error Message", 				"stack": "Stacktrace" 			}, 			"lastNodeExecuted": "Node With Error", 			"mode": "manual" 		}, 		"workflow": { 			"id": "1", 			"name": "Example Workflow" 		} 	} ]`

All information is always present, except:

*   `execution.id`: requires the execution to be saved in the database. Not present if the error is in the trigger node of the main workflow, as the workflow doesn't execute.
*   `execution.url`: requires the execution to be saved in the database. Not present if the error is in the trigger node of the main workflow, as the workflow doesn't execute.
*   `execution.retryOf`: only present when the execution is a retry of a failed execution.

If the error is caused by the trigger node of the main workflow, rather than a later stage, the data sent to the error workflow is different. There's less information in `execution{}` and more in `trigger{}`:

 1
 2
 3
 4
 5
 6
 7
 8
 9
10
11
12
13
14
15
16
17
18
19
20
21
22

`{   "trigger": {     "error": {       "context": {},       "name": "WorkflowActivationError",       "cause": {         "message": "",         "stack": ""       },       "timestamp": 1654609328787,       "message": "",       "node": {         . . .        }     },     "mode": "trigger"   },   "workflow": {     "id": "",     "name": ""   } }`

## Cause a workflow execution failure using Stop And Error[#](#cause-a-workflow-execution-failure-using-stop-and-error "Permanent link")

When you create and set an error workflow, n8n runs it when an execution fails. Usually, this is due to things like errors in node settings, or the workflow running out of memory.

You can add the [Stop And Error](../../integrations/builtin/core-nodes/n8n-nodes-base.stopanderror/) node to your workflow to force executions to fail under your chosen circumstances, and trigger the error workflow.