[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/core-nodes/n8n-nodes-base.executeworkflow.md "Edit this page")

# Execute Sub-workflow[#](#execute-sub-workflow "Permanent link")

Use the Execute Sub-workflow node to run a different workflow on the host machine that runs n8n.

## Node parameters[#](#node-parameters "Permanent link")

### Source[#](#source "Permanent link")

Select where the node should get the sub-workflow's information from:

*   **Database**: Select this option to load the workflow from the database by ID. You must also enter either:
    *   **From list**: Select the workflow from a list of workflows available to your account.
    *   **Workflow ID**: Enter the ID for the workflow. The URL of the workflow contains the ID after `/workflow/`. For example, if the URL of a workflow is `https://my-n8n-acct.app.n8n.cloud/workflow/abCDE1f6gHiJKL7`, the **Workflow ID** is `abCDE1f6gHiJKL7`.
*   **Local File**: Select this option to load the workflow from a locally saved JSON file. You must also enter:
    *   **Workflow Path**: Enter the path to the local JSON workflow file you want the node to execute.
*   **Parameter**: Select this option to load the workflow from a parameter. You must also enter:
    *   **Workflow JSON**: Enter the JSON code you want the node to execute.
*   **URL**: Select this option to load the workflow from a URL. You must also enter:
    *   **Workflow URL**: Enter the URL you want to load the workflow from.

### Workflow Inputs[#](#workflow-inputs "Permanent link")

If you select a sub-workflow using the **database** and **From list** options, the sub-workflow's input items will automatically display, ready for you to fill in or map values.

You can optionally remove requested input items, in which case the sub-workflow receives `null` as the item's value. You can also enable **Attempt to convert types** to try to automatically convert data to the sub-workflow item's requested type.

Input items won't appear if the sub-workflow's Workflow Input Trigger node uses the "Accept all data" input data mode.

### Mode[#](#mode "Permanent link")

Use this parameter to control the execution mode for the node. Choose from these options:

*   **Run once with all items**: Pass all input items into a single execution of the node.
*   **Run once for each item**: Execute the node once for each input item in turn.

## Node options[#](#node-options "Permanent link")

This node includes one option: **Wait for Sub-Workflow Completion**. This lets you control whether the main workflow should wait for the sub-workflow's completion before moving on to the next step (turned on) or whether the main workflow should continue without waiting (turned off).

## Templates and examples[#](#templates-and-examples "Permanent link")

**Scrape business emails from Google Maps without the use of any third party APIs**

by Akram Kadri

[View template details](https://n8n.io/workflows/2567-scrape-business-emails-from-google-maps-without-the-use-of-any-third-party-apis/)

**Back Up Your n8n Workflows To Github**

by Jonathan

[View template details](https://n8n.io/workflows/1534-back-up-your-n8n-workflows-to-github/)

**Host Your Own AI Deep Research Agent with n8n, Apify and OpenAI o3**

by Jimleuk

[View template details](https://n8n.io/workflows/2878-host-your-own-ai-deep-research-agent-with-n8n-apify-and-openai-o3/)

[Browse Execute Sub-workflow integration templates](https://n8n.io/integrations/execute-workflow/), or [search all templates](https://n8n.io/workflows/)

## Set up and use a sub-workflow[#](#set-up-and-use-a-sub-workflow "Permanent link")

This section walks through setting up both the parent workflow and sub-workflow.

### Create the sub-workflow[#](#create-the-sub-workflow "Permanent link")

1.  Create a new workflow.
    
    Create sub-workflows from existing workflows
    
    You can optionally create a sub-workflow directly from an existing parent workflow using the [Execute Sub-workflow](./) node. In the node, select the **Database** and **From list** options and select **Create a sub-workflow** in the list.
    
2.  **Optional**: configure which workflows can call the sub-workflow:
    
    1.  Select the **Options** ![Options menu](../../../../_images/common-icons/three-dot-options-menu.png) menu > **Settings**. n8n opens the **Workflow settings** modal.
    2.  Change the **This workflow can be called by** setting. Refer to [Workflow settings](../../../../workflows/settings/) for more information on configuring your workflows.
3.  Add the **Execute Sub-workflow** trigger node (if you are searching under trigger nodes, this is also titled **When Executed by Another Workflow**).
4.  Set the **Input data mode** to choose how you will define the sub-workflow's input data:
    *   **Define using fields below**: Choose this mode to define individual input names and data types that the calling workflow needs to provide. The [Execute Sub-workflow node](./) or [Call n8n Workflow Tool node](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.toolworkflow/) in the calling workflow will automatically pull in the fields defined here.
    *   **Define using JSON example**: Choose this mode to provide an example JSON object that demonstrates the expected input items and their types.
    *   **Accept all data**: Choose this mode to accept all data unconditionally. The sub-workflow won't define any required input items. This sub-workflow must handle any input inconsistencies or missing values.
5.  Add other nodes as needed to build your sub-workflow functionality.
6.  Save the sub-workflow.

Sub-workflow mustn't contain errors

If there are errors in the sub-workflow, the parent workflow can't trigger it.

Load data into sub-workflow before building

This requires the ability to [load data from previous executions](../../../../workflows/executions/debug/), which is available on n8n Cloud and registered Community plans.

If you want to load data into your sub-workflow to use while building it:

1.  Create the sub-workflow and add the **Execute Sub-workflow Trigger**.
2.  Set the node's **Input data mode** to **Accept all data** or define the input items using fields or JSON if they're already known.
3.  In the sub-workflow [settings](../../../../workflows/settings/), set **Save successful production executions** to **Save**.
4.  Skip ahead to setting up the parent workflow, and run it.
5.  Follow the steps to [load data from previous executions](../../../../workflows/executions/debug/).
6.  Adjust the **Input data mode** to match the input sent by the parent workflow if necessary.

You can now pin example data in the trigger node, enabling you to work with real data while configuring the rest of the workflow.

### Call the sub-workflow[#](#call-the-sub-workflow "Permanent link")

1.  Open the workflow where you want to call the sub-workflow.
2.  Add the **Execute Sub-workflow** node.
3.  In the **Execute Sub-workflow** node, set the sub-workflow you want to call. You can choose to call the workflow by ID, load a workflow from a local file, add workflow JSON as a parameter in the node, or target a workflow by URL.
    
    Find your workflow ID
    
    Your sub-workflow's ID is the alphanumeric string at the end of its URL.
    
4.  Fill in the required input items defined by the sub-workflow.
    
5.  Save your workflow.

When your workflow executes, it will send data to the sub-workflow, and run it.

You can follow the execution flow from the parent workflow to the sub-workflow by opening the Execute Sub-workflow node and selecting the **View sub-execution** link. Likewise, the sub-workflow's execution contains a link back to the parent workflow's execution to navigate in the other direction.

## How data passes between workflows[#](#how-data-passes-between-workflows "Permanent link")

As an example, imagine you have an Execute Sub-workflow node in **Workflow A**. The Execute Sub-workflow node calls another workflow called **Workflow B**:

1.  The Execute Sub-workflow node passes the data to the Execute Sub-workflow Trigger node (titled "When executed by another node" in the canvas) of **Workflow B**.
2.  The last node of **Workflow B** sends the data back to the Execute Sub-workflow node in **Workflow A**.