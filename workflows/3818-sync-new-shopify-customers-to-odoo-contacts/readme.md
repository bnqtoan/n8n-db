# Sync New Shopify Customers to Odoo Contacts

## Use cases

*   **Automated Customer Management:** Automatically create new customer contacts in Odoo when a new customer registers in Shopify, saving manual data entry time.
*   **Centralized Customer Information:** Ensure all Shopify customer data is synced to Odoo, providing a single source of truth for customer information.
*   **Improved Sales and Marketing:** Enable sales and marketing teams to leverage synchronized customer data in Odoo for targeted campaigns and personalized communication.

## How it works

This workflow automates the process of syncing new Shopify customers to Odoo contacts.

1.  **Shopify Trigger:** The workflow starts when a new customer is created in Shopify. The `Shopify Trigger` node listens for the `customers/create` webhook.
2.  **Search Odoo Contact:** The `Search Odoo Contact` node searches for an existing contact in Odoo using the customer's email from Shopify.
3.  **Code:** The `Code` node processes the data from the `Shopify Trigger` and `Search Odoo Contact` nodes. It checks if a contact with the same email already exists in Odoo. It then returns a boolean `existing` (`true` if exists, `false` if not) and the `contact_detail`.
4.  **Filter:** The `Filter` node checks the boolean value returned by the `Code` node `existing`. It only proceeds to create a new contact if the boolean `existing` is `false` (meaning the contact does not already exist in Odoo).
5.  **Create Contact:** If the `Filter` node allows the flow, the `Create Contact` node creates a new contact in Odoo, using the customer's information from Shopify, including name, email, address, city, zip code, and phone number.

## Services

*   Shopify
*   Odoo

## Hashtags

#n8n #automation #shopify #odoo #crm
