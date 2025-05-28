# ServiceNow Incident Notification to Slack

## Use cases:

- **Real-time Incident Alerting:** Automatically post new ServiceNow incidents to a dedicated Slack channel for immediate awareness and faster response times.
- **Proactive Error Monitoring:** Receive instant Slack notifications when there are issues connecting to ServiceNow, enabling quick troubleshooting and minimizing workflow disruptions.
- **Streamlined Incident Management:** Provide a clear, organized view of ServiceNow incidents directly within Slack, improving team collaboration and incident resolution efficiency.

## How it works:

1.  **Trigger:** The workflow is triggered every 5 minutes using a `Schedule Trigger` node. Alternatively, it can be triggered manually using the `When clicking ‘Test workflow’` node.
2.  **Timestamp Calculation:** A `Get 5 Minute Ago Timestamp` node calculates a timestamp representing the time 5 minutes before the current time.
3.  **ServiceNow Incident Retrieval:** The `Get Incidents from ServiceNow` node queries ServiceNow for all incidents created after the calculated timestamp. It uses the ServiceNow API and basic authentication to retrieve the data.
4.  **New Incident Check:** The `Check if New Incidents` node verifies if any new incidents were found in the ServiceNow response by checking for the existence of the `sys_id` field.
5.  **Error Handling:** If there's an error connecting to ServiceNow, the workflow executes the `Post Error Message if Error with ServiceNow` node to send an alert to a specified Slack channel.
6.  **Incident Sorting:** If new incidents are found, the `Sort Incidents in Ascending Order` node sorts the incidents by their number in ascending order.
7.  **Slack Notification:** The `Post Incident Details to Slack Channel` node formats and sends the incident details to a designated Slack channel. The message includes fields like incident ID, description, severity, caller, priority, state, category, and the date it was opened. It also provides a "View Incident" button with a direct link to the incident in ServiceNow.
8.  **No New Incidents:** If no new incidents are found, the workflow executes the `No Incidents, Do Nothing` node, effectively ending the process.

## Services:

-   **ServiceNow:** Used to retrieve incident data.
-   **Slack:** Used to send notifications and incident details.

## Hashtags:

#n8n #automation #ServiceNow #Slack #incidentmanagement
