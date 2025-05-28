# Shopify to Mautic Customer Sync

## Use cases:

*   **New Customer Onboarding:** Automatically add new Shopify customers to your Mautic marketing automation platform to initiate targeted email campaigns and personalized experiences.
*   **Lead Generation:** Capture customer data from Shopify purchases and use it to build a lead nurturing program in Mautic, guiding customers through the sales funnel.
*   **Centralized Customer Data:** Keep your customer data synchronized between your e-commerce platform and your marketing automation system for a comprehensive view of customer behavior and preferences.

## How it works:

1.  **Shopify Trigger ("On new customer"):** The workflow starts when a new customer is created in your Shopify store. It listens for the `customers/create` webhook event. This node requires authentication using a Shopify Access Token.
2.  **Create Contact ("Create contact"):** The customer data received from Shopify (specifically, first name, last name, and email) is then used to create a new contact in Mautic.  The node extracts the email, first name and last name from the Shopify data. This node requires authentication using Mautic API credentials.
3.  **Note ("Note"):** This is a sticky note that reminds you to add more fields to Mautic if needed. By default, only first name, last name, and email are pushed.

## Services:

*   Shopify
*   Mautic

## Hashtags:

#n8n #Shopify #Mautic #MarketingAutomation #Ecommerce
