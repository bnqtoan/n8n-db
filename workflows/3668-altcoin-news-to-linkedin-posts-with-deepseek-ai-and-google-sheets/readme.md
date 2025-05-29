# My Workflow

## Use cases:

- Automatically curate and schedule LinkedIn posts from RSS feeds, ensuring consistent content sharing.
- Refine and adapt RSS feed content using AI to create engaging posts tailored for a LinkedIn audience.
- Schedule posts to Google Sheet for future LinkedIn Posting.

## How it works:

1.  **Schedule Tweet:** The workflow starts with a trigger that defines the schedule for fetching RSS feeds.
2.  **Fetch RSS Feed:** Retrieves content from a specified RSS feed.
3.  **Filter Today & Script:** Filters the fetched RSS feed items, likely to only include today's articles based on the script used.
4.  **Store Raw Rss In A Sheet:** Stores the raw RSS data in a Google Sheet.
5.  **Turn the rss into Linkedin post:** Utilizes an AI agent to transform the RSS content into suitable LinkedIn posts. It connects to **DeepSeek Chat Model** for language processing and **Simple Memory** to maintain context.
6.  **Post From Gpt:** Stores the generated post from GPT Model in a Google Sheet.
7.  **Covert to normal text:** Converts the format to normal text.
8.  **Store Refine Text:** Stores the refine text in a Google Sheet.
9.  **Loop Over Items:** Split a Collection into smaller Batches.
10. **Post To LinkedIn:** Posts the curated content to LinkedIn.
11. **Romove post after posting:** Removes the posted item from a Google Sheet, likely to avoid duplicates.
12. **Wait For 3 Minute:** Waits for 3 minutes before next step.

## Services:

-   Google Sheets
-   LinkedIn
-   DeepSeek Chat Model

## Hashtags:

#n8n #automation #LinkedIn #RSS #ContentCuration
