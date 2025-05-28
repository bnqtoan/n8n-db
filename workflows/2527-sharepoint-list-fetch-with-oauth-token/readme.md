# Fetch SharePoint List Data

## Use cases:

- **Automated Data Extraction:** Regularly retrieve data from a SharePoint list for reporting, analysis, or archiving purposes.
- **Data Synchronization:** Keep a local database or spreadsheet synchronized with a SharePoint list, ensuring data consistency across platforms.
- **Triggered Notifications:** Monitor a SharePoint list for new or updated items and trigger notifications (e.g., via email or Slack) based on specific criteria.

## How it works:

1.  **Schedule Trigger:** The workflow starts with a "Schedule Trigger" node, which periodically initiates the data fetching process based on a configured schedule.
2.  **Set Tenant ID:** The "Set Tenant" node stores the Microsoft tenant ID.  It's crucial to configure this node with the correct tenant ID for the SharePoint environment.
3.  **Generate OAuth Token:** An HTTP Request node obtains an OAuth token from Azure Active Directory using client credentials. The request includes the `tenant_id` (from the previous node), `client_id`, `client_secret`, and the SharePoint resource URL.  It's **critical** that the `client_id` and `client_secret` are stored securely and not hardcoded in the workflow.
4.  **Fetch SharePoint List:** Another HTTP Request node retrieves data from the specified SharePoint list.  It uses the OAuth token obtained in the previous step to authenticate the request. The node constructs the URL to access the SharePoint list items, sets the "Accept" and "Content-Type" headers for JSON data, and includes the "Authorization" header with the Bearer token.

## Services:

-   **SharePoint:** Microsoft's collaborative platform for document management and team collaboration.
-   **Azure Active Directory (Azure AD):** Microsoft's cloud-based identity and access management service, used here for OAuth token generation.

## Hashtags:

#n8n #SharePoint #Automation #OAuth #DataExtraction
