# Social Media Engagement Automation

## Use cases:

- **Automated Commenting:** Automatically generate and post comments on social media posts based on received chat messages. This can be used to maintain engagement and provide quick feedback.
- **Sentiment-Based Reactions:**  React to social media posts (e.g., with a like or other emoji) based on the sentiment expressed in user chat messages.
- **Real-time Engagement Confirmation:**  Send a Telegram message confirming that a comment has been posted and a reaction has been added to a post, providing a record of automated actions.

## How it works:

1.  **Trigger: Chat Message Received:** The workflow starts when a new chat message is received (likely via a webhook).
2.  **LLM: Extract Post ID:** An LLM (Language Model) extracts the relevant post ID from the chat message using `OpenAI: Chat Model (Post ID Extraction)`.
3.  **Unipile: Get Post Details:** The workflow fetches details of the specified post using the extracted ID using an HTTP Request to Unipile.
4.  **LLM: Generate Comment:** The workflow uses an LLM (with `OpenAI: Chat Model (Comment Generation)`) to generate a relevant comment based on the post details. The `LLM: Refine Comment (Thinking)` node might include logic to refine and improve the generated comment (based on the "Thinking" tool).
5.  **Unipile: Comment on Post:** The generated comment is posted on the social media post using an HTTP Request to Unipile.
6.  **Unipile: Add Post Reaction:** A reaction (e.g., a like) is added to the post, using an HTTP Request to Unipile.
7.  **Telegram: Send Confirmation:** A confirmation message is sent via Telegram to notify the user that the comment has been posted and a reaction has been added.

## Services:

-   **Unipile:** Used for interacting with social media posts (getting details, posting comments, adding reactions).
-   **OpenAI:** Used for language model functionalities like extracting information and generating comments.
-   **Telegram:** Used for sending confirmation messages.

## Hashtags:

#n8n #automation #socialmedia #engagement #llm
