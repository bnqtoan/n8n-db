# Convert Venmo CSV File to Quickbooks Dropbox

## Use cases:

- Automatically convert Venmo transaction history (downloaded as CSV) into a Quickbooks-compatible format for easy import.
- Streamline accounting processes by automating the conversion and transfer of financial data from Venmo to Quickbooks.
- Allow users to submit a Venmo CSV file through a form, which is then automatically converted and saved to Google Drive.

## How it works:

1.  **On form submission:** The workflow starts when a user submits a form containing the Venmo CSV file.
2.  **Extract from File:** Extracts the data from the submitted file.
3.  **Generate File Name:** A code node generates a name for the new file.
4.  **Convert Venmo to QB:** A code node converts the Venmo CSV data into a Quickbooks-compatible format.
5.  **Convert to File:** Converts the converted data to an actual file.
6.  **Google Drive:** Saves the resulting Quickbooks-formatted file to Google Drive.
7.  **Dropbox:** There is a disabled Dropbox node that could be re-enabled to save the file there as well.

## Services:

*   Venmo (CSV file as input)
*   Quickbooks (Target format)
*   Google Drive
*   Dropbox

## Hashtags:

#n8n #automation #venmo #quickbooks #accounting
