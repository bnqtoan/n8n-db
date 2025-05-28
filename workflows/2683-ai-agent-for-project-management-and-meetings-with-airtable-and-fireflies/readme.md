# AI Agent for project management and meetings with Airtable and Fireflies

## Use cases:

- **Automated Task Management:** Automatically creates tasks in Airtable from meeting transcripts, ensuring action items are never missed.
- **Client Notification:** Informs clients about their action items after a meeting, improving communication and accountability.
- **Meeting Scheduling:** Schedules follow-up calls via Google Calendar if the meeting transcript indicates a need for it, streamlining the meeting follow-up process.

## How it works:

1.  The workflow starts with a **Webhook** node that listens for meeting completion events, typically triggered by Fireflies.ai after a meeting.
2.  Upon receiving the event, the **Get Meeting Content** node uses the Fireflies.ai API to fetch the meeting transcript, participants, and summary.  It uses a GraphQL query to retrieve the meeting data.
3.  The **AI Agent** node uses an OpenAI Chat Model (specifically gpt-4o) to analyze the transcript and determine action items, tasks, and whether a follow-up call is needed. It uses the `OpenAiFunctionsAgent` to interact with different tools. The prompt defines how the AI should behave, especially identifying project-related meetings and leveraging specific tools based on the transcript content.
4.  The AI Agent leverages three tools:
    *   **Create Tasks:** Creates task for a person who run this workflow.
    *   **Notify Client About Tasks:** Notifies the participant about his action items.
    *   **Create Event:** Creates a Google Calendar event.
5.  The workflow also has the option to use an **Execute Workflow Trigger** node and **Split Out** node to manually trigger the task creation and create tasks via **Create Task** node.

## Services:

-   **Fireflies.ai:** Meeting recording and transcription service.
-   **OpenAI:** AI language model for transcript analysis and task extraction.
-   **Airtable:** Database for storing and managing tasks.
-   **Gmail:** Email service for notifying clients about tasks.
-   **Google Calendar:** Scheduling service for creating follow-up meeting events.

## Hashtags:

#n8n #automation #workflow #AI #taskmanagement
