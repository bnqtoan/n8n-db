# My Workflow

## Use cases

- **Content Aggregation and Curation:** Automatically collect tweets related to specific keywords (e.g., "strapi" or "n8n.io") and form submissions, analyze their sentiment, and store the positive ones in a Strapi CMS for further use or display.
- **Social Media Monitoring and Archiving:** Monitor Twitter for brand mentions or specific topics, filter out retweets and older tweets, analyze the sentiment, and archive positive tweets to a database.
- **Feedback Management:** Collect feedback from webhooks and tweets, analyze the sentiment of each feedback entry, and only store the entries that have positive feedback in Strapi.

## How it works

This workflow automates the process of collecting and analyzing data from Twitter and webhooks, filtering based on certain criteria, and storing the results in a Strapi CMS.

1.  **Triggers:** The workflow starts with two triggers:
    *   **Every 30 Minutes:** Triggers a search for tweets every 30 minutes.
    *   **Webhook:** Listens for form submissions via a webhook.
2.  **Data Collection:**
    *   **Search Tweets:** Searches Twitter for tweets containing "(strapi OR n8n.io) AND lang:en".
    *   **Simplify Webhook Result:** Extracts content, author, and creation date from the webhook data.
3.  **Data Simplification:**
    *   **Simplify Result:** Extracts relevant information (content, author, creation date, and URL) from each tweet and cleans the content by removing URLs.
4.  **Filtering:**
    *   **Is Retweet or Old?:** Checks if a tweet is a retweet or older than 30 minutes. If it is, the workflow stops processing that tweet.
5.  **Sentiment Analysis:**
    *   **Analyze Form Submission:** Analyzes the sentiment of the content from the form submission using Google Cloud Natural Language.
    *   **Analyze Tweet:** Analyzes the sentiment of the tweet content using Google Cloud Natural Language.
6.  **Merging:**
    *   **Merge Form Sentiment with Source:** Merges the sentiment analysis results with the original form data.
    *   **Merge Tweet Sentiment with Source:** Merges the sentiment analysis results with the original tweet data.
7.  **Sentiment-Based Filtering:**
    *   **Positive Form Sentiment?:** Checks if the sentiment score of the form submission is greater than 0.4.
    *   **Positive Tweet Sentiment?:** Checks if the sentiment score of the tweet is greater than 0.3.
8.  **Data Storage:**
    *   **Store Form Submission in Strapi:** Stores form submissions with positive sentiment into a Strapi CMS.
    *   **Store in Strapi:** Stores tweets with positive sentiment into a Strapi CMS.

## Services

-   Twitter API
-   Google Cloud Natural Language API
-   Strapi CMS

## Hashtags

#n8n #automation #twitter #strapi #sentimentanalysis
