# Stripe Invoice Automation

## Use cases:

- Automatically create and finalize invoices in Stripe when a new customer is added or an existing customer is found.
- Streamline the invoice creation process by automatically adding items to invoices based on predefined data.
- Trigger the invoice workflow manually for testing or on-demand invoice generation.

## How it works:

1.  **Trigger:** The workflow starts with a manual trigger ("When clicking ‘Test workflow’").
2.  **Set Invoice Data:** The "Set invoice data" node prepares the necessary information for creating the invoice.
3.  **Get Stripe Customer:** The "Get Stripe Customer" node checks if a customer exists in Stripe.
4.  **Customer Exists?**: An "If" node checks the response from the "Get Stripe Customer" node.
    *   **If the customer exists:** The "Set customer id" node extracts and sets the customer ID for future use.
    *   **If the customer doesn't exist:** The "Create customer" node creates a new customer in Stripe.
5.  **Create Customer / Set customer id:** The id of the cutomer is setted (if exists) or the new customer is created.
6.  **Create Invoice:** The "Create invoice" node uses the customer ID and other data to create a new invoice in Stripe.
7.  **Add item to invoice** An item is added to the invoice.
8.  **Finalize Invoice:** The "Finalize invoice" node finalizes the invoice, making it ready to be sent to the customer.

## Services:

*   Stripe

## Hashtags:

#n8n #Stripe #InvoiceAutomation #CustomerManagement #WorkflowAutomation
