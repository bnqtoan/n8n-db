# Email Summary Agent

## Use cases:

- **Daily Team Briefing:** Automatically generate a daily summary of important emails received by a team, highlighting key issues and action items to improve team alignment.
- **Executive Overview:** Provide executives with a concise overview of the day's critical email communications, saving them time and ensuring they stay informed.
- **Support Ticket Triage:** Summarize incoming support emails to quickly identify urgent issues and assign them to the appropriate team members.

## How it works:

This workflow automates the process of summarizing emails and sending a report. Here's how it works:

1.  **Daily Trigger:** The workflow starts every day at 7 AM using the "Daily 7AM Trigger" node.
2.  **Fetch Emails:** The "Fetch Emails - Past 24 Hours" node retrieves all emails received in the past 24 hours from a specified email address (isb.quantana@quantana.in) using the Gmail API.
3.  **Organize Email Data:** The "Organize Email Data - Morning" node extracts key information from each email, such as sender, recipient, CC list, and the email snippet.
4.  **Summarize Emails with OpenAI:** The "Summarize Emails with OpenAI - Morning" node utilizes the OpenAI GPT-4O-MINI model to generate a summary of the emails, identify key details, issues, and action items.
5.  **Send Summary:** The "Send Summary - Morning" node sends the generated summary in a styled HTML email to a specified recipient (team-email@example.com) and includes a CC list (cc-list@example.com).

## Services:

*   Gmail API
*   OpenAI API

## Hashtags:

#n8n #automation #emailSummary #openai #gmail
