# Clockify to Syncro

## Use cases:

- **Automated Time Tracking for Ticketing Systems:** Automatically create or update time entries in Syncro based on time tracked in Clockify, ensuring accurate billing and time allocation for support tickets.
- **Real-time Synchronization of Time Data:** Keep time entries synchronized between Clockify and Syncro, providing a seamless view of time spent on different tasks related to specific tickets.
- **Improved Reporting and Analysis:** By centralizing time data from Clockify into Syncro, generate comprehensive reports on technician performance, ticket resolution times, and overall operational efficiency.

## How it works:

1.  **Webhook Trigger (Webhook):** The workflow starts when a POST request is sent to the specified webhook URL from Clockify, triggered when a time entry is created or updated.
2.  **Filter Ticket Time (IF1):** Checks if the project name in Clockify contains the word "Ticket." If not, the workflow ends.
3.  **Environment Variables (EnvVariables):** Sets the base URL for the Syncro API.
4.  **Extract Ticket ID (ForSyncro):** Extracts the ticket ID from the Clockify project name using a regular expression. It assumes the project name follows a pattern like "\[Ticket Name] \[1234]", where "1234" is the ticket ID.
5.  **Set Technicians (SetTechnicians):** Stores the Technician names along with their Syncro ID's.
6.  **Match Technician (MatchTechnician):** Matches the user name from the Clockify entry with a Technician name and returns the Syncro ID.
7.  **Find Existing Match (FindMatch):** Searches a Google Sheet for a Clockify ID, and if found, provides the Syncro ID from the Google Sheet.
8.  **Check if Syncro Timer Exists (IF):** Checks if the previous node found a match.
9.  **Create/Update Timer Entry (NewSyncroTimer / UpdateSyncroTimer):**
    -   **If No Match Exists:** A new timer entry is created in Syncro using the data from the Clockify webhook.
    -   **If a Match Exists:** The existing timer entry is updated in Syncro with the latest time and description from Clockify.
10. **Append to Google Sheets (ForGoogle / Google Sheets):** Appends the Clockify ID and Syncro ID to a Google Sheet, mapping the time entry between the two platforms.

## Services:

-   **Clockify:** Time tracking platform that triggers the workflow via webhook.
-   **Syncro:** Business management platform for MSPs where time entries are created or updated.
-   **Google Sheets:** Used for mapping Clockify IDs to Syncro IDs.

## Hashtags:

#n8n #automation #Clockify #Syncro #timetracking
