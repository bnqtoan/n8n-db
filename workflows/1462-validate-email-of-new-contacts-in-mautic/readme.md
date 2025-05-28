# Check for Valid Mautic Contact Email

## Use cases:

*   **Lead Quality Monitoring:** Automatically identify and flag new Mautic contacts with potentially invalid or suspicious email addresses, allowing for proactive lead quality management.
*   **Reduce Bounce Rates:** By validating email addresses upon entry, the workflow helps reduce email bounce rates and improve sender reputation.
*   **Alerting for Manual Review:** Notifies the appropriate team via Slack about contacts with suspicious emails for manual review and potential correction.

## How it works:

1.  **Mautic Contact Trigger:** The workflow starts when a new or existing contact is saved/updated in Mautic (`On Contact Identified` node), triggering on the `mautic.lead_post_save_new` event.
2.  **Check if the contact is not a brand new one** the workflow verify the mautic.lead_post_save_new data.
3.  **Extract Information:** Extracts contact information, especially email, from the Mautic event data (`extract information` node).
4.  **Validate Email:** Uses the One Simple API to validate the extracted email address (`validate email` node) checking deliverability, domain validity and if the email is disposable.
5.  **Check Suspicious Email:** Evaluates the email validation results. If the email deliverability is not good, the domain is invalid, OR the email is disposable, the workflow proceeds to the next step (`If the email is suspicious` node).
6.  **Send to Slack:** Sends a notification to a designated Slack channel (`Send to Slack` node) containing details about the contact and a link to their Mautic profile.

## Services:

*   Mautic
*   One Simple API
*   Slack

## Hashtags:

#n8n #mautic #emailvalidation #leadquality #automation
