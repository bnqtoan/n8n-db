# n8n Uptime Monitor Workflow

## Use cases:

- **Website Monitoring:** Continuously monitor the uptime of critical websites and receive alerts when a site goes down.
- **Status Change Notifications:** Get notified whenever a website's status changes from UP to DOWN or vice versa, enabling quick response to outages.
- **Historical Uptime Tracking:** Log website uptime events in a Google Sheet for historical analysis and reporting on website reliability.

## How it works:

1.  **Schedule Trigger:** The workflow starts with a schedule trigger that runs every 6 hours.
2.  **Get Sites:** It retrieves a list of websites to monitor from a Google Sheet, which includes the website's URL (Property) and current status (UP or DOWN).
3.  **For Each Site...:** This node iterates through each website retrieved from the Google Sheet.
4.  **Perform Site Test:** An HTTP Request node sends a request to each website and captures the HTTP status code and the full response. The `neverError: true` option ensures that the workflow continues even if a site returns an error.
5.  **Calculate Status:** This node compares the current status code and the previously recorded status to determine if the website's status has changed.  It sets boolean values for `UP_FROM_UP`, `DOWN_FROM_DOWN`, `UP_FROM_DOWN`, and `DOWN_FROM_UP` based on the website's current `statusCode` (200-399 is up, 400+ is down) and its existing `Status`.
6.  **Status Router:** This switch node routes the workflow based on the changes in status. Each output is triggered only if it's corresponding boolean value is true.
7.  **Log Uptime Event:** The workflow logs the uptime event to a separate Google Sheet specific to each site, recording the date, period (year-month), website property, and the status change.
8.  **Update Site Status:** The status of the website in the main Google Sheet dashboard is updated based on the most recent check.
9.  **Send Email Alert:** Sends an email notification via Gmail to a specified email address (`no-reply@example.com`) when a website goes down.
10. **Send Chat Alert:** Sends a chat message via Slack to a specified channel when a website goes down.

## Services:

-   **Google Sheets:** Used for storing the list of websites to monitor, their current status, and for logging historical uptime data.
-   **Gmail:** Used to send email alerts when a website's status changes.
-   **Slack:** Used to send chat alerts when a website's status changes.

## Hashtags:

#n8n #automation #websiteMonitoring #uptime #googleSheets
