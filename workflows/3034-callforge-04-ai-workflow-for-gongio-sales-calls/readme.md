# CallForge - The AI Gong Sales Call Processor

## Use cases:

- **Automated Sales Call Logging:** Automatically create and populate Notion database pages with key information extracted from Gong sales calls, saving sales reps time and improving data accuracy.
- **Real-time Sales Call Analysis:** Trigger AI-powered analysis of sales calls immediately after they occur, providing timely insights for coaching and performance improvement.
- **Centralized Sales Data Repository:** Aggregate all sales call data, including recordings, transcripts, and AI-generated insights, in a central Notion database for easy access and reporting.

## How it works:

1. **Trigger:** The workflow is triggered by new sales call data, likely from Gong, via the "Execute Workflow Trigger" node.
2. **Retrieve Existing Call IDs:** The workflow retrieves all existing call IDs from a Notion database ("Get all older Calls") to avoid processing duplicates.
3. **Deduplication:**  The workflow compares new calls with existing ones ("Only Process New Calls") and proceeds only with the new, unprocessed calls.
4. **Slack Notification (Start):** A Slack message is posted to a designated channel to notify the team that call processing has begun ("Post Slack Receipt").
5. **Data Bundling:** Aggregates data related to the Slack message into a single bundle.
6. **Data Merging:** Merges call data with slack data
7. **Looping:** Iterates through each new call ("Loop Over Calls").
8. **Notion Page Creation:** For each call, a new page is created in a Notion database ("Create Notion DB Page"). The page is populated with call metadata such as title, date, recording URL, company information, Salesforce opportunity details, and attendees.
9. **AI Processing (Sub-Workflow):** The call data and the newly created Notion page ID are passed to an AI-powered sub-workflow ("AI Team Processor") for further analysis. This likely involves extracting key insights, sentiment analysis, and other relevant information.
10. **Slack Notification (Progress):**  The progress of the AI processing is updated in the Slack channel ("Update Slack Progress").
11. **Slack Notification (Completion):** Once all calls are processed, a final Slack message is sent to notify the team that the job is complete and all call data has been added to the Notion database ("Post Completed Calls Message").

## Services:

- **Gong:** Sales call recording and analytics platform (inferred).
- **Notion:** Workspace and database platform.
- **Slack:** Team communication platform.
- **Salesforce:** CRM to keep track of customer information and sales opportunities

## Hashtags:

#n8n #automation #sales #callanalysis #notion #slack #gong #salesforce
