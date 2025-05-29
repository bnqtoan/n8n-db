# AI-Powered Blog Post Automation Workflow

## Use cases:

- **Content Curation and Repurposing:** Automatically curates articles from multiple RSS feeds, generates SEO keywords, creates blog posts, and publishes them on various platforms, saving time and effort in content creation.
- **Automated Content Pipeline:** Creates an automated content pipeline for generating blog posts from RSS feeds, handling content extraction, AI-driven content generation, approval workflows, and multi-platform publishing.
- **Efficient Content Publishing Across Platforms:** streamlines the process of fetching content from RSS feeds, generating blog posts with AI assistance, and publishing them across platforms like WordPress and LinkedIn.

## How it works:

1.  **Schedule Trigger:** The workflow starts with a daily trigger at 7 AM, initiating the content aggregation and blog post creation process.
2.  **Fetch RSS Feeds:** Fetches articles from two RSS feeds (TheVerge and TechCrunch) using the "RSS Feed Read" nodes.
3.  **Merge RSS Feeds:** Combines the articles from both RSS feeds into a single stream using a "Merge" node.
4.  **Date Filter:** Filters the merged articles to only include those published in the last 24 hours using an "If" node.
5.  **Limit Articles:** Limits the number of articles to 5 to prevent overwhelming the workflow using a "Limit" node.
6.  **Extract Content:** Extracts the title, description, link, and publication date from each RSS item using a "Function" node.
7.  **Fetch Full Article:** Fetches the full article content from the extracted URL using an "HTTP Request" node.
8.  **Extract Article Body:** Extracts the main content of the article using a CSS selector defined in the "HTML Extract" node.
9.  **Convert to Markdown:** Converts the extracted HTML content to Markdown format for AI processing using a "Function" node.
10. **Generate SEO Keywords:** Uses the Langchain OpenAi node to generate SEO keywords based on the article content.
11. **Generate Blog Post:** Utilizes Langchain Agent node and "OpenAI Chat Model" node to automatically generate a blog post based on the extracted article content and SEO keywords.
12. **Set Blog Creation Date:** Sets the blog creation date using a "Code" node.
13. **Set Fields:** Sets various fields for the blog post, such as title, content, and author, using a "Set" node.
14. **Format Fields for Storage:** Formats the fields for storage using a "Code" node.
15. **Add Featured Image:** Adds a featured image to the blog post using a "Code" node.
16. **Store Blog Posts Initial:** Stores the generated blog post data in a Google Sheet using the "Google Sheets" node.
17. **Prepare Fields for Notification:** Prepares fields for notification using a "Set" node.
18. **Notify for Review:** Sends an email notification to a reviewer using the "Gmail" node, prompting them to review the generated blog post.
19. **Approval Webhook:** Receives approval or rejection via a webhook using the "Webhook" node.
20. **Fetch Row:** Fetches the row from the Google Sheets using Google Sheets Trigger node when the Google sheet row is updated
21. **Check Status:** Checks the approval status of the blog post using a "Switch" node.
22. **Check if Already Published:** Checks if the current blog post has already been published using "If" node.
23. **Apply Blog Template:** Applies a blog template to the generated content using a "Code" node.
24. **Store Blog Posts Final:** Updates the generated blog post in a Google Sheet using the "Google Sheets" node.
25. **Loop Over Blog Posts:** Loops over the published blog post using "Split In Batches" node.
26. **Delay Between Posts:** Waits for a specified time between publishing posts using a "Wait" node.
27. **Post to WordPress:** Publishes the blog post to a WordPress site using the "WordPress" node.
28. **Post to LinkedIn:** Publishes the blog post to LinkedIn using the "LinkedIn" node.
29. **Update Publish Status:** Updates the publish status in a Google Sheet using "Google Sheets" node.
30. **NNotify Telegram on Completion:** Sends a Telegram notification to inform about the completion of workflow.
31. **Notify Rejection:** Sends an email notification of blog post rejection using the "Gmail" node.
32. **Wait for Status Update:** Waits for the status update in Google Sheets using "Wait" node.

## Services:

-   RSS Feeds (e.g., TheVerge, TechCrunch)
-   OpenAI API (via Langchain)
-   Google Sheets
-   Gmail
-   WordPress
-   LinkedIn
-   Telegram

## Hashtags:

#n8n #automation #blogging #contentcreation #AI
