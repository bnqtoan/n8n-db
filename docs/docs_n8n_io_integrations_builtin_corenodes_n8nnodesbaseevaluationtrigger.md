[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/core-nodes/n8n-nodes-base.evaluationtrigger.md "Edit this page")

# Evaluation Trigger node[#](#evaluation-trigger-node "Permanent link")

Use the Evaluation Trigger node when setting up [evaluations](../../../../advanced-ai/evaluations/overview/) to validate your AI workflow reliability. During evaluation, the Evaluation Trigger node reads your evaluation dataset from Google Sheets, sending the items through the workflow one at a time, in sequence.

On this page, you'll find the Evaluation Trigger node parameters and

Requires Google Sheets

The Evaluation Trigger node uses Google Sheets to store the test dataset. To use evaluations, you must configure a [Google Sheets credential](../../credentials/google/).

## Parameters[#](#parameters "Permanent link")

*   **Credential to connect with**: Create or select an existing [Google Sheets credentials](../../credentials/google/).
*   **Document Containing Dataset**: Choose the spreadsheet document with the sheet containing your test dataset.
    *   Select **From list** to choose the spreadsheet title from the dropdown list, **By URL** to enter the url of the spreadsheet, or **By ID** to enter the `spreadsheetId`.
    *   You can find the `spreadsheetId` in a Google Sheets URL: `https://docs.google.com/spreadsheets/d/spreadsheetId/edit#gid=0`.
*   **Sheet Containing Dataset**: Choose the sheet containing your test dataset.
    *   Select **From list** to choose the sheet title from the dropdown list, **By URL** to enter the url of the sheet, **By ID** to enter the `sheetId`, or **By Name** to enter the sheet title.
    *   You can find the `sheetId` in a Google Sheets URL: `https://docs.google.com/spreadsheets/d/aBC-123_xYz/edit#gid=sheetId`.
*   **Limit Rows**: Whether to limit the number of rows in the sheet to process.
    *   **Max Rows to Process**: When **Limit Rows** is enabled, the maximum number of rows to read and process during the evaluation.

## Filters[#](#filters "Permanent link")

Optionally filter the evaluation dataset based on column values.

*   **Column**: Choose a sheet column you want to filter by. Select **From list** to choose the column name from the dropdown list, or **By ID** to specify an ID using an [expression](../../../../code/expressions/).
*   **Value**: The column value you want to filter by. The evaluation will only process rows with the given value for the selected column.

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

[Browse Evaluation Trigger integration templates](https://n8n.io/integrations/evaluation-trigger/), or [search all templates](https://n8n.io/workflows/)

## Related resources[#](#related-resources "Permanent link")

To learn more about n8n evaluations, check out the [evaluations documentation](../../../../advanced-ai/evaluations/overview/)

n8n provides an app node for evaluations. You can find the node docs [here](../n8n-nodes-base.evaluation/).

For common questions or issues and suggested solutions, refer to the evaluations [tips and common issues](../../../../advanced-ai/evaluations/tips-and-common-issues/) page.