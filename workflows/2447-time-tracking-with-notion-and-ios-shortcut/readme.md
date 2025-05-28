# Track Working Time and Pauses

## Use cases:

- **Individual Time Tracking:** Track your daily work hours, breaks, and end times automatically using a mobile device (via iOS Shortcut) and a Notion database.
- **Project Time Logging:** Integrate with project management systems by sending the project identifier as a parameter to log time spent on specific tasks within Notion.
- **Simple Time Sheet Generation:** Use the tracked data in Notion to generate weekly or monthly timesheets for reporting or invoicing purposes.

## How it works:

1.  **Webhook Trigger:** The workflow is triggered by an HTTP POST request to the `/track-time` webhook endpoint. The request body should contain a `method` parameter specifying whether to track `start`, `break`, or `end` time. Additionally, for `break` a `duration` paramter must be set.
2.  **Method Switch:** The `Switch` node routes the workflow based on the `method` parameter received from the webhook.
3.  **Time Tracking Logic:**
    *   **Start Time:** Checks if a page for the current day already exists in the specified Notion database.
        *   If a page exists, it responds with a message indicating that the start time is already tracked.
        *   If no page exists, it creates a new page in the Notion database with the current timestamp as the start time and responds with a confirmation message.
    *   **Break Time:** Get the break duration and update the current day's entry.
    *   **End Time:** Checks if a page for the current day exists and if the `End` property is empty.
        *   If both conditions are true, it updates the page with the current timestamp as the end time and responds with a confirmation message.
        *   If the page doesn't exist or the `End` property is already set, it responds with an appropriate message.
4.  **Notion Updates:** The workflow uses the Notion API to create and update pages in the specified Notion database with start, break and end times.
5.  **Response:** Finally, the workflow responds to the webhook request with a message indicating the outcome of the time tracking operation.

## Services:

*   Notion API

## Hashtags:

#n8n #automation #workflow #notion #timetracking
