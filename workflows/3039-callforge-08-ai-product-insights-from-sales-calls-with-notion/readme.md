# CallForge AI Output Processor

## Use cases:

- Automatically process AI-generated data extracted from sales call recordings (e.g., Gong calls) to identify product feedback and potential AI use cases mentioned during the calls.
- Populate Notion databases with structured information about AI use cases and product feedback based on the extracted data, facilitating analysis and follow-up.
- Update existing sales call records in Notion with summaries of AI-related discussions, ensuring that relevant information is readily accessible.

## How it works:

1.  **Trigger:** The workflow is triggered by the "Execute Workflow Trigger" node, receiving AI data from another workflow (presumably the CallForge main workflow that analyzes call recordings).  This data includes metadata about the call, AI-generated insights, and potentially existing Notion data for the call.
2.  **Conditional Checks:** Several "If" nodes evaluate the received AI data:
    -   "Check if Product Data Found": Checks if product feedback data exists in the `AIoutput.ProductFeedback` array.
    -   "Check if AI Use Case Data Found": Checks if AI use case data exists based on the `AIoutput.AI_ML_References.Exist` boolean.
    -   "Check if AI Mentioned On Call": Checks if AI use case data exists based on the `AIoutput.AI_ML_References.Exist` boolean.
3.  **Data Processing and Transformation:**
    -   **Product Feedback:**
        -   If product feedback exists: A "Split Out Product Data" node iterates through the `AIoutput.ProductFeedback` array, creating a separate item for each feedback entry.
        -   Each feedback item is then used to "Create Product Feedback Data Object" in the "Product Feedback" Notion database. The feedback details and Sentiment are extracted from the AI output and are saved in a Notion page.
        -   All the product feedback data is bundled together using the "Bundle Product Feedback Data to 1 object" Aggregate Node.
    -   **AI Use Cases:**
        -   If AI use case data exists: A "Create Product Data Object1" node creates a new page in the "AI use-case database" Notion database. Relevant information such as company name, department, development status, employee count, use case details, and URLs are extracted from the AI output and saved to the Notion page.
        -   All the AI Use Case Data is bundled together using the "Bundle AI Use Case Data to 1 object" Aggregate Node.
    -   **AI Mentioned on Call**: The "Update Call with AI Data Summary" node updates the original sales call record in Notion with a summary of AI-related discussions. This updates the AI Related checkbox and AI Summary field of the Notion page of the call.
4.  **Rate Limiting:** "Wait" nodes ("Wait for rate limiting - Product Data" and "Wait for rate limiting - AI Use Case") are strategically placed before Notion creation nodes to avoid exceeding Notion API rate limits.
5.  **Data Merging:** The "Merge AI Use Case Thread" and "Merge Product Feedback Thread" nodes merge the aggregated data with the original data for the workflow.
6.  **Notion Updates**:
    - AI Mentioned on Call updates the initial Notion database Page.

## Services:

-   Notion

## Hashtags:

#n8n #automation #workflow #AI #Notion
