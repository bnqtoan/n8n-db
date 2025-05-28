# Autopilot Workflow

## Use cases:

- **Add new contacts to a specific Autopilot list:** Automatically adds new users to an Autopilot list when triggered (e.g., after a form submission or other event processed by n8n).
- **Update contact information in Autopilot:** Updates contact details in Autopilot, such as company name or other custom fields, based on information from other services.
- **Retrieve and analyze Autopilot contact lists:** Fetches all contacts from a specific Autopilot list for reporting, analysis, or further processing within n8n.

## How it works:

This workflow interacts with Autopilot to manage contacts and lists.

1.  **Autopilot (List):** The workflow starts by retrieving a specific list from Autopilot (presumably based on the "n8n-docs" name).
2.  **Autopilot1 (Add Contact to List):**  It then attempts to add a contact to a list.  The list ID is dynamically set based on the `list_id` returned in the previous step, but the email address is missing and set to "".
3.  **Autopilot2 (Update Contact):**  The workflow updates a contact in Autopilot. The email address is dynamically pulled from the previous Autopilot1 execution, and the company is set to "n8n".
4.  **Autopilot3 (Get All Contacts from List):** Finally, it retrieves all contacts from the original list obtained in the first step using the `list_id`.

## Services:

*   Autopilot (CRM)

## Hashtags:

#n8n #automation #Autopilot #CRM #ContactManagement
