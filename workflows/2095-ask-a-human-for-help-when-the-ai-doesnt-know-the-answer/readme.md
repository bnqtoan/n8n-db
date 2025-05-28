# AI Agent with Custom Tool for Customer Support

## Use cases:

*   **Automated Initial Support:** Handle common customer inquiries with an AI agent.
*   **Escalation to Human Support:** Seamlessly escalate complex or unanswerable queries to a customer support channel on Slack.
*   **Data Collection for Improved Support:** Gather user email addresses during interactions to improve personalized support.

## How it works:

This workflow consists of a main workflow and a sub-workflow (custom tool) designed to provide AI-powered customer support with human escalation.

1.  **Main Workflow:**
    *   The workflow starts when a chat message is received (`When chat message received` node).
    *   The message is fed to an AI Agent (`AI Agent` node), which uses an OpenAI Chat Model (`OpenAI Chat Model` node) to generate a response.  A Simple Memory (`Simple Memory` node`) is used to maintain the conversation context.
    *   If the AI agent can't answer the question, it uses the "dont\_know\_tool" (`Not sure?` node) to call the sub-workflow.

2.  **Sub-Workflow (Custom Tool):**
    *   The sub-workflow is triggered by the main workflow via the `When Executed by Another Workflow` node, receiving the user's input as `chatInput`.
    *   It checks if the user has provided an email address using a regular expression (`Check if user has provided email` node).
    *   If an email is present, the workflow sends the user's message to a designated Slack channel (`Message Slack for help` node) using the provided Slack credentials. A confirmation message is then generated (`Confirm that we've messaged a human` node).
    *   If no email is present, the workflow prompts the user to provide their email address (`Prompt the user to provide an email` node).

## Services:

*   **OpenAI:** Utilized for the AI Agent's language model.
*   **Slack:** Used to send messages to a customer support channel.

## Hashtags:

#n8n #automation #AIagent #customersupport #Slack
