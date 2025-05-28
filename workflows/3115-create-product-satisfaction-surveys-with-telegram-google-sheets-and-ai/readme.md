# Product Satisfaction Survey: DJI Mini 2

## Use cases:
- Conduct customer satisfaction surveys to gather feedback on products or services.
- Automate the process of collecting and organizing survey responses in a structured manner using Google Sheets.
- Use AI to have natural follow-up questions.

## How it works:
1.  A Telegram Trigger node initiates the workflow when a user sends a message to the Telegram bot.
2.  The workflow checks for existing user records in a Google Sheet and creates a new record if one doesn't exist.
3.  Based on the user's command (/start or /next), the workflow manages the survey's progress using Redis to store the current question index and session data.
4.  The workflow retrieves questions from a Google Sheet and sends them to the user via Telegram.
5.  When the user responds, the workflow determines if a follow-up question should be asked using a text classifier node.
6.  If a follow-up question is needed, an AI agent is used to generate and send it.
7.  User responses and AI agent conversations are stored in the Google Sheet.
8.  Once all questions are answered, the workflow notifies the user that the survey is complete.

## Services:
- Telegram: Used for interacting with users via a Telegram bot.
- Google Sheets: Used for storing survey questions and responses.
- Redis: Used for managing survey state and session data.
- OpenAI: Used for follow-up questions

## Hashtags:
#n8n #automation #survey #telegram #googlesheets #openai
