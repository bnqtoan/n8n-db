# Automate Content Generator for WordPress with DeepSeek R1

## Use cases:

- **Automated Blog Content Creation:** Automatically generate blog posts from a set of initial ideas stored in a Google Sheet. This is useful for maintaining a consistent posting schedule and reducing manual content creation effort.
- **SEO-Optimized Article Generation:** Creates SEO-friendly content by utilizing DeepSeek R1 to write articles based on provided prompts, including title generation, and formats it for WordPress.
- **Content Pipeline for Blog Managers:** Ideal for blog managers seeking to automate content creation and publishing, especially when combined with a scheduling trigger.

## How it works:

1.  **Trigger:** The workflow starts when manually triggered using the "When clicking ‘Test workflow’" node.
2.  **Fetch Ideas from Google Sheets:** The "Get Ideas" node retrieves content ideas (prompts) from a specified Google Sheet.
3.  **Set Prompt:** The "Set your prompt" node assigns the prompt from the Google Sheet to a variable for use in the subsequent steps.
4.  **Generate Article with DeepSeek:** The "Generate article with DeepSeek" node uses the DeepSeek R1 model to generate an article based on the prompt. It formats the content in HTML.
5.  **Generate Title with DeepSeek:** The "Generate title with DeepSeek" node uses the DeepSeek R1 model to create an SEO-friendly title for the article.
6.  **Create Post on WordPress:** The "Create post on Wordpress" node creates a new post on a WordPress site with the generated title and content, setting the status to "draft".
7.  **Generate Image with DALL-E:** The "Generate Image with DALL-E" node uses the OpenAI DALL-E model to generate a cover image for the blog post, based on the generated title.
8.  **Upload image:** The "Upload image" uploads the generated image on Wordpress via API.
9.  **Set Image:** The "Set Image" associates the generated image with the newly created post.
10. **Update Sheet:** The "Update Sheet" node updates the Google Sheet, adding the generated title and the post ID in the sheet.

## Services:

-   **Google Sheets:** Used for storing and retrieving content ideas.
-   **WordPress:** Used as the content management system (CMS) for publishing the generated articles.
-   **DeepSeek R1 (via n8n-nodes-langchain.openAi):** Used for generating article content and titles.
-   **OpenAI DALL-E (via n8n-nodes-langchain.openAi):** Used for generating images for the articles.

## Hashtags:

#n8n #automation #wordpress #contentcreation #deepseek #openai
