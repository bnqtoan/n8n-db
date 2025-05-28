# Baserow Releases RSS Feed Generator

## Use cases:

- **Create a custom RSS feed for Baserow releases:** Allows users to subscribe to a dedicated feed containing only release announcements from the Baserow blog, filtering out other types of content.
- **Integrate Baserow release updates into other systems:** Enables users to ingest the RSS feed into other applications or platforms for notifications, monitoring, or archival purposes.
- **Power a notification system:** Use the generated RSS feed as a source for a notification system that alerts users via email, Slack, or other channels when new Baserow releases are published.

## How it works:

1.  **Trigger:** The workflow is triggered manually or via a webhook.
2.  **Set Base URL:** Defines the base URL of the Baserow website (`https://baserow.io`).
3.  **Fetch Website:** Retrieves the HTML content of the Baserow releases blog category page.
4.  **Extract Posts:** Extracts the HTML content of each blog post from the fetched webpage.
5.  **Item Lists:** Splits the extracted blog posts into individual items for processing.
6.  **Extract Fields:** Extracts specific data fields (date, title, link, description) from each blog post's HTML.
7.  **Complete Link:** Constructs the full URL for each blog post by combining the base URL with the extracted relative link.
8.  **Format Date:** Formats the extracted date into `YYYY-MM-DD` format.
9.  **Create RSS Items:** Formats each extracted data into an RSS item XML fragment.
10. **Prepare Response:** Constructs the complete RSS feed XML content by combining the individual RSS items with the necessary XML header and channel information.
11. **Respond to Webhook:** Sends the generated RSS feed XML as a response to the webhook request.

## Services:

-   Baserow Blog
-   Any RSS Reader

## Hashtags:

#n8n #automation #RSS #Baserow #Webhook
