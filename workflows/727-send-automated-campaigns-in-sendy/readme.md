# Add a subscriber to a list and create and send a campaign

## Use cases:

- **Newsletter Subscription:** Automatically subscribe new users to a specific newsletter list upon form submission or event trigger and immediately send them a welcome email.
- **Lead Nurturing:** Add new leads to a dedicated list and trigger a welcome campaign designed to introduce your product or service.
- **Event Registration:** When someone registers for an event, add them to an event-specific list and send them a confirmation email with event details.

## How it works:

This workflow automates the process of adding a new subscriber to a Sendy list and then creating and sending a campaign to that subscriber.

1.  **Trigger:** The workflow starts manually when you click the "execute" button.
2.  **Add Subscriber:** The "Sendy" node adds a new subscriber with the email address `harshil@n8n.io` and name "Harshil" to the Sendy list with ID "2".
3.  **Create and Send Campaign:** The "Sendy1" node creates and sends a campaign with the title "Welcome to n8n," a subject of "Welcome to n8n," and a simple welcome message to the list ID "2."

## Services:

-   Sendy: An email marketing application.

## Hashtags:

#n8n #automation #emailmarketing #sendy #workflow
