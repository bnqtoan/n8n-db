# My Workflow

## Use cases:

- **Generate Timesheet Reports:** Automatically create formatted timesheet reports from raw data, summarizing employee hours for different tasks and projects.
- **Visualize Time Allocation:** Gain insights into how time is spent across various tasks and users, enabling better resource management and project tracking.
- **Automate Report Distribution:** Streamline the process of creating and sharing timesheet reports via email (although the email sending part is currently disabled).

## How it works:

1. **Trigger:** The workflow starts when manually triggered using the "On clicking 'execute'" node.
2. **Fetch Timesheet Data:** The "GetTimesheetRecords" node (Function node) provides sample timesheet data. In a real-world scenario, this node would be replaced with a database query or API call to fetch actual timesheet records.
3. **Sort Data:** The "SortElements" node sorts the timesheet entries by User Name, Task Title, and Date.
4. **Get User Images:** The "GetImg" node extracts unique user avatar URLs from the timesheet data, removes duplicates and prepare it for fetching the images
5. **Fetch Avatars:** The "ImgBinary" node downloads the user avatar images from the URLs obtained in the previous step and converts them to binary data.
6. **Merge Data:** The "Merge2" node combines the original timesheet data with the corresponding user avatar images.
7. **Create Markdown Report:** The "CreateMDReport" node (Function node) generates a Markdown formatted report. It groups entries by user and task, calculates total hours per task, and includes user avatars.  The report is styled with a custom CSS table to improve readability.
8. **Convert to HTML:** The "Markdown" node converts the Markdown report into HTML.
9. **Convert JSON to binary:** The "Move Binary Data1" node takes the html content and sets it as binary data, so then you can use a node to send an email with attachments.
10. **Send Email (Disabled):** The "Send Email" node (currently disabled) is configured to send the generated HTML report as an email attachment.

## Services:

- **Gravatar:** Used to dynamically fetch user avatar images based on URLs.

## Hashtags:

#n8n #automation #timesheet #report #markdown
