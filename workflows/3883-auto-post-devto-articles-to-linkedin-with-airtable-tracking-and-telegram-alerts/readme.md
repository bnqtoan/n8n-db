# Linkedin Automation

## Use cases:

- **Automated Content Sharing:**  Automatically share relevant articles from Dev.to on your LinkedIn profile to maintain a consistent presence and provide value to your network.
- **Cross-Platform Promotion:**  Expand the reach of Dev.to content by automatically posting articles to LinkedIn, driving more traffic to the original content.
- **Personal Branding:**  Establish yourself as a thought leader in specific tech areas by regularly sharing curated articles related to Android development, Kotlin, or other relevant topics.

## How it works:

This workflow is designed to automatically post articles from Dev.to to LinkedIn on a recurring schedule. Here's a breakdown:

1.  **Schedule Trigger:** The workflow starts with a "Morning 9 Clock" node, triggering the workflow twice a day at 9:00 AM and 7:00 PM based on the cron expression.
2.  **Get Random Tags:** A "get random tags" node generates a single random tag from a predefined list of development-related tags (e.g., Android, Kotlin).
3.  **Get List of records used:** Get the records of used articles from Airtable, so we dont have duplicated posts.
4.  **Map used articles ids:** Map the used articles ids to filter and get only unused articles.
5.  **Fetch Articles from URL:** The "fetch articles from Url" node uses the random tag to query the Dev.to API for articles.
6.  **Filter Only Unused IDs:** The "filter only unused Ids" node checks if the fetched article IDs already exist in Airtable in the "Used Articles" table to prevent reposting. It also filters by language, ensuring only English articles are selected.
7.  **Get Random Articles:** Get a ramdom article of the listed of the articles.
8.  **Download Image for Post:** The "download image for post" node retrieves the social media image associated with the chosen article from Dev.to.
9.  **Make LinkedIn Post:** The "make Linkedin post" node uses the article's title, description, and the downloaded image to create a post on your LinkedIn profile. It also includes relevant hashtags.
10. **Update the used node:** Update the Airtable table, to register the used article.
11. **Send the status:** Sends a Telegram message after the post is successfully created, which notifies you.

## Services:

-   **Airtable:** Used to store a list of already posted article IDs to prevent duplicates.
-   **Dev.to API:** Fetches articles based on specified tags.
-   **LinkedIn API:**  Posts content to your LinkedIn profile.
-   **Telegram API:** Sends success notifications via Telegram.

## Hashtags:

#n8n #automation #linkedin #devto #socialmedia
