# Scrape Twitter for Mentions of Company

## Use cases:

- **Brand Monitoring:** Automatically monitor Twitter for mentions of your company or brand name, allowing you to quickly respond to customer inquiries, feedback, or potential PR issues.
- **Competitive Analysis:** Track mentions of competitor brands to understand market trends and customer sentiment around competing products or services.
- **Social Listening:** Capture and analyze relevant conversations on Twitter to identify trending topics, gauge public opinion, and inform marketing strategies.

## How it works:

This workflow automatically scrapes Twitter for mentions of a specified company and posts them to a designated Slack channel.

1.  **Run Every 10 Minutes:** The workflow starts with a Cron node that triggers the workflow every 10 minutes.
2.  **Setup:** A Set node defines the Twitter search term (e.g., "@n8n\_io") and the Slack channel where notifications will be sent.
3.  **Now - 10 minutes:** A Date Time node calculates the time 10 minutes ago. This is used to filter out tweets that have already been processed in previous runs.
4.  **Get last 50 mentions:** A Twitter node searches for the specified term on Twitter and retrieves the last 50 mentions.
5.  **Created since last run?:** An If node filters the tweets to only include those that were created since the last run.
6.  **Filter Tweet Data:** A Set node extracts the text of the tweet and creates a URL to it.
7.  **Post to Slack:** A Slack node posts a message to the specified Slack channel, including the text of the tweet and a link to view it on Twitter.

## Services:

-   Twitter API
-   Slack API

## Hashtags:

#n8n #automation #twitter #slack #socialmedia
