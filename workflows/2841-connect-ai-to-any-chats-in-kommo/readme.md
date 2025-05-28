# Connect AI to Kommo

## Use Cases:

- **Intelligent Call Routing:** Automatically analyze incoming voice messages or transcribed calls to identify key entities and route the conversation to the appropriate department or agent in Kommo.
- **AI-Powered Lead Enrichment:** Enrich new leads captured in Kommo by analyzing the content of their initial messages or voice notes. This can help prioritize leads and personalize follow-up communication.
- **Automated Task Creation:** Based on the content of a message or voice note, automatically create tasks or reminders within Kommo to ensure timely follow-up and action.

## How it works:

1.  **Receive Message:** The workflow starts with a "Webhook" node (`new_message`) that listens for incoming messages. This likely represents a new message event from a communication channel integrated with Kommo.
2.  **Extract Entities:** The "Get Entity" node (`get_entity`) uses an HTTP Request to send the message content to an external service (likely an AI or NLP service) to extract key entities (e.g., contact names, product names, topics of interest).
3.  **Check for Stop Tag:** The "hasStopTag" node uses a Switch node to check if the message contains a specific stop tag.
4.  **Voice or Text Detection:** The "isVoice" node (If node) decides whether the message is voice or text.
5.  **Handle Voice Messages:** If the message is a voice message, the "get voice" node will send the audio to "transcribe voice" node which uses "@n8n/n8n-nodes-langchain.openAi" to transcribe.
6.  **Set Text:** The "setText" node set the content for the agent.
7.  **AI Agent:** The "ai" node, configured with a "model" (likely OpenAI's chat model) and "memory," processes the extracted information and generates a response or performs an action.
8.  **Kommo Integration:** The "Get token" and "Receive message" nodes interact with the Kommo CRM API. "Get token" authenticates with Kommo, and "Receive message" likely updates a contact, creates a task, or performs another action within Kommo based on the AI's processing.

## Services:

-   **Kommo CRM:** The workflow integrates with Kommo CRM to manage customer relationships and automate sales processes.
-   **OpenAI:** This workflow uses OpenAI's API for voice transcription and for language model capabilities.
-   **AI/NLP Service (Unspecified):** An external AI or NLP service is used to extract entities from the incoming messages. The specific service is not clear from the JSON, but it is accessed via an HTTP Request.

## Hashtags:

#n8n #automation #Kommo #CRM #AI
