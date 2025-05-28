# Random User Data to Google Sheets, CSV, and Email

## Use cases

- **Data Backup and Archiving:** Periodically fetch user data and store it in a Google Sheet and a CSV file for backup and long-term storage. This ensures data availability even if the original source is temporarily unavailable.
- **Reporting and Analytics:** Gather user information and automatically update a Google Sheet, which can then be used for generating reports or feeding data into other analytical tools.
- **Email Marketing List Generation:** Generate a list of users, store it as a JSON and send it as an email.

## How it works

This workflow automates the process of fetching random user data, storing it in various formats, and sending it via email:

1.  **HTTP Request:** Retrieves user data from the `https://randomuser.me/api/` endpoint. This node fetches data in JSON format.
2.  **Set:** Extracts the first name, last name, and country from the JSON response of the HTTP Request and sets it to a new object with the keys `name` and `country`.
3.  **Google Sheets:** Appends the extracted user data (`name` and `country`) to a Google Sheet with the ID `qwertz` on the "A:C" range.  The `googleSheetsOAuth2Api` credential is used for authentication.
4.  **Spreadsheet File:** Converts the same user data into a CSV file named `users_spreadsheet`.
5.  **Spreadsheet File1:** Takes the data from the previous node, as a buffer for the next node.
6.  **Move Binary Data1:** converts the CSV data into JSON, outputing it as a binary file.
7.  **Write Binary File:** Writes the JSON data from the previous node into a file named `randomusers.json`.
8.  **Gmail1:** Sends an email with the subject "JSON file with users" and a message "Hello, attached is a JSON file with random user information.". The `gmailOAuth2` credential is used for authentication. The JSON data is attached as a file named "data".
9.  **Move Binary Data2:** Get the attachment from the mail.
10. **Google Sheets2:** Appends the attached JSON user data (`name` and `country`) to a Google Sheet with the ID `qwertz` on the "A:C" range.  The `googleSheetsOAuth2Api` credential is used for authentication.

## Services

-   **Random User API:** An API (`https://randomuser.me/api/`) that provides randomly generated user data in JSON format.
-   **Google Sheets:** A spreadsheet program that is part of the Google Workspace suite (used for storing and organizing data).
-   **Gmail:** Email service provided by Google, used to send emails with attachments.

## Hashtags

#n8n #automation #googleSheets #dataTransformation #email
