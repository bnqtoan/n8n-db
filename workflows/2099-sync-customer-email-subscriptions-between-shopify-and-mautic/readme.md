# Shopify + Mautic

## Use cases:

- **Sync Shopify customer email marketing consent with Mautic:** Automatically adds or removes contacts from a specific segment in Mautic based on their email marketing subscription status in Shopify. This ensures that marketing campaigns in Mautic are only sent to customers who have actively subscribed in Shopify.
- **Update Shopify customer email marketing consent based on Mautic changes:** When a customer's email subscription status changes in Mautic (e.g., through a preference center), this change is reflected in their Shopify customer profile.
- **Centralized Marketing Automation:** By synchronizing customer data and consent between Shopify and Mautic, businesses can ensure a more unified and effective marketing automation strategy.

## How it works:

The workflow is split into two main parts: Shopify to Mautic and Mautic to Shopify sync.

**Shopify to Mautic:**

1.  **Shopify Trigger:** Listens for customer update events in Shopify.
2.  **Search for Contact by Email:** Searches for the contact in Mautic by email.
3.  **Contact exists?:** Checks if the contact exists in Mautic.
4.  **If contact exist**
    -   **Accepts Marketing?:** Checks if the customer has subscribed to email marketing in Shopify
    -   **Add to confirmed segment/Remove from confirmed segment:** Adds or removes the customer to segment based on the subsciption state.
5.  **If contact doesn't exist**
    -   **Create a new contact:** Creates a new contact in Mautic, with the first name, last name, and email from Shopify.
    -   **Accepts Marketing?:** Checks if the customer has subscribed to email marketing in Shopify
    -   **Add to confirmed segment/Remove from confirmed segment:** Adds or removes the customer to segment based on the subsciption state.

**Mautic to Shopify**

1.  **Webhook:** Receives webhook events from Mautic when a contact's channel subscription changes.
2.  **Crypto:** Hashes the incoming request.
3.  **If:** Validates the webhook by checking the hash.
4.  **Set Shopify Subdomain:** Set your Shopify Subdomain here.
5.  **GraphQL:** Get the Shopify Customer ID from the Shopify GraphQL API based on the email provided by the webhook.
6.  **Customer exists?:** Checks if the customer exists in Shopify.
7.  **Mautic - Accepts Marketing?:** Checks if the customer is contactable in Mautic.
8.  **Marketing Consent - subscribed/Marketing Consent - unsubscribed:** Updates the email marketing consent on Shopify.

## Services:

-   Shopify
-   Mautic

## Hashtags:

#n8n #automation #Shopify #Mautic #marketing
