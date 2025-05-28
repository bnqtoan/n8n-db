# Twitter Notifications

This workflow automates the process of monitoring Twitter for specific keywords and sending notifications to a Mattermost channel when new tweets matching the criteria are found.

## Use cases:

*   **Brand Monitoring:** Track mentions of your brand or product on Twitter and receive immediate notifications about new tweets.
*   **Keyword Monitoring:** Follow specific topics, hashtags, or events on Twitter and get notified when relevant tweets are posted.
*   **Competitor Analysis:** Monitor your competitors' Twitter activity and get alerted to their latest updates, announcements, or promotions.

## How it works:

1.  **Cron Trigger:** The workflow starts with a `Cron` node that triggers the workflow every minute.
2.  **Twitter Search:** The `Twitter` node searches Twitter for tweets containing the keyword "n8n\_io".  It is configured to only return recent tweets.
3.  **Set Node:** The `Set` node extracts specific data points from the tweets. These include the tweet ID, URL, tweet text, username, profile photo URL, display name and profile link color. This data is then formatted for use in later nodes.
4.  **Function Node:** This `Function` node filters the tweets, only passing new tweets that haven't been processed before, preventing duplicate notifications. It uses static data to store the processed tweet IDs across workflow executions.
5.  **Mattermost Notification:** The `Mattermost` node sends a message to a specified Mattermost channel. The message includes the URL of the tweet, the tweet text, and formatted author information, including the author's profile photo and a link to their Twitter profile.

## Services:

*   Twitter API
*   Mattermost API

## Hashtags:

#n8n #Twitter #Mattermost #Automation #Notifications
