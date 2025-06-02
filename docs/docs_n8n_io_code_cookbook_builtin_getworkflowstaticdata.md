global variables static data

[](https://github.com/n8n-io/n8n-docs/edit/main/docs/code/cookbook/builtin/get-workflow-static-data.md "Edit this page")

# `getWorkflowStaticData(type)`[#](#getworkflowstaticdatatype "Permanent link")

This gives access to the static workflow data.

Experimental feature

*   Static data isn't available when testing workflows. The workflow must be active and called by a [trigger](../../../../glossary/#trigger-node-n8n) or webhook to save static data.
*   This feature may behave unreliably under high-frequency workflow executions.

You can save data directly in the workflow. This data should be small.

As an example: you can save a timestamp of the last item processed from an RSS feed or database. It will always return an object. Properties can then read, delete or set on that object. When the workflow execution succeeds, n8n checks automatically if the data has changed and saves it, if necessary.

There are two types of static data, global and node. Global static data is the same in the whole workflow. Every node in the workflow can access it. The node static data is unique to the node. Only the node that set it can retrieve it again.

Example with global data:

[JavaScript](#__tabbed_1_1)[Python](#__tabbed_1_2)

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

`// Get the global workflow static data const workflowStaticData = $getWorkflowStaticData('global');  // Access its data const lastExecution = workflowStaticData.lastExecution;  // Update its data workflowStaticData.lastExecution = new Date().getTime();  // Delete data delete workflowStaticData.lastExecution;`

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

`# Get the global workflow static data workflowStaticData = _getWorkflowStaticData('global')  # Access its data lastExecution = workflowStaticData.lastExecution  # Update its data workflowStaticData.lastExecution = new Date().getTime()  # Delete data delete workflowStaticData.lastExecution`

Example with node data:

[JavaScript](#__tabbed_2_1)[Python](#__tabbed_2_2)

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

`// Get the static data of the node const nodeStaticData = $getWorkflowStaticData('node');  // Access its data const lastExecution = nodeStaticData.lastExecution;  // Update its data nodeStaticData.lastExecution = new Date().getTime();  // Delete data delete nodeStaticData.lastExecution;`

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

`# Get the static data of the node nodeStaticData = _getWorkflowStaticData('node')  # Access its data lastExecution = nodeStaticData.lastExecution  # Update its data nodeStaticData.lastExecution = new Date().getTime()  # Delete data delete nodeStaticData.lastExecution`

## Templates and examples[#](#templates-and-examples "Permanent link")

[View template details](https://n8n.io/workflows/2538-demo-workflow-how-to-use-workflowstaticdata/)