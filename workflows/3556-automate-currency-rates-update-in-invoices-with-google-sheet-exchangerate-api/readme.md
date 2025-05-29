# My Workflow

## Use cases:
- **Automated Currency Rate Updates:** Keep a Google Sheets document updated with the latest USD exchange rates for various currencies, ensuring data accuracy for financial tracking.
- **Currency Conversion Archiving:** Maintain a historical record of currency exchange rates for auditing, analysis, or compliance purposes by appending data to an archive sheet.
- **Invoice Automation:**  Generate invoices with accurate and up-to-date exchange rates for international clients, improving billing accuracy.

## How it works:
1. **Scheduled Trigger:** The workflow is initiated by a "Schedule Trigger" node, set to run every day at 08:00 AM UTC.
2. **USD Exchange Rate API Query:** An "HTTP Request" node sends a request to the "exchangerate-api.com" API to retrieve the latest exchange rates for USD against all other currencies.  **Note:** Replace `<YOUR_API_KEY>` with your actual API key.
3. **Format Output to JSON:** The raw data from the API response is converted into a manageable JSON format, specifically extracting the `conversion_rates`.
4. **Filter Fields:** The set Node extract the `base_code` to define the base currency. It also formats the timestamp in a user-friendly way.
5. **Final Outputs:** The `Filter Fields` and `Format Output to JSON` nodes get merged into the node "Final Outputs"
6. **Update Google Sheets:** The workflow updates two different Google sheets:
   -  "Update Rate Sheet" node update the Google sheet with new currency rate.
   - "Archive Rates" append a new line in the archive Google sheet.

## Services:
- exchangerate-api.com: An API service providing current exchange rates.
- Google Sheets: A spreadsheet program included as part of the free, web-based Google Docs Editors suite offered by Google.

## Hashtags:
#n8n #automation #currency #exchangerate #googlesheets
