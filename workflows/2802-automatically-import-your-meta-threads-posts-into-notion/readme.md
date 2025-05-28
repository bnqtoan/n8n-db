# Get Threads Post Automatically

## Use cases:

1.  **Automatic Archiving of Threads Posts:**  Automatically save your Threads posts, including text and media, to a Notion database for personal archiving or content repurposing.
2.  **Monitoring Specific Usernames' Threads Activity:**  Filter and save specific comments of Thread posts from certain usernames to track opinions, gather feedback, or moderate content.
3.  **Content Backup and Analysis:** Create a backup of your Threads content in Notion. This enables better content organization, searching, and potentially analyzing posting patterns.

## How it works:

1.  **Schedule Trigger:** The workflow starts with a schedule trigger to run at specified intervals.
2.  **Refresh Token:** It refreshes the Threads API access token using a long-lived token.  You'll need to obtain this token via the provided tutorial link.
3.  **Get Post:** Retrieves Threads posts using the Threads API for a specified period (default is posts from the last day).  It uses your Threads ID and the refreshed access token.
4.  **Get Post ID:** Filters the retrieved posts, extracting the ID, permalink, and timestamp of each post of media type TEXT_POST, IMAGE, VIDEO, CAROUSEL_ALBUM, or AUDIO and is not a quote post.
5.  **Loop Over Items:** Iterates over each extracted post ID.
6.  **Threads / Root & Threads / Comments:** For each post ID, it retrieves the root post details and comments from the Threads API.
7.  **Root's Filter & Comment's Filter:** The code filters extract relevant information from root post and comments. The comment filter allows extraction of media URLs and text from specific usernames.
8.  **Merge:** Combines the root post and filtered comments data.
9.  **Threads Post:** Code node formats the post data, combining text and media URLs into a structured `blocks` array, suitable for Notion's block-based content structure.
10. **Threads ID:** Retrieves existing Threads IDs from a specified Notion database to prevent duplicates.
11. **Extract IDs:** Extracts the Threads IDs from the Notion database items.
12. **Compare IDs:** Compares the ID of the current post with the existing IDs in Notion.
13. **If Post Exist:**  A switch node checks if the post already exists in Notion.
    *   **Create Page:** If the post doesn't exist, it creates a new page in the specified Notion database, populating it with the post's permalink, ID, date, source (Threads), and username.
    *   **Upload Medias:**  Uploads media files associated with the post to the Notion page by adding the formatted blocks.
14. **Replace Me:** This NoOp node appears to be a placeholder for future updates or actions when a post already exist in Notion.

## Services:

*   Threads API
*   Notion API

## Hashtags:

#n8n #automation #Threads #Notion #socialmedia
