# URL Shortener and Analytics Dashboard

## Use cases:

- **Simplifying Long URLs:** Shorten lengthy URLs for easier sharing on social media, in emails, or in printed materials.
- **Tracking URL Clicks:** Monitor how many times a shortened URL is clicked to gauge the popularity and effectiveness of your content.
- **Centralized Link Management:** Create a dashboard to view total clicks, number of links created, and number of unique hosts.

## How it works:

1.  **URL Submission (Webhook):** A user submits a long URL to the `/sh` webhook endpoint. The workflow checks if the URL parameter exists.
2.  **URL Extraction and Hashing:** The workflow extracts the URL from the webhook request and generates a unique short ID using SHA256 hashing.
3.  **Database Check (Airtable):** The workflow searches an Airtable database to see if the generated short ID already exists.
4.  **New URL Entry:** If the ID is new, workflow create new entry on Airtable with `id`, `longUrl`, `shortUrl` and `host` parameters.
5.  **URL Redirection (Webhook):** When a user accesses the `/go` webhook endpoint with a short ID, the workflow queries the Airtable database for the corresponding long URL. If found, the user is redirected to the original URL. Clicks on the short URL are tracked, and the click count in Airtable is updated.
6.  **Analytics Dashboard (Webhook):** A request to the `/dashboard` endpoint triggers a query to Airtable to get all the created links. This data is then used to generate basic link analytics (total clicks, total links, total hosts). A dashboard HTML page is returned as the response.

## Services:

-   Airtable
-   n8n

## Hashtags:

#n8n #URLShortener #Automation #Analytics #Airtable
