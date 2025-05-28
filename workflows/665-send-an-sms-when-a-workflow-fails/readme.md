# Send an SMS when a workflow fails

## Use cases:

*   **Real-time error notification:** Immediately notify a developer or support team when a critical n8n workflow encounters an error, enabling prompt investigation and resolution.
*   **Workflow monitoring:** Provide an automated alert system to monitor the health and stability of automated processes, ensuring continuous operation.

## How it works:

This workflow is triggered automatically when any other n8n workflow fails.  The `Error Trigger` node captures information about the failed workflow, including its ID and name. The `Twilio` node then sends an SMS message to a predefined phone number, containing details about the failed workflow.  The SMS message includes the workflow ID and name for easy identification.

## Services:

*   Twilio: For sending SMS messages.

## Hashtags:

#n8n #errorhandling #automation #monitoring #twilio
