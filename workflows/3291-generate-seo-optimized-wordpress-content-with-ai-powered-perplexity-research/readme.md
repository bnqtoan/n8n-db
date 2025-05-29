# 🔍🛠️Generate SEO-Optimized WordPress Content with Perplexity Research

## Use cases:

- **Automated Blog Post Creation:** Automatically generate SEO-optimized blog posts for a WordPress site based on a research query.
- **Content Marketing Automation:** Streamline content creation for marketing teams by automating research, writing, and publishing processes.
- **Lead Generation:** Attract inbound leads by consistently publishing engaging and informative content related to AI consulting and workflow automation.

## How it works:

1.  **Form Submission:** The workflow starts with a form submission in n8n, where a user enters a research query.
2.  **Perplexity Research:** The query is sent to the Perplexity AI API to gather detailed information from reputable sources.
3.  **Clean Up Research Links:** The research findings are cleaned up by replacing citation markers with source information.
4.  **Copywriter AI Agent:** An AI agent (Langchain) acts as a copywriter, using the research findings to generate a comprehensive blog post.
5.  **Create HTML:** Uses another AI agent (GPT-4o-mini) to format the blog post into WordPress-compatible HTML, including elements like headings, tables of contents, and stylized links.
6.  **Create Title, Slug & Meta Description:** An OpenAI Chat Model is used to generate an SEO-optimized title, slug, and meta description for the blog post based on the generated content. Structured output parser ensures the output is valid JSON
7.  **Combine All Details:** Combines the blog post content, title, slug, and meta description into a single data structure.
8.  **Cleanup HTML:** Removes unnecessary characters from the generated HTML.
9.  **WordPress Posting:** Creates a new blog post on a WordPress site with the generated content, title, slug, and meta description. Sets the status to "draft" and closes comments.
10. **Upload Image:** Get a cover image and uploads to Wordpress site, then sets it as a featured image for the post
11. **Telegram Notification:** Sends a success message to a Telegram chat indicating that the blog post has been created.

## Services:

-   **Perplexity AI API:** Used for researching the given query and providing detailed information from reputable sources.
-   **OpenAI API:** Used for generating blog content, creating title, slug and meta description.
-   **WordPress API:** Used for creating blog posts and uploading images to a WordPress site.
-   **Telegram API:** Used for sending success notifications.

## Hashtags:

#n8n #automation #WordPress #contentcreation #SEO #PerplexityAI #OpenAI
