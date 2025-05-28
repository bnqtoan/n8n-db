# Gratitude Jar Reminder

## Use cases:

-   **Daily Gratitude Prompt:** Sends a daily reminder to users to reflect on positive experiences and record them in a gratitude journal or app.
-   **Mood Booster:** Helps improve mood and well-being by encouraging users to focus on positive aspects of their day.
-   **Customized Reminder:** The reminder message can be dynamically re-written each time to avoid the user getting bored of the same message.

## How it works:

1.  **Schedule Trigger:** The workflow starts with a `Schedule Trigger` node that activates at 9:00 PM (21:00) every day.
2.  **Write Reminder:** The LLM Chain node take a plain text message, and rewrite the message to send reminder to user to record good thing today.
3.  **Azure OpenAI Chat Model:** This node takes the reminder and uses Azure OpenAI to rephrase the reminder text with a temperature settings of 0.9 for more variety.
4.  **Reformat Output from Chat Model:** The `Set` node reformats the output from the OpenAI model.  It removes markdown, HTML tags, and extra newline characters to ensure proper formatting for the LINE Push API. The result is stored in a variable called `posestoday`.
5.  **Line Push Message:** The `HTTP Request` node sends a push message to the user's LINE account using the LINE Push API.  It uses the reformatted text from the `posestoday` variable as the message content. The `to` field should be replaced with the user's LINE ID.

## Services:

-   **Azure OpenAI:** Used to generate a varied reminder message.
-   **LINE API:** Used to send the reminder message to the user via LINE.

## Hashtags:

#n8n #automation #gratitude #LINE #OpenAI
