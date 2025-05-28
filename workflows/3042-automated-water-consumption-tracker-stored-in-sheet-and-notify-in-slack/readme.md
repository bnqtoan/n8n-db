# Drink Water Reminder and Logging Workflow

## Use cases:

1.  **Personalized Hydration Reminders:** Sends customized reminders to drink water throughout the day via Slack, adjusting the message based on past drinking habits and using AI to provide motivational and health-focused prompts.
2.  **Automated Water Intake Logging:** Automatically logs water consumption data into a Google Sheet when the user interacts with the Slack reminder, tracking the amount and timestamp for future analysis.
3.  **Progress Tracking and iOS Health Integration:** Displays a visual progress bar in Slack indicating daily water intake goals and provides a direct link to an iOS Shortcut for adding the logged water data to the Apple Health app.

## How it works:

1.  **Scheduled Trigger:** The workflow starts with a Schedule Trigger that runs at random minutes within specific hours of the day (8 AM to 11 PM).
2.  **Data Retrieval from Google Sheets:**
    *   Retrieves the daily water intake target from a "setting" sheet using the "Google Sheets - Get Target" node.
    *   Fetches the water consumption log for the current day from a "log" sheet using the "Google Sheets - Get Today Water Log" node.
3.  **Data Aggregation:**
    *   "Limit" node to keep the last item
    *   "Summarize" node calculates the total water consumed today.
    *   "combine data" node merges the target, recent log, and sum data for the AI prompt.
4.  **Conditional Check:**
    *   "If" node checks if the user has recently logged water intake (within the last 30 minutes).
5.  **Notification Delay (if needed):**
    *   If water was logged recently, the "Wait" node pauses the workflow for a random duration (21-31 minutes) to avoid redundant reminders.
6.  **AI-Powered Reminder Message:**
    *   "OpenAI" node generates a personalized reminder message based on the last logged water intake time, current time, daily water intake count, and a predefined prompt for gentle, health-focused advice. The prompt instructs the AI to respond in JSON format with a `message` field.
7.  **Slack Notification:**
    *   "Slack send drink notification" node sends a message to a specified Slack channel with the AI-generated reminder and action buttons for quickly logging different water amounts (100, 150, 200, 250, 300).
8.  **Slack Interaction Handling:**
    *   "slack drink webhook" node listens for interactions with the action buttons in Slack.
    *   "slack_action_payload" node extracts the payload.
    *   "slack_action_drink_data" node extracts the value, message text, and generates the iOS Shortcut URL with data.
9.  **Water Intake Logging:**
    *   "Google Sheets - log water value to sheet" node appends the water amount and timestamp to the "log" Google Sheet.
10. **Confirmation Message:**
    *   "Send to Slack with confirm" node sends a confirmation message back to the user in the same Slack thread, providing a button to open the iOS Health app via the generated shortcut URL.
    *   The `Edit Fields-Set progress` node calculates the percentage of progress.

## Services:

*   Google Sheets
*   Slack
*   OpenAI
*   iOS Shortcuts (indirectly, via URL scheme)

## Hashtags:

#n8n #automation #workflow #hydration #slack #googleSheets #OpenAI
