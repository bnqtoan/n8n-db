# MOTION TUTOR

## Use cases:

- **Personalized Learning Assistant:** Provides tailored lessons and answers to student questions via Telegram, using Airtable as a knowledge base.
- **Automated Information Retrieval:** Automatically fetches and summarizes information from Airtable based on user queries sent through Telegram.
- **Scheduled Knowledge Delivery:** Delivers scheduled learning content or reminders via Telegram, pulling information from Airtable and using AI for content generation.

## How it works:

This workflow acts as a motion tutor, leveraging AI and a knowledge base stored in Airtable. Here's a breakdown:

1.  **Telegram Trigger/Schedule Trigger:** The workflow is initiated either by a Telegram message from a user or a pre-defined schedule.
2.  **AI Agent:** An AI agent receives the trigger data (either the message or schedule event).
3.  **OpenAI Chat Model:** The AI agent uses a configured OpenAI Chat Model to process the user's request or generate appropriate content.
4.  **Structured Output Parser:** Parses the output from the OpenAI Chat Model into a structured format.
5.  **Airtable interaction:** The workflow interacts with multiple Airtable bases, retrieving information to be used in responding to the user's request or creating new messages.
6.  **Telegram:** Finally, the workflow sends the generated response back to the user via Telegram.
7. **Memory Component:** The AI agent takes into account the memory of past conversations.

This process has been created 4 times, implying the same function is being performed with different data.

## Services:

-   Telegram
-   Airtable
-   OpenAI

## Hashtags:

#n8n #automation #AI #Telegram #Airtable #learning #langchain
