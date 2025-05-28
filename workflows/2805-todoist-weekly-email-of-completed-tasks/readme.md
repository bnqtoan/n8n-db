# Todoist Weekly Review Template

## Use cases:

- **Weekly Productivity Report:** Automatically receive a weekly email summarizing all tasks completed in Todoist over the past week.
- **Project Progress Tracking:** Monitor the progress of specific projects by excluding irrelevant projects and focusing on completed tasks within the important ones.
- **Personal Performance Review:** Review your accomplishments each week to identify trends, track your productivity, and plan for the upcoming week.

## How it works:

1.  **Trigger:** The workflow is triggered either manually via "When clicking ‘Test workflow’" or automatically every Friday afternoon at 3 PM using the "Every Friday afternoon" Schedule Trigger.
2.  **Get Completed Tasks:** It retrieves all completed tasks from Todoist for the past 7 days using the "Get completed tasks via Todoist API" node, utilizing your Todoist API credentials.
3.  **Optional: Ignore Specific Projects:** The "Optional: Ignore specific projects" node filters out completed tasks from specified projects (defined in the JavaScript code) using their project IDs. This allows you to focus on specific areas.
4.  **Format the email body:** The "Format the email body" node groups the completed tasks by date and formats them into an HTML email body, including the date and a list of completed tasks for that day.
5.  **Send Email:** Finally, the "Send Email" node sends an email with the formatted HTML body to the specified recipient, with the subject "Todoist Weekly Review."

## Services:

-   Todoist API
-   Email (via n8n's Email Send node)

## Hashtags:

#n8n #todoist #automation #weeklyreview #productivity
