# Customer Data Routing and Filtering

## Use cases:

- **Data Enrichment:** Filter customer data based on location (e.g., US, CO, UK) to send to different teams for targeted marketing campaigns or customer support.
- **Data Validation:** Identify customers with missing country information or names containing "Max" for data quality checks and cleansing.
- **Personalized Customer Journeys:** Route customers based on their country to trigger specific onboarding sequences or localized communication flows.

## How it works:

This workflow starts with a manual trigger. It then retrieves all customer data from a "Customer Datastore."  The workflow then uses a series of `If` and `Switch` nodes to filter and route data based on defined conditions:

1.  **Retrieve Customer Data:** The "Customer Datastore" node retrieves all customer records.
2.  **Single Condition Filter:** The "Country equals US" node checks if a customer's country is "US."
3.  **And/Or Conditions Filter:** The "Country is empty or Name contains 'Max'" node filters based on either the country being empty or the name containing "Max".
4.  **Multiple Branch Routing:** The "Country based branching" node routes customers to different branches based on their country (US, CO, UK) with a fallback route for all other countries.

## Services:

- Customer Datastore (Likely a database or service integrated via a custom n8n node)

## Hashtags:

#n8n #automation #datafiltering #routing #customernode
