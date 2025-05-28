# n8n Community Topic Tracker by Keyword

## Use cases:

- **Track discussions about specific n8n features or integrations:**  Monitor the n8n community forum for new posts related to a particular topic (e.g., "Webhooks," "Database integrations").
- **Stay updated on bug reports or feature requests:**  Receive notifications when new topics are created that mention specific keywords related to potential issues or desired enhancements.
- **Gather insights on user sentiment:** Collect and analyze forum discussions to understand user feedback and identify areas for improvement in n8n.

## How it works:

1.  **Schedule Trigger:** The workflow starts with a Schedule Trigger, which runs the workflow at specified intervals (e.g., hourly).
2.  **Get latest topics:**  The "Get latest topics" node performs an HTTP request to the n8n community forum's search endpoint, using a specified keyword to filter results.
3.  **Get topics:** The "Get topics" node split the topic array from the json data.
4.  **Google Sheets:** The "Google Sheets" node updates or appends rows in a Google Sheet with information about each new topic. It extracts the topic ID, URL, creation date, title, and "has solution" status.
5.  **Google Sheets Trigger (Optional):** This part of the workflow triggers when changes are made to the Google Sheet.
6.  **Slack (Optional):**  The "Slack" node sends a message to a specified Slack channel, notifying users that new topics are available in the n8n community.
7.  **Send Email (Optional):** The "Send Email" node sends an email notification when there is an update on the google sheet

## Services:

-   n8n Community Forum API
-   Google Sheets
-   Slack (Optional)
-   SMTP (Optional)

## Hashtags:

#n8n #automation #community #forum #tracking
