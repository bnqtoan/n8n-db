# Content Generator for WordPress v3

## Use cases:

- **Automated Blog Post Creation:** Generate entire blog posts from a set of keywords, brand guidelines, and SEO parameters, ready to be published on a WordPress site.
- **Content Repurposing:** Automatically create multiple variations of existing content optimized for different SEO strategies and post them on WordPress.
- **Hands-free Content Creation:** Automatically generate engaging and relevant content on autopilot by using AI and posting on WordPress.

## How it works:

1.  **Trigger:** The workflow can be triggered manually or via Airtable.
2.  **Data Retrieval:** The workflow retrieves brand guidelines and keywords from Airtable.
3.  **Content Generation:** Uses OpenAI to create a post title, structure, and chapter texts. It can use the Wikipedia, Calculator, or HTTP Request Langchain tools, depending on the type of the content.
4.  **Data Consistency Check:** The workflow checks for data consistency, if the generated output is inconsistent, respond with an error.
5.  **Image Generation:** Uses prompts to generate images for the blog post. It utilizes additional services such as `Leo` to improve and download the desired image.
6.  **SEO Optimization:** Optimizes the generated content using OpenAI for RankMath SEO plugin.
7.  **WordPress Posting:** Posts the final article, optimized for SEO with an image, to a WordPress site.
8.  **Notifications and Status Updates:** Sends a notification to Slack with the blog post information and updates the status in Airtable.

## Services:

-   Airtable
-   OpenAI
-   WordPress
-   Slack
-   RankMath
-   Leo AI

## Hashtags:

#n8n #automation #wordpress #contentgeneration #ai #blogging
