# Post new Google Calendar events to Telegram

## Use cases:
- Automatically notify a Telegram group about newly scheduled team meetings in Google Calendar.
- Send reminders for upcoming events to a personal Telegram chat.
- Keep a Telegram channel updated with new events from a public Google Calendar, such as webinars or workshops.

## How it works:
1.  **Google Calendar Trigger:** The workflow starts with a "Google Calendar Trigger" node that monitors a specified Google Calendar for new events. It checks for new events every minute.
2.  **Telegram:** When a new event is detected, the "Telegram" node sends a message to a specified Telegram chat. The message includes the event name, description, location, start date, end date, and the email of the event creator. The message is formatted using the data received from the "Google Calendar Trigger" node.

## Services:
- Google Calendar
- Telegram

## Hashtags:
#n8n #automation #GoogleCalendar #Telegram #notifications
