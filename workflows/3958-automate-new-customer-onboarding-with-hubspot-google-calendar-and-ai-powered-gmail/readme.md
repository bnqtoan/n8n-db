# HubSpot New Contact Onboarding with Personalized Email and Calendar Automation

## Use cases:

-   Automatically send a personalized welcome email to new HubSpot contacts.
-   Schedule a welcome call with a new contact by automatically finding an available slot in your calendar.
-   Assign a contact owner in HubSpot based on email matching.

## How it works:

1.  **Trigger:** The workflow starts when a new contact is created in HubSpot, triggered either by a **Webhook** or the **HubSpot Trigger** node.
2.  **Company Data:** Sets predefined company information, including sender name, email, company name, and activity. This data is utilized for the personalized email.
3.  **Owner Assignment:** Retrieve owners from hubspot, filter the owner based on the provided email, and assign it to the contact.
4.  **Contact Information Retrieval:** Fetch additional contact details from HubSpot using the contact ID obtained from the webhook trigger using the **HubSpot** node.
5.  **Personalized Email Generation:** An AI agent (**Langchain Agent** node with OpenAI) generates a personalized welcome email based on the contact's information and company details. It uses a prompt to define the email's content and format.
6.  **Calendar Integration** the Agent uses the calendar tool to suggest a new appointment on the empty slots.
7.  **Email Sending:** The generated email is sent via Gmail (**Gmail** node) to the new contact, including the subject and content created by the AI agent.
8.  **Contact Owner:** the contact is assigned to an owner in hubspot.

## Services:

-   HubSpot: CRM for contact management and triggering the workflow.
-   Google Calendar: For scheduling welcome calls.
-   Gmail: For sending personalized welcome emails.
-   OpenAI: For generating personalized email content.

## Hashtags:

#n8n #automation #HubSpot #email #calendar #AI
