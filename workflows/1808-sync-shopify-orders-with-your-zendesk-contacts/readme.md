# Shopify and Zendesk Contact Synchronization

## Use cases:

*   **Automatic Zendesk Contact Creation:** When a new customer is updated in Shopify, automatically create a corresponding contact in Zendesk if one doesn't already exist.
*   **Zendesk Contact Update:** If a customer's phone number is updated in Shopify, automatically update the corresponding contact in Zendesk to maintain data consistency.
*   **Centralized Customer Information:** Ensure that customer information is synchronized between Shopify and Zendesk, providing support teams with the most up-to-date contact details.

## How it works:

1.  **Shopify Trigger:** The workflow starts when a customer is updated in Shopify (`On customer updated` node).
2.  **Search Zendesk:** The workflow searches for an existing user in Zendesk using the customer's email address (`Search contact by email adress` node).
3.  **Keep relevant data:** Keeps only UserId, email and phone (`Keep only UserId and email` node).
4.  **Add Zendesk ID to Shopify data:** The workflow merges data (`Add Zendesk contact Id to Shopify data` node).
5.  **Check if User Exists:** The workflow checks if the user exists in Zendesk based on the presence of a Zendesk User ID (`User exists in Zendesk` node).
6.  **Conditional Logic:**
    *   **If User Exists:**
        *   **Check for Phone Number Modification:** The workflow compares the phone number in Shopify with the one in Zendesk (`Contact data is modified` node).
        *   **If Phone Number Changed:** The contact's phone number is updated in Zendesk (`Update contact in Zendesk` node).
        *   **If Phone Number Unchanged:** The workflow does nothing (`NoOp` node).
    *   **If User Doesn't Exist:** A new contact is created in Zendesk with the customer's first name, last name, email, and phone number (`Create contact in Zendesk` node).

## Services:

*   Shopify
*   Zendesk

## Hashtags:

#n8n #automation #Shopify #Zendesk #contactsynchronization
