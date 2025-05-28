# Timesheet Report Generator

## Use cases:

- **Automated Timesheet Reporting:**  Generates and formats timesheet reports from collected data, saving time and effort in manual report creation.
- **Employee Hour Tracking:**  Provides a structured overview of employee time allocation across different tasks and projects.
- **Project Cost Analysis:**  Facilitates project cost analysis by summarizing employee hours spent on specific projects.

## How it works:

1.  **Trigger:** The workflow is initiated manually using the "On clicking 'execute'" node.
2.  **Fetch Timesheet Records:** The "GetTimesheetRecords" Function node provides sample timesheet data with User name, Avatar URL, Task title, date, work description and hours.
3.  **Sort Timesheet Records:** The "SortElements" node sorts the timesheet entries by `UserName`, `TaskTitle`, and `date` fields to provide a organized report.
4.  **Deduplicate Avatars:** The "GetImg" node removes duplicate user avatar URLs. This ensures that each user's avatar is only fetched once.
5.  **Fetch Avatars:** The "ImgBinary" node fetches the user avatars from the URLs in the "UserAvatar" field and saves them as binary data.
6.  **Merge Data:** The "Merge2" node merges the sorted timesheet data with the corresponding binary avatar data.
7.  **Create Markdown Report:** The "CreateMDReport" Function node constructs a Markdown report, including user avatars, task titles, dates, hours, and notes.  It also calculates and displays total hours per task.
8.  **Convert to HTML:** The "Markdown" node converts the generated Markdown report into HTML format.
9.  **Convert to Binary:** The "Move Binary Data1" node converts the HTML content into binary data, setting the MIME type to `text/html` and the filename to `report.html`.
10. **Send Email:** (Disabled) The "Send Email" node (currently disabled) is configured to send the generated HTML report as an email attachment.

## Services:

-   Gravatar (via HTTP Request): Used to retrieve user avatar images based on URLs.

## Hashtags:

#n8n #automation #timesheet #reportgeneration #workflow
