# Chinese Vocabulary Practice with Telegram and AI

## Use cases:

- **Language Learning:** Users can practice their Chinese vocabulary interactively through a Telegram bot that provides multiple-choice questions.
- **Personalized Tutoring:**  The bot adapts to the user's level and provides immediate feedback, creating a personalized learning experience.
- **Automated Quiz Generation:** Educators or language enthusiasts can easily create and deploy a vocabulary quiz bot without extensive coding.

## How it works:

1.  **Telegram Trigger:** The workflow starts when a user sends a message to a Telegram bot.
2.  **Retrieve Vocabulary:** The workflow fetches a list of Chinese words and their English translations from a Google Sheet.
3.  **Aggregate Vocabulary Lists:** Transforms Google sheet data into a proper format for the AI Agent.
4.  **AI Agent:** An AI Agent uses the message and the vocabulary list to create multiple-choice questions and evaluate user responses. It stores the conversation history using the user's chat ID, allowing for personalized and continuous practice.
5.  **OpenAI Chat Model:** The AI agent uses a Chat Model (e.g., OpenAI's gpt-4o-mini) to generate questions and provide feedback. The model is configured with a system prompt that defines its role as a language tutor.
6.  **Simple Memory:** Used for keeping track of the conversation.
7.  **Answer to the User:** The bot sends the AI Agent's response back to the user via Telegram.

## Services:

-   **Telegram:** Messaging platform for user interaction.
-   **Google Sheets:** Stores the vocabulary list.
-   **OpenAI:** AI model used to generate questions and provide feedback.

## Hashtags:

#n8n #automation #workflow #languagelearning #telegrambot
