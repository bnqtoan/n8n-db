# URL Pinger

## Use cases:

- **Website Monitoring:** Regularly check the status of critical websites to ensure they are online and responsive. Receive notifications if any website becomes unavailable.
- **API Endpoint Monitoring:** Monitor the health and availability of API endpoints to ensure services are functioning correctly.
- **Scheduled Task Verification:** Verify that scheduled tasks or cron jobs are successfully executing by checking the status of a specific URL upon completion.

## How it works:

1.  **Schedule Trigger:** The workflow starts with a `Schedule Trigger` node that activates every 15 minutes.
2.  **URLs List:** The `URLs List` node stores an array of URLs (`http://firsturl.com`, `https://secondurl.com`, `https://thirdurl.com`) that need to be checked.
3.  **Split Out:** The `Split Out` node takes the array of URLs and splits them into individual items, assigning each URL to the `url` field.
4.  **HTTP Request:** For each URL, an `HTTP Request` node sends a GET request to the specified URL. The `onError` parameter is set to `continueRegularOutput`, so the workflow continues even if a request fails.
5.  **Output:** The output of the HTTP Request node will contain the response from the URL. If there's need to check for status codes, add an IF node to check for 200 and error accordingly.

## Services:

-   None (other than the URLs themselves)

## Hashtags:

#n8n #automation #websiteMonitoring #urlCheck #scheduledTask
