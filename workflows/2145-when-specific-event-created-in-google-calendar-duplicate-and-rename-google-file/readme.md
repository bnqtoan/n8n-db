# New interview > Create new doc (template n8n)

## Use cases

*   **Automated Interview Document Creation:** Automatically create a new interview document from a pre-defined template in Google Drive whenever a new interview event is scheduled in Google Calendar.
*   **Streamlined Onboarding Process:** Simplify the onboarding process by generating necessary documents for new hires based on calendar events related to their start date or onboarding meetings.
*   **Meeting Preparation Automation:** Prepare documents for meetings by automatically duplicating a template and renaming it with relevant details extracted from the calendar event, such as the meeting title and date.

## How it works

This workflow automates the process of creating a new Google Docs document based on a Google Calendar event.

1.  **Trigger:** The workflow starts when a new event is added to a specified Google Calendar (`New event in Google Calendar` node). It filters for events with the phrase "Interview with" in the title or description.
2.  **Filter Event:** It filters Google Calendar events based on the creator's email and source URL (`Filter specific event` node).
3.  **Find the destination folder :** The workflow search the destination folder on Google Drive.
4.  **Find template:** The workflow searches for a specific template file in Google Drive (`Search file to duplicate` node), using a query string like "Template | M1 | Senior AE | ".
5.  **Duplicate and Rename:** The workflow duplicates the found template file in Google Drive and renames the new file using the event title from the Google Calendar event (`Create and rename Google File` node).

## Services

*   Google Calendar
*   Google Drive

## Hashtags

#n8n #automation #googleCalendar #googleDrive #documentCreation
