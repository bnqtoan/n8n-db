# Receive updates when an event occurs in TheHive

## Use cases:

*   **Security Incident Monitoring:** Automatically receive notifications in a chat application or via email whenever a new security incident is created or updated in TheHive, enabling faster response times.
*   **Real-time Alerting:** Trigger automated actions, such as creating a ticket in a service desk system or escalating an alert, based on specific events occurring within TheHive.

## How it works:

This workflow uses TheHive Trigger node to listen for any events happening within TheHive. Whenever an event occurs (e.g., a new alert is created, an observable is added, or a case is updated), the workflow is triggered. Currently, the workflow only has a trigger and doesn't have any further actions. User should add next node to define what happen after trigger.

## Services:

*   TheHive

## Hashtags:

#n8n #TheHive #security #automation #incidentResponse
