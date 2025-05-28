## Execute an SQL query in Microsoft SQL - Workflow Readme

This n8n workflow allows you to execute custom SQL queries against a Microsoft SQL Server database.

**Use cases:**

*   **Ad-hoc data retrieval:**  Quickly retrieve specific data from your SQL Server database without needing to write and deploy a separate application.  Ideal for debugging or one-off data pulls.
*   **Database monitoring:** Regularly execute queries to monitor database performance, table sizes, or other key metrics and potentially integrate with other services for alerting (though this workflow only executes the query).
*   **Data extraction for reporting:** Extract data in a specific format for use in generating reports or dashboards.

**How it works:**

1.  The workflow is triggered manually using the "On clicking 'execute'" node.  This allows you to run the workflow on demand.
2.  The "Microsoft SQL" node then executes the SQL query you define in its settings.  The query is directly executed against the specified SQL Server database using the provided credentials.  The results of the query are then outputted by the node.

**Services:**

*   Microsoft SQL Server

**Hashtags:**

#n8n #SQL #MicrosoftSQL #Database #Automation
