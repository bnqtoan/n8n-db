# TG-Bot-Module-Quiz-v4-db-sell-full

## Use cases:

- **Interactive Quiz in Telegram:** This workflow enables a Telegram bot to deliver interactive quizzes to users, providing a fun and engaging learning experience.
- **Lead Generation through Quizzes:** The bot can be used to collect user data (e.g., answers, contact information) through quizzes, which can then be used for lead generation or marketing purposes.
- **Product/Service Recommendation:** Based on quiz responses, the bot can recommend specific products or services, acting as a personalized sales tool.

## How it works:

1.  **Telegram Trigger:** The workflow starts when a user interacts with the Telegram bot.
2.  **Initialization:** Variables are initialized, and the workflow checks if it's a "start" command.
3.  **Command Handling:** Based on the command received, the workflow branches to different functionalities.
    *   `/start` Command: Displays a welcome message.
    *   Tests List: Retrieves and displays a list of available tests from a database.
    *   Test Execution:
        *   Fetches a specific test's questions and answers from a PostgreSQL database.
        *   Randomizes the order of questions.
        *   Sends each question to the user via Telegram.
        *   Waits for the user's answer.
        *   Deletes the question message after an answer has been received.
        *   Saves the user's answer to the database.
        *   After all questions are answered, calculates the results and sends them to the user.
4.  **Database Interaction:** PostgreSQL nodes are used extensively to retrieve questions, store answers, and calculate results.
5.  **Conditional Logic:** Switch and If nodes are used to control the flow of the workflow based on user input and data retrieved from the database.

## Services:

-   Telegram
-   PostgreSQL

## Hashtags:

#n8n #telegrambot #quiz #automation #postgres
