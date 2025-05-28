# Error Notification Workflow

## Use cases:

- **Centralized Error Monitoring:** Receive instant email notifications when any of your n8n workflows encounter an error, enabling quick response and troubleshooting.
- **Improved Workflow Stability:** Identify and address recurring errors by tracking error messages, workflow names, and execution details, leading to more robust and reliable automation.
- **Proactive Issue Resolution:** Immediately notify responsible parties (e.g., developers, operations teams) upon failure, minimizing downtime and ensuring timely intervention.

## How it works:

This workflow is designed to be triggered when another workflow encounters an error. Here's the breakdown:

1. **On Error (Error Trigger):** This node activates when an error occurs in a linked workflow. It captures the error details, workflow information, and execution context.
2. **Gmail:** The Gmail node sends an email notification containing details about the error. The email includes:
    - The name of the workflow that failed.
    - A link to the specific execution in n8n that resulted in the error.
    - The name of the node where the error originated.
    - The error message and stack trace, providing detailed debugging information.
    - The target email is **SET YOUR EMAIL HERE** so it needs to be updated with the recipient mail
    - It requires Gmail credentials to send e-mails
## Services:

- Gmail

## Hashtags:

#n8n #errorhandling #automation #emailnotification #workflow
