# Create a short URL and get the statistics of the URL

## Use cases:

- **Shorten long URLs for social media or email campaigns:**  Easily create shortened, trackable links to share on platforms with character limits or to improve the appearance of links in communications.
- **Track the performance of shared links:**  Gather statistics on clicks to understand the reach and engagement of your content.
- **Automate URL shortening and tracking for marketing materials:** Streamline the process of creating and monitoring shortened URLs for various marketing initiatives.

## How it works:

1.  **Manual Trigger:** The workflow starts when you manually execute it within n8n.
2.  **Yourls (URL Shortener):** It takes a long URL (in this case, a Medium article about sending SMS with n8n) and uses the Yourls service to generate a shortened URL. The title is also passed along with the URL
3.  **Yourls (Stats):** Using the short URL created in the previous step, it retrieves statistics (e.g., number of clicks) from the Yourls service.

## Services:

-   [Yourls](https://yourls.org/): A self-hosted URL shortener.

## Hashtags:

#n8n #URLShortener #Automation #Yourls #LinkTracking
