# Hey Siri, Ask Agent Workflow

## Use cases:

- **Voice-Controlled Information Retrieval:** Ask questions via Siri and receive answers dictated back to you, leveraging an AI agent for information retrieval or task execution.
- **Hands-Free Task Automation:** Trigger n8n workflows with voice commands to automate tasks like setting reminders, sending messages, or controlling smart home devices.
- **Context-Aware Assistance:** Provide context such as the current date and time to the AI agent, enabling it to deliver more personalized and relevant responses.

## How it works:

1.  **"Hey Siri" Activation:** The workflow is initiated when you say "Hey Siri" and use the custom phrase "AI Agent" (or whatever name you give the shortcut).
2.  **Voice Input:** Siri prompts you for spoken input.
3.  **Transcription and Webhook Trigger:** The spoken input is transcribed and sent as a POST request to the `When Called by Apple Shortcut` Webhook trigger in n8n.
4.  **AI Agent Processing:** The `AI Agent` node receives the transcribed text and the current date and time. It uses this information along with a predefined system message to formulate a response. The system message instructs the AI to act as a helpful assistant, providing concise answers optimized for voice delivery.
5.  **OpenAI Chat Model:** The `OpenAI Chat Model` (specifically `gpt-4o-mini`) processes the prompt from the AI Agent.
6.  **Response Dictation:** The `Respond to Apple Shortcut` node receives the AI Agent's output and sends it back to the Apple Shortcut, which then dictates the response to you via Siri.

## Services:

-   **Apple Shortcuts:** Used to capture voice input and trigger the n8n workflow via webhook.
-   **OpenAI API:** Powers the AI Chat Model for generating responses based on the provided prompt and system message.

## Hashtags:

#n8n #automation #Siri #AIagent #voicecontrol
