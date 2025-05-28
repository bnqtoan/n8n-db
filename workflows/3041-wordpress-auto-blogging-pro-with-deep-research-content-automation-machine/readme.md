# WordPress Blog Automation Pro (Deep Research) v1

## Use cases:

- **Automated Blog Post Creation**: This workflow automates the process of creating blog posts, from initial research to publishing on a WordPress site, saving time and effort.
- **Content Repurposing**: It can repurpose existing content by researching related topics, generating new chapter images, and creating updated blog posts with fresh insights.
- **SEO Optimization**: By using AI to generate relevant content and optimize image metadata, the workflow can improve the SEO performance of blog posts.

## How it works:

1.  **Trigger**: The workflow is triggered by a Google Sheets entry or a manual trigger, starting the blog post creation process.
2.  **Initial Research**: The "Initial Research" node uses an AI agent to gather information on a specified topic and identify relevant subtopics.
3.  **Blog Planning**: The "Blog Planner" node uses AI to create a blog post outline based on the research, including a title, subtitle, introduction, chapters, and conclusion.
4.  **Content Creation**: For each chapter, the workflow uses AI ("Researcher", "Copywriter") to generate content. Images are generated and resized for each chapter ("Generate chapter image", "Resize Image").
5.  **Image Handling**: Generated images are uploaded to Google Drive ("Upload chapter images to Drive") and their metadata updated ("Update image meta data").
6.  **Article Assembly**: The workflow combines the chapter content into a final article ("Combine into article"), converts it to HTML ("Markdown to HTML"), and prepares it for publication.
7.  **Featured Image Generation**: A featured image is generated using AI ("Generate featured image"), resized ("Resize featured image"), and uploaded to Google Drive ("Upload featured image to Drive").
8.  **WordPress Posting**: The article is posted to WordPress ("Post on Wordpress"), and the featured image is associated with the post ("Set featured image for post").
9.  **Final Touches**: The workflow updates the post excerpt and saves the texts to Google Docs ("Set excerpt", "Save texts to Doc").

## Services:

-   Google Sheets: Used as a trigger and data source for blog post topics and settings.
-   OpenAI: Powers the AI agents and language models for research, content generation, and image creation.
-   Google Drive: Used to store and manage generated images.
-   WordPress: The platform where the final blog post is published.
-   Perplexity AI API: Used to research

## Hashtags:

#n8n #automation #WordPress #blogging #AI #contentCreation
