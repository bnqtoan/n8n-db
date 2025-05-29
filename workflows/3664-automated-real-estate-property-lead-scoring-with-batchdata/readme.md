# Lead Qualification with BatchData

## Use cases:

- **Real Estate Lead Qualification:** Automatically qualify leads based on property data, such as estimated value, square footage, and age, allowing real estate agents to prioritize high-potential clients.
- **Investment Property Analysis:** Identify potential investment properties by analyzing property characteristics and flagging those that meet specific criteria, such as being non-owner-occupied or having a large lot size.
- **Targeted Marketing Campaigns:** Segment leads based on property value and other attributes to create highly targeted marketing campaigns that resonate with specific demographics.

## How it works:

1.  **CRM New Lead Webhook:** Listens for new leads created in your CRM via a webhook.  It expects the lead's `leadId`, `crmApiUrl`, `address`, `city`, `state`, and `zipcode`.
2.  **Fetch Lead Data:** Retrieves complete lead information from the CRM using the `leadId` and `crmApiUrl` provided in the webhook payload. It uses HTTP Header Authentication to securely access your CRM API.
3.  **BatchData Property Lookup:**  Verifies property details using the lead's address information by sending a request to the BatchData API.  It requires a BatchData API key set up as HTTP Header Authentication.
4.  **Score And Qualify Lead:** Assigns a score to the lead based on property data obtained from BatchData.  Factors include estimated value, square footage, property age, owner-occupancy status, and lot size. It assigns the lead a `qualificationStatus` (high-value, qualified, potential, or not qualified) based on this score.
5.  **Update CRM Lead:** Updates the lead record in your CRM with the calculated score, qualification status, and property data. It uses HTTP Header Authentication to securely update your CRM API.
6.  **Is High-Value Lead?:** A conditional node that checks if the lead's `qualificationStatus` is "high-value".
7.  **Create Immediate Follow-up Task (TRUE path):** If the lead is classified as "high-value", this node creates a high-priority follow-up task in the CRM, assigning it to a senior agent.
8.  **Send Slack Notification (FALSE path):** Sends a notification to a dedicated Slack channel, alerting the sales team about the new lead, their property value, score, and qualification notes.

## Services:

-   **BatchData API:** Used for property data verification and enrichment.
-   **CRM (via API):** Interacts with your Customer Relationship Management system to fetch lead data and update lead records.
-   **Slack:** Sends notifications to a Slack channel.

## Hashtags:

#n8n #automation #leadqualification #realestate #batchdata
