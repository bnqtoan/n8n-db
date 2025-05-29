# Google Calendar Event Reminder

## Use cases:

- Receive a Telegram message 1 hour before any event on your Google Calendar, formatted as a friendly reminder by an AI personal assistant.
- Avoid missing important meetings or appointments by receiving timely and personalized reminders.
- Transform static calendar notifications into engaging and conversational prompts, improving time management and productivity.

## How it works:

1.  **Schedule Trigger (Disabled):** This node is configured to trigger the workflow at a set interval (every minute, but currently disabled).  When active, it would start the workflow to check for upcoming events.
2.  **Get upcoming event:** Fetches events from your Google Calendar that are scheduled to start within the next hour and one minute, filtering based on the specified calendar ("davide.boizza@gmail.com").
3.  **Already sent?:** Checks if a reminder for a specific event ID has already been sent in previous workflow executions. This prevents duplicate reminders.
4.  **Secretary Agent:** Uses a Large language model (LLM) Agent to generate a natural and friendly reminder message from the information of the event. It uses a pre-defined system message to emulate a friendly virtual secretary.
5.  **Send reminder:** Sends the AI-generated reminder message to your Telegram account using the specified chat ID.

## Services:

-   Google Calendar: Retrieves event details.
-   OpenAI: Uses gpt-4o-mini model to generate personalized reminder message.
-   Telegram: Sends the reminder messages to the user.

## Hashtags:

#n8n #GoogleCalendar #Telegram #Automation #Reminder #AI
