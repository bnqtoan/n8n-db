# n8n Workflow: Insert Data into Coda Table

This workflow automates the process of inserting data into a new row of a specified table within a Coda document.

## Use cases:

*   **Data logging:** Automatically record data points from various sources into a Coda table for tracking and analysis.  For example, logging website form submissions or sensor readings.
*   **Content management:** Create new rows in a Coda table to manage content, such as articles, blog posts, or product listings.
*   **Project task creation:** Automatically add new tasks to a project management table in Coda, triggered by external events.

## How it works:

1.  The workflow is manually triggered using the "On clicking 'execute'" node.
2.  The "Set" node defines the data to be inserted into the Coda table.  It creates three data points: "Column 1" with the value "This is column 1 data", "Column 2" with the value "This is column 2 data", and "Column 3" with the value "This is column 3 data".
3.  The "Coda" node then takes the data from the "Set" node and inserts it as a new row into the Coda table that is specified by the "docId" and "tableId" parameters. Note that the Coda API credentials need to be properly configured in the "Coda" node.

## Services:

*   **Coda:** The workflow interacts with Coda to insert data into a specified table.

## Hashtags:

#n8n #automation #coda #data #workflow
