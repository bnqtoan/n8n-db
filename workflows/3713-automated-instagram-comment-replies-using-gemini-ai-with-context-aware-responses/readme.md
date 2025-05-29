# comentarios automaticos

## Use cases:

- **Automated Instagram Comment Moderation:** Automatically responds to user comments on Instagram posts, engaging with the audience and fostering a sense of community around the content.
- **AI-Powered Customer Support:** Provides instant answers to common questions asked in the comments section, reducing the workload on social media managers and improving response times.
- **Content Discovery and Feedback Analysis:** Analyzes the sentiment and content of comments to identify trending topics, gather user feedback, and discover opportunities for new content creation.

## How it works:

1.  **Webhook Trigger (Webhook & get\_new\_comments):** Listens for new comments posted on Instagram. When a new comment is detected, the workflow is triggered. The first Webhook Node validates the subscription. The second one actually listens to the POST events related to new comments.
2.  **Data Extraction (data):** Extracts relevant information from the webhook payload, such as the comment text, user ID, username, and media ID of the commented post.
3.  **User Validation (its me?):** Filters out comments made by the account owner to avoid self-replies.
4.  **AI Response Generation (AI Agent):** Uses an AI agent (configured with a specific persona and context) to analyze the comment and generate an appropriate response, filtering spam comments and replying properly based on comment type and content. It leverage also a chat model service (OpenRouter Chat Model)
5.  **Posting the Comment (Post comment):** Sends the AI-generated response back to Instagram as a reply to the original comment using Instagram's API.

## Services:

-   Instagram API
-   OpenRouter API

## Hashtags:

#n8n #automation #instagram #ai #socialmediamarketing
