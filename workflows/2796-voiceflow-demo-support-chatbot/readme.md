# Customer Interaction Automation

## Use Cases:

- **AI-Powered Customer Support:** Integrates with an AI agent (like Voiceflow) to fetch customer details, create Zendesk tickets, and schedule meetings, streamlining the support process.
- **Automated Meeting Scheduling:** Allows customers to schedule meetings via a webhook, checking calendar availability and creating Google Calendar events automatically.
- **Product Feedback Analysis:** Collects customer conversation transcripts and summaries in Airtable for product teams to analyze and improve the product.

## How it Works:

This workflow automates customer interactions across different platforms. It consists of three main flows:

1.  **Find Customer:**
    - A webhook receives a phone number from an AI agent (Voiceflow).
    - The phone number is used to query a Google Sheets customer database.
    - If a customer is found, their details are returned to the AI agent. Otherwise, an error message is returned.

2.  **Create Zendesk Ticket:**
    - A webhook receives customer details, a summary, and a transcript from an AI agent.
    - The workflow creates a new customer in Zendesk or updates their information.
    - A Zendesk ticket is created with the summary and transcript.
    - The workflow checks if the ticket was submitted successfully and returns a success or error message via webhook.

3.  **Schedule a Meeting:**
    - A webhook receives a requested meeting time and customer details.
    - The workflow checks for availability on a specified Google Calendar.
    - If the calendar is available, it creates a new event with the customer's details.
    - The workflow returns a success or error message via webhook.

4. **Give Product team transcripts for analysis:**
    - A webhook receives customer call transcript and other details
    - The workflow post the data in Airtable for analysis

## Services:

- Google Sheets
- Zendesk
- Google Calendar
- Airtable

## Hashtags:

#n8n #automation #customerSupport #zendesk #googleCalendar #airtable
