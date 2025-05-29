# N_01_Simple_Lead_Tracker_Automation_v4

## Use cases:

- **Automated Lead Capture and CRM Integration:** Streamline the process of capturing leads from Google Forms, automatically adding them to HubSpot, and sending notifications to relevant teams.
- **Real-time Lead Notifications:** Instantly notify sales or marketing teams via Slack and Gmail when a new lead is submitted, ensuring prompt follow-up.
- **Follow-up Reminders:** Automatically remind team members to follow up on leads with high-interest levels that haven't been contacted within a specific timeframe.

## How it works:

1.  **Google Sheets Trigger:** The workflow is initiated when a new row is added to a specified Google Sheet, typically populated by a Google Forms submission.
2.  **Data Extraction:** Data from the new row (lead information) is extracted.
3.  **CRM Integration (HubSpot):** The extracted lead data (name, email, phone, interest level, and notes) is used to create or update a contact in HubSpot.
4.  **Notifications (Slack & Gmail):** Notifications containing the lead's information are sent to a designated Slack channel and Gmail inbox, alerting the team to the new lead.
5.  **Wait:** Pauses the workflow for a specified amount of time (3 minutes).
6.  **Check for Follow-up:** The workflow checks if the "Followed Up?" column in the Google Sheet is empty AND the "Interest Level" contains the word "Hot".
7.  **Reminder (Gmail):** If both conditions from step 6 are met (lead hasn't been followed up and has high interest), a reminder email is sent to the designated Gmail inbox, prompting action.
8.  **No Operation:** If conditions from step 6 aren't met, the workflow does nothing and ends.

## Services:

*   **Google Sheets:** Used as a data source, triggered by new form submissions.
*   **Slack:** Used for instant notifications to a team channel.
*   **Gmail:** Used for sending email notifications and follow-up reminders.
*   **HubSpot:** Used as a CRM to store and manage lead information.

## Hashtags:

#n8n #automation #leadtracking #crm #googlesheets
