# Stripe Payment Order Sync – Auto Retrieve Customer & Product Purchased

## Use cases:

- **Order Confirmation & Customer Data Enrichment:** Automatically extract customer details (name, email) and purchased product information from Stripe checkout sessions to populate order confirmation emails or update customer profiles in a CRM.
- **Inventory Management:** Trigger updates to your inventory system when a Stripe payment is completed, reducing the need for manual reconciliation and preventing overselling.
- **Personalized Marketing:** Use the extracted product information to segment customers based on their purchases and tailor marketing campaigns accordingly.

## How it works:

1.  **Stripe Trigger on Payment Event:** This node listens for `checkout.session.completed` events from Stripe, which signifies that a payment has been successfully processed.
2.  **Extract Session Information:** Upon receiving a trigger, this node uses the session ID from the event to make a request to the Stripe API and retrieves additional information about the checkout session, specifically expanding the `line_items` to get details about the products purchased.
3.  **Filter Information:**  This node parses the data received from the Stripe API and extracts the customer's name, email, and the description of the product purchased from the `line_items`.

## Services:

-   Stripe API

## Hashtags:

#n8n #Stripe #Automation #PaymentProcessing #CustomerData
