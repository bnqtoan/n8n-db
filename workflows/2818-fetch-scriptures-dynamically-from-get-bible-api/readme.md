# GetBible Query v1.0

## Use cases:

*   **Dynamic Scripture Retrieval:** Automatically fetch Bible verses in specific translations based on references provided in a structured JSON format, suitable for applications like Bible study tools or religious content platforms.
*   **Content Enrichment:** Enhance existing content (e.g., blog posts, articles) by programmatically adding relevant scripture passages based on keywords or themes.
*   **API Integration:** Serve as a microservice to provide scripture retrieval capabilities to other applications or systems that need to access Bible verses.

## How it works:

1.  **Entry:** The workflow starts with a JSON payload containing an array of scripture references (e.g., "John 3:16"), the desired translation (e.g., "kjv"), and the API version ("v2").  A JSON example is used as the input source.
2.  **ModelJson:** This node takes the array of references and joins them into a single string separated by semicolons (;). This is done to properly format the references for the API query. If the references is missing or not an array, it defaults to John 3:16.
3.  **API Query to GetBible:** This node constructs a URL using the provided version, translation, and formatted references. It then makes an HTTP request to the `query.getbible.net` API to retrieve the scriptures.
4.  **Map API Response to Result:**  The API response (which contains the scripture verses) is mapped to the `result` field. The entire JSON response from the API is stored in the 'result' field for easy access.

## Services:

*   [GetBible API](https://getbible.net/docs)

## Hashtags:

#n8n #automation #BibleAPI #scripture #workflow
