# Notion-SIGNL4 Integration Workflow

## Use cases:
- **Automated Alerting**: When a new page is added to a specified Notion database (e.g., for new machine alerts), a SIGNL4 alert is automatically created.
- **Real-time Status Updates**: When an alert status changes in SIGNL4 (acknowledged, closed, etc.), the corresponding Notion page is updated with the alert's status and any relevant annotations or user information.
- **Alert Resolution Tracking**: Periodically checks a Notion database for alerts marked as "Read" and "Up" (resolved). It then resolves the corresponding alert in SIGNL4, updating the Notion page.

## How it works:

1.  **Notion Monitoring (Trigger/Interval):** The workflow is initiated either by new entries in a specified Notion database ("Notion Trigger") or periodically through the "Interval" node, which triggers a search ("Notion Read New" and "Notion Read Open") in Notion for specific entries (pages representing alerts).
2.  **New Alert Creation:** When a new page is added in Notion, the "Notion Trigger" node sends the data to the "SIGNL4 Alert" node, creating a new alert in SIGNL4. The alert's `externalId` is set to the Notion page's ID.
3.  **Alert Status Propagation:** The "Webhook" node listens for incoming webhooks (likely from SIGNL4). When an alert status changes in SIGNL4, a webhook is sent to n8n.
4.  **Status Processing:** The "Function" node parses the webhook data to determine the new alert status (Acknowledged, Closed, New Alert, etc.) and extracts relevant information, such as the username and any annotations.  It then creates a formatted status string (`s4Status`) and a boolean flag (`s4Up` which is true when the alert is closed).
5.  **Notion Update:** The "Notion Update" node updates the corresponding Notion page (identified by `externalEventId` in the webhook body, which matches the Notion page ID) with the formatted status string in the "Description" field.
6.  **SIGNL4 Alert Resolution (Periodic):** The "Interval" node triggers the "Notion Read Open" node to find Notion pages representing alerts that have been read and marked as resolved ("Up" and "Read" checkboxes are true).
7.  **SIGNL4 Resolve:** The "SIGNL4 Resolve" node uses the Notion page ID to resolve the corresponding alert in SIGNL4.
8.  **Alert Read Propagation:** When a new page is found in Notion the "Notion Read New" node sends the data to the "SIGNL4 Alert 2" node, creating a new alert in SIGNL4. The alert's `externalId` is set to the Notion page's ID. Then the "Notion Update Read" set the Read field in Notion to true
9.  **SIGNL4 Alert status  Propagation:** The "Notion Update Final" set the Read field in Notion to null

## Services:

*   Notion
*   SIGNL4

## Hashtags:

#n8n #automation #Notion #SIGNL4 #alerting
