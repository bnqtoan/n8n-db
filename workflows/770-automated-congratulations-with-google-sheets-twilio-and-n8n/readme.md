# Congratulations Workflow

## Use cases:

- **Automated Birthday Greetings:** Send personalized birthday wishes to employees or customers automatically via SMS.
- **Event-Based Congratulations:** Deliver congratulatory messages for milestones like work anniversaries, project completions, or other achievements.
- **Holiday Greetings:** Distribute holiday greetings automatically.

## How it works:

1.  **Daily Trigger:** The workflow starts every day at 8:00 AM using a Cron trigger.
2.  **Congratulations Calendar:** It fetches data from a Google Sheet named "Congratulations Calendar," reading the "Date," "Event Name," and "First Name" columns, to identify events scheduled for the current day.
3.  **Any Event Today?:** An IF node checks if there are any events scheduled for today.
4.  **Congratulations Messages:** Reads a Google Sheet containing predefined congratulatory messages.
5.  **Merge Data:** Combines the event data (name, recipient, phone number) with the congratulatory messages based on the "Event Name" to create combined entries.
6.  **Personalize Message:** A Function node personalizes the congratulatory message by injecting the recipient's name into a predefined message template.
7.  **Send SMS:** Finally, the workflow sends an SMS message to the recipient using Twilio, containing the personalized congratulatory message.

## Services:

-   Google Sheets
-   Twilio

## Hashtags:

#n8n #automation #googlesheets #twilio #SMS #congratulations
