# My Workflow

## Use cases:

- **Automated Meeting Summarization:** Automatically generates summaries of online meetings and sends them to relevant participants.
- **Follow-up Action Generation:** Creates draft follow-up emails based on the meeting content, saving time and ensuring consistent communication.
- **Centralized Transcription Processing:** Efficiently processes meeting transcriptions from various sources (e.g., Microsoft Teams, OneDrive) and stores the data in a structured format.

## How it works:

1.  **Triggering:** The workflow can be triggered either by a schedule (e.g., every 5 minutes via "Schedule Trigger") to check for new transcripts or via webhook ("On form submission", "Web Page", "Next Action").
2.  **Data Retrieval:**
    *   Fetches call records using the "Get Call Records" node.
    *   Retrieves meeting details and transcript data from various sources using HTTP Request nodes ("Get Transcript Data", "Search OneDrive for Meeting", "List Transcripts2", "Get Transcript", "Get Transcript1").
    *   Gets online meeting details, filtering for join URLs ("Filter for Join Url1", "Get Online Meeting Details1", "Split Out Meetings1").
3.  **Data Processing:**
    *   Splits out transcriptions into individual items ("Split Out Transcriptions", "Split Out3").
    *   Removes duplicate entries ("Remove Duplicates").
    *   Checks if transcripts have already been processed by querying a Postgres database ("Check if Processed").
    *   Sorts the transcripts ("Sort1").
    *   Filters items based on whether they contain information ("Filter No Items").
4.  **AI-Powered Analysis:**
    *   Uses the OpenAI Chat Model to create summaries of the meeting transcripts ("AI Agent Create Summary").
    *   Also to draft follow up action items. ("AI Agent Draft Follow Up")
5.  **Data Storage:** Stores the meeting data, summaries, and other relevant information in a Postgres database ("Save Data").
6.  **Notification:** Sends an email notification with the meeting summary ("End Analysis Notification").
7.  **Follow-up Action:** Sends a follow-up email using Microsoft Outlook ("Send Follow Up").

## Services:

*   Microsoft Outlook
*   Postgres
*   OpenAI API
*   Microsoft Graph API (OneDrive, Teams)

## Hashtags:

#n8n #automation #meetingSummary #ai #transcription
