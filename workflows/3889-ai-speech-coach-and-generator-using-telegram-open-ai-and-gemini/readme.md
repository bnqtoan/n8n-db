# Speech Support Workflow

## Use cases:

- **Personal Speech Coaching:**  Individuals can use this workflow to get AI-powered feedback on their speech drafts, practice their delivery, and refine their message before presenting.
- **Content Creation Assistance:**  Content creators can leverage this to quickly generate initial drafts, get improvement ideas, and iterate on their scripts for videos, podcasts, or presentations.
- **Accessibility Tool:**  This workflow can assist individuals with speech impairments by providing real-time feedback and suggestions to improve clarity and coherence.

## How it works:

1.  **Receive Telegram Message:** The workflow starts by listening for incoming messages from Telegram. It supports both text and voice messages.
2.  **Check For Text or Voice Message:** It checks if the message is a text or voice message.
3.  **If Voice Message:** If it is a voice message, it downloads the audio file and transcribes it into text using the OpenAi.
4.  **Route Flow Based on Message Content:** This node determines the next action based on the user's message:
    *   **"new speech"**:  Clears the AI's memory and sets a new prompt to start a new speech.
    *   **"generate speech"**: Sets a system prompt that instructs the AI to generate a new speech based on previous interactions and feedback.
5.  **Dynamic System Prompting**: Depending on the user's request, a different system prompt is sent to the AI Agent. This helps tailor the AI's responses and behaviors to fit the current task (starting a new speech, generating a speech based on feedback, or providing feedback on a speech).
6.  **AI Agent:** The Langchain AI Agent receives the text (either transcribed or directly from a text message) and the selected system prompt. It then interacts with the Google Gemini Chat Model to generate a response.
7.  **Store Conversation Memory:** Store the interaction so the AI remembers the context of the conversation.
8.  **Telegram-Ready Output**: Cleans the LLM response for Telegram and Split the text into smaller chunks to ensure that the message can be sent via Telegram.
9.  **Respond to Telegram Message:**  The workflow sends the generated response back to the user via Telegram in text format.

## Services:

-   Telegram
-   Google Gemini
-   OpenAi

## Hashtags:

#n8n #automation #AI #speechwriting #telegram
