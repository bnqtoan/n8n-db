[](https://github.com/n8n-io/n8n-docs/edit/main/docs/workflows/components/nodes.md "Edit this page")

# Nodes[#](#nodes "Permanent link")

[Nodes](../../../glossary/#node-n8n) are the key building blocks of a [workflow](../../../glossary/#workflow-n8n). They perform a range of actions, including:

*   Starting the workflow.
*   Fetching and sending data.
*   Processing and manipulating data.

n8n provides a collection of built-in nodes, as well as the ability to create your own nodes. Refer to:

*   [Built-in integrations](../../../integrations/builtin/node-types/) to browse the node library.
*   [Community nodes](../../../integrations/community-nodes/installation/) for guidance on finding and installing community-created nodes.
*   [Creating nodes](../../../integrations/creating-nodes/overview/) to start building your own nodes.

## Add a node to your workflow[#](#add-a-node-to-your-workflow "Permanent link")

### Add a node to an empty workflow[#](#add-a-node-to-an-empty-workflow "Permanent link")

1.  Select **Add first step**. n8n opens the nodes panel, where you can search or browse [trigger nodes](../../../glossary/#trigger-node-n8n).
2.  Select the trigger you want to use.
    
    Choose the correct app event
    
    If you select **On App Event**, n8n shows a list of all the supported services. Use this list to browse n8n's integrations and trigger a workflow in response to an event in your chosen service. Not all integrations have triggers. To see which ones you can use as a trigger, select the node. If a trigger is available, you'll see it at the top of the available operations list.
    
    For example, this is the trigger for Asana:
    
    [![Screenshot of the Asana node operations list, showing the Recommended section at the top of the list](../../../_images/workflows/components/nodes/recommended-trigger.png)](https://docs.n8n.io/_images/workflows/components/nodes/recommended-trigger.png)
    

### Add a node to an existing workflow[#](#add-a-node-to-an-existing-workflow "Permanent link")

Select the **Add node** ![Add node icon](../../../_images/try-it-out/add-node-small.png) connector. n8n opens the nodes panel, where you can search or browse all nodes.

## Node operations: Triggers and Actions[#](#node-operations-triggers-and-actions "Permanent link")

When you add a node to a workflow, n8n displays a list of available operations. An operation is something a node does, such as getting or sending data.

There are two types of operation:

*   Triggers start a workflow in response to specific events or conditions in your services. When you select a Trigger, n8n adds a trigger node to your workflow, with the Trigger operation you chose pre-selected. When you search for a node in n8n, Trigger operations have a bolt icon ![Trigger icon](../../../_images/common-icons/trigger.png).
*   Actions are operations that represent specific tasks within a workflow, which you can use to manipulate data, perform operations on external systems, and trigger events in other systems as part of your workflows. When you select an Action, n8n adds a node to your workflow, with the Action operation you chose pre-selected.

## Node controls[#](#node-controls "Permanent link")

To view node controls, hover over the node on the canvas:

*   **Execute step** ![Execute step icon](../../../_images/common-icons/play-node.png): Run the node.
*   **Deactivate** ![Deactivate node icon](../../../_images/common-icons/power-off.png): Deactivate the node.
*   **Delete** ![Delete node icon](../../../_images/common-icons/delete-node.png): Delete the node.
*   **Node context menu** ![Node context menu icon](../../../_images/common-icons/node-context-menu.png): Select node actions. Available actions:
    *   Open node
    *   Execute step
    *   Rename node
    *   Deactivate node
    *   Pin node
    *   Copy node
    *   Duplicate node
    *   Select all
    *   Clear selection
    *   Delete node

## Node settings[#](#node-settings "Permanent link")

The node settings under the **Settings** tab allow you to control node behaviors and add node notes.

When active or set, they do the following:

*   **Request Options**: Select **Add Option** to view and select these options.
    *   **Batching**: Control how to batch large numbers of input items.
    *   **Ignore SSL Issues**: Download the response even if SSL validation isn't possible.
    *   **Proxy**: Use this if you need to specify an HTTP proxy.
    *   **Timeout**: Set a timeout for the request in ms.
*   **Always Output Data**: The node returns an empty item even if the node returns no data during execution. Be careful setting this on IF nodes, as it could cause an infinite loop.
*   **Execute Once**: The node executes once, with data from the first item it receives. It doesn't process any extra items.
*   **Retry On Fail**: When an execution fails, the node reruns until it succeeds.
*   **On Error**:
    *   **Stop Workflow**: Halts the entire workflow when an error occurs, preventing further node execution.
    *   **Continue**: Proceeds to the next node despite the error, using the last valid data.
    *   **Continue (using error output)**: Continues workflow execution, passing error information to the next node for potential handling.

You can document your workflow using node notes:

*   **Notes**: Note to save with the node.
*   **Display note in flow**: If active, n8n displays the note in the workflow as a subtitle.