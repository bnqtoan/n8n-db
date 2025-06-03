[](https://github.com/n8n-io/n8n-docs/edit/main/docs/workflows/executions/debug.md "Edit this page")

# Debug and re-run past executions[#](#debug-and-re-run-past-executions "Permanent link")

Feature availability

Available on n8n Cloud and registered Community plans.

You can load data from a previous execution into your current workflow. This is useful for debugging data from failed production executions: you can see a failed execution, make changes to your workflow to fix it, then re-run it with the previous execution data.

## Load data[#](#load-data "Permanent link")

To load data from a previous execution:

1.  In your workflow, select the **Executions** tab to view the **Executions** list.
2.  Select the execution you want to debug. n8n displays options depending on whether the workflow was successful or failed:
    *   For failed executions: select **Debug in editor**.
    *   For successful executions: select **Copy to editor**.
3.  n8n copies the execution data into your current workflow, and [pins the data](../../../data/data-pinning/) in the first node in the workflow.

Check which executions you save

The executions available on the **Executions** list depends on your [Workflow settings](../../settings/).