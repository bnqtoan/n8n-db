# Fetch Squarespace Blog & Event Collections to Google Sheets

## Use cases:

-   **Content Archival:** Automatically back up Squarespace blog posts and event details to a Google Sheet for record-keeping and historical analysis.
-   **Reporting and Analytics:** Gather Squarespace content data in a structured format for creating custom reports, dashboards, and visualizations.
-   **Cross-Platform Content Management:** Use the Google Sheet as a central repository to manage and repurpose content across different platforms or marketing channels.

## How it works:

1.  **Trigger:** The workflow is triggered either by a schedule (using the "Schedule Trigger" node) or manually (using the "When clicking ‘Test workflow’" node).
2.  **Fetch Squarespace Data:** The "Fetch Squarespace blog" node sends an HTTP request to your specified Squarespace blog URL (e.g., `https://beyondspace.studio/blog?format=json`). It uses pagination to retrieve all blog posts or events, handling multiple pages of content.
3.  **Iterate Collection Items:** The "Iterate the collection items" node splits the array of items (blog posts or events) received from Squarespace into individual items, processing each one separately.
4.  **Append/Update Google Sheet:** For each blog post or event, the "Squarespace collection Spreadsheet" node appends or updates a row in a specified Google Sheet. It maps fields such as ID, tags, title, URL, and dates from the Squarespace data to corresponding columns in the sheet. The node use the column "id" to match rows and avoid duplicate entries.

## Services:

-   Squarespace API
-   Google Sheets API

## Hashtags:

#n8n #automation #squarespace #googleSheets #contentManagement
