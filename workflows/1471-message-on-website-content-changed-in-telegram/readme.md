# My Workflow

## Use cases:

- **Website Change Monitoring:** This workflow can be used to monitor a website (like Hacker News in this example) for changes every 5 minutes and receive a Telegram notification when a modification is detected.
- **Competitor Website Tracking:** By pointing the HTTP Request nodes to a competitor's website, you can track updates to their content and react accordingly.
- **Price Change Alerts:** For e-commerce sites, this workflow can monitor product pages and alert you to price changes.

## How it works:

1.  **Cron Trigger:** The workflow starts with a Cron node that triggers the workflow every 5 minutes.
2.  **HTTP Request (Initial):** An HTTP Request node fetches the content from `https://news.ycombinator.com/`.
3.  **Wait:** A Wait node pauses the workflow for 5 minutes to allow the website content to potentially change.
4.  **HTTP Request (Secondary):** Another HTTP Request node fetches the same content from `https://news.ycombinator.com/`.
5.  **IF Condition:** An IF node compares the content fetched by the first HTTP Request node with the content fetched by the second HTTP Request node. The comparison logic appears flawed: `"={{$node[\"HTTP Request\"].json[\"data\"]}} {{$node[\"HTTP Request\"].json[\"data\"]}}"` this compares the content to itself, and due to the `=` in `value2` and the way n8n works, the condition may always return false. *It requires clarification of intended logic.* If the content changed, the workflow proceeds to the "Telegram1" node; otherwise, it proceeds to the "NoOp" node.
6.  **Telegram Notification:** If the IF condition evaluates to true (content changed), a Telegram notification is sent to the specified chat ID ("1234") with the message "Something got changed".
7.  **NoOp:** If the IF condition evaluates to false (content didn't change), the workflow ends at the NoOp node, doing nothing.

## Services:

-   Hacker News Website (`https://news.ycombinator.com/`)
-   Telegram API

## Hashtags:

#n8n #automation #websiteMonitoring #changeDetection #telegramBot
