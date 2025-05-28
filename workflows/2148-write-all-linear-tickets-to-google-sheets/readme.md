# Linear Tickets to Google Sheets

## Use cases:

- **Daily Team Task Tracking:** Automatically gather all the tickets assigned to a specific team in Linear and log them in a Google Sheet for daily monitoring and reporting.
- **Historical Data Analysis:** Archive Linear tickets data in Google Sheets to analyze trends, track team performance, and identify bottlenecks over time.
- **Customizable Reporting:** Extract key ticket information (title, priority, state, etc.) from Linear, apply custom fields and estimates, and populate a Google Sheet for creating tailored reports and dashboards.

## How it works:

1.  **Schedule Trigger:** The workflow starts automatically every day at 6:00 AM (defined in the "Every day at 06:00" node).
2.  **Get all your team's tickets:** Retrieves all tickets from Linear for a specified team ("Adore" in this case) using a GraphQL query. The team name is set in the node’s filter.
3.  **Pagination Handling:** If the number of tickets exceeds 100, the workflow uses the "if has next page," "Get end cursor," and "Get next page" nodes to iterate through the results in batches.
    *   The "if has next page" node checks if there are more pages of results.
    *   If there are more pages, "Get end cursor" extracts the cursor for the next page.
    *   "Get next page" then uses the cursor to fetch the next set of tickets.
4.  **Split out the tickets:** Splits the array of tickets received into individual items to be processed separately.
5.  **Set custom fields:** Applies custom settings to each ticket. In the example, it sets an estimate default of 1 and converts labels to string.
6.  **Flatten object to have simple fields to filter by:** Transforms the complex ticket object from Linear into a simpler, flattened structure, making it easier to map to Google Sheets columns.
7.  **Write tickets to Sheets:** Writes the ticket data to a specified Google Sheet, automatically creating columns if needed, or updating existing entries based on the "id" column.

## Services:

-   Linear (via GraphQL API)
-   Google Sheets

## Hashtags:

#n8n #automation #linear #googlesheets #workflow
