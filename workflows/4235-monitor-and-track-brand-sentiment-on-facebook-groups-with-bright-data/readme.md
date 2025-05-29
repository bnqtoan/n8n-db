# Social Media Sentiment Analysis Pipeline

## Use Cases:

- **Brand Monitoring:** Track brand mentions across Facebook groups to understand customer sentiment and identify potential issues or positive feedback.
- **Competitor Analysis:** Monitor competitor mentions in relevant groups to gauge market perception and identify competitive advantages or disadvantages.
- **Product Feedback Collection:** Gather user feedback and sentiment regarding specific products or features discussed within targeted Facebook groups.

## How it works:

The workflow automates the process of extracting and analyzing sentiment from Facebook group posts related to a specific brand. Here's a breakdown:

1.  **Schedule & Setup:** The workflow starts with a `Schedule Trigger` that defines when the workflow should run. It begins by retrieving API keys and configurations, including the Bright Data API key and a webhook URL, and the brand names we want to monitor from a Google Sheets document (`Set up KEYS`, `Get Brand names`, `Aggregate brand names`).
2.  **Get Facebook Group Links:** It retrieves a list of Facebook group URLs from a Google Sheets document (`Get links`, `Aggregate group links`).
3.  **Scrape Facebook Group Posts:** The workflow uses the Bright Data API (`facebook groups`) to scrape posts from the specified Facebook groups. It configures parameters like the dataset ID, endpoint, and data format.
4.  **Monitor Scraping Progress:** The workflow checks the progress of the scraping job using the Bright Data API (`get progress`). It uses a `Switch` node to determine if the job is `running` or `ready`.
5.  **Wait if Running:** If the scraping job is still running, the workflow waits for a specified time (`Wait`) before checking the progress again.
6.  **Retrieve and Filter Data:** Once the scraping job is complete, the workflow retrieves the scraped data (`Get data`). It then filters the posts to identify those that mention the brand name (`Limit`, `Filter brand name`). The scraping result URLs are stored back in the Google sheet to know what was scraped (`set urls`, `Split Out`, `update last Scrap`).
7.  **Sentiment Analysis:** The workflow performs sentiment analysis on the filtered posts using the Langchain Sentiment Analysis node (`Sentiment Analysis`), categorizing the sentiment as positive, negative, or neutral.
8.  **Information Extraction:** Extracts key information from the post, such as a summary, sentiment and the category it fits to (`Information Extractor`).
9.  **Merge sentiment Analysis & Information Extraction:** Combines sentiment analysis and the information extracted from the posts (`Merge`).
10. **Prepare to send to Google Sheets:** Uses the `pull group results` to access the information from the filter with the brand name included. Then prepares the information extracted, sentiments and the original post information into a single node (`insights and sentiments`).
11. **Store all posts:** Uses a webhook to receive the scraped posts and adds the data to Google Sheets (`Receive results`, `Split Out1`, `Get Brand names1`).
12. **Update Google Sheets:** Finally, the workflow updates a Google Sheets document (`Update sentiments`) with the post details, sentiment analysis results, and extracted information.

## Services:

-   **Bright Data:** Used for scraping Facebook group posts.
-   **Google Sheets:** Used for storing Facebook group URLs, API keys, brand names and for storing the final results (sentiments, insights)
-   **OpenRouter:** Used for text generation and information extraction (Summarize the post, extract the sentiment and the possible category of the post).
-   **Langchain:** Used for sentiment analysis

## Hashtags:

#n8n #automation #socialmedia #sentimentanalysis #brandmonitoring
