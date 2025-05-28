# ServiceNow Incident Lookup via Slack

## Use cases:

- **On-demand Incident Information:** Allow users to quickly retrieve ServiceNow incident details directly within Slack using a simple slash command, improving response times and reducing the need to switch between applications.
- **Automated Incident Notifications:** Send real-time incident updates to relevant Slack channels, keeping stakeholders informed about the status of critical issues.
- **Simplified Incident Management:** Enable users to view incident details and access the ServiceNow incident directly from Slack, streamlining incident management workflows.

## How it works:

1.  **Webhook Trigger:** The workflow starts with a `Webhook` node, which listens for POST requests from a Slack slash command.
2.  **Extract Incident ID:** The `Extract Incident ID from Response` node extracts the incident ID from the incoming Slack payload, specifically looking for the "text" value in the request body.
3.  **Search ServiceNow:** The `Search For Incident in ServiceNow` node uses the extracted incident ID to query the ServiceNow API for matching incidents. It uses the sysparm_query parameter to filter results based on the incident number.
4.  **Parse ServiceNow Response:** The `Parse ServiceNow Response` node acts as a switch, checking for errors, non-existent incidents, or successful incident retrieval from ServiceNow.
5.  **Send Response to Slack:** Based on the outcome of the ServiceNow search, one of the following occurs:
    *   **Incident Found:** The `Send Incident Details to Slack` node formats the incident details (ID, description, severity, caller, priority, state, category, date opened) into a Slack message and sends it back to the channel, including a button to view the incident in ServiceNow.
    *   **Incident Not Found:** The `Notify User no Incident was Found` node sends a message to Slack indicating that no incident was found with the provided ID.
    *   **ServiceNow Error:** The `Notify User of Error with ServiceNow` node sends a message to Slack notifying the user of an issue connecting to ServiceNow.

## Services:

*   Slack
*   ServiceNow

## Hashtags:

#n8n #automation #ServiceNow #Slack #IncidentManagement
