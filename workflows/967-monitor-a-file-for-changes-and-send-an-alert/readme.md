# SIGNL4 Alert

## Use cases:

- **Incident Management:** Automatically create and resolve alerts in SIGNL4 based on scheduled checks. For instance, a server monitoring script can trigger an alert if a server is down and resolve it when the server is back online.
- **Scheduled Task Monitoring:** Monitor the successful execution of scheduled tasks. If a task fails to complete successfully, an alert is raised, and when it runs successfully the alert will be resolved.
- **Location-Aware Alerting:** Create alerts with specific location data. Useful for field operations where alerts need to be tagged with geographic coordinates, for example, to notify field technicians in the area of an issue.

## How it works:

1.  **Cron Trigger:** The workflow starts with a `Cron` node that triggers every hour.
2.  **Read Binary File:** Reads a binary file ("alert-data.json") containing alert data.
3.  **Binary to JSON:** Converts the binary data from the file into a JSON object.
4.  **IF Condition:** Checks the "Done" property in the JSON data.
    *   **If "Done" is false:**
        *   **SIGNL4 Alert:** Sends an alert to SIGNL4. The message body and external ID are extracted from the JSON data. Location data is also added to the alert.
        *   **Mark as Done:** Updates the JSON data:
            *   Sets `Body` using `Binary to JSON` node.
            *   Sets the "Done" property to true.
            *   Sets the `eventId` and `lastId` property with the externalId from `SIGNL4 Alert` node.
        *   **JSON to Binary:** Converts the updated JSON data back into binary format.
        *   **Write Binary File:** Writes the updated binary data back to "alert-data.json", persisting the "Done" state and eventId.
    *   **If "Done" is true:**
        *   **SIGNL4 Resolve:** Resolves the alert in SIGNL4 using the "lastId" property from the JSON data as the external ID. This assumes the `lastId` keeps a track of the external ID.
5. The workflow loop repeats with the next Cron schedule.

## Services:

*   SIGNL4

## Hashtags:

#n8n #SIGNL4 #alerting #automation #incidentManagement
