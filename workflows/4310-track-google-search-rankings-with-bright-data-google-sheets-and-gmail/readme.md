# Keyword Rank Tracker and Email Reporter

## Use cases

1.  **Monitor SEO Performance:** Track keyword rankings for a website on Google Search and receive regular email updates, helping to measure the effectiveness of SEO strategies.
2.  **Competitor Analysis:** Monitor keyword positions and compare your website's ranking against competitors by tracking their domains alongside yours.
3.  **Automated Reporting:** Generate and send automated reports on keyword ranking performance to clients or stakeholders without manual data collection.

## How it works

This workflow automates the process of tracking keyword rankings on Google and sending the results via email.

1.  **Triggers:** Starts either manually via the "When clicking ‘Test workflow’" trigger or automatically on a scheduled interval (every 24 hours) using the "Schedule Trigger".
2.  **Reads Keywords:** Fetches a list of keywords and target domains from a specified Google Sheet ("Reading Keywords" node).
3.  **Transforms Keywords:** Formats the keywords for use in a Google Search URL by replacing spaces with "+" ("Transforming Keywords" node).
4.  **Loops through Keywords:** Processes each keyword individually to avoid overwhelming the BrightData API and adhere to rate limits ("Loop over Keywords" node).
5.  **Gets Search Results:** Uses the BrightData API to retrieve raw HTML from Google Search for each keyword ("Getting Ranks" node).  It constructs the search query with the transformed keyword and specifies the country via the `gl` parameter.
6.  **Finds Rank:** Parses the HTML to identify the ranking position of the target domain within the Google Search results ("Rank Finder" node).  It extracts URLs from the search results and checks if the target domain is present, assigning a rank based on its position.
7.  **Posts Rank Results:** Appends the extracted rank, URL, and other metadata to a "Results" sheet in Google Sheets ("Post Rank Results" node).
8.  **Formats Email Template:** Creates an HTML table containing the ranking results ("Making Email Template" node).
9.  **Sends Email:** Sends an email with the HTML table as the email body to the specified recipient ("Sending Email Message" node).

## Services

*   **Google Sheets:** Used for reading keywords and target domains, and for storing the extracted ranking data.
*   **BrightData API:** Used to retrieve the raw HTML of Google Search results pages.
*   **Gmail:** Used to send the email report containing the keyword ranking results.

## Hashtags

\#n8n \#automation \#SEO \#keywordtracking \#googlesheets