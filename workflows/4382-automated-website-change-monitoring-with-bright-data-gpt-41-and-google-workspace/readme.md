# BrightData Weekly Comparison

## Use cases:

- **Competitor Website Monitoring:** Track changes in competitors' website content, pricing, and features on a weekly basis to inform business strategies.
- **Website Compliance Tracking:** Monitor specific website pages for compliance-related updates, ensuring adherence to regulatory standards.
- **Content Change Notification:** Receive automated notifications of significant content changes on monitored websites, allowing for timely responses and content updates.

## How it works:

1.  **Scheduled Trigger:** The workflow starts automatically on a weekly schedule.
2.  **Initialization:** It initializes workflow variables and retrieves a list of URLs to monitor from a Google Sheet.
3.  **Web Scraping and Data Extraction:** For each URL:
    *   It uses a Bright Data MCP Server and an AI agent to scrape the website and extract structured data (headings, pricing, navigation, etc.) in JSON format.
4.  **Data Storage:** The extracted JSON data is stored as a file in Google Drive.
5.  **Comparison with Previous Week:**
    *   The workflow checks if a file exists from the previous week.
    *   If yes, it downloads the previous week's file and compares it with the current week's data to detect changes.
    *   If no, it skips the comparison.
6.  **Change Detection and Reporting:**
    *   The workflow identifies differences between the current and previous week's data.
    *   It generates a Markdown report summarizing the changes.
7.  **Google Docs Update:** The Markdown report is converted to HTML and used to update a Google Docs document with the comparison results.
8.  **Google Sheets Update:** The Google Sheet is updated with links to the current week's data file, the previous week's data file (if available), and the comparison Google Docs document.
9.  **Email Notification:** An email is sent containing the HTML comparison report.
10. **Test Mode (Optional):** A test mode can be enabled to mock changes for testing the change detection and reporting functionality.

## Services:

-   Google Sheets
-   Google Drive
-   Google Docs
-   Gmail
-   Bright Data MCP Server
-   OpenAI (or alternative AI provider)

## Hashtags:

#n8n #automation #webscraping #datacomparison #weeklyreport
