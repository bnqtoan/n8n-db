# n8n Workflow: Trending Show HN Email

## Use cases:

*   **Daily Digest of Show HN:** Automatically receive a daily email summarizing the top "Show HN" (Show Hacker News) submissions trending on Hacker News.
*   **Monitoring New Projects:** Get notified about interesting new projects or initiatives shared on Hacker News through "Show HN" posts.
*   **Content Curation:** Curate interesting projects and ideas from Hacker News for inspiration or research purposes.

## How it works:

This workflow automates the process of extracting trending "Show HN" posts from Hacker News and sending them to you via email.

1.  **Cron:** The workflow starts on a schedule using the `Cron` node, triggering at 1 PM.
2.  **HTTP Request:** The `HTTP Request` node fetches the HTML content of the Hacker News homepage.
3.  **HTML Extract Items:** The `HTML Extract Items` node parses the HTML and extracts all `tr.athing` HTML elements, which represent individual news items.
4.  **HTML Extract Data:** The `HTML Extract Data` node further parses each news item HTML to extract the title, URL, and rank.
5.  **IF:** The `IF` node filters the extracted data to only include items whose titles contain "Show HN:".
6.  **Function:** The `Function` node formats the extracted data into a human-readable email body, including the rank, title, and URL of each trending "Show HN" post.
7.  **Send Email:** The `Send Email` node sends an email with the formatted content as the body, with the subject line "Trending Show HN."

## Services:

*   Hacker News (via HTTP Request)
*   Email (via SMTP - configured within the Send Email node)

## Hashtags:

#n8n #automation #webscraping #email #hackernews
