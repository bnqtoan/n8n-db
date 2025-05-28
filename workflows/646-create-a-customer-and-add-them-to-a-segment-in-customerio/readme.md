# Create a customer and add them to a segment in Customer.io

## Use cases:

*   **New User Onboarding:** Automatically create a new user profile in Customer.io and add them to a specific onboarding segment when they sign up on your website (using a Webhook trigger instead of the manual trigger).
*   **Lead Segmentation:** When a new lead fills out a form on your website (using a Webhook trigger), create a customer profile in Customer.io and add them to the appropriate segment based on their form responses.
*   **Customer Data Synchronization:** If you have customer data in another system (e.g., a CRM), use an n8n workflow to regularly synchronize that data with Customer.io, creating or updating customer profiles and adding them to relevant segments.

## How it works:

This workflow automates the process of creating a new customer profile in Customer.io and adding them to a segment.

1.  **On clicking 'execute' (Manual Trigger):** The workflow starts manually when you click the "Execute Workflow" button in n8n. *Note: In a real-world scenario, this would likely be triggered by a different event, such as a webhook from a website form submission.*
2.  **CustomerIo (Create Customer):** The workflow creates a new customer profile in Customer.io using the provided credentials and parameters. It sets the Customer ID to "2" and adds a custom property "Name" with the value "n8n."
3.  **CustomerIo1 (Add to Segment):**  The workflow then adds the newly created customer to a segment in Customer.io. It dynamically retrieves the customer ID from the previous node (`CustomerIo`) and uses it to add the customer to the specified segment.

## Services:

*   Customer.io

## Hashtags:

#n8n #automation #customerio #segmentation #crm
