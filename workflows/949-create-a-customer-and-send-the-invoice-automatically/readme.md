# QuickBooks Customer, Invoice, and Email Workflow

## Use cases:

*   **Automated Customer and Invoice Creation:** Automatically creates a new customer in QuickBooks, generates an invoice for them, and sends the invoice directly to the customer's email.
*   **Streamlined Billing Process:** Simplifies and accelerates the billing cycle by automating the process from customer creation to invoice delivery.

## How it works:

1.  **Create Customer (QuickBooks):** The workflow starts by creating a new customer in QuickBooks. The customer's display name (e.g., "Jack Ryan") and email address are defined in this step.
2.  **Create Invoice (QuickBooks1):** An invoice is then generated, associating it with the newly created customer. The invoice includes a line item with an amount (e.g., 100), a description (e.g., "Consulting service"), and an item ID.  The `CustomerRef` parameter uses the `Id` from the previous node to link the invoice to the newly created customer.
3.  **Send Invoice (QuickBooks2):** Finally, the workflow sends the created invoice to the customer's email address.  The `invoiceId` parameter utilizes the `Id` from the previous node.

## Services:

*   QuickBooks

## Hashtags:

#n8n #QuickBooks #automation #invoice #CRM
