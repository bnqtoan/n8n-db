# Web Server Monitor

## Use cases:

- **Monitor Website Uptime:** Automatically check the availability of critical websites and receive immediate email notifications if any server goes down.
- **Log Server Health:** Track the uptime and downtime of multiple web servers over time for reporting and analysis using Google Sheets.
- **Proactive Issue Detection:** Identify server outages early to minimize potential disruptions and maintain service level agreements (SLAs).

## How it works:

1.  **Schedule Trigger:** The workflow starts with a `Schedule Trigger` node, which initiates the workflow every minute.
2.  **Web Servers List (Google Sheets):** The `Server-Monitor` node retrieves a list of web server hostnames or IP addresses from a specified Google Sheet.
3.  **Server Alive Check (HTTP Request):** The `HTTP Request` node sends an HTTP GET request to each server obtained from the Google Sheet.
    *   If a server responds successfully, the workflow continues along the main path.
    *   If a server fails to respond, the workflow follows the error path.
4.  **Web Server Alive Log (Google Sheets):** If a server is up, the `Server_Status_Alive` node logs the successful check, including a timestamp and server IP address, in a designated Google Sheet.
5.  **Server Down Notification (Gmail):** If a server is down, the `Gmail` node sends an email notification to a specified recipient, alerting them to the outage. The email includes the server address and the timestamp of the failure.
6.  **Web Server Down Log (Google Sheets):** Also if a server is down, the `Server_Status_Down` node logs the failed check, along with the timestamp and server IP address, in another designated Google Sheet.

## Services:

-   **Google Sheets:** Used to store and retrieve the list of servers to monitor, as well as log the uptime and downtime status.
-   **Gmail:** Used to send email notifications when a server is detected as down.

## Hashtags:

#n8n #automation #servermonitoring #websitemonitoring #googlesheets
