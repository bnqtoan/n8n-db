# Google Keep to Google Sheets with AI Processing

## Use cases:

1.  **Expense Tracking:** Automatically extract expense amounts from Google Keep notes and record them in a Google Sheet for budgeting and financial analysis.
2.  **Note Summarization:** Use OpenAI to summarize long Google Keep notes and save the summaries in a Google Sheet for quick review.
3.  **Data Extraction:** Extract specific data points (e.g., dates, names, locations) from Google Keep notes using AI and populate a Google Sheet for structured data analysis.

## How it works:

1.  **Trigger:** The workflow starts when you manually trigger it ("When clicking ‘Test workflow’" node).
2.  **Search Google Drive:** It searches a specific folder ("Keep" folder) in your Google Drive for files ("Search in “Keep” folder" node). You must set the correct folder ID.
3.  **Batch Processing:** The found files are processed in batches of 10 ("Loop every 10 items" node).
4.  **File Type Filter:**  The workflow filters for files with the `.json` extension ("If extension is json" node), as Google Keep exports notes as JSON files.
5.  **Download Files:** The JSON files are downloaded from Google Drive ("Download the files" node).
6.  **Extract JSON Content:** The content of the JSON file is extracted ("Extract from File" node).
7.  **Content filtering (optional):** Filter the files that have specific keyword ("dépensé" or "depense") in the content to get only the expense notes ("Filter" node). If you don't need to filter it, just remove the node.
8.  **Archived Status Check:** The workflow checks if the note is archived ("If is archived is false" node).
9.  **AI Processing (Optional):** If the note is not archived, the note's content is sent to an OpenAI Chat Model to extract amount in euros ("OpenAI Chat Model" node). The response only contain the amount to extract. This node is an AI agent. If you don't need it, just delete the node.
10. **Data Preparation:** The workflow sets the fields to be exported to Google Sheets, including content, created date, edited date, archive status, and the amount extracted by the AI model ("Set the fields for export" node).
11. **Append to Google Sheet:** The extracted information is appended to a Google Sheet ("Add to google sheet" node). You must set the correct document ID.

## Services:

*   Google Drive
*   Google Sheets
*   OpenAI

## Hashtags:

#n8n #automation #googlekeep #googlesheets #openai
