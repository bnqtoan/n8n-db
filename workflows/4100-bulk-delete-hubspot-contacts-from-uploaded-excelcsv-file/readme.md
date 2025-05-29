# HubSpot Contact Deletion via Webhook

## Use cases:

*   **Automated Contact Cleanup:** Automatically delete contacts from HubSpot when a specific event occurs (e.g., unsubscribes, data removal requests) triggered by a webhook.
*   **Data Synchronization:** If you manage contact data in an external system, this workflow can keep HubSpot synchronized by deleting contacts when they are removed from the source system.
*   **GDPR Compliance:** Automate the deletion of user data from HubSpot in response to GDPR or other privacy regulation requests.

## How it works:

1.  **Webhook Trigger:** The workflow starts when a POST request is sent to the specified Webhook URL. This URL needs to be configured in the external application or API that will trigger the workflow.
2.  **Extract File Data:** Extracts data from an XLSX file sent in the webhook's payload.
3.  **Parse Data:** Extracts the email addresses from the data.
4.  **Loop Over Items:** Iterates over each email address extracted from the file.
5.  **Search Contact:** Searches for a contact in HubSpot using the email address from the current item in the loop.
6.  **If contact exists:** Checks if a contact with the email exists in HubSpot.
7.  **Delete Contact:** If the contact exists, delete them from HubSpot.
8.  **Replace Me:** Placeholder node to continue the flow.
9.  **Continue Loop:** The workflow continues processing the remaining email addresses in the loop.

## Services:

*   HubSpot

## Hashtags:

#n8n #HubSpot #ContactManagement #Automation #Webhook
