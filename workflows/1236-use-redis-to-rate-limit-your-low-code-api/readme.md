# API Rate Limiter with Airtable Integration

## Use cases:

-   **API Usage Control:** Limit the number of requests an API key can make per hour and minute to prevent abuse and ensure fair usage.
-   **Data Enrichment with Usage Data:** Track API usage and enrich data returned from Airtable based on the API consumption.
-   **Dynamic Rate Limiting:** Adjust rate limits based on real-time usage patterns and data stored in Airtable.

## How it works:

1.  **Webhook Trigger (Webhook1):** The workflow starts when a webhook receives a request containing an API key in the header (`x-api-key`).
2.  **Key Generation (Set):** A unique API key is generated for minute and saved into `apiKey`
3.  **Minute Rate Limit Check (Set -> Redis -> Per minute):**
    -   The `apiKey` retrieves from header.
    -   The `apiKey`  is incremented in Redis to track usage per minute.
    -   The workflow checks if the number of requests from that key exceeds the limit per minute (set to 10 using the "Per minute" If node).
    -   If the minute limit is exceeded, a message "You exceeded your limit" is returned (Set3).
4.  **Hour Rate Limit Check (Set2 -> Redis1 -> Per hour):**
    -   The `apiKey` retrieves from header.
    -   The `apiKey` is incremented in Redis to track usage per hour.
    -   The workflow checks if the number of requests from that key exceeds the limit per hour (set to 60 using the "Per hour" If node).
    -   If the hour limit is exceeded, a message "You exceeded your limit" is returned (Set1).
5.  **Data Retrival (Airtable):** If the rate limit is not exceeded, the workflow retrieves data from an Airtable base and table named "Pokemon".
6.  **Data Response (Function):** The workflow response with the limit consumed and the list of pokemons with names and urls.

## Services:

-   Airtable
-   Redis

## Hashtags:

#n8n #automation #ratelimit #API #webhook
