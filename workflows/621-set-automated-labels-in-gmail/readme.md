# Get messages with a certain label, remove the label, and add a new one

## Use cases:

*   **Email Triage Automation:** Automatically process incoming emails with a specific label (e.g., "Urgent," "Needs Review") by removing the initial label and applying a new one that reflects the current status (e.g., "In Progress," "Reviewed").
*   **Support Ticket Management:** When a customer support email is labeled as "New," automatically remove this label after the initial triage and apply a label like "Assigned to Agent" to track its progress.
*   **Lead Qualification:** Automatically move leads from one stage to another based on email content or sender information, updating labels like "New Lead" to "Qualified Lead" after initial contact.

## How it works:

This workflow automates the process of fetching emails with a specific label from Gmail, removing that label, and then adding a new label.

1.  **On clicking 'execute'**: The workflow starts manually upon clicking the "execute" button in n8n.
2.  **Gmail**: Fetches all emails from Gmail that have the label "Label\_103811885290186237". It retrieves the full format of the messages including their IDs.
3.  **Gmail1**: Removes the label "Label\_103811885290186237" from each of the retrieved emails, using the message ID obtained in the previous step.
4.  **Gmail2**: Adds the label "Label\_140673791182006844" to each of the emails, using the message ID.

## Services:

*   Gmail

## Hashtags:

#n8n #gmail #automation #emailManagement #labeling
