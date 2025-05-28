# Twitch Stream Status Checker

## Use cases:

- **Real-time Stream Monitoring:**  Check if a specific Twitch streamer is currently live and display the stream status on a personal dashboard or website.
- **Automated Notifications:**  Trigger notifications (e.g., via email, Slack) when a specific Twitch streamer goes live.  This could be useful for viewers wanting to catch their favorite streamers.
- **Community Management:**  Track the online status of multiple Twitch streamers within a community and automatically update a shared resource.

## How it works:

1.  **Manual Trigger:** The workflow starts when you manually trigger it using the "When clicking ‘Test workflow’" node.
2.  **Define Twitch Username:** The "Document" node stores the Twitch username you want to check.  You'll need to replace `YOUR-TWITCH-USERNAME` with the actual username.
3.  **Fetch Stream Data:** The "Twitch GraphQL" node uses the Twitch GraphQL API to retrieve information about the specified user's stream.  It checks if the user is currently streaming. The `client-id` parameter is a known value used by Twitch for anonymous calls.
4.  **Check Online Status:** The "Is Online" node checks if the `stream` field in the API response is empty (null). If the field is not empty, it means the streamer is online; otherwise, they are offline.
5.  **Further Actions (Not Implemented):** From here, the workflow can be extended to perform actions based on the online status (e.g., send a notification, update a status display).  Currently, the "Is Online" node does not have any connections for true or false states.

## Services:

-   Twitch GraphQL API

## Hashtags:

#n8n #Twitch #Automation #GraphQL #StreamStatus
