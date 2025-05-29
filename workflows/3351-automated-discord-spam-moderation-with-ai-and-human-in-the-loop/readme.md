# Discord Community Moderation with Human-in-the-Loop

## Use cases:

- **Automated Spam Detection:** Automatically identify and flag potential spam messages in a Discord server using AI-powered text classification.
- **Consistent Moderation:** Streamline the moderation process by providing moderators with a predefined set of actions to take on flagged messages.
- **Reduced Moderator Burden:** Minimize the time and effort required from moderators by automating spam detection and providing clear, actionable notifications.

## How it works:

1.  **Get Recent Messages**: A scheduled trigger fetches the most recent messages from a specified Discord channel.
2.  **Remove Duplicates**: The workflow identifies and removes duplicate messages from previous executions, ensuring only new messages are processed.
3.  **Group Messages by User**: Messages are grouped by user to minimize the number of notifications sent to moderators.
4.  **AI-Powered Spam Detection**: The content of each message is analyzed using a Language Model (LLM) text classifier to determine if it is likely spam.
5.  **Flag Messages:** Messages are flaged if they are spam or not spam.
6.  **Moderation Notification:** If spam is detected, a notification is sent to a designated moderation channel. This notification includes the user who sent the message, the flagged content, and a dropdown menu of predefined actions for the moderators to choose from (e.g., delete message and warn user, warn user only, do nothing).
7.  **Execute Moderation Actions**: Based on the moderator's selection, the workflow automatically executes the appropriate action, such as deleting the message, warning the user, or taking no action.  The workflow can delete the flagged messages accurately and even across multiple channels.

## Services:

-   **Discord API:** Used for fetching messages, deleting messages, and sending notifications to users and moderators.
-   **OpenAI API:** Used for classifying text as spam or not spam via the Langchain Text Classifier node.

## Hashtags:

#n8n #discord #automation #moderation #humanInTheLoop
