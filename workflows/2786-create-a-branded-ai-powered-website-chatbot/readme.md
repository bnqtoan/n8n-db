# Website Chatbot

## Use Cases:

- **Automated Appointment Scheduling:** Allow customers to book appointments directly through a website chatbot, checking for available slots in real-time and handling time zone conversions.
- **Lead Qualification and Information Gathering:** Use the chatbot to collect necessary details (name, company, email, project details) from potential clients before routing them to a human representative.
- **24/7 Customer Support:** Provide instant responses to common inquiries, gather project details, and offer appointment scheduling, even outside of business hours.

## How it works:

1.  **Chat Trigger:** (Disabled) Listens for incoming chat requests either from a webhook.
2.  **Conditional Logic (If):** Checks if the `chatInput` field exists. If it doesn't, it sends a default initial message.
3.  **AI Agent:** Processes the user's input (`chatInput`) using an OpenAI Chat Model and a configured system message. This message defines the assistant's role (appointment coordinator), desired behavior (friendly, natural conversation), and constraints (business hours, time zone awareness, required information).
    -   The AI Agent uses tools:
        -   **Get Availability:** Checks the calendar for available time slots via the Microsoft Graph API.
        -   **Send Message:** Sends an email to a designated contact with the customer's details and inquiry if an appointment cannot be booked or if the customer has general questions.
        -   **Make Appointment:** Creates a new appointment in the calendar via the Microsoft Graph API using the details gathered from the user.
4.  **OpenAI Chat Model:** Uses the `gpt-4o-2024-08-06` model to generate responses based on the user's input, calendar availability, and predefined rules.
5.  **Window Buffer Memory:** Maintains a conversation history to provide context to the AI Agent.
6.  **Respond to Webhook:** Sends the AI-generated response back to the user interface.
7.  **Execute Workflow Trigger**: Executes a secondary workflow base on the Switch node condition.
8.  **Switch**: Routes data based on the value of the route parameter.
9.  **Get Events**: Retrieves events from a Microsoft Outlook calendar for a specified date range.
10. **freeTimeSlots**: Custom code to determine free time slots for appointments from calendar events.
11. **varResponse**: Store the available response into a variable.
12. **Send Message1**: Sends an email via Microsoft Outlook.
13. **varMessageResponse**: Stores the response in a variable.

## Services:

-   **OpenAI:** Used for natural language understanding and response generation.
-   **Microsoft Outlook (Graph API):** Used for calendar access and appointment scheduling.

## Hashtags:

#n8n #automation #chatbot #appointmentScheduling #ai #noCode
