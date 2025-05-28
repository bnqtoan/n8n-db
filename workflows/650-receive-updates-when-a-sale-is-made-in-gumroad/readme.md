# Receive updates when a sale is made in Gumroad

## Use cases:

*   **Real-time Sales Notifications:** Get instant notifications in a communication channel (e.g., Slack, Discord) every time a sale is made on Gumroad.
*   **Sales Dashboard Updates:** Automatically update a sales dashboard or spreadsheet with each new Gumroad sale.
*   **Customer Onboarding:** Trigger an automated onboarding sequence or welcome email to new customers immediately after a purchase.

## How it works:

This workflow is triggered automatically whenever a new sale is made on Gumroad.

1.  **Gumroad Trigger:** The workflow starts with the "Gumroad Trigger" node. This node listens for webhook events from Gumroad related to sales. It's configured to monitor the "sale" resource. It uses the Gumroad API credentials to authenticate and receive updates.

## Services:

*   Gumroad

## Hashtags:

#n8n #Gumroad #sales #automation #webhook
