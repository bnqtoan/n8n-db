# EDI Order Processing Workflow

**Automate EDI order processing from email to structured Google Sheets storage**

## Use Cases
1. **Automated Order Management**: Process EDI-formatted order emails (returns and outbound orders) received via Gmail and convert them into structured records.
2. **Supply Chain Tracking**: Maintain real-time logs of return orders and outbound shipments in Google Sheets for inventory reconciliation.
3. **3PL Warehouse Operations**: Automatically parse EDI messages from partners and categorize order types (returns vs. new shipments) for warehouse processing.

## How It Works
1. **Trigger**: Starts when a new email containing "EDI" in the subject arrives in Gmail.
2. **Data Extraction**:
   - Extracts raw EDI message from the email body
   - Uses custom JavaScript to parse complex EDI segments (UNB, BGM, LIN, etc.)
3. **Data Transformation**:
   - Creates summary fields (document type, order date, total quantity)
   - Flattens nested EDI data into spreadsheet-friendly tabular format
4. **Routing**:
   - Checks if the order is a "Return Order" or "Outbound Order"
5. **Storage**:
   - Appends parsed data to separate Google Sheets tabs based on order type
   - Stores headers, dates, parties, and line items with product details

## Services
- **Gmail**: Email trigger and message retrieval
- **Google Sheets**: Data storage for orders (uses "1SaSFnJx80wrArf6DLx8zZx2y5VFOAmp0u-a26wliTbU" document)

## Hashtags
#n8n #EDI #automation #supplychain #GoogleSheets
