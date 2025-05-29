# Get all scaleway server info copy

## Use cases:

- **Inventory Management:** Automatically gather and filter information about your Scaleway servers (instances and baremetal) to maintain an up-to-date inventory.
- **Monitoring and Alerting:** Filter servers based on tags or other criteria to monitor specific environments (e.g., staging, production) and trigger alerts based on their status.
- **Automation Tasks:** Use filtered server data to automate tasks such as backups, updates, or scaling operations based on server names, IPs, or zones.

## How it works:

1.  **Webhook Trigger:** The workflow starts when it receives a POST request via a webhook. The request should include `search_by` (the field to filter by: tags, name, public\_ip, or zone) and `search` (the search term).
2.  **Configuration:** The "Edit Fields" node stores the incoming search parameters, the Scaleway authentication token, and the zones to search.
3.  **Zone Iteration:** The workflow iterates through predefined Scaleway zones ("Split Out ZONE\_INSTANCE" and "Loop Over Zone Instance").  For each zone, it checks if it's configured for baremetal servers and makes an API request to either the instances or baremetal endpoint using the Scaleway API.
4.  **Data Aggregation:** The "Code" node combines server information from all zones, extracting key details like name, tags, public IP, type, state, zone, and user. It handles different server structures (Compute instances vs. Baremetal).
5.  **Dynamic Filtering:** Based on the `search_by` parameter from the webhook, the "Switch" node routes the server data to the appropriate "Code search" node (Tags, Name, Public IP, Zone). Each of these code nodes filters the server list based on whether the specified field includes the `search` term.
6.  **Response:** The filtered server data is sent back via a "Respond to Webhook" node as a JSON response. If the `search_by` parameter is invalid, an error message is returned.

## Services:

-   **Scaleway API:** Interacts with the Scaleway API to retrieve server information (both instances and baremetal).

## Hashtags:

#n8n #Scaleway #Automation #ServerManagement #API
