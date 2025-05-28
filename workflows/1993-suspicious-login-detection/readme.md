# Suspicious_login_detection

## Use Cases:

- **Real-time Threat Detection:** Identify and respond to suspicious login attempts as they occur, minimizing potential security breaches.
- **User Account Protection:** Enhance user account security by notifying users of unusual login activity and prompting them to take action if necessary.
- **Security Operations Automation:** Automate the process of triaging and investigating login alerts, freeing up security analysts to focus on more complex threats.

## How it works:

1.  **Trigger:** The workflow is triggered by either a webhook (`New /login event`) when a new login event occurs or manually (`When clicking "Execute Workflow"`) for testing.
2.  **Data Extraction:** The `Extract relevant data` node extracts key information from the login event, such as IP address, user agent, timestamp, URL, and user ID.
3.  **IP Reputation Check:** The `GreyNoise` node queries the GreyNoise API to determine if the IP address is associated with known malicious activity or benign scanners.
4.  **Geolocation Lookup:** The `IP API` node retrieves the geographical location of the IP address using the IP-API.
5.  **User Agent Parsing:** The `UserParser` node parses the user agent string to identify the browser, operating system, and device type used for the login.
6.  **Data Integration:** The `Merge` node combines the data from GreyNoise, IP API, and UserParser for a comprehensive view of the login attempt.
7.  **Threat Assessment:** The workflow evaluates the login attempt based on the GreyNoise data, geolocation, and user agent information.
8.  **Priority Assignment:** Based on the trust level and classification from GreyNoise and whether the IP is a known business service, the workflow assigns a priority level (High, Medium, or Low) to the alert.
9.  **Slack Notification:** The `Slack` node sends a notification to a specified Slack channel, including the priority, user ID, IP address, timestamp, user agent, and a link to the GreyNoise report.
10. **Anomaly Detection:** If the threat is unknown, the workflow retrieves the user's last 10 logins from a Postgres database and checks for new locations or devices/browsers.
11. **User Notification:** If a new location or device/browser is detected, the workflow retrieves the user's email address from the database and sends an email notification informing them of the unusual login attempt.

## Services:

-   **GreyNoise:** Provides IP address intelligence and identifies potentially malicious IPs.
-   **IP-API:** Provides geolocation information for IP addresses.
-   **UserParser:** Parses user agent strings to identify browsers, operating systems, and devices.
-   **Postgres:** Used for storing user login history and user information.
-   **Slack:** Used for sending alert notifications to security teams.
-   **Gmail:** Used for sending email notifications to users.

## Hashtags:

#n8n #automation #security #threatdetection #loginsecurity
