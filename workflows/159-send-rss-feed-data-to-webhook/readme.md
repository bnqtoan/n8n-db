# n8n Workflow: RSS Feed to MongoDB with Webhook Notifications

## Use cases:

- **Content Aggregation and Filtering:** Automatically collect articles from an RSS feed, filter based on keywords (e.g., "realtors," "real estate," or "restaurants"), and store them in a MongoDB database.
- **Real-time Notifications for Specific Topics:** Get notified via webhook whenever a new article matching your criteria (e.g., mentions of restaurants) is added to the RSS feed.
- **Content Archival and Search:** Create a searchable archive of articles from specific RSS feeds, categorized by keywords.

## How it works:

1. **Trigger:** The workflow starts either manually via the "On clicking 'execute'" node or automatically every hour using the "Cron" node.
2. **Fetch RSS Feed:** The "RSS Feed Read" node retrieves articles from the specified RSS feed URL (`https://www.feedforall.com/sample.xml`).
3. **Keyword Filtering:**
    - The "IF realtors or real estate" node checks if the article title contains "realtors" or "real estate" (case-insensitive).
    - The "IF restaurant(s)" node checks if the article title contains "restaurant(s)" (case-insensitive).  The branches split here, processing articles about real estate and restaurants differently.
4. **Batch Processing:** The "SplitInBatches" and "SplitInBatches1" nodes process the filtered articles one by one.
5. **Check if Article Exists in MongoDB:**
    - "MongoDB: Find Article" and "MongoDB: Find Article1" nodes query the "articles" collection in your MongoDB database to see if an article with the same link already exists.
6. **Conditional Logic (Duplicate Handling):**
   - The workflow checks if there are any items left in SplitInBatches node using "IF1" and "IF" nodes. If there are no items left, then the workflow stops.
7. **Insert New Article into MongoDB:**
    - The "Merge" and "Merge1" combines the results of the "MongoDB: Find Article" and "MongoDB: Find Article1" to be used in the "MongoDB: Insert" and "MongoDB: Insert1" nodes. If the article does not exist (the find operation returns nothing), the "MongoDB: Insert" and "MongoDB: Insert1" nodes inserts a new document into the "articles" collection, including the title and link.
8. **Webhook Notification:** The "Webhook" and "Webhook1" nodes send a POST request to the specified webhook URL (`http://webhook.site/fe77b392-7b8a-4801-aeca-4531c14da5fd`) with the article link in the request body.

## Services:

- **MongoDB:** A NoSQL database used to store the articles.
- **Webhook:** An HTTP endpoint (e.g., a service like [https://webhook.site/](https://webhook.site/)) where notifications are sent.

## Hashtags:

#n8n #automation #RSS #MongoDB #Webhook #ContentAggregation
