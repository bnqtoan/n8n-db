# Idea Report to Slack

## Use cases:

- **Daily/Weekly Report on New Ideas:** Automatically post a summary of new ideas added to a Notion database (or similar) to a Slack channel on a scheduled basis.  This keeps the team informed about the latest suggestions and initiatives.
- **Track UX Ideas:**  Specifically monitor UX-related ideas and notify the UX team in Slack when new ones are added, allowing them to promptly review and prioritize them.
- **Summarize Data from Various Sources:**  Adapt the workflow to pull data from different sources (e.g., Jira, Google Sheets) and provide summaries in Slack, offering a centralized overview of key metrics or tasks.

## How it works:

1.  **Schedule Trigger:** The workflow starts on a defined schedule (e.g., weekly).
2.  **Load Data (Notion or Mock Data):**
    *   *Option 1 (Notion, Disabled):* Retrieves all entries from a specified Notion database ("Product ideas list") that were created in the last 7 days.
    *   *Option 2 (Code Node - Mock Data):*  Uses a Code node to create mock data (in JSON format) that mimics the structure of data retrieved from a Notion database. **The Notion node is currently disabled; therefore the workflow uses the mock data**.
3.  **Filter UX Ideas:** Filters the data to only include ideas that are tagged as "UX".
4.  **Summarize Data:** The `Item Lists` node counts the unique IDs of the filtered UX ideas.
5.  **Notify Slack:**  A message is posted to a specified Slack channel (#nik-wf-testing) with the number of new UX ideas added in the last 7 days.

## Services:

*   Slack
*   Notion (Potentially, if the 'Notion' node is enabled.)

## Hashtags:

#n8n #automation #slack #notion #ux
