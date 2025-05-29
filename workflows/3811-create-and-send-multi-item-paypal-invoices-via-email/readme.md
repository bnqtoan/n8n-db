# PayPal Invoice Automation Workflow

## Use Cases:

- **Automated Invoice Creation:** Automatically generate and send PayPal invoices based on data collected from a form or other sources.
- **Dynamic Line-Item Invoices:** Create invoices with a variable number of line items, allowing users to add multiple products or services to a single invoice.
- **Streamlined Payment Collection:** Simplify the invoicing process and enable faster payment collection through automated invoice dispatch via PayPal.

## How it works:

1.  **Collect Invoice Details:** The workflow starts with a "Form Trigger" node (`Collect Invoice Details`) that collects invoice information such as item details, pricing, recipient information, and PayPal credentials.
2.  **Initial Data Formatting:** The "Reformat JSON" node prepares the collected data into a suitable format for creating a PayPal invoice.
3.  **Handle Additional Items:**
    *   The workflow uses forms (`Prompt for Additional Line-Item`, `Prompt for Additional Line-Item 1`, and `Add Another Item`) and code nodes (`Remove Add Decision`, `Reformat newItem JSON`, `Append newItem into items with currency_code`) combined with merge nodes (`Combine New Items Into Master List`, `Merge Base Invoice & Add-Item Decision`, `Merge Updated Items & Add-Item Decision`) to prompt the user to confirm and input for each item.
    *   The workflow uses a switch node (`Loop: More Items?`) as a condition check.
4.  **Authentication:**
    *   The workflow uses client id and secret from the `Collect Invoice Details` form to encode a Basic Auth Token.
    *   An OAuth token is fetched from PayPal using the encoded authentication.
5.  **Invoice Creation:**
    *   The "Call PayPal Create Invoice" node then sends a request to PayPal's API to create an invoice using the formatted data and the OAuth token.
6.  **Get Preview URL:**
    *   After creating the invoice, the workflow retrieves a preview URL via the PayPal API.
7.  **Invoice Dispatch:** Finally, the "Dispatch Invoice via PayPal" node sends the generated invoice to the specified recipient via PayPal.

## Services:

-   **PayPal API:** Used for creating invoices and retrieving preview URLs.

## Hashtags:

#n8n #automation #paypal #invoice #workflow
