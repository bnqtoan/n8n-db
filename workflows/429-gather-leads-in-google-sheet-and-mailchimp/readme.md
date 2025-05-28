## Google Sheet to Mailchimp Workflow Readme

### Use cases:

*   **Automated Newsletter Subscription:** Automatically subscribe new users to your Mailchimp newsletter list when they are added to a Google Sheet.
*   **Lead Generation Follow-up:** Add leads captured in a Google Sheet to a Mailchimp audience for targeted email campaigns.
*   **Event Registration Updates:** Keep your Mailchimp audience updated with event registrants from a Google Sheet.

### How it works:

This workflow automates the process of adding or updating contacts in Mailchimp based on data from a Google Sheet.

1.  **Trigger:** The workflow is triggered manually with "On clicking 'execute'".
2.  **Fetch Data from Google Sheets:** The "Google Sheets" node retrieves data from the specified Google Sheet (sheetone!A:C) using the provided Google API credentials. It expects columns to include data to be used to subscribe users to Mailchimp, namely, email.
3.  **Add/Update Contact in Mailchimp:** The "Mailchimp" node then takes the data retrieved from Google Sheets, extracts the email using an expression `{{$node["Google Sheets"].json["email"]}}`, and adds or updates a subscriber in the specified Mailchimp list ("90d12734de") with the status "subscribed". The Mailchimp API credentials are used for authentication.
4. **Interval**: The "Interval" node is set to a 2 second interval. Based on the current connections this does not seem to be doing anything and is only connected to the Google Sheets node.

### Services:

*   Google Sheets
*   Mailchimp

### Hashtags:

#n8n #GoogleSheets #Mailchimp #Automation #EmailMarketing
