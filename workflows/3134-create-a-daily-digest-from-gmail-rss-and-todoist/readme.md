# My workflow 4

## Use cases:
- **Daily Briefing:** Get a daily email summarizing the top news from the Times of India, your latest Gmail emails, and your most urgent Todoist tasks.
- **Personalized Digest:** Consolidate information from multiple sources into a single, formatted email for easy consumption.
- **Automated Reporting:** Generate regular reports containing key information from different services you use.

## How it works:

1.  **Schedule Trigger:** The workflow starts based on a defined schedule (e.g., daily).
2.  **Data Fetching:** The workflow retrieves data from three sources in parallel:
    *   **RSS Feed: Times of India:** Fetches the latest news headlines from the Times of India RSS feed.
    *   **Gmail: Fetch Emails:** Retrieves your latest emails from Gmail.
    *   **TodoList: Fetch Tasks:** Retrieves your upcoming tasks from Todoist.
3.  **Merge:** It merges the 3 data to be able to consume it on the next node.
4.  **Format Digest: Merge & Style Data:** A code node processes the fetched data:
    *   It selects the top 5 news items, emails, and tasks.
    *   It generates an HTML-formatted email body containing summaries of each data source, including inline CSS for styling.
    *   It constructs an email subject line summarizing the content.
5.  **Gmail: Send Digest:** Sends the formatted email to a specified Gmail address (youremail@gmail.com). The subject and body of the email are populated from the output of the "Format Digest" node.

## Services:

*   Gmail
*   Todoist
*   Times of India RSS Feed

## Hashtags:

#n8n #automation #dailybriefing #emaildigest #informationaggregation
