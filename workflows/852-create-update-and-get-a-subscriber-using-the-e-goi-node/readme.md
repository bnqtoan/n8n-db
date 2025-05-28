# Create, update, and get a subscriber using the e-goi node

## Use cases:

*   **CRM Data Synchronization:** Keep your e-goi subscriber data consistent with other CRM systems by automatically creating new subscribers, updating existing ones, and retrieving their information.
*   **Marketing Automation:** Trigger personalized marketing campaigns in e-goi based on events in other applications. For example, create a new subscriber in e-goi when a user signs up on your website.
*   **Data Enrichment:** Enrich your e-goi subscriber profiles with data from external sources. Automatically update subscriber information in e-goi based on information gathered from other services.

## How it works:

This workflow automates the process of creating, updating, and retrieving subscriber data within e-goi.

1.  **Trigger:** The workflow is manually triggered by clicking the "execute" button.
2.  **Create Subscriber (e-goi):** The first e-goi node creates a new subscriber in a specified list (list ID: 1). The subscriber's email is set to "nathan@testmail.com", and the first name is set to "Nathan."
3.  **Update Subscriber (e-goi1):** The second e-goi node updates the subscriber created in the previous step. It uses the list ID from the previous node, gets the contact ID, and updates the first name to "Nat."
4.  **Get Subscriber (e-goi2):** The third e-goi node retrieves the subscriber's information based on the list ID and contact ID from the previous steps and returns the details of the subscriber.

## Services:

*   e-goi

## Hashtags:

#n8n #e-goi #automation #CRM #marketing
