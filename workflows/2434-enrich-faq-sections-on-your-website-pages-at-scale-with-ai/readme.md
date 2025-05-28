# Generate FAQ JSON Schemas and Upload to Google Drive

## Use cases:

- **Automated FAQ Generation**: Automatically generate FAQ content for different services or categories based on predefined templates and AI completion.
- **Content Management System Integration**: Streamline the process of updating FAQ sections in CMS platforms by automatically creating JSON schemas and uploading them.
- **Documentation Creation**: Quickly generate documentation for various integrations, ensuring consistency and reducing manual effort.

## How it works:

1.  **Trigger:** The workflow starts with a manual trigger ("When clicking ‘Test workflow’"). This can be replaced with any other n8n trigger such as a webhook or a schedule.
2.  **Define Sheets:** Defines the Google Sheets tabs to be processed (Single Integration Native, Single Integration Cred-only, Single Integration Non-native, Categories).
3.  **Fetch Services:** Iterates through the defined sheets and retrieves the service data from Google Sheets using the "Get Services" node. It uses the `status` column to filter the services to be processed.
4.  **Prepare Job:** Prepares the data for the current service by setting the sheet name, data object, and output directory for the generated files.
5.  **Conditional Execution:** Checks if the retrieved data is not empty using the "If has Data" node. If data exists, it triggers the nested workflow.
6.  **Nested Workflow Execution:** Executes a sub-workflow for each service.
7.  **Template Generation:** For each service or category, a set of standard questions and answers is generated based on predefined templates in "Single Integration Native", "Single Integration Cred-only", "Single Integration Non-native", and "Categories" nodes.
8.  **AI Completion:** Some of the answers are passed to an AI model (OpenAI Chat Model node with gpt-4o-mini model) to enhance or complete the content, generating more comprehensive and natural-sounding text.
9.  **Format Q&A Pairs:** The "Format QA Pair1" node formats the Q&A pairs, combining AI-generated content with predefined answers, when applicable.
10. **Generate JSON and Upload:** The formatted Q&A data is converted into a JSON schema and uploaded to Google Drive using the "Create From Text" node. The files are saved into specific folders based on the integration type or category.
11. **Update Status:** After processing each service, the workflow updates the status in the original Google Sheets document to "done" using the "Update Row Status" node, marking it as completed.
12. **CMS Integration:** The JSON schemas can be sent to a CMS platform like Strapi, Wordpress, Webflow or even use the HTTP Request node to update a custom CMS

## Services:

-   **Google Sheets:** Used for reading service data and updating processing status.
-   **Google Drive:** Used for storing the generated JSON schema files.
-   **OpenAI:** Used for AI-powered content completion.
-   **Strapi:** (Optional) Used for sending the JSON schema data to CMS.
-   **Wordpress:** (Optional) Used for sending the JSON schema data to CMS.
-   **Webflow:** (Optional) Used for sending the JSON schema data to CMS.

## Hashtags:

#n8n #automation #workflow #googlesheets #openai #faqgeneration
