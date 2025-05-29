# Indeed Company Data Scraper & Summarization with Airtable, Bright Data and Google Gemini

## Use cases:

- **Competitor Analysis:** Automatically gather and summarize information about companies listed on Indeed to understand their profiles, employee reviews, and other relevant data for competitor analysis.
- **Talent Acquisition Research:** Scrape company data to identify potential target employers or to gather insights into company cultures and employee satisfaction for talent acquisition strategies.
- **Market Research:** Systematically collect and summarize data on companies within a specific industry or location to gain a broader understanding of market trends and conditions.

## How it works:

1.  **Trigger:** The workflow is manually triggered.
2.  **Airtable Data Source:** The workflow retrieves a list of company links from an Airtable base named "Indeed" and a table named "Table 1".  It expects the table to contain a "Link" column with Indeed company URLs.
3.  **Bright Data Web Unlocker:**  For each company link, the workflow utilizes Bright Data's Web Unlocker to perform an HTTP request to Indeed, bypassing potential bot detection. It dynamically sets the 'zone' parameter for Bright Data.
4.  **Data Extraction and Transformation:**
    *   The raw markdown data from Indeed is converted to textual data using Google Gemini Chat Model.
    *   The raw markdown data from Indeed is converted to HTML.
5.  **Summarization:** The extracted textual data is summarized using Google Gemini Chat Model summarization chain.
6.  **AI Agent for Formatting:** An AI Agent, powered by Google Gemini, formats the summarization result.
7.  **Webhook Notification:**  The formatted output from the AI Agent is sent as a structured JSON payload to a specified webhook URL via HTTP Request.  The "search\_summary" and "search\_result" are included in the payload.
8.  **Notifications**:  Sends markdown to html response to a specified webhook URL via HTTP Request.

## Services:

-   **Airtable:** Used as a data source for Indeed company URLs.
-   **Bright Data:** Web Unlocker is used to scrape data from Indeed.
-   **Google Gemini (PaLM) API:** Used for data extraction and summarization through the Langchain integrations.
-   **Webhook:** Sends the final formatted data to a user-defined webhook.

## Hashtags:

#n8n #automation #webscraping #indeed #companydata #ai #googlegemini #brightdata #airtable
