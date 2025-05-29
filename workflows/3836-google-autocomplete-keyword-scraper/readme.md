# Google Autocomplete Keyword Scraper

## Use cases

- **Keyword Research:** Discover long-tail keywords and variations related to a specific topic for SEO and content creation.
- **Market Trend Analysis:** Identify popular search queries in a specific niche to understand current trends and user interests.
- **Content Optimization:** Improve website content by incorporating relevant keywords that users are actively searching for.

## How it works

1.  **Get Keyword:** The workflow starts by receiving a keyword as input, which could come from a chat trigger.
2.  **Generate A-Z Queries:** The "Generate A-Z Queries" node appends each letter of the alphabet (a-z) to the initial keyword, creating 26 different search queries (e.g., "keyword a", "keyword b", ..., "keyword z").
3.  **Loop Over Items:** The "Loop Over Items" node processes the generated queries in batches of 10 to avoid overloading the Google Autocomplete API.
4.  **Google Autocomplete:** The "Google Autocomplete" node sends an HTTP request to the Google Autocomplete API for each query, retrieving the suggested search terms. It modifies the language parameter to English.
5.  **Code:** The first "Code" node parses the JSON response from the API and extracts the list of suggested keywords.
6.  **Wait 1s:** The "Wait 1s" node pauses the workflow for 1 second between requests to prevent rate limiting by the Google Autocomplete API.
7.  **Extract Keywords:** The "Extract Keywords" node merges the lists of keywords from each API response into a single list.
8.  **Return Keywords:** The "Return Keywords" node sends the combined list of keywords as a response to the initial webhook trigger.

## Services

-   Google Autocomplete API

## Hashtags

#n8n #automation #SEO #keywordresearch #googleautocomplete
