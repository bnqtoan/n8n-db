# Syncro Timer Sync

## Use cases:

- **Automated Time Tracking for Phone Calls:** Automatically create time entries in Syncro based on phone call data received from a webhook.
- **Call Logging and Billing:** Capture call duration and details to accurately bill clients based on time spent on phone support.
- **Improved Efficiency:** Reduce manual data entry by automatically syncing call data with Syncro tickets, freeing up technicians to focus on resolving issues.

## How it works:

1.  **Webhook Trigger:** The workflow starts when a POST request is sent to the `/timersyncro` webhook endpoint. This webhook should contain call data including `call_id`, `date_started`, `date_ended`, contact name and phone.
2.  **Set Environment Variable:** Sets the Syncro base URL. This is used to dynamically construct the API endpoint later.
3.  **Google Sheets Lookup:** Searches a Google Sheet for a matching ticket number based on the `call_id` received in the webhook data. It looks up the `call_id` in the "Call" column and retrieves the corresponding "Ticket" number from the same row.
4.  **Conditional Check (ConfirmMatch):** Checks if the ticket number retrieved from Google Sheets is empty. If the "Ticket" number is empty, it will do nothing (NoOp node).
5.  **Add Time Entry to Syncro:** If the ticket number is not empty, a time entry is created in Syncro using the Syncro API.
    -   The `start_at` and `end_at` values are extracted from the webhook data (`date_started` and `date_ended`) and converted to ISO format.
    -   The notes field includes the contact's name and phone number from the webhook data.
    -   The `user_id` (24223) is hardcoded (consider making this configurable).

## Services:

-   **Syncro:** Used for creating time entries on tickets.
-   **Google Sheets:** Used as a lookup table to find the corresponding Syncro ticket ID based on the call ID.

## Hashtags:

#n8n #automation #syncro #googleSheets #timeTracking
