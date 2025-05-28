# UTM Link Creator & QR Code Generator with Scheduled Google Analytics Reports

## Use Cases:

- **Marketing Campaign Tracking:** Automatically generate UTM links for different marketing channels and campaigns, store them in a database, and create QR codes for easy sharing.
- **Performance Analysis:** Schedule regular Google Analytics reports to monitor the performance of UTM links and gain insights into traffic sources and user behavior.
- **Executive Reporting:** Generate executive summaries of Google Analytics data to highlight key performance indicators, trends, and actionable recommendations for marketing managers.

## How it Works:

1.  **Create UTM Link & Send To Database (Manual Trigger):** The workflow starts with a manual trigger, allowing users to initiate the UTM link creation process.
2.  **Set UTM Parameters For Link:** Defines the UTM parameters (website URL, campaign ID, source, medium, name, and term) for the link.
3.  **Create UTM Link With Parameters (Code Node):** A code node takes the defined parameters and constructs the complete UTM link.
4.  **Submit UTM Link To Database (Airtable):** The generated UTM link is stored in an Airtable database for record-keeping.
5.  **Create QR Code With Submitted QR Link (HTTP Request):** Generates a QR code using the `quickchart.io` API, embedding the UTM link.
6.  **Schedule Google Analytics Report To Marketing Manager (Schedule Trigger):** A scheduled trigger initiates the Google Analytics reporting process on a recurring basis.
7.  **Google Analytics (Google Analytics):** Retrieves data from Google Analytics based on configured metrics and dimensions (e.g., sessions, source/medium).
8.  **OpenAI Chat Model:** Integrates OpenAI chat models to analyze the collected analytics data.
9. **Window Buffer Memory:** Buffer windows to help improve data analysis with memory in conversation.
10. **Google Analytics Data Analysis Agent (Langchain Agent):** Uses an AI agent powered by Langchain to analyze the Google Analytics data and generate an executive summary. The agent is configured with a system message to ensure the summary is structured and tailored for executives.
11. **Send Summary Report To Marketing Manager (Gmail):** Sends the generated executive summary via email to the specified marketing manager.

## Services:

-   **Google Analytics:** Used to retrieve website traffic and engagement data.
-   **Airtable:** Used to store and manage the generated UTM links.
-   **quickchart.io:** Used to generate QR codes from UTM links.
-   **Gmail:** Used to send the Google Analytics report to the marketing manager.
-   **OpenAI:** Used to generate analytics reports based on set Google Analytics data.

## Hashtags:

#n8n #automation #UTMtracking #GoogleAnalytics #marketingautomation
