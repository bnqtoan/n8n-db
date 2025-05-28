## n8n Workflow: Send Alerts to SIGNL4

This workflow automates sending alerts to SIGNL4, a mobile alerting platform, when triggered manually.

### Use cases:

*   **Testing Alerting Integrations:** Quickly send test alerts to SIGNL4 to verify that the integration with n8n is working correctly.
*   **Manual Incident Reporting:** Allow authorized users to manually trigger alerts to SIGNL4 for critical incidents or events that require immediate attention.
*   **Proof of Concept:** Demonstrate the ability to create alerts through n8n to a SIGNL4 instance.

### How it works:

1.  The workflow starts with a "Manual Trigger" node, which is activated when you click the "Execute Workflow" button in n8n.
2.  The "SIGNL4" node then takes the data from the trigger and sends an alert to SIGNL4.
3.  The alert message defaults to "This is a test alert sent from n8n to SIGNL4," and the title of the alert is set to "Sample Title".
4.  This workflow relies on a SIGNL4 API credential configured with the name "Signl4 Team Secret".

### Services:

*   SIGNL4

### Hashtags:

#n8n #SIGNL4 #Alerting #Automation #IncidentManagement
