# TheHive and SIGNL4 Integration Workflow

## Use cases:

- **Real-time Security Alerting:** Automatically notify on-call personnel via SIGNL4 when a new security alert is created in TheHive, ensuring immediate attention to potential threats.
- **Alert Resolution Synchronization:** When an alert's status is updated to "Closed" in TheHive, automatically resolve the corresponding alert in SIGNL4, keeping both systems in sync and avoiding unnecessary escalations.
- **Incident Tracking and Response:** Use TheHive as a central repository for security incidents and SIGNL4 for real-time alerting and response coordination.

## How it works:

1.  **TheHive Webhook Request:** This workflow is triggered by a webhook from TheHive, specifically when an alert is created or updated.
2.  **IF:** The workflow checks if the "stage" of the alert in TheHive is not equal to "Closed".
3.  **SIGNL4 Send Alert:** If the alert is not closed, a new alert is created in SIGNL4 using the details from TheHive, including the title, description, and object ID.
4.  **SIGNL4 Resolve Alert:** If the alert stage is updated to "Closed" in TheHive, the corresponding alert in SIGNL4 is resolved, using the object ID from TheHive to identify the alert.
5.  **TheHive Create Alert:** Create a new alert in the TheHive (for testing purposes).

## Services:

-   TheHive: A security incident response platform.
-   SIGNL4: A mobile alerting and incident response platform.

## Hashtags:

#n8n #TheHive #SIGNL4 #SecurityAutomation #IncidentResponse
