# Bookmark to Notion

## Use cases:

- Automatically save website URLs to a Notion database whenever a specific web page is accessed using a custom bookmarklet.
- Create a personal knowledge base by quickly saving interesting articles, resources, or tools found online directly to Notion.
- Archive research materials or references for projects by sending URLs from a bookmarklet to a dedicated Notion database.

## How it works:

1.  The workflow starts with a "Webhook" node, which listens for HTTP POST requests at a specific path (`/1c04b027-39d2-491a-a9c6-194289fe400c`). This webhook is triggered when a user activates a bookmarklet (a small piece of JavaScript code saved as a browser bookmark).
2.  When the webhook receives a POST request (presumably containing a URL in the body), the "Notion" node is triggered.
3.  The "Notion" node takes the URL from the request body (`$json.body.url`) and creates a new page in a specified Notion database ("Bookmarks" with ID `1420d3ae-bedc-4d23-a932-b402814db9d1`).  The URL is used as the title of the new page.  Make sure to add your n8n application to the Notion database.

## Services:

-   Notion

## Hashtags:

#n8n #automation #notion #bookmark #workflow
