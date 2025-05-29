# Telegram Pomodoro Workflow

## Use cases:

- Personal Productivity: Automate Pomodoro sessions via Telegram, receiving notifications for work intervals and breaks. Track progress in Google Sheets.
- Remote Team Management: Facilitate structured work-rest cycles for remote teams, ensuring focus and preventing burnout, with session data stored for review.
- Habit Formation: Use the bot as a consistent prompt for adhering to the Pomodoro Technique, aiding in the development of productive work habits.

## How it works:

1.  **Telegram Trigger:** The workflow starts when a user sends a message to the Telegram bot.
2.  **Command Recognition:** The workflow checks if the message starts with "/" to determine if it's a command. If not, the bot sends an instruction message with available commands like "/start" and "/stop".
3.  **Start/Stop Logic:** It distinguishes between the "/start" and "/stop" commands.
    *   **/start:** Initiates a Pomodoro session. A "Start Cycle Notification" is sent via Telegram.
    *   **/stop:** Terminates the ongoing session. A "End of Session Notification" is sent, and session variables are cleared.
4.  **Deep Work Cycles:** For each cycle:
    *   A "Deep Work" timer (25 minutes by default) begins.
    *   "Record Deep Work" append data to Google Sheets.
    *   After the "Deep Work" timer, a "Short Break Notification" is sent and start Break Timer.
5.  **Break Cycles:** For each Break:
    *   After the "Break" timer, the counter increments.
    *   Then user will receive a "Back to Work Notification"
6.  **Session Tracking:** The workflow maintains a count of Pomodoro cycles using static workflow data.
7.  **Long Break:** After every four Pomodoro cycles, it triggers a "Long Break Notification" and logs the break in Google Sheets. The variables are then cleared for the next session.
8.  **Data Logging:** Each deep work and long break session is recorded in a Google Sheet, including date, time, user ID, session ID, block type, and duration.

## Services:

-   Telegram API: Used for sending and receiving messages to/from users.
-   Google Sheets API: Used for logging Pomodoro session data (date, time, session ID, Pomodoro count, etc.).

## Hashtags:

#n8n #automation #pomodoro #telegram #productivity
