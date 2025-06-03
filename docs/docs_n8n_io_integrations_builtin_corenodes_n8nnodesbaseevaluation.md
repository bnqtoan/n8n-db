[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/core-nodes/n8n-nodes-base.evaluation.md "Edit this page")

# Evaluation node[#](#evaluation-node "Permanent link")

The Evaluation node performs various operations related to [evaluations](../../../../advanced-ai/evaluations/overview/) to validate your AI workflow reliability. You can use the Evaluation node to conditionally execute logic based on whether the workflow is under evaluation, to write evaluation outcomes back to a Google Sheet dataset, or to log scoring metrics for your evaluation performance to n8n's evaluations tab.

Credentials

The Evaluation node's **Set Outputs** operation uses Google Sheets to record evaluation outcomes. To use that operation, you must configure a [Google Sheets credential](../../credentials/google/).

## Operations[#](#operations "Permanent link")

The Evaluation node offers the following operations:

*   [**Set Outputs**](#set-outputs): Write the results of an evaluation back to a Google Sheet dataset.
*   [**Set Metrics**](#set-metrics): Record metrics scoring the evaluation performance to n8n's **Evaluations** tab.
*   [**Check If Evaluating**](#check-if-evaluating): Branches the workflow execution logic depending on whether the current execution is an evaluation.

The parameters and options available depend on the operation you select.

### Set Outputs[#](#set-outputs "Permanent link")

The **Set Outputs** operation has the following parameters:

*   **Credential to connect with**: Create or select an existing [Google Sheets credentials](../../credentials/google/).
*   **Document Containing Dataset**: Choose the spreadsheet document you want to write the evaluation results to. Usually this is the same document you select in the [Evaluation Trigger](../n8n-nodes-base.evaluationtrigger/) node.
    *   Select **From list** to choose the spreadsheet title from the dropdown list, **By URL** to enter the url of the spreadsheet, or **By ID** to enter the `spreadsheetId`.
    *   You can find the `spreadsheetId` in a Google Sheets URL: `https://docs.google.com/spreadsheets/d/spreadsheetId/edit#gid=0`.
*   **Sheet Containing Dataset**: Choose the sheet you want to write the evaluation results to. Usually this is the same sheet you select in the [Evaluation Trigger](../n8n-nodes-base.evaluationtrigger/) node.
    *   Select **From list** to choose the sheet title from the dropdown list, **By URL** to enter the url of the sheet, **By ID** to enter the `sheetId`, or **By Name** to enter the sheet title.
    *   You can find the `sheetId` in a Google Sheets URL: `https://docs.google.com/spreadsheets/d/aBC-123_xYz/edit#gid=sheetId`.

You define the items to write to the Google Sheet in the **Outputs** section. For each output, you set the following:

*   **Name**: The Google Sheet column name to write the evaluation results to.
*   **Value**: The value to write to the Google Sheet.

### Set Metrics[#](#set-metrics "Permanent link")

The **Set Metrics** operation includes a **Metrics to Return** section where you define the metrics to record and track for your evaluations. You can see the metric results in your workflow's **Evaluations** tab.

For each metric you wish to record, you set the following details:

*   **Name**: The name to use for the metric.
*   **Value**: The numeric value to record. Once you run your evaluation, you can drag and drop values from previous nodes here. Metric values must be numeric.

### Check If Evaluating[#](#check-if-evaluating "Permanent link")

The **Check If Evaluating** operation does not have any parameters. This operation provides branching output connectors so that you can conditionally execute logic depending on whether the current execution is an evaluation or not.

## Templates and examples[#](#templates-and-examples "Permanent link")

**AI Automated HR Workflow for CV Analysis and Candidate Evaluation**

by Davide

[View template details](https://n8n.io/workflows/2860-ai-automated-hr-workflow-for-cv-analysis-and-candidate-evaluation/)

**HR Job Posting and Evaluation with AI**

by Francis Njenga

[View template details](https://n8n.io/workflows/2773-hr-job-posting-and-evaluation-with-ai/)

**Evaluation metric example: RAG document relevance**

by David Roberts

[View template details](https://n8n.io/workflows/4273-evaluation-metric-example-rag-document-relevance/)

[Browse Evaluation integration templates](https://n8n.io/integrations/evaluation/), or [search all templates](https://n8n.io/workflows/)

## Related resources[#](#related-resources "Permanent link")

To learn more about n8n evaluations, check out the [evaluations documentation](../../../../advanced-ai/evaluations/overview/)

n8n provides a trigger node for evaluations. You can find the node docs [here](../n8n-nodes-base.evaluationtrigger/).

For common questions or issues and suggested solutions, refer to the evaluations [tips and common issues](../../../../advanced-ai/evaluations/tips-and-common-issues/) page.