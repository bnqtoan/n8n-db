# Archive Empty Pages in Notion Database

## Use cases:

- **Automatic cleanup of Notion databases:** Regularly archive pages in your Notion databases that have no content or only empty properties, keeping your workspace organized and clutter-free.
- **Content lifecycle management:** Automatically archive pages created as templates or placeholders if they remain empty after a certain period, ensuring only actively used pages are visible.
- **Data validation and archiving:** Archive pages representing data entries in a Notion database when those entries are found to be incomplete or invalid based on defined criteria (e.g., missing required fields).

## How it works:

This workflow automates the process of identifying and archiving empty pages within your Notion databases. Here's a step-by-step breakdown:

1.  **Get All Databases:** Retrieves a list of all databases in your Notion workspace.
2.  **Get All Database Pages:** For each database, it fetches all the pages within that database.
3.  **Check for empty properties:** Inspects each page's properties. If all properties are empty, the page is marked for deletion.
4.  **If Empty Properties:** Evaluates if the current page should be deleted based on empty properties
5.  **SplitInBatches:** Splits the pages into batches of one to be processed by the next node.
6.  **Get Page Blocks:** Retrieves all the blocks of content within the Notion page.
7.  **Process Blocks:** Evaluates if the blocks on the current page are empty, marking the page for deletion if true.
8.  **If toDelete:** Evaluates if the current page should be deleted based on empty blocks
9.  **Archive Page:** Archives the page in Notion if it has been marked for deletion in previous steps.
10. **Every day @ 2am:** Executes the workflow every day at 2:00 AM.

## Services:

-   Notion API

## Hashtags:

#n8n #Notion #Automation #DatabaseManagement #ContentCleanup
