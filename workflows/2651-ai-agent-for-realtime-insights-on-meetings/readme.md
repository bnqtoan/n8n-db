# AI Agent for Realtime Insights on Meetings

## Use Cases

- **Automated Meeting Transcription and Summarization:** Automatically transcribe meetings in real-time and provide summaries, saving time and improving information retention.
- **Real-time Note Taking:** Automatically create notes based on keywords spoken during meetings, ensuring important points are captured.
- **Contextual AI Assistance:** Trigger AI-powered actions based on meeting content, like asking questions or generating insights using the OpenAI assistant.

## How it works

This workflow automates meeting transcription and analysis using AI. Here's a breakdown:

1. **Start (Scenario 1 or 2):**
    - **Scenario 1:** Initiates the workflow using hardcoded data for testing to Create Recall bot, using the URL defined in "Scenario 1 Start - Edit Fields"
    - **Scenario 2:** Starts with a Webhook node ("Scenario 2 Start - Webhook") that listens for transcription updates from Recall.ai.
2. **Create Recall bot:**
    - Creates a bot with a meeting URL to join and transcribe the meeting, setting up real-time transcription through the Recall.ai API.
3. **Create OpenAI thread:**
    - Create the thread on OpenAI assistant.
4. **Create data record:**
    - Create a database record, setting input with the thread and bot ID.
5. **Insert Transcription Part:**
    - Receive real-time transcriptions via the webhook. The "Insert Transcription Part" node (Postgres) appends new dialogue snippets to a `dialog` array within the `output` JSONB column of a database record.
6. **If Jimmy word:**
    - Conditional logic to check if the word "Jimmy" is present in the current transcription.
7. **OpenAI1:**
   - if it validates on the previous if statement or from Insert transcription directly, an OpenAI assistant is then triggered to process the transcript and provide further support.
8. **Create Note:**
    - Add the result from the OpenAI1, to create notes based on the transcript.

## Services

- **Recall.ai:** Used for creating a meeting bot and receiving real-time transcriptions.
- **AssemblyAI:** Transcription provider used by Recall.ai (configured in the "Create Recall bot" node).
- **OpenAI:** Utilized for AI-powered assistance based on meeting transcripts.
- **Supabase/Postgres:** Database used to store meeting data, transcriptions, and notes.

## Hashtags

#n8n #automation #ai #meetingtranscription #openai
