# Wordpress-to-csv

## Use cases:

*   **Backup WordPress Posts:** Regularly export all your WordPress posts to a CSV file for backup and archival purposes.
*   **Content Migration:** Extract WordPress content for easy migration to another platform or for content repurposing.
*   **Reporting and Analysis:**  Download WordPress data into a CSV format for use with spreadsheet software for reporting and data analysis.

## How it works:

1.  The workflow starts with a **"On clicking 'execute'"** node, which acts as a manual trigger.
2.  The **"Wordpress"** node then fetches all posts from your WordPress website using the WordPress API.  It uses the 'getAll' operation and returns all entries. It uses the `wordpressApi` credential.
3.  The **"Spreadsheet File"** node converts the received WordPress post data into a CSV (Comma Separated Values) format.
4.  Finally, the **"Write Binary File"** node saves the generated CSV data to a file named "data.csv".

## Services:

*   WordPress API

## Hashtags:

#n8n #WordPress #CSV #Automation #DataExport
