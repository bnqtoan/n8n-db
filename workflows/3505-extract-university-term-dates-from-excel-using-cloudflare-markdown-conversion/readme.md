# University Term Dates to ICS Calendar

## Use cases:

- Automatically add university term dates to your calendar from an Excel file provided on the university website.
- Share a calendar file with classmates or instructors, ensuring everyone is aware of key academic dates.
- Adapt the workflow to other Excel files like course schedules or event calendars, automating the calendar creation process.

## How it works:

1.  **Manual Trigger:** The workflow starts when you click "Test workflow".
2.  **Get Term Dates Excel:** Downloads an Excel file containing term dates from a specified URL.
3.  **Markdown Conversion Service:** Converts the Excel file to a markdown table format using Cloudflare's Markdown Conversion Service. This step is essential since LLMs cannot parse excel files directly.
4.  **Extract Target Sheet:** Extracts the relevant data from the markdown content.
5.  **Extract Key Events and Dates:** Uses the information extractor to extract specific events and dates (e.g., week number, week beginning, title) from the markdown table using a large language model.
6.  **Events to Items:** Splits the extracted events into individual items for further processing.
7.  **Fix Dates:** Converts the "week_beginning" field into a proper ISO 8601 date format.
8.  **Sort Events by Date:** Sorts the events by the "week_beginning" date.
9.  **Events to ICS Document:** Uses a Python code node to convert the extracted events into an ICS (iCalendar) format. This format is compatible with most calendar applications.
10. **Create ICS File:** Converts the ICS content into a binary file.
11. **Send Email with Attachment:** Sends an email with the generated ICS file attached, allowing recipients to easily import the term dates into their calendars.

## Services:

-   Cloudflare: Used for Markdown Conversion Service.
-   Google Gemini: Used for LLM-powered data extraction via the Information Extractor node.
-   Gmail: Used for sending the generated ICS file via email.
-   University Website: Used for downloading the Excel file.

## Hashtags:

#n8n #automation #calendar #excel #llm
