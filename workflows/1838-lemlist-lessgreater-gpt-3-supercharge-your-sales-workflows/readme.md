# Lemlist Lead Response Automation

## Use cases:

- **Automated Lead Management:** Automatically unsubscribe leads from Lemlist campaigns based on their reply content, ensuring compliance and efficient list management.
- **Smart Lead Qualification:** Categorize lead responses (Interested, Out of Office) using OpenAI to trigger appropriate actions in Lemlist and HubSpot, such as marking leads as interested or creating follow-up tasks.
- **Real-time Notifications:** Get notified on Slack when a lead expresses interest or replies to a Lemlist campaign, enabling prompt engagement and deal creation.

## How it works:

1.  **Lemlist Trigger:** The workflow starts when a lead replies to an email in a Lemlist campaign.
2.  **OpenAI Text Classification:** The lead's reply text is sent to OpenAI, which categorizes the response into predefined categories (Unsubscribe, Interested, Out of Office, other).
3.  **Categorization and routing:** The reply gets added to the lead information to make it accessible to the rest of the workflow
4.  **Switch Node:** Based on the OpenAI classification, the workflow branches to different actions.
    *   **Unsubscribe:** If the lead wants to unsubscribe, unsubscribe the lead on Lemlist.
    *   **Interested:**
        *   Mark the lead as interested in Lemlist.
        *   Get the contact ID from HubSpot.
        *   Create a deal in HubSpot.
        *   Send a notification to Slack with a link to the deal.
    *   **Out of Office:**
        *   Get the contact ID from HubSpot
        *   Create a follow-up task in HubSpot
    *   **Other:**
        *   Send a notification to Slack with a link to the lemlist reports.
5.  **HubSpot Actions:** Depending on the category, the workflow interacts with HubSpot to create deals or tasks.
6.  **Slack Notifications:** Important events, such as a lead showing interest, trigger Slack notifications.

## Services:

-   Lemlist
-   OpenAI
-   HubSpot
-   Slack

## Hashtags:

#n8n #automation #lemlist #hubspot #leadgeneration
