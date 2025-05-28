# Notion to Webflow Blog Post Sync

## Use cases:

- **Automated Blog Publishing:** Automatically publish blog posts from a Notion database to a Webflow CMS, saving time and effort in manual content migration.
- **Content Synchronization:** Keep your Webflow blog updated with the latest changes made in your Notion database, ensuring consistency across platforms.
- **Streamlined Content Creation:** Enable content creators to write and manage blog posts in Notion, while seamlessly publishing them to a live Webflow website without needing direct access to Webflow.

## How it works:

1.  **Trigger:** The workflow is triggered by a schedule.
2.  **Fetch Notion Posts:** Retrieves all blog posts from a specified Notion database.
3.  **Filter Sync-Enabled Posts:** Filters the posts to only include those marked for synchronization with Webflow (using a checkbox property).
4.  **Slug Uniqueness Check:** Checks for duplicate slugs in Notion posts and appends a number to ensure uniqueness.
5.  **Fetch Page Data:** For each post, fetch simple and all page data from Notion, and extract the cover image URL.
6.  **Fetch Webflow Posts:** Retrieves all existing blog posts from the specified Webflow collection.
7.  **Compare by Slug:** Compares Notion posts with Webflow posts based on the "slug" property. This determines if a post is new or needs to be updated.
8.  **Process Notion Blocks:** Retrieves all blocks from each Notion page, converts them into HTML, and then structures them into rich text format suitable for Webflow.
9.  **Create or Update Webflow Post:**
    *   **Create:** If the post is new (not found in Webflow), it creates a new blog post in Webflow, including the title, slug, rich text content, and cover image.
    *   **Update:** If the post exists in Webflow, it updates the corresponding blog post with the latest content from Notion.  The Webflow item ID is added to Notion to keep track of the items.
10. **Update Slug in Notion:** Updates the slug property in the Notion database.
11. **Success Message:** Sends a success message to a Slack channel upon completion.

## Services:

-   Notion API
-   Webflow API
-   Slack API

## Hashtags:

#n8n #automation #Notion #Webflow #CMS #Blog #ContentSync
