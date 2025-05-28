# Form to Google Docs Template

## Use cases:

- **Automated Document Generation:** Automatically generate personalized documents (e.g., contracts, letters, reports) by populating a Google Docs template with data submitted through a form.
- **Feedback Collection and Reporting:** Gather feedback via a form and automatically create a report in Google Docs, summarizing the responses and highlighting key insights.
- **Event Registration and Confirmation:** Streamline event registration by collecting attendee information through a form and generating personalized confirmation letters or tickets in Google Docs.

## How it works:

1.  **Form Trigger:** The workflow starts when a user submits a form. The form includes a "name" field, among other configurable fields.
2.  **Copy template file:** A Google Drive node copies the template document. The copied file's name will be the name submitted by the user in the form.
3.  **Format form data:** A Code node processes the data from the form submission, extracting all the field names and their corresponding values, and restructures them into a suitable format.
4.  **Format form data to Google Doc API:** Another Code node prepares the formatted data into a JSON structure that is compliant with Google Docs API's batchUpdate method. It essentially creates a list of "replaceAllText" requests for each form field.  It excludes "submittedAt" and "formMode" fields.
5.  **Replace data in Google Doc:** An HTTP Request node sends a POST request to the Google Docs API, using the `batchUpdate` method. The request replaces the placeholders (e.g., `{{name}}`, `{{field2}}`) in the copied Google Doc with the corresponding values from the form submission.
6.  **Sticky Notes:** are used to provide documentation and context for the workflow.

## Services:

-   **Google Sheets:** This workflow uses google sheets to store template document.
-   **Google Docs API:** Used to dynamically create documents.

## Hashtags:

#n8n #GoogleDocs #Automation #FormProcessing #DocumentGeneration
