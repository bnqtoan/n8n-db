# Linkedin Automation

## Use cases:

- Automatically share articles related to specific topics on LinkedIn to increase visibility and engagement.
- Schedule regular posts on LinkedIn without manual intervention, ensuring a consistent online presence.
- Cross-promote content from Medium to LinkedIn to reach a wider audience and drive traffic.

## How it works:

1.  **Schedule Trigger:** The workflow starts with a "Morning 9 Clock" trigger, which activates the workflow at 9:00 AM and 7:00 PM.
2.  **Get Random Tags:** A "get random tags" Code node selects a random tag from a predefined list (e.g., "android", "kotlin")
3.  **Fetch Used Articles from Airtable:** Retrieves a list of previously posted article IDs from an Airtable base named "Linkdin" in the "Used Articles" table.
4.  **Map Used Article IDs:** Transforms the Airtable data to extract the "value" field, creating an array of used article IDs.
5.  **Fetch Article IDs from Medium:** Uses an HTTP Request node to call the Medium API (via RapidAPI) to search for articles based on the randomly selected tag.
6.  **Filter Unused IDs:** Filters the article IDs fetched from Medium, keeping only those that are not already present in the Airtable "Used Articles" list.
7.  **Fetch Medium Post Using Article ID:** Retrieves the content of a Medium article using its ID via another HTTP Request node to the Medium API (via RapidAPI).
8.  **Check for Image:** Checks if the article has an image url.
9.  **Fetch Medium Post Content:** Retrieves the content of a Medium article using its ID via another HTTP Request node to the Medium API (via RapidAPI).
10. **Download Image for Post:** Downloads the featured image from the Medium article.
11. **Make Linkedin Post:** Creates a post on LinkedIn with the article's title, a snippet of the content, and a link to the full article. It uses predefined hashtags.
12. **Update Airtable:** Adds the ID of the posted article to the Airtable "Used Articles" table to prevent reposting.
13. **Send Telegram Notification:** Sends a Telegram message to a specified chat ID, confirming the successful posting and including the article title and Airtable record ID.

## Services:

-   **Airtable:** Stores and retrieves the list of used article IDs.
-   **Medium API (via RapidAPI):** Fetches article IDs and content from Medium.
-   **LinkedIn:** Posts the article to a LinkedIn profile or company page.
-   **Telegram:** Sends a notification upon successful posting.

## Hashtags:

#n8n #LinkedInAutomation #ContentMarketing #Medium #Telegram
