# (G) - Email Classification

## Use cases:

*   **Automated Email Sorting:** Automatically sort incoming emails into predefined categories like "High Priority," "Work Related," or "Promotion" to help manage and prioritize your inbox effectively.
*   **Efficient Task Management:** Classify emails related to specific projects or tasks, ensuring that important action items are quickly identified and addressed.
*   **Improved Response Times:** Prioritize emails from key stakeholders or urgent requests, enabling faster response times and better communication.

## How it works:

1.  **Gmail Trigger:** The workflow starts by monitoring your Gmail inbox for new emails using the `Gmail Trigger` node. It checks for new emails every minute.
2.  **Classification Agent:** The `Classification Agent` node uses a Langchain text classifier to categorize the incoming email based on its content. It classifies emails into categories such as "High Priority," "KS Work Related," "Promotion," or "Other," using predefined keywords and descriptions.
3.  **Add Label Nodes:** Based on the classification result, the workflow adds a corresponding label to the email in Gmail. The workflow utilizes the `Gmail` node to add labels like "High Priority", "KS Work Related", or "Promotion" to the email.
4.  **(Optional) AI Agent:** Disabled by default, the workflow includes an `AI Agent` node that can be configured to draft reply emails. This node uses the `Groq Chat Model` or `Google Gemini Chat Model` (configured in their respective nodes) to generate a response based on the email content and predefined instructions. This feature is disabled by default, meaning that the draft will not be sent unless manually enabled and adjusted.

## Services:

*   Gmail API
*   Google Gemini Chat Model (PaLM API)
*   Groq API (Optional)

## Hashtags:

#n8n #gmail #emailAutomation #classification #langchain
