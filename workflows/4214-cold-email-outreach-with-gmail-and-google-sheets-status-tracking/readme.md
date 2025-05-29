# Cold Email Outreach with Gmail and Google Sheets Status Tracking

## Use cases

- **Automated Lead Generation:** Automatically send personalized emails to leads fetched from a Google Sheet, saving time and effort in manual outreach.
- **Track Email Status:** Maintain an updated record of which leads have been contacted, preventing duplicate emails and ensuring consistent communication.
- **Personalized Outreach:**  Tailor email messages based on lead information in the Google Sheet, increasing engagement and response rates.

## How it works

1.  **Schedule Trigger:** The workflow starts daily at 2 PM using the "Schedule Trigger" node.
2.  **Fetch Leads:** The "Fetch Leads" node retrieves leads from a specified Google Sheet, filtering for entries where the "Is Email Sent" column is not marked as "yes."
3.  **Batch Processing of Leads:** The "Batch Processing of Leads" node processes the fetched leads in manageable batches, for an optimal performance and prevent API limitations.
4.  **Send Personalized Email:** The "Send Personalized Email" node sends a personalized email to each lead via Gmail. The email content includes the lead's name (or "WF Full Name (metadata)" as a fallback), which is dynamically inserted from the Google Sheet data.
5.  **Update Lead Status:**  The "Update Lead Status" node updates the "Is Email Sent" column in the Google Sheet to "yes" for the contacted lead.

## Services

-   **Google Sheets:** Used to store lead information and track email status.
-   **Gmail:** Used to send personalized outreach emails.

## Hashtags

#n8n #automation #emailmarketing #googlesheets #gmail
