# Slack ServiceNow Incident Search

## Use Cases:

*   **Incident Response Team:** Allows incident response teams to quickly search for ServiceNow incidents based on priority and state directly from Slack, facilitating faster response times and better coordination.
*   **Help Desk Support:** Enables help desk staff to efficiently retrieve incident information for users requesting updates on specific issues, improving user satisfaction.
*   **Automated Reporting:** Can be integrated into automated reporting workflows to provide real-time incident summaries in a designated Slack channel for stakeholders, enhancing visibility and decision-making.

## How it works:

1.  **Receive Slack Event:** The workflow starts with a `Webhook` node, which captures incoming events from Slack (e.g., modal submissions, block actions).
2.  **Parse Webhook Data:** The `Parse Webhook` node extracts relevant information from the Slack payload, such as the callback ID, user-selected incident state and priority, and the selected channel for notifications.
3.  **Route Message:** The `Route Message` node determines the type of Slack interaction (e.g., modal request, submission data, or block actions) and directs the workflow accordingly.
4.  **Respond to Modal Request and Open ServiceNow Modal:** If the route is for a modal request, the workflow acknowledges the request with the `Respond to Slack Webhook` and opens the `ServiceNow Modal` via the Slack API. The modal presents a form for users to specify incident priority, state, and a channel for results.
5.  **Close Modal and Query ServiceNow:** Once the user submits the modal, the `Close Modal Popup` node closes the modal, and the `ServiceNow` node uses the provided state and priority to query incidents from ServiceNow.
6.  **Check for Incidents and Prepare Data:**
    *   The `Were Incidents Found?` node determines if any incidents matched the search criteria.
    *   If matches are found, the `Sort by Most Recent` and `Retain First 5 Incidents` nodes sort and limit the results to the five most recent incidents.
    *   The `Loop Over Items` and `Format Incident Details` nodes loop through each incident and format them for display in Slack.
    *   The `Concatenate Incident Details` and `Format Slack Message` node concatenates the incident details and format them with a greeting message and links to view the incidents in ServiceNow
7.  **Send Results via Slack:** Based on whether a channel was selected in the modal, the workflow sends the formatted incident details to either the selected `Channel - Send Matching Incidents` or as a `DM - Send Matching Incidents` to the user via the Slack API using Block Kit.
8.  **Handle No Matches:** If no incidents are found, the workflow checks if a channel was selected. If so, a notification is sent to the channel; otherwise, a direct message is sent to the user indicating that no incidents matched their criteria.
9.  **Acknowledge Slack Button Presses:** The Send 200 sends a 200 HTTP response back to Slack whenever a button press event is triggered in a Slack message.

## Services:

*   Slack API: Used for receiving events, opening modals, and sending messages (both to channels and direct messages).
*   ServiceNow API: Used for querying incidents based on specified criteria (state and priority).

## Hashtags:

#n8n #automation #workflow #slack #servicenow