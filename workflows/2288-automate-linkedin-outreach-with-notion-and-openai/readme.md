# Automate LinkedIn Posts with AI

## Use cases:

- **Scheduled Content Posting:** Automatically posts content to LinkedIn at a specific time each day, ensuring consistent engagement without manual effort.
- **AI-Enhanced Content Formatting:** Transforms raw text from a Notion database into more engaging and reader-friendly LinkedIn posts using AI-powered formatting.
- **Content Curation from Notion:** Streamlines the process of sharing content stored in a Notion database to LinkedIn, ideal for businesses or individuals who manage content in Notion.

## How it works:

1.  **Schedule Trigger:** The workflow starts with a `Schedule Trigger` that activates daily at 3 PM (15:00 hours).
2.  **Query Notion Database:** It queries a Notion database ("LinkedIn Posts example") to find entries with a "Date" property matching the current day using the `query entries from Notion table for today` node.
3.  **Fetch Content Blocks:**  The workflow then retrieves all content blocks from the Notion page identified in the previous step, using the `get all content from post page` node. This extracts the text and image URLs from the Notion page.
4.  **Aggregate Text and Image:** The `Pull together all text blocks + image` node aggregates all text content and the image URL.
5.  **Reformat Post Text with AI:** The `Reformat Post Text` node sends the combined text to an OpenAI assistant which takes the incoming blob of text, and soup it up into something more palpable for LinkedIn engagement.
6.  **Fetch Image:** The `Fetch image from post` node retrieves the image from the URL extracted from the Notion page.
7.  **Combine Text and Image:** The `Combine text+image` node merges the formatted text and the image fetched.
8.  **Post on LinkedIn:** The `Post on LinkedIn` node posts the combined text and image to LinkedIn.
9.  **Set Post Status in Notion:** Finally, the `Set post status to "Done"` node updates the "Status" property of the corresponding Notion page to "Done," indicating that the post has been published.

## Services:

-   Notion
-   OpenAI
-   LinkedIn

## Hashtags:

#n8n #automation #linkedin #notion #ai
