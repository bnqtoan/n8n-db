# Mattermost Notification on Emelia Reply

## Use cases:

*   **Sales Team Notification:** Notify a sales team channel in Mattermost when a lead replies to an email campaign in Emelia.
*   **Customer Support Alert:** Alert a customer support team via Mattermost when a customer responds to a support-related email campaign.
*   **Campaign Engagement Tracking:** Automatically post a notification to a Mattermost channel to monitor engagement and response rates for specific Emelia email campaigns.

## How it works:

1.  **Emelia Trigger:** The workflow starts with the "Emelia Trigger" node. This node listens for specific events (in this case, "replied") from a designated Emelia campaign (specified by its ID).  It is triggered whenever a recipient replies to the Emelia campaign "6054d068b374b64365740101".
2.  **Mattermost Notification:**  Once a "replied" event is received from Emelia, the "Mattermost" node is activated. This node sends a message to a specified Mattermost channel ("qx9yo1i9z3bg5qcy5a1oxnh69c"). The message includes the first name of the contact who replied and the company they belong to, extracted from the data received from Emelia.

## Services:

*   Emelia
*   Mattermost

## Hashtags:

#n8n #automation #mattermost #emelia #notification
