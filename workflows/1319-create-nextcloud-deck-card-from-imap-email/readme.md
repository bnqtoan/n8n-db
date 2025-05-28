# Create Nextcloud Deck card from email

## Use cases:

- Automatically create tasks in Nextcloud Deck from emails received in a specific inbox. For example, emails sent to a support address can automatically create cards for tracking and resolution.
- Archive important email content as actionable cards in Nextcloud Deck. This can be useful for project updates or meeting notes received via email.
- Integrate email-based reminders or notifications into your Nextcloud Deck workflow, ensuring important information doesn't get lost in your inbox.

## How it works:

1.  **IMAP Email:** The workflow starts by monitoring a specified email inbox (configured in the credentials) using the IMAP protocol. It checks for new emails based on the configuration.
2.  **Function:** Once a new email is received, this node extracts and cleans the email content. It removes HTML tags, double quotations, line breaks, and carriage returns from the email body (either from `textHtml` if available, or from `textPlain`). The cleaned content is stored in the `body` field of the JSON data.
3.  **HTTP Request:** This node sends a POST request to the Nextcloud Deck API to create a new card.
    -   The `title` of the card is set to the email's subject.
    -   The `description` of the card is set to the cleaned email body extracted in the previous step.
    -   The card is added to a specific board and stack within Nextcloud Deck, which needs to be configured in the node's parameters. The API request includes necessary headers (`OCS-APIRequest` and `Content-Type`) and uses basic authentication (configured in the credentials) to access the Nextcloud Deck API.

## Services:

-   IMAP (Email Server)
-   Nextcloud Deck API

## Hashtags:

#n8n #Nextcloud #Deck #Automation #EmailToTask
