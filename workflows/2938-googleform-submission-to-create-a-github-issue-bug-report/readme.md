# Gform to github

## Use cases:

*   **Automated Issue Tracking:** Automatically create GitHub issues from Google Form submissions, streamlining bug reporting or feature request processes.
*   **Feedback Management:** Collect user feedback via Google Forms and automatically post them as issues on a GitHub repository for review and prioritization.
*   **Help Desk Integration:** Use Google Forms as a simple help desk interface, where submissions are converted into GitHub issues, allowing support teams to track and resolve requests efficiently.

## How it works:

1.  **Google Form Trigger:** The workflow starts when a new submission is made on a specified Google Form.
2.  **Add new Form submissions to Google Sheets:** The data from the new submission in Google Forms is added to Google Sheets.
3.  **If:** The workflow checks a condition using the 'If' node before proceeding (the condition is not defined in the data).
4.  **Filter out already posted issues:** This step seems to filter out the issues that have already been added to Github (but has no logic).
5.  **Langchain Nodes (OpenAI Chat Model, Window Buffer Memory, Structured Output Parser, Agent):** Transforms the Google Form data into a structured format suitable for creating a GitHub issue, using an OpenAI Chat Model, Memory Buffer and a Structured output parser.
6.  **Add issue to GitHub:** Creates a new issue in a specified GitHub repository using the formatted data.
7.  **Send notification to discord w link:** Sends a notification to a Discord channel with a link to the newly created GitHub issue.
8.  **Add Github link to the sheet:** Adds the link of the newly created issue to the original Google Sheet.

## Services:

*   Google Forms
*   Google Sheets
*   GitHub
*   Discord
*   OpenAI

## Hashtags:

#n8n #automation #github #googleforms #issueTracking
