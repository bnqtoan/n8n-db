# My Workflow

## Use cases:

- **Automated Appointment Scheduling:**  Allows customers to book PC or laptop repair appointments via SMS without human intervention.
- **Lead Nurturing:** Automatically follows up with potential customers who have inquired about services but haven't scheduled an appointment.
- **Customer Service Chatbot:** Provides instant responses to customer inquiries, schedules, reschedules, and cancels appointments.

## How it works:

1.  **SMS Trigger:** The workflow is initiated when a customer sends an SMS message to the Twilio number.
2.  **Check for STOP command:** Workflow validates if the user is trying to stop the follow up messages
3.  **Fetch Chat History:** The workflow checks Airtable for existing chat history based on the customer's phone number (Twilio `From` field).
4.  **AI Agent:** An AI agent (Langchain) powered by OpenAI engages the customer. It determines the customer's intent (e.g., schedule appointment, reschedule, cancel, ask questions), interacts with Cal.com API (via HTTP Request nodes) for available slots and booking management.
5.  **Update Airtable:** Customer information, chat history, appointment details, and follow-up status are updated in Airtable.
6.  **Send Reply:** A reply is sent to the customer via Twilio based on the AI agent's response.
7.  **Follow-Up (Scheduled):**
    *   A scheduled trigger (Every 24 hours) identifies leads in Airtable who haven't booked appointments and meet specific criteria (follow-up count < 3, last follow-up > 3 days ago).
    *   The workflow uses OpenAI to generate a personalized follow-up message.
    *   Airtable is updated with follow-up details, and a follow-up SMS is sent via Twilio.
    *   If a customer replies with "STOP", their status is updated in Airtable to prevent further follow-ups.

## Services:

*   Twilio: SMS communication.
*   Airtable: Customer session management and data storage.
*   OpenAI: AI-powered chatbot and message generation.
*   Cal.com: Scheduling API.

## Hashtags:

#n8n #automation #chatbot #appointmentscheduling #leadnurturing
