# Snowflake CSV

## Use cases:

- **Import user data from a CSV file into a Snowflake database:** This workflow can be used to automatically import user data stored in a CSV file into a Snowflake table, making it easy to update user information in the database.
- **Scheduled data synchronization from a cloud storage CSV to Snowflake:** It can be scheduled to periodically fetch the latest CSV file from Azure Blob Storage and update a Snowflake table, ensuring data consistency between the source file and the database.
- **On-demand data loading into Snowflake:** This workflow allows for manual triggering of data import from a CSV file to a Snowflake database, useful for ad-hoc data loading tasks.

## How it works:

1.  The workflow starts with a "When clicking 'Execute Workflow'" trigger node, allowing manual execution.
2.  An "HTTP Request" node fetches a CSV file from an Azure Blob Storage URL. The `responseFormat` is set to `file` to download the file.
3.  The "Spreadsheet File" node parses the downloaded CSV file into a structured format.
4.  The "Set" node extracts specific fields (`id`, `first_name`, and `last_name`) from the parsed CSV data.
5.  Finally, the "Snowflake" node inserts the extracted data into a specified table (`users`) in Snowflake, mapping the extracted fields to the corresponding columns (`id`, `first_name`, `last_name`).

## Services:

-   Azure Blob Storage (via HTTP Request)
-   Snowflake

## Hashtags:

#n8n #automation #snowflake #csv #database
