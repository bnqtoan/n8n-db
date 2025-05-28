## n8n Workflow: RSS Feed to Mastodon Poster

### Use cases:

*   **Automated Content Sharing:** Automatically posts new articles from a specific RSS feed to your Mastodon account.
*   **Content Curation:**  Shares interesting articles from RSS feeds with your Mastodon followers without manual effort.
*   **Personal News Aggregator:**  Turns your Mastodon account into a personalized news feed based on your chosen RSS sources.

### How it works:

This workflow automates the process of retrieving and posting content from an RSS feed to Mastodon. Here's a step-by-step breakdown:

1.  **Cron Trigger:** The `Cron` node is configured to run every 10 minutes. This initiates the workflow at the defined interval.
2.  **RSS Feed Retrieval:** The `RSS Feed Read` node fetches the content from the specified RSS feed URL.  This retrieves the latest articles with titles, links, and other metadata.
3.  **Filter new Items:** The `Function` Node filters the new items, save the last `id` and only returns the new Items.
4.  **Conditional Check:** The `IF` node checks if the `id` from the `Function` node is different from `NaN`.
5.  **Mastodon Post:** If the article meets the criteria (is new), the `HTTP Request` node sends a POST request to the Mastodon API to create a new status. The request includes the article title and link as the status content.
6. **No Operation:** If the article is not new the workflow stops with the `NoOp` Node.

### Services:

*   **Mastodon API:** Used for posting status updates.
*   **RSS Feed:** Receives content from any public RSS feed.

### Hashtags:

#n8n #automation #RSS #Mastodon #socialmedia
