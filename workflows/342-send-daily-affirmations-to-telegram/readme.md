## Daily Text Affirmations Workflow - Readme

This workflow automates the process of sending daily affirmations to a Telegram user at a specific time.

### Use cases:

*   **Personal Motivation:** Receive a daily dose of positivity and encouragement to start your day.
*   **Habit Formation:** Integrate daily affirmations into your routine to cultivate a positive mindset.
*   **Wellness Application:** Promote mental well-being by delivering uplifting messages regularly.

### How it works:

1.  **Cron Trigger:** The workflow is triggered daily at 9:00 AM, as configured in the Cron node.
2.  **Fetch Affirmation:** The "HTTP Request" node makes a GET request to the `https://affirmations.dev` API to retrieve a random affirmation.
3.  **Send to Telegram:** The "Telegram" node sends a message to a specified Telegram chat, including a personalized greeting and the affirmation fetched from the API.  The Telegram message uses the `affirmation` field from the JSON response of the HTTP Request node.

### Services:

*   **Telegram:** Sends the daily affirmation to the user.
*   **affirmations.dev API:** Provides the daily affirmation text.

### Hashtags:

#n8n #automation #telegram #affirmations #daily
