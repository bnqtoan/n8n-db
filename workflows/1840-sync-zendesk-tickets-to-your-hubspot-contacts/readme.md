# Add Zendesk company data to Hubspot data

## Use cases:

*   **Real-time Data Synchronization:** Automatically synchronize company data updates between HubSpot and Zendesk. This ensures both platforms have the most current information, like company names and domain names.
*   **Streamlined Customer Support:** When a HubSpot company is updated, the corresponding Zendesk organization is updated, improving the support team's access to customer details.
*   **Centralized Data Management:** Avoid manual data entry and reduce the risk of errors by automating the transfer of company information from HubSpot to Zendesk.

## How it works:

1.  **Trigger:** The workflow starts every 5 minutes using a "Every 5 minutes" Cron node.
2.  **Get Last Execution Timestamp:** The "Get last execution timestamp" Function Item node retrieves the timestamp of the previous workflow run. If it's the first run, it initializes the timestamp to the current date.
3.  **Get Modified Companies:** The "Get modified companies" HubSpot node fetches companies that have been modified since the last execution timestamp.
4.  **Get All Zendesk Organisations:** The "Get all Zendesk organisations" Zendesk node retrieves all organizations from Zendesk.
5.  **Merge Data:** The "Add Zendesk company data to Hubspot data" Merge node combines the HubSpot company data with Zendesk organization data based on the company name.
6.  **Check if Company Exists in Zendesk:** The "Company exists in Zendesk" IF node checks if the company already exists in Zendesk (checks if `id` is not empty).
7.  **Update/Create Organisation:**
    *   If the company exists in Zendesk, the "Update organisation" Zendesk node updates the existing organization with the latest information (name and domain).
    *   If the company does not exist, the "Create organisation" Zendesk node creates a new organization in Zendesk with the company's name and domain.
8.  **Set New Last Execution Timestamp:** The "Set new last execution timestamp" Function Item node updates the timestamp for the next workflow execution.

## Services:

*   HubSpot
*   Zendesk

## Hashtags:

#n8n #HubSpot #Zendesk #Automation #DataSync
