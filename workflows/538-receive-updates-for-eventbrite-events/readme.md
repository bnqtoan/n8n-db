# Eventbrite Order Monitor

## Use cases:

*   **Real-time Sales Monitoring:** Get instant notifications in your communication channel (e.g., Slack, Microsoft Teams) whenever a new order is placed for your Eventbrite event.
*   **Order Change Tracking:** Automatically update a Google Sheet with the latest order information, including refunds, to maintain an accurate sales record.
*   **Customer Support Automation:** Trigger automated email sequences or create support tickets when an order is updated or refunded, ensuring prompt customer assistance.

## How it works:

This workflow is triggered by events occurring on Eventbrite. Specifically, it monitors a specified event for new orders, updates to existing orders, and refunds. When any of these actions occur, the workflow is initiated.

The "Eventbrite Trigger" node listens for `order.placed`, `order.updated`, and `order.refunded` events for the event ID `114095913950` within the organization `461207981776`.  It uses the "eventbrite api" credential to authenticate with Eventbrite.  Since there are no further nodes connected, the workflow effectively stops at this point. To be useful, you would need to add nodes to send notifications, update databases, or perform other actions based on the event data.

## Services:

*   Eventbrite API

## Hashtags:

#n8n #Eventbrite #Automation #EventManagement #SalesTracking
