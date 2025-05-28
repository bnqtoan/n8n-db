# Gmail Labelling Agent

## Use cases:

- **Automatic Email Sorting:** Automatically categorize incoming emails into relevant labels, ensuring a clean and organized Gmail inbox without manual effort.
- **Context-Aware Labeling:** Dynamically create new labels based on email content when existing labels don't fit, adapting to evolving communication patterns.
- **Prioritization of Important Emails:** Efficiently separate important emails from less critical ones, keeping the inbox clutter-free.

## How it works:

1.  **Gmail Trigger:** The workflow starts with a Gmail Trigger node that polls the inbox every 5 minutes for new emails.
2.  **Wait:** A wait node pauses the execution for 1 second.
3.  **Gmail Labelling Agent:** The core of the workflow, it leverages the Langchain Agent to categorize emails. It uses an OpenAI Chat Model to analyze the email content, leveraging a memory buffer to track the conversation.
4.  **Tools:** The agent uses the following tools:
    *   **Get message:** Get the body of the email.
    *   **Read all labels:** Read all the labels that exists in the account.
    *   **Create label:** Create a new label, if one does not exist yet.
    *   **Assign label to message:** Assign a label to the message.
5.  Based on the instructions, the agent reads all existing Gmail labels. Then uses the Get Message tool to read the email body. The email's content is analyzed and compared with existing labels to find a suitable match. If no match is found, a new label is created, maintaining the structure of existing labels by using sub-labels. Finally, the email is assigned to the appropriate label, and less important emails are archived.

## Services:

-   Gmail API
-   OpenAI API

## Hashtags:

#n8n #gmail #automation #emailManagement #AI
