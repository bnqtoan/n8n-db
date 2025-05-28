# JSON to Spreadsheet via Email

## Use cases:

*   **Automated Data Extraction:** Automatically extract data from JSON files attached to emails and convert it into a spreadsheet format for easier analysis.
*   **Regular Reporting:**  Use this workflow to create daily/weekly/monthly reports by scheduling it to process incoming emails containing JSON data and generate updated spreadsheets.

## How it works:

1.  **Gmail:** The workflow starts by fetching the latest email (limited to 1) from your Gmail inbox.  It uses the "getAll" operation, meaning it retrieves all emails that match the specified criteria (if any). The email is assumed to have a JSON file attached.
2.  **move binary data :** This node takes the binary data (the attached JSON file) from the email and prepares it for conversion.
3.  **write spreadsheet file:** Converts the JSON data into a CSV (Comma Separated Values) file named "users\_spreadsheet.csv".

## Services:

*   Gmail
*   Google Sheets (implicitly through the file creation)

## Hashtags:

#n8n #automation #email #JSON #spreadsheet
