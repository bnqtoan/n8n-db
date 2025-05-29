# Mail Agent

## Use cases:

- **Automated Email Triage:** Automatically sort and label incoming emails in Gmail based on content, sender, and predefined rules, ensuring important emails are prioritized and junk mail is archived.
- **Intelligent Email Archiving:** Automatically archive unnecessary emails, reducing inbox clutter and saving time spent on manual sorting.
- **Personalized Email Management:** Customize the AI's rules for labeling and archiving emails based on individual preferences and needs, creating a tailored email management system.

## How it works:

1.  **Trigger:** The workflow is initiated either manually via "Test workflow" or automatically via the "Telegram Trigger" when a new message is sent to a specified Telegram bot.
2.  **Fetch Emails:** The "Get mails in INBOX" node retrieves all emails from the user's Gmail inbox.
3.  **Filter Processed Emails:** The "Filter processed" node filters out emails that have already been labeled "NotNeed" or "MustRead," preventing redundant processing.
4.  **AI-Powered Categorization:** The "Categoriser" node uses an AI agent (powered by OpenRouter Chat Model) to analyze each email.  Based on a predefined system message and rules, it decides whether to archive the email (using `mail_archiver`) or apply a specific label (using `mail_label_setter`). The AI agent prioritizes archiving absolutely unnecessary emails.
5.  **Aggregation:** The "Aggregate" node compiles the results of the AI categorization.
6.  **Reporting** The "Reporter" node uses an AI agent (powered by OpenRouter Chat Model) to summarize the actions that were taken in the "Categoriser" node.
7.  **Telegram Notification:** The "Telegram" node sends a message to the Telegram bot with a summary of the processed emails and actions taken.

## Services:

-   Gmail
-   Telegram
-   OpenRouter

## Hashtags:

#n8n #automation #emailManagement #gmail #ai #telegram
