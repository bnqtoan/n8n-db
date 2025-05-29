# My Workflow

## Use cases:
- Automated Content Creation: Automatically create and publish blog posts based on RSS feeds, leveraging AI for content generation.
- Social Media Management: Schedule and publish engaging content on various social media platforms using AI-generated content.
- Content Curation and Repurposing: Automatically discover, curate, and repurpose content from various sources for different platforms.

## How it works:

The workflow automates blog post creation and publishing using RSS feeds and AI. Here's a breakdown:
1.  **RSS Feed Trigger:** Triggers the workflow when a new item appears in an RSS feed (`RSS Feed Trigger`).
2.  **Get Video ID:** Extracts the Video ID from the RSS feed (EGet Video ID).
3.  **Get Details of Video from Youtube:** Retrieves details of Video from YouTube based on the Video ID (`Get Details of Video from Youtube`).
4.  **Edit Fields:** Edits data fields based on YouTube and RSS information (`Edit Fields`).
5.  **Get Post SiteMap:** Get Post SiteMap from a website
6.  **Conver to JSON:** Converts XML data to JSON format (`Conver to JSON`).
7.  **Extract URLs:** Extracts URLs from the JSON data (`Extract URLs`).
8.  **URL Lists:** Aggregates URLs from each entry (`URL Lists`).
9.  **Get all Posts for AI:** This node sets up the parameters and credentials for the AI-powered content generation process (`Get all Posts for AI`).
10. **Technical Blog Writer:** Uses an AI agent to write a technical blog post using Google Gemini (`Technical Blog Writer`). Tools like `affiliate_links`, `wp_category`, `wp_tag` and `lms` are available to the agent.
11. **BlogPost:** Set data for the blog post
12. **Get Image:** Retrieves an image from a specified URL (`Get Image`).
13. **rename image:** Rename the image name
14. **Upload Image:** Uploads the image to a specified service (`Upload Image`).
15. **Update Image Details:** Updates details of the uploaded image (`Update Image Details`).
16. **Publish Post WP:** Publishes the post to a WordPress site using the WordPress API (`Publish Post WP`).

## Services:

-   YouTube
-   Google Gemini
-   WordPress

## Hashtags:

#n8n #automation #AI #contentcreation #WordPress
