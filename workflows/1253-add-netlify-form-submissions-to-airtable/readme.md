# Netlify Form Submission to Airtable

## Use cases:

*   **Lead Capture:** Automatically save form submissions from a Netlify website (e.g., contact forms, signup forms) directly into an Airtable base for lead tracking and management.
*   **Survey Data Collection:** Collect survey responses from a Netlify form and organize them in Airtable for analysis.
*   **Job Application Management:** Capture job application data submitted via a Netlify form and store it in Airtable for easy review and organization.

## How it works:

1.  **Netlify Trigger:** The workflow starts with a "Netlify Trigger" node. This node listens for a specific event (`submissionCreated`) on a designated Netlify form (`615ad58f9f491e00070abac5`) hosted on a particular Netlify site (`b585059c-a19a-487c-831f-c57af6f13bd1`). When a form is submitted, the trigger activates the workflow.
2.  **Set:** The "Set" node extracts specific data fields (`name`, `email`, and the first `role`) from the Netlify form submission (`$json`) and saves them into new variables. It only keeps the value mapped to the new variables created.
3.  **Airtable:** The "Airtable" node appends the data captured and formatted by the "Set" node as a new record to the specified Airtable table ("Table 1") within the designated Airtable base ("apphwBsFxzjDPDBA8").

## Services:

*   Netlify
*   Airtable

## Hashtags:

#n8n #netlify #airtable #automation #formdata
