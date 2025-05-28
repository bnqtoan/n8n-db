# Extract And Decode Google News RSS URLs to Clean Article Links

## Use cases:

- **News Aggregation:** Automatically extract and clean article links from Google News RSS feeds for building a custom news aggregator.
- **Content Analysis:** Fetch clean article URLs for further analysis, such as sentiment analysis, topic extraction, or keyword monitoring.
- **Newsletter Creation:** Compile a list of clean, direct article links from Google News to include in newsletters or summaries.

## How it works:

This workflow automates the process of extracting clean article URLs from Google News RSS feeds. Here's a breakdown:

1.  **Trigger:** The workflow is manually triggered using the "When clicking ‘Test workflow’" node.
2.  **Fetch RSS Feed:** The "Reading Google News RSS" node fetches data from a Google News RSS feed based on the specified language and region (Italian in this case, see the Sticky note for more info).
3.  **Limit Results:** The "Limit" node restricts the number of processed articles (default is 5) to avoid excessive requests and potential blocking by Google.
4.  **Get Encoded News URL:** For each article, the "Get encoded news URL" node extracts the original encoded URL from the RSS feed.
5.  **Extract Decoding Keys:** The "Extract decoding keys" node retrieves decoding keys (signature and timestamp) from the HTML content of the encoded URL using CSS selectors and attribute extraction.
6.  **Map needed keys:** The "Map needed keys" node maps the data for future use
7.  **Prepare Decoding Variables:** The "Prepare decoding variables" node uses a JavaScript code to builds the request body with the f_req parameter needed to decode the URL.
8.  **Call Decoding URL:** The "Call decoding URL" node sends a POST request to Google's decoding endpoint with the prepared data.
9.  **Decoded URL:** The "Decoded url" node extracts the clean article URL from the response. It parses a specific part of a JSON string within the response to get the final, decoded URL.
10. **Aggregate results in a single object:** The "Aggregate results in a single object" aggregates all results to make them available for further processing.

## Services:

-   Google News RSS
-   Google's Decoding URL ([https://news.google.com/\_/DotsSplashUi/data/batchexecute](https://news.google.com/_/DotsSplashUi/data/batchexecute))

## Hashtags:

#n8n #automation #googlenews #rss #scraping
