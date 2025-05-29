# Freshdesk Ticket Follow-up with Survey

## Use Cases

- **Automated Customer Satisfaction Tracking:** Automatically send a satisfaction survey to customers after a Freshdesk ticket is resolved to gather feedback on their support experience.
- **Proactive Issue Resolution:** Identify potential issues by analyzing survey responses and proactively address concerns to improve customer satisfaction.
- **Data-Driven Support Improvement:** Collect and analyze survey data to identify areas where the support team can improve their processes, training, or resources.

## How it Works

This workflow automates the process of sending a customer satisfaction survey after a ticket is resolved in Freshdesk:

1.  **Trigger:** The workflow is triggered either manually ("When clicking ‘Test workflow’") or on a schedule ("Schedule Trigger").
2.  **Set initial data:** Sets data such as the name of the person sending the email ("Set your data").
3.  **Get Existing Tickets:** Retrieves existing tickets data from a Google Sheet ("get existing tickets").
4.  **Get Freshdesk Tickets:** Retrieves all tickets from Freshdesk ("get tickets").
5.  **Check if Ticket Resolved:** The "If" node checks if the ticket status in Freshdesk has been changed compared to the previous status of google sheet's tickets and if the current status is equal to "4" (resolved).
6.  **Update Google Sheets:** If the ticket is resolved, the "Updates status" node updates the status of the ticket in the Google Sheet.
7.  **Get Client Information:** Retrieves the client's email from Freshdesk using the requester ID associated with the ticket ("get client").
8.  **Create Email Content:** Generates the email subject and body, including a personalized message and a link to the survey ("Create the email text").
9.  **Convert to HTML:** Converts the email body from Markdown to HTML for better formatting in email clients ("Convert the email text to HTML").
10. **Send Email:** Sends the survey email to the client ("Send Email").
11. **Survey reception:** When a customer submits a survey ("Survey"), their answers are saved to a Google Sheet ("Save survey to google sheet").

## Services

-   **Freshdesk:** Used to retrieve ticket information and client details.
-   **Google Sheets:** Used to store existing ticket data and save survey to the google sheet.
-   **SMTP:** Used to send emails.

## Hashtags

#n8n #automation #freshdesk #customersatisfaction #googlesheets
