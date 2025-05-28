# ✍️🌄 Your First Wordpress Content Creator - Quick Start

## Use cases:
- **Content Creation for Diverse Audiences:** Automatically generate blog posts and tailor them to different reading levels (e.g., grades 2, 5, and 9) for broader accessibility.
- **Automated Blog Management:** Streamline the process of creating, formatting, and publishing content to a WordPress blog, including generating featured images.
- **Educational Content Production:** Efficiently create educational content, adjusting the complexity to suit various age groups or skill levels.

## How it works:
1.  **Trigger:** The workflow is initiated manually via the "When clicking ‘Test workflow’" trigger node.
2.  **Set Blog Topic:** A predefined blog topic is set using the "Set Blog Topic" node. In the provided example, the topic is "Why Nostr is the and coming decentralized network."
3.  **Create Structured Blog Post:** The workflow uses the "Create Structured Blog Post" node, an AI agent leveraging a large language model (LLM), to generate a blog post based on the defined topic. The Agent is configured with detailed instructions for content structure, formatting (HTML), and SEO optimization. It generates content including a title and article content and returns output in JSON format.
4.  **Separate Title & Content:** The "Separate Title & Content" code node extracts the title and content from the JSON output of the previous step and validates that both are present.
5.  **Error handling:** If either title or content is missing at any stage, the workflow sends an error message via Telegram and aborts.
6.  **Content transformation:** The content (in HTML format) is transformed into Markdown format.
7.  **Rewrite for Different Reading Levels:** The workflow rewrites the generated article to target grade levels 9, 5, and 2 using separate "Rewrite for Grade [level] Reading Level" nodes.
8.  **WordPress Post Creation:** The workflow creates a draft post in WordPress using the Grade 9 rewritten content and title.
9.  **Image Generation:** A featured image is generated using Pollinations.ai based on the extracted title.
10. **Image Upload and Association:** The generated image is uploaded to WordPress, and then associated with the created post as the featured media.
11. **Success Notification:** Upon successful completion, a success message is sent via Telegram.

## Services:
-   **OpenAI:** Used via the Langchain nodes (`gpt-4o-mini`, `gpt-4o-mini1`, `gpt-4o-mini2`, `gpt-4o-mini3`) for content generation and rewriting.
-   **Google Drive:** Used to save a draft version of the blog post (via Google Drive node).
-   **WordPress:** Used to create and manage blog posts.
-   **Pollinations.ai:** Used to generate featured images for the blog posts.
-   **Telegram:** Used for sending success and error notifications.

## Hashtags:
#n8n #automation #WordPress #contentcreation #AI
