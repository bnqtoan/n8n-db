[](https://github.com/n8n-io/n8n-docs/edit/main/docs/workflows/executions/all-executions.md "Edit this page")

# All executions[#](#all-executions "Permanent link")

To view **all executions** from an n8n instance, navigate to the **Overview** page and then click into the Executions tab. This will show you all executions from the workflows you have access to.

If your n8n instance supports **projects**, you'll also be able to view the executions tab within projects you have access to. This will show you executions only from the workflows within the specified project.

Deleted workflows

When you delete a workflow, n8n deletes its execution history as well. This means you can't view executions for deleted workflows.

## Filter executions[#](#filter-executions "Permanent link")

You can filter the executions list:

1.  Select the **Executions** tab either from within the **Overview** page or a specific **project** to open the list.
2.  Select **Filters**.
3.  Enter your filters. You can filter by:
    *   **Workflows**: choose all workflows, or a specific workflow name.
    *   **Status**: choose from **Failed**, **Running**, **Success**, or **Waiting**.
    *   **Execution start**: see executions that started in the given time.
    *   **Saved custom data**: this is data you create within the workflow using the Code node. Enter the key and value to filter. Refer to [Custom executions data](../custom-executions-data/) for information on adding custom data.

Feature availability

Custom executions data is available on:

*   Cloud: Pro, Enterprise
*   Self-Hosted: Enterprise, registered Community

Available in version 0.222.0 and above.

## Retry failed workflows[#](#retry-failed-workflows "Permanent link")

If your workflow execution fails, you can retry the execution. To retry a failed workflow:

1.  Select the **Executions** tab from within either the **Overview** page or a specific **project** to open the list.
2.  On the execution you want to retry, select **Retry execution** ![Options menu icon](../../../_images/common-icons/three-dot-options-menu.png).
3.  Select either of the following options to retry the execution:
    *   **Retry with currently saved workflow**: Once you make changes to your workflow, you can select this option to execute the workflow with the previous execution data.
    *   **Retry with original workflow**: If you want to retry the execution without making changes to your workflow, you can select this option to retry the execution with the previous execution data.

## Load data from previous executions into your current workflow[#](#load-data-from-previous-executions-into-your-current-workflow "Permanent link")

You can load data from a previous workflow back into the canvas. Refer to [Debug executions](../debug/) for more information.