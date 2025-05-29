# MAIA - Health Check

## Use cases:

- **Website Monitoring:** Regularly check the status of critical website URLs and receive notifications if any are down or return an error.
- **API Endpoint Monitoring:** Monitor the availability and response of essential API endpoints to ensure application functionality.
- **Scheduled Health Checks:** Automate daily or hourly checks of a list of URLs, providing proactive alerts for potential issues.

## How it works:

1.  **Schedule Trigger:** The workflow starts with a `Schedule Trigger` node, which initiates the process at a defined interval (e.g., every minute).
2.  **Fetch URLs:** The `Fetch Urls` node retrieves a list of URLs from a specified Google Sheet. The Google Sheet is identified by its ID (`17-tY9_wn-D2FV627Sx3-Z3abqFYvz794edej7es5J6w`) and uses the first sheet.
3.  **Check URL:** For each URL fetched, the `Check URL` node sends an HTTP request to the URL and checks the response. If an error occurs (e.g., the URL is unreachable or returns a non-200 status code), the workflow continues to the next step due to the `onError: continueErrorOutput` setting.
4.  **Telegram Notification:** If the `Check URL` node encounters an error, the `Telegram` node sends a notification to a specified Telegram chat ID (`1548053076`). The message includes the URL that failed and the error code.

## Services:

-   **Google Sheets:** Used to store and retrieve the list of URLs to be monitored.
-   **Telegram:** Used to send notifications about URL status.

## Hashtags:

#n8n #automation #healthcheck #monitoring #telegram
