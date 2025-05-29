# Automated Website Keyword SEO Tracker

## Use cases:

- **Monitor Website Ranking:** Automatically track your website's position for specific keywords in Google search results over time.
- **Competitor Analysis:** Track competitor website ranking for the same keywords to identify opportunities and threats.
- **SEO Performance Alerts:** Get notified via email or WhatsApp when your website's ranking for a specific keyword improves or drops significantly.

## How it works:

1.  **Trigger:** The workflow is triggered either by a schedule (`Schedule Trigger`) or manually (`When clicking ‘Test workflow’` or `Google Sheets Trigger`).
2.  **Get Keywords:** It retrieves a list of keywords and target URLs from a Google Sheet (`Google Sheets2` -> `Get Row (notChecked Column)`). The "notChecked Column" likely indicates that this is a queue of keywords that need to be checked for their current rankings.
3.  **Set Keywords:** The `Set Keyword(s)` node then format the keyword from the excel sheet to use later on.
4.  **Google SERP Request:** The `Google Serp Request` node sends an HTTP request to Google's search engine results page (SERP) for each keyword.
5.  **Map Organic Results Array:** The `Map Organic Results Array` node parses the HTML response from Google and extracts the organic search results.
6.  **Web URL Position Finder:**  The `Web URL Position Finder` node determines the position of your specified website URL within the extracted organic search results.
7.  **Update Check Status Column (to Checked):** It updates status to "Checked"
8.  **Notifications Switch:** The `Notifications Switch` node check if the position for the keywords improved or dropped.
9.  **Send Notifications:** Depending on whether the ranking improved, dropped, the workflow sends notifications via Email and WhatsApp (`Send Email Improved`, `Send WA Message Improved`, `Send Email Dropped`, `Send WA Message Dropped`).
10.  **Start Checks Notification:** Sends a notification via Email and WhatsApp (`WA Start Checks Notification`, `GMAIL Start Checks Notification`).
11.  **Write to Google Sheets:** The workflow saves the data to Google sheet (`Google Sheets`).

## Services:

*   Google Sheets
*   Google Search Engine (via HTTP Request)
*   Gmail
*   WhatsApp

## Hashtags:

#n8n #SEO #KeywordTracking #Automation #GoogleSheets
