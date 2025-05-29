# Chart Generator Workflow

## Use cases:

- **Automated Report Generation:** Generate charts from sales data stored in a database or spreadsheet and automatically upload them to Google Drive for reporting purposes.
- **Real-time Data Visualization:** Visualize data from APIs or other real-time data sources by creating dynamic charts that update automatically as the data changes.
- **Performance Monitoring Dashboards:** Create charts to monitor key performance indicators (KPIs) and upload them to a shared drive or send them to a communication channel for team visibility.

## How it works:

1.  The workflow starts with a **"When clicking ‘Test workflow’"** trigger, which is manually activated.
2.  The **"Edit Fields: Set JSON data to test"** node defines a sample JSON object containing the data for the chart. It includes `reportTitle`, `labels` (for the X-axis), and `salesData` (for the Y-axis). This node is used for testing purposes.
3.  The **"QuickChart"** node takes the data from the previous node and generates a line chart. It uses the `labels` array for the X-axis and the `salesData` array for the Y-axis. The chart type is set to "line," but can be configured to other types (bar, pie, etc.).
4.  The **"Google Drive: Upload File"** node takes the generated chart image and uploads it to a specified folder in Google Drive.  The file name is dynamically generated as `chart.<fileExtension>`.

## Services:

-   **QuickChart:** A service that generates charts from JSON data via an API.
-   **Google Drive:** A cloud storage service for storing and sharing files.

## Hashtags:

#n8n #automation #chart #googleDrive #dataVisualization
