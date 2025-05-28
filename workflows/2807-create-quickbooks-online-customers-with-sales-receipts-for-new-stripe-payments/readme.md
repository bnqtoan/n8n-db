# Stripe to QuickBooks Sales Receipt Automation

## Use cases:

- Automatically create sales receipts in QuickBooks Online whenever a payment is successfully processed in Stripe.
- Keep your QuickBooks records up-to-date with Stripe transactions, ensuring accurate financial reporting.
- Streamline the accounting process by eliminating the need for manual data entry of Stripe payments into QuickBooks.

## How it works:

1.  **Stripe Payment Trigger:** The workflow starts when a `payment_intent.succeeded` event is received from Stripe via webhook.
2.  **Get Stripe Customer:** Retrieves customer details from Stripe using the customer ID from the payment intent.
3.  **Get QuickBooks Customer:** Searches for an existing customer in QuickBooks Online using the email address obtained from Stripe.
4.  **If Customer Exists:** Checks if a customer with the same email address exists in QuickBooks.
    *   **If True:** Uses the existing QuickBooks customer.
    *   **If False:** Creates a new customer in QuickBooks using the information from Stripe.
5.  **Merge Stripe and QuickBooks Data:** Merge the data from Stripe payment with the existing QuickBooks customer info.
6.  **POST Sales Receipt To QuickBooks:** Creates a sales receipt in QuickBooks Online, linking it to the customer, payment amount, and other relevant details from the Stripe payment. The sales receipt includes line items for the subscription, amount, and a private note containing the Stripe Payment Intent ID.

## Services:

-   Stripe: Processes payments and provides payment-related data.
-   QuickBooks Online: Manages accounting and creates sales receipts.

## Hashtags:

#n8n #automation #Stripe #QuickBooks #salesreceipt
