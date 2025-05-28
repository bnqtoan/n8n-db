# Reservation Medcin

## Use cases:

- **Automated Appointment Scheduling:** Patients can book appointments with Dr. Hakim through a chat interface, with the AI assistant managing availability checks and calendar updates.
- **24/7 Availability:**  Allows patients to request appointments even outside of office hours. The AI will respond with the next available slots.
- **Streamlined Patient Information Management:** Automatically captures and records patient information (name, phone number, appointment details) in Google Sheets for record-keeping and follow-up.

## How it works:

1. **Chat Trigger:** The workflow starts when a chat message is received (`When chat message received` node).
2. **AI Agent Orchestration:** The `AI Agent` node uses a detailed system message to act as a virtual assistant for Dr. Hakim, handling appointment scheduling. It leverages several tools:
    - **Check Availability:** Uses the `Google Calendar Tool` to determine available time slots based on the desired date and time.
    - **Create Event:** If a slot is available and confirmed by the patient, the `Google Calendar Tool` creates an event in Dr. Hakim's calendar.
    - **Add Data:** The `Google Sheets Tool` appends patient information and appointment details to a specified Google Sheet.
3. **AI Model Interaction:** The `AI Agent` uses the `OpenAI Chat Model` (GPT-4o-mini) to generate responses based on user input and available data. The API key must be set up.
4. **Memory Management:** The `Window Buffer Memory` node stores the conversation history, allowing the AI agent to maintain context throughout the interaction. Session ID should be set up.
5. **Calendar and Spreadsheet Updates:** The workflow seamlessly updates both Google Calendar and Google Sheets to reflect the confirmed appointment.

## Services:

- **Google Calendar:** Used for checking availability and creating appointment events.
- **Google Sheets:** Used for storing patient information and appointment records.
- **OpenAI:** Used for natural language processing and generating responses via the Chat Model.

## Hashtags:

#n8n #automation #appointmentScheduling #AIassistant #healthcare
