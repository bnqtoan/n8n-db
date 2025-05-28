# My Workflow

## Use cases:

- **Automatically collect user data:** Fetch user information from a public API and store it in a Google Sheet for analysis or contact purposes.
- **Generate leads:** Regularly extract user data and save it as a CSV file for import into a CRM or marketing automation tool.
- **Data backup:** Create a backup of data from an API by saving it in a structured spreadsheet format.

## How it works:

1.  The workflow starts with a **"When clicking "Execute Workflow""** node, which triggers the workflow manually.
2.  An **"HTTP Request"** node then sends a GET request to the `https://randomuser.me/api/` endpoint, fetching user data in JSON format.
3.  The workflow splits into two branches:
    *   **Google Sheets Branch**: The fetched JSON data is directly passed to the **"Google Sheets"** node, which appends the new data to a specified spreadsheet. The node uses defined columns (id, status, and name) and the `append` operation to save the user data into the Google Sheets document `Sync data from one app to another [one-way sync] (Destination example)` on sheet `Sheet1`. A Google Sheets credential with ID `uJ1SWmfKH3MikNyZ` and Name `Google Sheets account 2` is used
    *   **CSV File Branch**: A **"Set"** node extracts and transforms specific fields from the JSON response (first name, last name, email, and country). Finally, a **"Spreadsheet File"** node converts the transformed data into a CSV file named `users_spreadsheet`.

## Services:

-   Random User API (https://randomuser.me/api/)
-   Google Sheets

## Hashtags:

#n8n #automation #googlesheets #api #csv
