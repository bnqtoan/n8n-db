# My Workflow

## Use cases

*   **Automated Website Monitoring Setup:** Automatically create, update, and retrieve the status of website monitors, ensuring critical services are always online.
*   **Dynamic Configuration of Uptime Checks:** Programmatically manage uptime checks based on changing requirements or conditions, for example, creating a new monitor when a new service is deployed.
*   **Orchestrated Uptime Management:** Integrate uptime monitoring within a larger workflow, such as automatically alerting a team via Slack if an uptime check fails after creating and configuring it.

## How it works

This workflow manages uptime monitors using the UptimeRobot service. It starts by creating a new monitor for `https://n8n.io` with the friendly name "n8n". It then updates the created monitor's friendly name to "n8n website". Finally, it retrieves the details of the updated monitor.

1.  **UptimeRobot (Create):** Creates a new monitor on UptimeRobot for the specified URL (`https://n8n.io`).
2.  **UptimeRobot1 (Update):** Updates the friendly name of the monitor created in the previous step. The ID of the created monitor is dynamically referenced using an expression `{{$json["id"]}}` which gets the ID from the previous node.
3.  **UptimeRobot2 (Get):** Retrieves the details of the updated monitor using its ID, which is again dynamically referenced.

## Services

*   UptimeRobot

## Hashtags

#n8n #uptime #monitor #automation #website
