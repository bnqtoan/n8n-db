# TwitterWorkflow

## Use cases:

*   **Social Media Monitoring:** Automatically post new tweets mentioning a specific Twitter account to a RocketChat channel, ensuring that relevant social media interactions are promptly reviewed and addressed.
*   **Brand Awareness:** Track mentions of a company's Twitter handle and share them with internal teams for real-time feedback and engagement.
*   **Customer Support:** Forward tweets mentioning a company's support handle to a dedicated RocketChat channel for efficient handling of customer inquiries and issues.

## How it works:

1.  **Trigger:** The workflow is initiated by a Cron node, which triggers the workflow every minute.
2.  **Fetch Tweets:** The Twitter node searches for recent tweets mentioning "@n8n\_io".
3.  **Extract Data:** The "Filter Tweet Data" node extracts the tweet text, ID, and URL from the fetched tweets.
4.  **Filter New Tweets:** The "Only get new tweets" Function node filters only the tweets that it hasn't processed before. This is achieved by storing already processed tweet IDs in the global workflow static data.
5.  **Send to RocketChat:** The RocketChat node sends a message to the "general" channel, including the tweet's text and URL.

## Services:

*   Twitter
*   RocketChat

## Hashtags:

#n8n #Twitter #RocketChat #Automation #SocialMediaMonitoring
