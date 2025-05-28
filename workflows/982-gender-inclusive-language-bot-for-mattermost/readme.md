# Gender Inclusive Language

## Use cases:

- **Promote Inclusive Communication:** Automatically remind users in a Mattermost channel to use gender-inclusive language when specific terms are detected.
- **Educational Tool:** Use as a learning tool to subtly guide team members towards more inclusive language in their daily communication.

## How it works:

1.  **Webhook Trigger:** The workflow starts with a "Webhook" node that listens for POST requests. This webhook receives data from Mattermost whenever a message is sent in a channel.
2.  **IF Condition:** The "IF" node checks the text content of the incoming message from the "Webhook" node. It looks for specific terms like "guys," "bros," "dudes," and "gals" (case-insensitive). The condition is met if ANY of these terms are found in the message.
3.  **Mattermost Notification (True Branch):** If the "IF" condition is true (i.e., one of the specified terms is found), the workflow proceeds to the "Mattermost1" node. This node sends a message back to the same Mattermost channel, suggesting the use of gender-inclusive alternatives like "folks" or "y'all."
4.  **No Operation (False Branch):** If the "IF" condition is false (i.e., none of the specified terms are found), the workflow goes to the "NoOp" node, which does nothing, effectively ending the workflow for that message.

## Services:

-   Mattermost

## Hashtags:

#n8n #automation #mattermost #inclusiveLanguage #slackbot
