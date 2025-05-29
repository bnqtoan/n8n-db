# Agente

## Use cases:

1.  **Automated Clinic Assistant:** Streamlines clinic operations by automating appointment scheduling, rescheduling, and cancellations via WhatsApp, providing quick responses and reducing manual workload for staff.
2.  **Internal Task Management:** Enables clinic staff to efficiently manage internal tasks like rescheduling appointments and maintaining the clinic's shopping list through a Telegram interface.
3.  **Proactive Appointment Confirmations:** Automatically confirms upcoming appointments with patients, reducing no-shows and improving patient engagement.

## How it works:

This workflow automates clinic communications and internal task management. Here’s a breakdown:

1.  **Incoming WhatsApp Message Handling (Webhook1, Edit Fields1, Switch):**
    *   The workflow starts by listening for incoming messages via a WhatsApp webhook.
    *   The message content is extracted, including text, images, audio, and documents.
    *   A switch node then routes the message based on its type (text, image, audio).
2.  **Text Message Processing (Assistente Clínica, AI Agent, Evolution API2):**
    *   Text messages are sent to the `Assistente Clínica` (Clinic Assistant) Langchain agent, which uses a Large Language Model (LLM) to understand the patient's request.  The Agent uses tools such as MCP Google Calendar to look for appointments, CallToHuman to escalate to a real person.
    *   The agent's response is formatted to comply with whatsapp markdown syntax.
    *   The formatted message is then sent back to the patient via the Evolution API.
3.  **Image Processing (OpenAI1, AI Agent2, Assistente Clínica):**
    *   Images are processed using OpenAI's Vision model to extract text and describe the image's content.
    *   The extracted information is analyzed by `AI Agent2` to provide insights and recommendations for the `Assistente Clínica` agent.
4.  **Audio Processing (Evolution API, Convert to File, OpenAI):**
    *   Audio messages are downloaded using the Evolution API and converted to a binary file.
    *   The audio is then transcribed into text using OpenAI's Whisper model.
    *   The transcribed text is passed to the `Assistente Clínica` for processing.
5.  **Internal Task Management (Receber Mensagem Telegram, Assistente clinica interno, Telegram, Google Tasks, MCP Google Calendar):**
    *   Clinic staff can send commands via Telegram to manage tasks.
    *   The `Assistente clinica interno` (Internal Clinic Assistant) agent processes these commands, using tools to reschedule appointments or add items to a Google Tasks shopping list.
    *   Confirmation messages are sent back to the staff via Telegram.
6. **Daily appointment confirmation (Gatilho diário, Assistente de confirmação, Evolution API):**
    * At 8 AM on weekdays, the trigger executes.
    * The `Assistente de confirmação` (Confirmation Assistant) Langchain agent, uses a Large Language Model (LLM) to list the next day appointments and ask patients to confirm it.

## Services:

*   Telegram API: For internal staff communication.
*   Evolution API: For sending and receiving WhatsApp messages.
*   Google Tasks: For managing the clinic's shopping list.
*   Google Calendar: For managing appointments (accessed via the MCP Tool).
*   OpenAI API: For language model, image analysis, and audio transcription functionalities.
*   OpenRouter: As an alternative LLM provider.
*   PostgreSQL: For Chat Memory.

## Hashtags:

#n8n #automation #healthcare #whatsapp #AIagent
