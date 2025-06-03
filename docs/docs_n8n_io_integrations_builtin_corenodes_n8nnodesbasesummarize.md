[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/core-nodes/n8n-nodes-base.summarize.md "Edit this page")

# Summarize[#](#summarize "Permanent link")

Use the Summarize node to aggregate items together, in a manner similar to Excel pivot tables.

## Node parameters[#](#node-parameters "Permanent link")

### Fields to Summarize[#](#fields-to-summarize "Permanent link")

Use these fields to define how you want to summarize your input data.

*   **Aggregation**: Select the aggregation method to use on a given field. Options include:
    *   **Append**: Append
        *   If you select this option, decide whether you want to **Include Empty Values** or not.
    *   **Average**: Calculate the numeric average of your input data.
    *   **Concatenate**: Combine together values in your input data.
        *   If you select this option, decide whether you want to **Include Empty Values** or not.
        *   **Separator**: Select the separator you want to insert between concatenated values.
    *   **Count**: Count the total number of values in your input data.
    *   **Count Unique**: Count the number of unique values in your input data.
    *   **Max**: Find the highest numeric value in your input data.
    *   **Min**: Find the lowest numeric value in your input data.
    *   **Sum**: Add together the numeric values in your input data.
*   **Field**: Enter the name of the field you want to perform the aggregation on.

### Fields to Split By[#](#fields-to-split-by "Permanent link")

Enter the name of the input fields that you want to split the summary by (similar to a group by statement). This allows you to get separate summaries based on values in other fields.

For example, if our input data contains columns for `Sales Rep` and `Deal Amount` and we're performing a **Sum** on the `Deal Amount` field, we could split by `Sales Rep` to get a **Sum** total for each Sales Rep.

To enter multiple fields to split by, enter a comma-separated list.

## Node options[#](#node-options "Permanent link")

### Continue if Field Not Found[#](#continue-if-field-not-found "Permanent link")

By default, if a **Field to Summarize** isn't in any items, the node throws an error. Use this option to continue and return a single empty item (turned on) instead or keep the default error behavior (turned off).

### Disable Dot Notation[#](#disable-dot-notation "Permanent link")

By default, n8n enables dot notation to reference child fields in the format `parent.child`. Use this option to disable dot notation (turned on) or to continue using dot (turned off).

### Output Format[#](#output-format "Permanent link")

Select the format for your output format. This option is recommended if you're using **Fields to Split By**

*   **Each Split in a Separate Item**: Use this option to generate a separate output item for each split out field.
*   **All Splits in a Single Item**: Use this option to generate a single item that lists the split out fields.

## Ignore items without valid fields to group by[#](#ignore-items-without-valid-fields-to-group-by "Permanent link")

Set whether to ignore input items that don't contain the **Fields to Split By** (turned on) or not (turned off).

## Templates and examples[#](#templates-and-examples "Permanent link")

**Scrape and summarize webpages with AI**

by n8n Team

[View template details](https://n8n.io/workflows/1951-scrape-and-summarize-webpages-with-ai/)

**⚡AI-Powered YouTube Video Summarization & Analysis**

by Joseph LePage

[View template details](https://n8n.io/workflows/2679-ai-powered-youtube-video-summarization-and-analysis/)

**🤖 AI Powered RAG Chatbot for Your Docs + Google Drive + Gemini + Qdrant**

by Joseph LePage

[View template details](https://n8n.io/workflows/2982-ai-powered-rag-chatbot-for-your-docs-google-drive-gemini-qdrant/)

[Browse Summarize integration templates](https://n8n.io/integrations/summarize/), or [search all templates](https://n8n.io/workflows/)

## Related resources[#](#related-resources "Permanent link")

Learn more about [data structure and data flow](../../../../data/) in n8n workflows.