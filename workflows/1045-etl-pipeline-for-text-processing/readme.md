# ETL Pipeline

## Use cases:

-   **Real-time Sentiment Analysis of Trending Topics:** This workflow can be used to monitor Twitter for specific hashtags (e.g., #OnThisDay) and analyze the sentiment of the tweets in real-time. This is useful for brand monitoring, tracking public opinion, or identifying emerging issues.
-   **Data Warehousing and Reporting:** The workflow can extract tweets, analyze their sentiment, and store the data in a PostgreSQL database. This allows for historical analysis, reporting, and data visualization of tweet sentiment over time.
-   **Automated Slack Notifications for Positive Sentiment:** The workflow can send notifications to a Slack channel when a tweet with a positive sentiment (score above a certain threshold) is detected. This can be used to highlight positive feedback, celebrate successful campaigns, or quickly respond to positive mentions.

## How it works:

1.  **Trigger:** The workflow starts with a Cron node that triggers the workflow daily at 6 AM.
2.  **Twitter Extraction:** The Twitter node searches for tweets containing the hashtag "#OnThisDay" and extracts the specified number of most recent tweets (limit=3).
3.  **MongoDB Storage:** The extracted tweet text is then stored in a MongoDB collection called "tweets."
4.  **Sentiment Analysis:** The Google Cloud Natural Language node analyzes the sentiment of the tweet text retrieved from MongoDB, determining both a score and a magnitude.
5.  **Data Transformation (Set):** The Set node transforms the data by assigning the sentiment score and magnitude from the Google Cloud Natural Language node, along with the tweet text from the Twitter node, to new properties.
6.  **PostgreSQL Storage:** The transformed data (tweet text, sentiment score, and magnitude) is stored in a PostgreSQL database table named "tweets."
7.  **Conditional Check (IF):** The IF node checks if the sentiment score of the tweet is larger than a predefined value (default 0).
8.  **Slack Notification:** If the sentiment score is above the threshold, a Slack notification is sent to the "tweets" channel containing the tweet text, sentiment score, and magnitude. The NoOp node does nothing if the score isn't higher.

## Services:

-   Twitter API
-   MongoDB
-   Google Cloud Natural Language API
-   PostgreSQL
-   Slack API

## Hashtags:

#n8n #automation #ETL #sentimentanalysis #twitter
