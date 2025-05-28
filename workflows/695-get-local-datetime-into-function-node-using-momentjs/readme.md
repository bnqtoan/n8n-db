# Get Local Datetime

## Use cases:

*   **Time-based automation:** Trigger workflows based on specific times in a local timezone, such as sending daily reports or scheduling backups.
*   **Data Logging with Timezone:** Record events or data points with accurate timestamps reflecting a specific timezone, useful for auditing and analysis.
*   **Personalized Scheduling:** Adjust schedules or reminders based on the user's local time, improving user experience.

## How it works:

1.  The workflow starts with a "Manual Trigger" node, which is activated when you manually execute the workflow in n8n.
2.  The "Get Local Datetime" Function node uses the `moment` library to get the current date and time, and convert it to the timezone define in the GENERIC_TIMEZONE enviroment variable.
3.  It extracts the year, month, day, hour, minute, second, and millisecond from the date and time object.
4.  The function node returns the values in the `json` format, making it accessible for subsequent nodes in the workflow.

## Services:

*   No external services are directly used. This workflow primarily relies on n8n's internal functionalities and the `moment` library.

## Hashtags:

#n8n #automation #timezone #datetime #workflow
