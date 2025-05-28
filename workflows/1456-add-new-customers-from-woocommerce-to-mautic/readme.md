# New WooCommerce Customer to Mautic

## Use cases

*   **Marketing Automation:** Automatically add new WooCommerce customers as contacts in Mautic, enabling targeted email campaigns and personalized marketing efforts.
*   **Lead Enrichment:** Keep Mautic contact information up-to-date with the latest customer details from WooCommerce, ensuring accurate data for segmentation and analysis.
*   **Customer Relationship Management:** Streamline the process of managing customer data between your e-commerce platform and marketing automation tool, improving overall customer relationship management.

## How it works

This workflow automates the synchronization of customer data between WooCommerce and Mautic. Here's how it works:

1.  **WooCommerce Trigger:** The workflow starts when a customer is created or updated in WooCommerce, triggering the "Customer Created or Updated" node.
2.  **Check for Existing:** The "Check for Existing" node searches Mautic for a contact with the same email address as the new customer from WooCommerce.
3.  **If New:** The "If New" node checks if the "id" field returned from the Mautic search is empty. If it is, the customer is considered new.
4.  **Create Contact:** If the customer is new, the "Create Contact" node creates a new contact in Mautic, using the customer's first name, last name, email, and company from WooCommerce.
5.  **Update Contact:** If the customer already exists in Mautic (based on the email address), the "Update Contact" node updates the existing contact's first name and last name with the values from WooCommerce.

## Services

*   WooCommerce
*   Mautic

## Hashtags

#n8n #WooCommerce #Mautic #Automation #CRM
