# PagerDuty Incident Management Workflow

This n8n workflow automates the creation, updating, and retrieval of incidents within PagerDuty.

## Use cases:

*   **Automated Incident Escalation:** When a specific trigger event occurs (simulated by the manual trigger in this example), automatically create an incident in PagerDuty.
*   **Incident Update Synchronization:** Keep incident details consistent across systems by automatically updating the PagerDuty incident based on changes detected elsewhere.
*   **Incident Verification:** After creating or updating an incident, immediately retrieve it from PagerDuty to confirm the changes were applied correctly.

## How it works:

1.  **Trigger:** The workflow starts with a "Manual Trigger" node, which simulates an event that requires incident creation.
2.  **Create Incident:** The "PagerDuty" node creates a new incident in PagerDuty with the title "Firewall on Fire". The node's configuration includes fields for email and service ID, but these have been left blank in this workflow.
3.  **Update Incident:** The "PagerDuty1" node updates the incident created in the previous step.  It retrieves the incident ID from the first "PagerDuty" node and uses it to update the incident's title to "Firewalls on Fire". Note the typo here, as it seems the title was originally supposed to be "Firewall on Fire".
4.  **Get Incident:** The "PagerDuty2" node retrieves the updated incident from PagerDuty using the incident ID obtained from the "PagerDuty1" node. This allows verification that the update was successful.

## Services:

*   PagerDuty

## Hashtags:

#n8n #automation #PagerDuty #incidentManagement #workflow
