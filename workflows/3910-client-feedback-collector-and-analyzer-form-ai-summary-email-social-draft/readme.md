# My workflow 4

## Use cases:

- **Automated Client Feedback Analysis:**  Process client feedback submitted through a webhook, automatically analyze it using AI to extract key insights, and generate a summary report and a social media post draft.
- **Improve Customer Service:** Use feedback to improve customer service based on summarized positive points and suggested improvements.
- **Content Creation from Feedback:** Automatically create engaging social media content derived from positive client feedback to promote the business.

## How it works:

1.  **Receive Feedback:** The workflow starts with a "Receive Feedback" Webhook node, which listens for POST requests at the `/client-feedback` endpoint. It expects the request body to contain client feedback.
2.  **Prepare AI Prompt:** A "Prepare AI Prompt" Function node takes the received feedback and constructs a prompt for the AI model. The prompt instructs the AI to summarize positive points, suggest improvements, and generate a short social media post based on the positive elements.
3.  **Analyze with AI:** The "Analyze with AI" HTTP Request node sends the generated prompt to the DeepSeek AI API. It uses the predefined credentials. The configuration indicates that it expects a JSON response.
4.  **Format AI Output:** A "Format AI Output" Function node parses the AI's response. It splits the AI output into a summary report and a social media post draft.
5.  **Send Feedback Report:** An "Send Feedback Report" Email Send node sends the feedback report via email to `team@email.com` from `your@email.com`.
6.  **Send Social Draft:** An "Send Social Draft" Telegram node sends the generated social media post draft to a Telegram chat (using `YOUR_TELEGRAM_CHAT_ID`).

## Services:

-   **DeepSeek AI API:** For analyzing client feedback and generating insights and a social media post.
-   **Email (SMTP):** For sending the feedback report.
-   **Telegram:** For sending the social media draft.

## Hashtags:

#n8n #automation #clientfeedback #ai #socialmedia
