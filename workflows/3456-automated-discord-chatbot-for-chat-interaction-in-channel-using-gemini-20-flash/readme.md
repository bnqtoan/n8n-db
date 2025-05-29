# Youtube Discord Bot

## Use cases:

-   **Discord Community Support:** Provide instant answers to user questions within a Discord server, leveraging the knowledge base of YouTube video transcripts, specifically for the "Presting Podcasts" channel.
-   **Interactive Q&A Sessions:** Facilitate live Q&A sessions within a Discord server, where users can ask questions related to the YouTube content and receive intelligent, context-aware responses.
-   **Content Discovery and Summarization:** Allow users to quickly find information within the YouTube content by asking specific questions and receiving summarized answers.

## How it works:

1.  **Webhook Trigger:** The workflow starts when a POST request is sent to the designated webhook URL (`Webhook` node). This is likely triggered by a Discord bot command. The webhook expects a payload containing `userId`, `userName`, and `question`.
2.  **AI Agent Prompting:** The `Discord AI Response Agent` node receives the data from the webhook. It constructs a prompt that includes the username and question. A system message instructs the agent to be a helpful assistant, answer in the language of the question, and utilize transcripts of "Presting Podcasts" YouTube videos for additional context. It also instructs the agent to begin all answers with `@insertusername`.
3.  **Language Model Interaction:** The AI Agent uses the `Google Gemini Chat Model` node, leveraging the Gemini 2.0 Flash model, to generate a response based on the prompt and context from the Simple Memory node.
4.  **Memory Management:** The `Simple Memory` node stores and retrieves conversation history based on the user's ID (`userId`). This allows the AI to maintain context across multiple interactions with the same user, improving the quality of responses.
5.  **Response Formatting:** The `correctNaming` node formats the AI's response into a simple JSON structure with the key name "answer".
6.  **Webhook Response:** Finally, the `Respond to Webhook` node sends the formatted response back to the Discord bot, which then displays it to the user in the Discord channel.

## Services:

-   **Discord:** The workflow is designed to interact with a Discord server, receiving questions and sending responses via a Discord bot.
-   **Google Gemini API:** Uses Google's Gemini API (accessed through the `@n8n/n8n-nodes-langchain.lmChatGoogleGemini` node) to generate conversational responses.
-   **YouTube (Presting Podcasts):** Implicitly relies on transcripts of YouTube videos from the "Presting Podcasts" channel as a knowledge base for the AI agent.

## Hashtags:

#n8n #DiscordBot #AI #Automation #GeminiAPI
