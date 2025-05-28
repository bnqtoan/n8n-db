# n8n-農產品

## Use cases:

- **Track Agricultural Product Prices:** Automatically fetch and record the prices of specific agricultural products (like sheep) from the Council of Agriculture (MOA) in Taiwan, providing historical price data for analysis.
- **Market Analysis:** Monitor price fluctuations of agricultural products in different markets (e.g., "台北二") over a specific period (e.g., December 2024) to identify trends and anomalies.
- **Data Consolidation:** Gather data from the MOA API and consolidate it into a Google Sheet for easy access, reporting, and further analysis by stakeholders.

## How it works:

1.  **Manual Trigger:** The workflow starts when you manually click "Test workflow" in n8n.
2.  **HTTP Request:** An HTTP request is sent to the Council of Agriculture's (MOA) API (`https://data.moa.gov.tw/api/v1/SheepQuotation`). It retrieves sheep quotation data based on specified query parameters:
    *   `Start_time`: Set to "2024/12/01".
    *   `End_time`: Set to "2024/12/31".
    *   `MarketName`: Set to "台北二".
    *   `api_key`: Uses a provided API key for authentication.
    *   The request also specifies that it accepts `application/json` in the header.
3.  **Split Out:** The "Split Out" node takes the `Data` field from the API response (assumed to be an array) and splits it into individual items, creating a separate workflow execution for each data entry.
4.  **Google Sheets:** Each item from the "Split Out" node is then appended as a new row to a specified Google Sheet ("n8n爬蟲-農產品", Sheet1). The workflow automatically maps the input data fields (TransDate, TcType, CropCode, CropName, MarketCode, MarketName, Upper\_Price, Middle\_Price, Lower\_Price, Avg\_Price, Trans\_Quantity) to the corresponding columns in the Google Sheet. The Google Sheets node uses the "googleSheetsOAuth2Api" credential for authentication.

## Services:

*   **Council of Agriculture (MOA) API:**  Fetches agricultural product pricing data. (`https://data.moa.gov.tw/api/v1/SheepQuotation`)
*   **Google Sheets:** Stores the fetched data for analysis and reporting.

## Hashtags:

#n8n #automation #agriculture #data #googlesheets
