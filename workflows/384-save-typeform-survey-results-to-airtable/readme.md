# n8n Workflow: CFP Selection 1

This workflow automates the process of capturing submissions from a Typeform and storing them in an Airtable base.

## Use cases:

*   **Call for Proposals (CFP) Management:** Automatically collect and store CFP submissions from a Typeform into an Airtable database for easy review and organization.
*   **Application Tracking:** Streamline application processes (e.g., job applications, grant applications) by instantly saving submitted data into a structured Airtable base.
*   **Event Registration:** Gather event registrations through a Typeform and automatically populate an Airtable spreadsheet with participant information.

## How it works:

1.  **Typeform Trigger:** The workflow starts with a "Typeform Trigger" node. This node is configured to listen for new submissions to a specific Typeform form (identified by `formId`).  **Note:** The `formId` parameter needs to be configured in the node. The workflow is triggered each time a new form is submitted.
2.  **Airtable:** The data received from the Typeform is then passed to an "Airtable" node. This node appends the submitted data as a new row in a specified Airtable table (identified by `table` and `application`). **Note:** The `table` and `application` parameters need to be configured in the node.

In summary, when someone submits the Typeform, their data is automatically captured and saved into your Airtable base, making it much easier to manage and track submissions.

## Services:

*   Typeform
*   Airtable

## Hashtags:

#n8n #automation #typeform #airtable #cfp
