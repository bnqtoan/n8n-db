# HubSpot Deal Assignment Automation

## Use cases:

- **Automated Lead Distribution:** Automatically assign new, unassigned deals to sales representatives based on the contact's country and company size, ensuring that leads are promptly handled by the appropriate team member.
- **Territory-Based Deal Routing:** Route deals to specific sales reps based on the deal's associated contact's country, allowing for efficient territory management and localized sales efforts.
- **Company Size Prioritization:** Prioritize deal assignments based on the size of the associated company, ensuring that high-potential enterprise clients are assigned to experienced sales representatives.

## How it works:

1.  **Schedule Trigger:** The workflow starts on a scheduled interval (every 2 days at 7 AM, as configured).
2.  **Get Deals:** Fetches deals from HubSpot using the HubSpot API, including the `dealname`, `amount`, and `hubspot_owner_id` properties, and associations with contacts.
3.  **Split out deals:** Splits the multiple deal array into individual items, for individual processing
4.  **Unassigned Deals:** Filters the deals to only process those that are currently unassigned (i.e., `hubspot_owner_id` is empty).
5.  **Get Contact for Deals:** Retrieves contact information associated with the deal from HubSpot, including company associations.
6.  **Get Company of Contact(s):** Retrieves company information associated with the contact, including `name`, `domain`, `city`, `country`, and `numberofemployees`.
7.  **Assign by Region:** Routes the deal based on the country of the associated company ("United States" or "Germany").
8.  **Assign US/DE deals by company size:** Routes the deal based on the number of employees of the associated company.
9.  **Assign Deal to Sales Rep:** Finally, the workflow updates the HubSpot deal to assign it to a specific sales representative based on the routing rules. (John, Max, Eeden, Edward, Michael, Suka, Peter)

## Services:

-   HubSpot CRM

## Hashtags:

#n8n #HubSpot #Automation #DealAssignment #CRM
