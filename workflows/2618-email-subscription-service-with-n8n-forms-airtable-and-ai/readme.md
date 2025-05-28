# Automated Factoid Subscriber Service

## Use cases:

- **Automated Newsletter:** Send daily or weekly facts about specific topics to subscribers, enhancing user engagement and providing valuable content.
- **Personalized Learning Platform:** Offer customized educational snippets on various subjects based on user preferences, fostering continuous learning.
- **Content Curation Service:** Automatically curate and deliver interesting facts to users, saving them time and effort in research.

## How it works:

1.  **Subscription via Form:** Users subscribe to the service by filling out an n8n form, providing their email, preferred topic, and frequency (daily, weekly, or surprise).
2.  **Data Storage:** The subscription details are stored in an Airtable database.
3.  **Scheduled Trigger:** A scheduled trigger runs daily at 9 am.
4.  **Airtable Search:** The workflow searches Airtable for active subscribers based on their chosen frequency:
    -   Daily subscribers are selected directly.
    -   Weekly subscribers are selected only if their "Last Sent" date is more than 7 days ago.
    -   "Surprise" subscribers have an additional filter (code node) that will send only 10% of them the email.
5.  **Subworkflow Execution:** For each subscriber, a subworkflow is triggered to:
    -   Create Execution data for logging pourposes.
    -   Generate a factoid using an AI agent (Langchain), leveraging a Groq Chat Model, Wikipedia tool, and Buffer Window Memory.
    -   Generate a child-friendly illustration based on the factoid via OpenAi.
    -   Resize the image for better display.
    -   Set Email Variables to compose the email's subject, body, and unsubscribe link.
    -   Send the email via Gmail.
    -   Update the "Last Sent" field in Airtable.
6.  **Unsubscription via Form:** Users can unsubscribe via another n8n form. The submission updates their status in Airtable to "inactive."

## Services:

-   **Airtable:** Used as a database to store subscriber information (email, topic, frequency, status, last sent date).
-   **Gmail:** Used to send confirmation emails upon subscription and factoid emails based on the schedule.
-   **Groq:** Used to generate the factoid text.
-   **OpenAI:** Used to generate the image to send with the email.

## Hashtags:

#n8n #automation #newsletter #contentCuration #AI
