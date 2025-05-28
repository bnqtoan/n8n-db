# My Workflow

## Use cases:

- **Automated Invoice Generation and Sending:** Generates personalized invoices for each customer with specific line items, calculates totals, and sends them via email.
- **Customer List Reporting:** Compiles a list of new customers (potentially filtered by creation date) and sends it as an HTML-formatted email.
- **Customer Data Management:** Retrieves and manages customer data from a datastore, sorts the data, and uses it to create personalized documents and reports.

## How it works:

1.  **Trigger:** The workflow starts when the "On clicking 'execute'" node is manually triggered.
2.  **Fetch Customer Data:** The "Customer Datastore" node retrieves customer information from a customer data store. It retrieves data for all people.
3.  **Sort Customer Data:** The "Item Lists" node sorts the retrieved customer data by the "name" field.
4.  **Add Invoice Lines:** The "Add lines" node adds invoice line items (description, quantity, amount, VAT, total) and sets a date and total amount to each customer data item.
5.  **Generate Personalized Invoice:** The "One item per template" node generates an invoice in text format for each customer based on a Handlebars template, including customer details, invoice lines, and total amount.
6.  **Send Invoice Email:** The "Send one TEXT email per item" node sends a personalized email with the generated text invoice to each customer.
7.  **Generate Customer List HTML:** The "All items, one template" node generates an HTML list of all customers using a Handlebars template, showing each customer's name and email.
8.  **Send Customer List Email:** The "Send one HTML Email per list" node sends an email with the generated HTML customer list.

## Services:

*   **n8n Training Customer Datastore:**  (Assumed to be a custom or internal data storage solution for customer information. Specifics not discernible from the JSON).
*   **SMTP Server:** Used for sending emails (configured via SMTP credentials).

## Hashtags:

#n8n #automation #invoice #email #customermanagement
