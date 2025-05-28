# Harvey Specter's Excuse Generator

## Use cases:

- **Automated Email Response:** Automatically generates and sends excuses when an email from a specific person (e.g., Louis Litt) is received, helping to manage unwanted requests or meetings.
- **Humorous Internal Communication:** Shares both the incoming email and the generated excuse on a Slack channel to showcase the workflow's actions.
- **Customizable Excuse Generation:** Uses a spreadsheet to create dynamic excuses based on predefined phrases.

## How it works:

1.  **Read Harvey's Email:** Reads emails from Harvey Specter's configured IMAP email account.
2.  **Who Is The Email From?:** Checks if the email is from "Louis Litt <louis\_litt\_1970@yahoo.com>".
3.  **If the email is from Louis Litt:**
    -   **Read Excuses File:** Reads an Excel file containing excuse phrases.
    -   **Retrieve Excuses Spreadsheet Data:** Extracts the excuse phrases from the Excel file.
    -   **Generate Excuse:** Randomly combines phrases to generate a unique excuse.
    -   **Merge Excuse and Mail Data:** Combines the generated excuse with the original email data.
    -   **Send Email:** Sends an email back to Louis Litt with the generated excuse as the body.
    -   **Slack (Louis):** Posts a summary of the email exchange on a Slack channel.
4.  **If the email is NOT from Louis Litt:**
    -   **Slack (General):** Posts a notification to a general Slack channel indicating an email has been received.

## Services:

-   IMAP (Email Reading)
-   SMTP (Email Sending)
-   Slack
-   Excel (Spreadsheet)

## Hashtags:

#n8n #automation #email #slack #excuse
