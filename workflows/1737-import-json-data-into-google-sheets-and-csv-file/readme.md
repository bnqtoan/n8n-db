# Random User to Google Sheets and CSV

## Use cases:

*   **Lead Generation:** Automatically collect and store information about potential leads from a random user API into a Google Sheet and a CSV file for further processing.
*   **Data Enrichment:** Enrich existing datasets with random user data for testing, demonstration, or research purposes.
*   **Demo Data Creation:** Generate sample user data for software demonstrations or training exercises.

## How it works:

1.  The workflow starts with an **HTTP Request** node that fetches data from the `https://randomuser.me/api/` endpoint, which returns a JSON object containing random user information.
2.  The **Set** node extracts the first name, last name, and country from the JSON response and stores them in a new JSON structure, this node also make sure that only the defined values are kept.
3.  The **Google Sheets** node appends the extracted user data to a specified Google Sheet (`qwertz` Sheet ID) using OAuth2 authentication. The data is appended to columns A, B, and C, with headers inferred from the keys in the JSON data.
4.  The **Spreadsheet File** node converts the extracted user data into a CSV file named `users_spreadsheet`.

## Services:

*   [Random User API](https://randomuser.me/): A free API for generating random user data.
*   [Google Sheets](https://www.google.com/sheets/about/): A web-based spreadsheet application.

## Hashtags:

#n8n #automation #googleSheets #API #dataExtraction
