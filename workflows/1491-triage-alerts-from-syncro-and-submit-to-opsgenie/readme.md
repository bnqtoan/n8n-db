# Syncro Alert to OpsGenie

## Use cases:

*   **Automated Incident Management:** When Syncro detects an issue (e.g., agent offline), automatically create an alert in OpsGenie to notify the relevant teams.
*   **Proactive Alert Resolution:** Automatically close OpsGenie alerts when Syncro indicates that the issue has been resolved.
*   **Centralized Alerting:** Integrate Syncro alerts into OpsGenie, providing a unified view of system health and potential problems alongside alerts from other monitoring tools.

## How it works:

1.  **Webhook (Syncro Trigger):** Listens for incoming webhook events from Syncro at the `/fromsyncro` endpoint.  This webhook is triggered by events within Syncro.
2.  **Switch:** Determines of the trigger is "agent\_offline\_trigger" to filter for specific alert types.
3.  **Set:** Extracts and formats key information from the Syncro webhook payload, including Alert ID, description (combining computer name, customer details, and formatted output), and stores them as named variables. The node keeps only the variables set.
4.  **IF:** Checks the `resolved` property from the Syncro webhook payload. If the alert is resolved (`true`), it proceeds to close the alert in OpsGenie; otherwise, it creates a new alert.
5.  **Create Alert (OpsGenie):** If the alert is not resolved, this node sends a POST request to the OpsGenie API to create a new alert. It uses the extracted information from the "Set" node to populate the alert's message, alias (Alert ID), and description (including the original alert text and link from Syncro).
6.  **Close Alert (OpsGenie):** If the alert is resolved, this node sends a POST request to the OpsGenie API to close the existing alert. It uses the Alert ID (extracted from the Syncro webhook) to identify the alert and adds a note indicating that the issue was automatically resolved according to Syncro.
7.  **NoOp:** Does nothing, this node is used when the trigger is not "agent\_offline\_trigger".

## Services:

*   Syncro
*   OpsGenie

## Hashtags:

#n8n #automation #OpsGenie #Syncro #alerting
