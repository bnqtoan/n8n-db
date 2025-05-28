# n8n Workflow: Monitoring and Alerting

## Use Cases:

*   **Real-time Sensor Monitoring:** Monitor sensor data (e.g., temperature, pressure, humidity) and receive instant alerts when values exceed a predefined threshold.
*   **Database Anomaly Detection:** Detect anomalies in database records based on specific criteria and trigger notifications for immediate investigation.
*   **System Performance Monitoring:** Monitor key performance indicators (KPIs) in a system or application and get notified when performance degrades beyond acceptable levels.

## How it works:

1.  **Cron Trigger:** The workflow starts with a `Cron` node that executes the workflow at a defined schedule (e.g., every minute, every hour).
2.  **Postgres Query:** A `Postgres` node executes a query against a PostgreSQL database. The query selects records from the "n8n" table where the "value" column is greater than 70 and the "notification" column is false. The PostgreSQL credentials have to be defined.
3.  **Twilio Notification:** For each record returned by the `Postgres` node, a `Twilio` node sends an SMS message. The message includes the sensor ID and the value that triggered the alert. The Twilio credentials, a valid "to" phone number, and a Twilio phone number have to be defined.
4.  **Set Node:** The `Set` node prepares the data to update the record of the sensor with the `id` returned by the PostgreSQL query and set the `notification` field to `true`.
5.  **Postgres Update:** A second `Postgres` node updates the "n8n" table in the PostgreSQL database, setting the "notification" column to true for the record. This prevents repeated alerts for the same high-value reading. The PostgreSQL credentials have to be defined.

## Services:

*   **PostgreSQL:** A relational database used to store and query sensor data.
*   **Twilio:** A cloud communications platform used to send SMS notifications.

## Hashtags:

#n8n #automation #monitoring #alerting #database
