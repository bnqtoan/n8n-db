# AI Grant Opportunity Tracker and Notifier

## Use cases:

- **Automated Grant Discovery:** Automatically searches for AI-related grant opportunities daily, saving time for grant writers and project managers.
- **Eligibility Screening:** Uses AI to quickly determine if the organization is eligible for newly discovered grants, prioritizing opportunities.
- **Team Briefing Newsletter:** Compiles a daily email newsletter with summaries of eligible grants, keeping team members informed of new funding possibilities.

## How it works:

1.  **Scheduled Trigger (Everyday @ 8:30 am):** The workflow starts with a scheduled trigger that runs every day at 8:30 AM.
2.  **Fetch AI Grants (AI Grants since Yesterday):** An HTTP Request node retrieves a list of AI-related grant opportunities posted on grants.gov in the last 24 hours.
3.  **Remove Duplicates (Grants to List):** The workflow uses the "Split Out" node to iterate over each grant opportunity.
4.  **Remove Duplicates (Only New Grants):** A "Remove Duplicates" node filters out grants that have already been processed in previous workflow executions, ensuring that only new opportunities are considered.
5.  **Get Grant Details (Get Grant Details):** For each new grant, an HTTP Request node fetches the detailed information from grants.gov.
6.  **AI-Powered Summarization and Eligibility (Summarize Synopsis, Eligibility Factors):**
    -   The "Summarize Synopsis" node utilizes an AI model to summarize the grant synopsis, extracting key information like the goal, duration, and success criteria.
    -   The "Eligibility Factors" node uses another AI model to assess the organization's eligibility based on the grant details and pre-defined company information.
7.  **Combine Information (Merge):** The outputs from the summarization and eligibility checks are merged.
8.  **Save to Tracker (Save to Tracker):** The summarized information and eligibility assessment are saved as a new record in an Airtable database.
9.  **Generate Email (Everyday @ 9am):** A second scheduled trigger is set to run every day at 9:00 AM.
10. **Fetch Eligible Grants (Get New Eligible Grants Today):** The workflow uses the Airtable to fetch all new grants that are eligible.
11. **Generate Email (Generate Email):** An HTML node compiles the list of eligible grants into a newsletter format.
12. **Fetch Subscribers (Get Subscribers):** Fetches a list of active subscribers from an Airtable database.
13. **Send Subscriber Email (Send Subscriber Email):** The generated email is sent to all subscribers via Gmail.

## Services:

-   **Grants.gov API:** Used to search and retrieve grant opportunity data.
-   **OpenAI API:** Used for summarizing grant synopses and determining eligibility.
-   **Airtable:** Used as a database to store grant information and subscriber list.
-   **Gmail:** Used to send out the daily newsletter.

## Hashtags:

#n8n #automation #grants #AI #workflow
