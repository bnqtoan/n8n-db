# n8n Workflow: Sending SMS with MessageBird

## Use cases:

*   **Alerting System:** Send SMS notifications for critical system events or alerts.
*   **Two-Factor Authentication (2FA):** Implement SMS-based 2FA for enhanced security.
*   **Appointment Reminders:** Send SMS reminders to clients about upcoming appointments.

## How it works:

This workflow is triggered manually and sends an SMS message using MessageBird.

1.  **On clicking 'execute' (Manual Trigger):** This node initiates the workflow when manually executed within n8n.
2.  **MessageBird:** This node sends an SMS message via the MessageBird API.  It requires the `message`, `originator`, and `recipients` parameters to be configured.  Ensure that valid credentials for the MessageBird API are set up.

## Services:

*   MessageBird (SMS API)

## Hashtags:

#n8n #automation #SMS #MessageBird #notification
