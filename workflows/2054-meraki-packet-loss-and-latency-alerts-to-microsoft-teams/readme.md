# Meraki Network Monitoring and Alerting Workflow

## Use cases:

- **Proactive Network Issue Detection:** Automatically monitor Meraki network devices for high latency and packet loss, enabling early detection of potential network problems.
- **Automated Alerting:** When performance thresholds are exceeded, automatically notify IT staff via Microsoft Teams, ensuring timely intervention.
- **Alert Suppression:** Avoid duplicate alerts by checking a Redis database for existing issues, preventing alert fatigue and streamlining incident management.

## How it works:

1.  **Trigger:** The workflow is triggered either manually or on a schedule (every 5 minutes, Mon-Fri, 8 AM - 5 PM).
2.  **Fetch Meraki Data:**
    *   Retrieves a list of all Meraki organizations using the Meraki API.
    *   For each organization, retrieves the network IDs and uplink loss/latency statistics.
3.  **Data Transformation:**
    *   Transforms the raw data, extracting relevant fields like organization name, network ID, network name, and uplink statistics.
    *   Calculates the average latency and packet loss over the last 5 minutes for each network.
4.  **Threshold Filtering:** Filters network devices based on predefined thresholds (latency > 300ms or packet loss > 2%).
5.  **Alert Deduplication:**
    *   Checks a Redis database to see if an alert already exists for the problematic network.
    *   If an alert exists, it is suppressed to avoid duplicate notifications.
6.  **Notification:** If a new alert is triggered:
    *   A message is sent to a Microsoft Teams channel with details about the network, average loss, and average latency, including a direct link to the Meraki dashboard for the affected network.
7.  **Alert Logging:** The alert is logged in a Redis database with a TTL (Time To Live) of 3 hours to prevent repeated alerts for the same issue within that timeframe.

## Services:

-   **Meraki API:** Used to retrieve network organization and device performance data.
-   **Microsoft Teams:** Used to send alert notifications to IT staff.
-   **Redis:** Used as a database to store and check for existing alerts, preventing duplicate notifications.

## Hashtags:

#n8n #Meraki #NetworkMonitoring #Automation #Alerting
