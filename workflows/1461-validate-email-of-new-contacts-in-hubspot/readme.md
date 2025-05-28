# Check for valid Hubspot contact email

## Use cases:

*   **Lead Qualification:** Automatically identify potentially invalid or suspicious email addresses in new HubSpot contacts, allowing sales teams to focus on high-quality leads.
*   **Data Cleansing:** Proactively flag contacts with deliverability issues or disposable email addresses for review and potential removal, improving the overall quality of your HubSpot contact database.
*   **Real-time Alerting:** Notify relevant teams via Slack when a new contact with a suspicious email address is created, enabling immediate investigation and follow-up.

## How it works:

1.  **HubSpot Trigger:** The workflow starts when a new contact is created in HubSpot, triggering the workflow.
2.  **Get Contact Email Address:** Retrieves the email address of the newly created contact from HubSpot, along with other properties.
3.  **Validate the Email:** Uses the One Simple API to validate the email address, checking for deliverability, domain validity, and if it's a disposable email.
4.  **Conditional Check:** Evaluates the validation results. It checks if the email deliverability is not "GOOD", if the domain is not valid, or if the email is a disposable email.
5.  **Slack Notification:** If any of the validation checks fail, a message is sent to a designated Slack channel, notifying the team about the suspicious contact. The message includes the contact's name, email, and creator information.

## Services:

*   HubSpot
*   One Simple API
*   Slack

## Hashtags:

#n8n #HubSpot #EmailValidation #Automation #LeadQuality
