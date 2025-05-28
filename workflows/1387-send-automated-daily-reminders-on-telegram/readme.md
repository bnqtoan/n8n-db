# Daily Journal Reminder

## Use cases:

*   **Daily Prompt:** Automatically send a daily reminder to users to reflect on their activities from the previous day, fostering a habit of journaling.
*   **Personal Productivity:** Helps individuals track their accomplishments and identify areas for improvement by prompting daily reflection.
*   **Habit Formation:** Encourages the consistent practice of journaling by providing a timely and convenient reminder.

## How it works:

1.  **Morning Reminder (Cron):** The workflow starts with a Cron node that triggers every morning at 6:00 AM.
2.  **Format Reminder (Function Item):** A Function Item node takes the trigger signal and formats a message containing the previous day's date. This message acts as a prompt for the user's daily journal entry.
3.  **Send Journal Reminder (Telegram):** The formatted message is then sent via Telegram to a specified chat ID. This node requires Telegram API credentials to function.

## Services:

*   Telegram

## Hashtags:

#n8n #automation #journaling #telegram #productivity
