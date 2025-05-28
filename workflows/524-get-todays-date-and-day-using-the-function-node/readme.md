## Get Today's Date and Day - n8n Workflow

This workflow retrieves the current date and day of the week and makes them available as data within n8n.

**Use cases:**

*   **Daily Reports:**  Include the current date and day in automatically generated daily reports.
*   **Scheduled Tasks:**  Dynamically adjust scheduled task behavior based on the day of the week (e.g., run a specific process only on weekdays).
*   **Personalized Notifications:**  Send personalized notifications with the current date and day (e.g., "Good morning, it's Tuesday, 16th July!").

**How it works:**

1.  The workflow is triggered manually using the "On clicking 'execute'" node.
2.  The "Function" node executes JavaScript code to:
    *   Get the current date in ISO format.
    *   Get the current day of the week as a number (0-6).
    *   Convert the day number into its corresponding name (e.g., "Monday").
    *   Adds `date_today` and `day_today` properties to the item's JSON data, containing the formatted date and day.

**Services:**

*   None (This workflow relies solely on n8n's internal functions)

**Hashtags:**

#n8n #automation #date #dayofweek #javascript
