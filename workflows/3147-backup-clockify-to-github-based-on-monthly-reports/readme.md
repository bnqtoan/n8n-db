# Clockify Backup Template

## Use cases:

- **Automated Clockify Data Backup:** Regularly back up Clockify time tracking data to a GitHub repository for safekeeping and historical analysis.
- **Version Controlled Time Tracking Reports:** Store and track changes to Clockify reports over time using GitHub's version control features.
- **Compliance and Auditing:** Maintain an archive of time tracking data for compliance purposes or to facilitate auditing.

## How it works:

1.  **Schedule Trigger:** The workflow is triggered daily at 5 AM.
2.  **Get first workspace:** Retrieves the first Clockify workspace ID using the Clockify API.
3.  **Globals:** Saves the Clockify workspace ID, GitHub repository owner, and repository name into global variables.
4.  **Set month indexes:** Creates an array of month indexes (0, 1, 2) to represent the current month and the two preceding months.
5.  **Split Out indexes:** Splits the month indexes into individual items, creating separate workflow executions for each month.
6.  **Set intervals:** Calculates the report name, start date, and end date for each month based on the current date and month index.
7.  **Get detailed monthly report:** Fetches a detailed time tracking report from the Clockify API for the specified month and workspace.
8.  **Check if file exists in GitHub:** Checks if a report file for the month already exists in the GitHub repository.
9.  **Point to new data:** If the file exists, extracts the `timeentries` array.
10. **Extract from File:** If the file exists, also reads data from the existing file in GitHub.
11. **Compare Datasets:** Compares the data from Clockify with the data stored in GitHub.
12. **Update file in GitHub:** If the file exists, updates the existing file in GitHub with the latest report data.
13. **Check for 404 error message:** If the file does not exist, the workflow checks if the GitHub API returned a 404 error.
14. **Skip empty reports:** Skips the report generation process if the time entries are empty.
15. **Create file in GitHub:** If the file does not exist and time entries are not empty, creates a new file in the GitHub repository with the report data.
16. **Stop and Error:** If any other error occurs when checking if the file exists, the workflow stops and throws an error.

## Services:

-   Clockify API: Used to retrieve workspace information and detailed time tracking reports.
-   GitHub API: Used to check for file existence, create new files, and update existing files in a repository.

## Hashtags:

#n8n #automation #clockify #github #backup
