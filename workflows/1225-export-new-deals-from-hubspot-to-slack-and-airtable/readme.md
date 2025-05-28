# HubSpot Deal Automation Workflow

## Use cases:

- **Automated Ticket Creation:** When a new deal is created in HubSpot, automatically create a ticket in HubSpot to track its progress, prioritizing deals based on their value and type.
- **Real-time Notifications for Won Deals:** Instantly notify the team in a Slack channel when a deal is successfully closed, providing visibility and celebrating success.
- **Tracking Lost Deals:** Log details of lost deals in an Airtable base for analysis and to identify areas for improvement in the sales process.

## How it works:

1.  **HubSpot Trigger:** The workflow starts when a new deal is created in HubSpot, triggered by the "deal.creation" event.
2.  **HubSpot (Get Deal):** The workflow retrieves the details of the newly created deal from HubSpot using the deal ID.
3.  **Set:** It extracts relevant properties from the deal data, such as deal value, name, close date, description, type, and stage, and sets them as variables for use in subsequent nodes.
4.  **Switch:** The workflow checks the deal stage.
    *   If the deal stage is "closedwon", it triggers a Slack notification.
    *   If the deal stage is "presentationscheduled", it generates a Google Slides Presentation
    *   If the deal stage is "closedlost", it appends it to Airtable.
5.  **IF:** Evaluate if a ticket is created with high or low priority.
    *   **Evaluates deal parameters** The workflow evaluates a list of parameters to know if the ticket is high or low priority.
    *   **High-Priority:** If the deal value is greater than 500, the ticket is automatically created in Hubspot with high priority, adds deal's name and description and assigns to a user.
    *   **Low-Priority:** If the deal value is less than 500, the ticket is automatically created in Hubspot with low priority, adds deal's name and description.
6.  **Slack (#closedwon):** Sends a message to a specified Slack channel to notify that the deal was closed succesfully.
7.  **Airtable:** The details of the lost deal are added to an Airtable base for tracking and analysis.
8.  **Google Slides:** Trigger the creation of a presentation with the deal name.

## Services:

*   HubSpot
*   Slack
*   Airtable
*   Google Slides

## Hashtags:

#n8n #hubspot #automation #sales #crm
