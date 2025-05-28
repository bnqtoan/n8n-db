# Automatically Send Daily Meeting List to Telegram

## Use cases:

- **Daily Schedule Reminder:** Automatically receive a list of your meetings for the day each morning, ensuring you're prepared and on time.
- **Meeting Guest Awareness:** Stay informed about who will be attending your meetings, allowing you to prepare relevant materials or talking points.
- **Team Coordination:** If connected to a shared calendar, team members can receive a consolidated list of team meetings, improving coordination and attendance.

## How it works:

This workflow automates the process of retrieving your daily meetings from Google Calendar and sending them to you via Telegram.

1.  **Schedule Trigger ("Every morning @ 6"):** This node triggers the workflow every day at 6:00 AM (or configured time).
2.  **Get meetings for today:** Retrieves all meetings scheduled for the current day from a specified Google Calendar. The `timeMin` and `timeMax` parameters define the date range for the current day.
3.  **Set:** Extracts and formats relevant information from the meeting data, including the meeting name, start time, and guest list.
4.  **Function:** Formats the extracted data into a human-readable message. This message includes the meeting name, formatted time (in "fa-IR" locale with hour and minute), and a list of guest email addresses. If there are no guests, it indicates "No guests."
5.  **Telegram:** Sends the formatted message to your Telegram account via a specified Telegram bot.

## Services:

-   Google Calendar
-   Telegram

## Hashtags:

#n8n #automation #googlecalendar #telegram #meetings
