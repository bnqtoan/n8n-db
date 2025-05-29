# HubSpot and LinkedIn Client Update Notifier

## Use cases:

- **Automated Sales Insights:** Automatically monitor LinkedIn profiles of HubSpot clients for job changes or new posts, providing sales teams with timely insights for targeted outreach.
- **Proactive Relationship Management:** Stay informed about client activities on LinkedIn, enabling account managers to engage in relevant conversations and build stronger relationships.
- **Competitor Analysis:** Track key clients' career moves to understand market trends and potential talent acquisition opportunities.

## How it works:

1.  **Trigger:** The workflow starts either manually or when triggered by another workflow, receiving a HubSpot Owner ID.
2.  **Fetch Owner's Clients:** Retrieves a list of clients associated with a specific HubSpot owner from HubSpot using the HubSpot API.
3.  **Iterate Through Clients:** Loops through each client to check for updates.
4.  **Google Sheet Integration**: Checks a google sheet with information about each client
5.  **LinkedIn Profile URL Retrieval:**
    *   If the LinkedIn URL is not present, searches for the client's LinkedIn profile using their name and company via the RapidAPI LinkedIn API.
    *   If LinkedIn URL is present, uses that one.
6.  **LinkedIn Post and Position Updates:** Extracts the latest post from LinkedIn and the current position and compares those to the google sheet
7.  **Update Google Sheet:** Updates the Google Sheet with the latest LinkedIn post and current position
8.  **Generate and Send Email Notification:** If there are any post or position updates, send an email notification with the clients that have updates.

## Services:

*   HubSpot API
*   RapidAPI (LinkedIn API)
*   Google Sheets API
*   Gmail API

## Hashtags:

#n8n #HubSpot #LinkedIn #Automation #ClientTracking
