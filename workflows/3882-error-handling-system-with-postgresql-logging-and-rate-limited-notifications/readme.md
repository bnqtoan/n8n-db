# Log errors and avoid sending too many emails

## Use cases:

- **Centralized Error Logging:** Capture and store errors from various n8n workflows in a central database for analysis and debugging.
- **Rate Limiting Error Notifications:** Prevent notification overload by limiting email or push notifications for recurring errors within a specified time window.
- **Development Environment Cleanup:** Automatically clear the error log database in development environments for a clean slate.

## How it works:

1.  **Error Trigger:** The workflow starts with an `Error Trigger` node, which activates whenever an error occurs in a connected workflow or node.
2.  **Insert Log:** The `Insert Log` node then inserts the error details (URL, JSON, stack trace, message, etc.) into a PostgreSQL database table named "N8Err". The database schema and table details are defined in the node's parameters.
3.  **Count for 5 minutes:** This `Postgres` node queries the database to count the number of errors logged in the last 5 minutes.
4.  **If there is no logs in 5 minutes:** An `If` node checks if the error count from the previous step is less than or equal to 0. This condition determines whether to proceed with sending notifications.
5.  **Principal Email/Fallback Email/Push mobile notification (Disabled):** If the error count is low (meaning not many errors have been logged recently), an email is sent using the `Principal E-Mail` node.  If that fails, it attempts to send an email using the `Fallback E-Mail` node. Additionally, a push notification is sent via `Push mobile notification`.  *Note: These notification nodes are disabled by default.*
6.  **CleanUp execution. See below if you will prepend this workflow:** if an error has occurred in the last five minutes, the execution stops here.
7.  **Insert your error handling logic after this:** if no errors have occurred in the last five minutes, you can continue to your logic.
8.  **Database Cleanup (Manual Trigger):** A `Manual Trigger` node allows for manual initiation of the `Truncate Log Database` node, which clears all entries from the "N8Err" table in the PostgreSQL database. This is intended for development environments.

## Services:

-   **PostgreSQL:** Used for storing error logs and querying error counts.
-   **SMTP (via Email Send node):** Used for sending email notifications (Principal E-Mail and Fallback E-Mail nodes).
-   **Pushover:** Used for sending push notifications to mobile devices.

## Hashtags:

#n8n #errorhandling #automation #PostgreSQL #notifications
