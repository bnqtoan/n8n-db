# Monthly Absence Report for Payroll

## Use cases:

- **Automated Absence Reporting:** Automatically compiles and sends a monthly report of employee absences (holidays and illnesses) to the payroll department.
- **Simplified Payroll Processing:** Provides payroll with a clear summary of employee absences, reducing manual effort and potential errors in payroll calculations.
- **Absence Tracking and Analysis:** Aggregates absence data, enabling HR or management to track absence trends and identify potential issues.

## How it works:

1.  **Trigger:** The workflow starts on the 1st of every month at 8:00 AM using a "Cron" node.
2.  **Calculate Previous Month:** A "Date Time" node calculates the date range for the previous month.
3.  **Get Calendar Events:** The workflow fetches all events from a specified Google Calendar for the previous month using the "Google Calendar" node. It uses the "Previous Month" date to limit the calendar entries.
4.  **Check Event Summary:** A "Switch" node examines the "summary" field of each calendar event. If the summary contains "Holiday" or "Illness", the workflow proceeds accordingly.
5.  **Filter and Extract Data:** "Set" nodes extract the employee's name and duration of absence in days from the description and start/end dates of the event, differentiating between "Holiday" and "Illness" entries.
6.  **Combine Absence Counts:** "Code" nodes aggregate the number of days each employee was absent due to holidays or illness.
7.  **Merge Data:** The aggregated holiday and illness data are merged into a single stream using a "Merge" node.
8.  **Build Email Message:** A "Code" node constructs an email message containing a summary of holiday and illness absences for the previous month.
9.  **Send Email:** The workflow sends the generated email message to the payroll team using the "Email Send" node.

## Services:

-   Google Calendar
-   SMTP (for sending emails)

## Hashtags:

#n8n #automation #workflow #payroll #absenceManagement
