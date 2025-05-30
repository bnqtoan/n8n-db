# Discord AI Bot

## Use cases:

- **Automated Ticket Routing:** Automatically categorize and route user feedback from a Discord channel to the appropriate department (Customer Success, IT, or Helpdesk) based on urgency and topic.
- **Intelligent Support System:** Analyze user messages in Discord and provide a summary or instruction for the relevant department, enabling quicker and more efficient response times.
- **Feedback Analysis:** Process user feedback submitted through a Discord webhook, categorize it, and deliver tailored instructions to the respective team for appropriate action.

## How it works:

1.  **Webhook:** Receives a POST request from a Discord webhook containing user feedback.
2.  **Analyze user request:** Uses the OpenAI node with the gpt-4 model to analyze the "feedback" field from the webhook data. The AI categorizes the feedback as "success-story", "urgent-issue", or "ticket" and provides a one-sentence instruction for the corresponding department.
3.  **Parse JSON:** Parses the JSON response from the OpenAI node to extract the category, feedback, and instruction.
4.  **Select Category:** A Switch node routes the workflow based on the category determined by OpenAI ("success-story", "urgent-issue", or "ticket").
5.  **Department Notification:** Based on the category, the workflow sends a message to the corresponding Discord channel (User Success Dept, IT Dept, or Helpdesk) containing the instruction generated by OpenAI.

## Services:

-   **Discord:** Used to receive user feedback via a webhook and send notifications to different department channels.
-   **OpenAI:** Used to analyze user feedback and categorize it to define the department that will handle it.

## Hashtags:

#n8n #automation #discord #openai #workflow
