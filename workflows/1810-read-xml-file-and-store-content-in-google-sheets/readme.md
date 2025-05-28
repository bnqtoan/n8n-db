# XML to Google Sheets Workflow

## Use cases:

- **Data Migration:** Automatically transfer data from XML files (e.g., product catalogs, inventory lists) to Google Sheets for easier analysis and reporting.
- **Regular Data Updates:**  Periodically fetch data from an XML feed (e.g., weather data, stock prices) and update a Google Sheet with the latest information.
- **Data Extraction and Transformation:** Extract specific elements from an XML file and organize them into a structured spreadsheet format for further processing or sharing.

## How it works:

1. **Manual Trigger:** The workflow starts when you manually click the "Execute" button.
2. **Download XML File:** An HTTP Request node retrieves an XML file from a specified URL (`https://www.w3schools.com/xml/simple.xml`).
3. **Parse XML content:** The XML node parses the downloaded XML content into a JSON format.
4. **Split out food items:** The Item Lists node extracts the individual "food" items from the `breakfast_menu.food` array within the parsed XML data.
5. **Create new spreadsheet file:** A Google Sheets node creates a new spreadsheet in your Google Drive, named "My XML Data".
6. **Define header row:** A Set node dynamically determines the column headers based on the keys of the first food item from the parsed XML.
7. **Write header row:** A Google Sheets node writes the extracted column headers as the first row in the newly created spreadsheet.
8. **Wait for spreadsheet creation:**  The Merge node waits for Create new spreadsheet file and Split out food items
9. **Write data to sheet:** A Google Sheets node appends the data of each food item to the Google Sheet.

## Services:

- Google Sheets
- HTTP(s) Request (for downloading the XML file)

## Hashtags:

#n8n #xml #googlesheets #dataintegration #automation
