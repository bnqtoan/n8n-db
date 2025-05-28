# RSS Feed Aggregator and Merger

## Use cases:

- **Content Aggregation:** Collect and merge articles from multiple RSS feeds (e.g., from different blogs or news sources) into a single data set for analysis or further processing.
- **Content Monitoring:** Automatically monitor several RSS feeds, combine the data, and then filter it based on keywords or other criteria for targeted information gathering.
- **Newsletter Creation:** Gather content from various RSS feeds, format it, and then use it as the basis for creating a newsletter or content digest.

## How it works:

1.  **Manual Trigger:** The workflow starts when you manually click the "execute" button.
2.  **Define RSS Feed URLs (Function Node):** A Function node defines an array of RSS feed URLs (currently 'https://medium.com/feed/n8n-io' and 'https://dev.to/feed/n8n'). These URLs are the sources for content.
3.  **Split into Batches:** The `SplitInBatches` node splits the array of URLs into individual items. This ensures each URL is processed separately.
4.  **Read RSS Feed:** The `RSS Feed Read` node fetches the content from each RSS feed URL, using the URL provided in the input from the `SplitInBatches` node.
5.  **Check if all URLs are processed (IF Node):** The `IF` node checks if the SplitInBatches node has any URLs remaining. If all URLs are processed, it outputs to the `Merge Data` node, otherwise it outputs back to the `SplitInBatches` node to process the next URL.
6.  **Merge Data (Function Node):** The `Merge Data` node combines all of the data retrieved from the RSS feeds into a single array.

## Services:

-   **RSS Feeds:** The workflow interacts with any RSS feed, in this case, 'https://medium.com/feed/n8n-io' and 'https://dev.to/feed/n8n'.

## Hashtags:

#n8n #RSS #Automation #ContentAggregation #Workflow
