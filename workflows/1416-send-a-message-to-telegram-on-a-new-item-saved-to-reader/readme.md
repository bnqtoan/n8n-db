# Readwise to Telegram

## Use cases:

*   **Automatic Daily Digest:** Sends a daily summary of new articles saved to Readwise to a Telegram channel.
*   **Real-time Article Sharing:** Shares interesting articles saved in Readwise immediately to a Telegram group for discussion.
*   **Personal Knowledge Management:** Uses Telegram as a personal archive for Readwise highlights and notes.

## How it works:

1.  **Trigger:** The workflow is triggered either manually by clicking "execute" or automatically by a Cron node every 10 minutes.
2.  **Read Last Synced Time:** Reads the timestamp of the last synchronization from a JSON file (`/whatever/readwiseLastSynced.json`). This file stores when the workflow last fetched data from Readwise.
3.  **Fetch New Articles:** Uses an HTTP Request node to retrieve new articles from the Readwise API. It filters articles updated since the last sync time using the `updated_at` parameter. The Readwise API key is stored in an n8n credential named "Header Auth account".
4.  **Process Articles:** Filters the articles from Readwise and creates an array of objects, extracting the URL, title, author, summary and saved date.
5.  **Send to Telegram:** Iterates through each article and sends a formatted message containing the title, author, summary, and URL to a specified Telegram chat. The Telegram bot API key is stored in an n8n credential named "my bot", and the chat ID is configured in the "Config" node
6.  **Update Last Synced Time:** Updates the "last_synced" timestamp to the current time and saves it back to the JSON file. This ensures that the next run only fetches articles updated after this run.

## Services:

*   **Readwise:** Fetches saved articles and highlights from the Readwise API.
*   **Telegram:** Sends formatted messages to a Telegram chat or channel.

## Hashtags:

#n8n #automation #readwise #telegram #knowledgeManagement
