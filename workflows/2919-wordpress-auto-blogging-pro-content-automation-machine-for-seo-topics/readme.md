# WordPress Blog Automation Pro (SEO topic) v2

## Use cases:

- Automatically generate blog posts on WordPress based on topics and keywords from a Google Sheet, saving time and effort for content creators.
- Create SEO-optimized content by leveraging AI to generate titles, structures, and relevant images, improving search engine rankings.
- Schedule and automate content creation, allowing for consistent publishing and engagement with the target audience.

## How it works:

1.  **Trigger:** The workflow is triggered either by a Google Sheets update or manually.
2.  **Data Retrieval:** It fetches the latest topic and related information (Seed keyword, Target audience, Company offering, etc.) from a Google Sheet.
3.  **Content Generation:**
    *   An AI model (OpenRouter Chat Model) generates a post title and structure based on the input data.
    *   The structure is parsed to individual chapters.
    *   For each chapter, another AI model (OpenRouter Chat Model1) writes the chapter text.
    *   A featured image and chapter images are generated using AI.
4.  **Image Handling:**
    *   Images are resized and uploaded to Google Drive and also to WordPress through HTTP Request nodes.
    *   Meta data of Images are updated.
5.  **Article Assembly:**
    *   The generated content from the AI are combined into a final article (both in Markdown and HTML formats).
6.  **WordPress Publication:**
    *   The article is posted on WordPress with the generated featured image and chapter images.
    *   An excerpt is set for the post.
7.  **Internal Linking:**
    *   The workflow can optionally fetch existing blog posts' sitemap and insert internal links.
    *   The workflow also has the logic to create a new folder on Google Drive for each article.
8. **Final Touches:**
   * Add featured images and update their metadata.
   * Save the final text to Google Docs

## Services:

-   Google Sheets
-   OpenAI (via Langchain nodes)
-   WordPress
-   Google Drive
-   OpenRouter

## Hashtags:

#n8n #automation #wordpress #seo #contentcreation #AI
