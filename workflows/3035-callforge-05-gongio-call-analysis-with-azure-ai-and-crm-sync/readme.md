# CallForge - The AI Gong Sales Call Processor

## Use cases:

- **Automated Sales Call Analysis:** Automatically process sales call recordings from Gong to extract key information for sales, marketing, and product teams, eliminating manual review processes.
- **Data-Driven Decision Making:** Provide structured insights derived from sales calls, such as customer pain points, competitor mentions, and feature requests, to inform strategic decisions across different departments.
- **Enhanced CRM and Marketing Automation:** Automatically update CRM systems (e.g., Salesforce, Pipedrive) and marketing databases (e.g., Notion) with insights gathered from sales calls, ensuring data consistency and enabling targeted marketing campaigns.

## How it works:

1.  **Trigger:** The workflow starts with the "Execute Workflow Trigger" node, which receives data about sales calls. This data should include the call transcript, metadata (e.g., company name, competitors), and attendee information.
2.  **Data Preparation:** The "Create User Prompt" node formulates a standardized prompt to be used by multiple AI agents. It incorporates call transcript, metadata and attendee information into one prompt.
3.  **AI-Powered Analysis:** The prompt is then sent to the "Marketing AI Agent Processor", "Product AI Agent Processor", and "AI Agent" nodes. Each of these nodes uses an Azure OpenAI Chat Model to analyze the transcript and extract relevant information for their respective departments.
    *   "AI Agent" extracts data for the Sales team, focusing on use cases, objections, a call summary, customer pain points, next steps, competitor mentions, integrations, sentiment, current situation, budget, authority, timeline and decision process.
    *   "Marketing AI Agent Processor" identifies marketing insights, recurring topics, and actionable insights.
    *   "Product AI Agent Processor" focuses on product feedback and AI/ML references.
4.  **Structured Output Parsing:** Each AI Agent processor sends its repsonse to a Structured Output Parser node. This ensures a consistent output format based on JSON schema.
5.  **Data Recall:** The structured data is then used by the "Data Recall Sales", "Data Recall Marketing", and "Data Recall Product" nodes. These set nodes recall all the relevant data from the trigger node and attach the AI processed data to it.
6.  **Data Processing and Integration:** Data is sent to different subworkflows "Sales Data Processor", "Marketing Data Processor", and "Product AI Data Processor". The assumption is that these subworkflows will output to systems such as Notion, SalesForce, or other CRMs and databases.
7.  **Aggregation and Confirmation:** The "Merge all processed data" node compiles the outputs from all department-specific workflows, and "Bundle processed Data" aggregates all the item data. Finally, the "Success Status Generated" node confirms that the AI process has been completed for the specific call.

## Services:

-   Gong (or similar sales call recording platform)
-   Azure OpenAI
-   Notion (or similar data storage platform)
-   SalesForce (or similar CRM Platform)
-   Pipedrive (or similar CRM Platform)
-   People Data Labs API

## Hashtags:

#n8n #automation #workflow #sales #AI #callanalysis
