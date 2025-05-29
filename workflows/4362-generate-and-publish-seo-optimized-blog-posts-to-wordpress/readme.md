# SEO friendly - Wordpress post generator

## Use cases:

- **Automated Blog Content Creation:** Generate draft blog posts for a WordPress site on a recurring schedule (e.g., every 3 hours), reducing the manual effort required to maintain a blog.
- **Content Idea Generation:** Automatically suggest blog topics and titles based on current trends or predefined criteria, helping to overcome writer's block and keep content fresh.
- **Social Media and Blog Post Promotion:** Notify a Discord channel and Telegram group when a new draft post is created, facilitating timely review, approval, and promotion.

## How it works:

This workflow automates the process of generating SEO-friendly WordPress blog posts. Here's a breakdown:

1.  **Trigger:** The workflow starts either via a Telegram command or a scheduled trigger every 3 hours.
2.  **Topic and Title Generation:** An AI model (Langchain LLM Chain) suggests a blog topic and title based on the trigger.
3.  **Article Metadata Generation**: Uses an AI model (Gemini) to generate metadata and prepare it for topic selection.
4.  **Article Body Generation:** An AI model (Langchain LLM Chain) generates the article content based on the chosen topic and title.
5.  **Draft Post Creation:** The generated content is used to create a draft post in WordPress.
6.  **Featured Image Generation:** An AI model (OpenAI) generates a featured image for the post.
7.  **Image Upload:** The generated image is uploaded to Wordpress, and is then set as the featured image for the generated post.
8.  **Notifications:** A notification is sent to a Discord channel and a Telegram group to alert users that a new draft post is available.

## Services:

-   **Telegram:** Used for triggering the workflow and sending notifications.
-   **Discord:** Used for sending notifications.
-   **WordPress:** Used for creating and storing draft blog posts.
-   **OpenAI:** Used for generating featured images.
-   **Google Gemini:** Used for generating blog metadata.

## Hashtags:

#n8n #automation #wordpress #contentcreation #ai
