# Invoice Generator from Typeform using APITemplate.io

## Use cases:

- **Automated Invoice Creation:** Automatically generate invoices in PDF format whenever a new form is submitted in Typeform.
- **Customized Invoice Generation:** Tailor invoice details (company name, billing address, items, prices, etc.) dynamically based on user inputs from Typeform.
- **Streamlined Billing Process:** Integrate Typeform submissions with APITemplate.io to automate invoice creation, saving time and reducing manual errors.

## How it works:

1.  **Typeform Trigger:** The workflow starts when a new form is submitted in Typeform. Specifically, it listens for submissions from the form with the ID "dpr2kxSL".
2.  **Extract Data:** Data from the Typeform submission, including email, text inputs, and number inputs, are extracted and passed to the next node.
3.  **APITemplate.io:** The APITemplate.io node receives the data from Typeform and uses it to populate a predefined PDF template with the ID "96c77b2b1ab6ac88". It uses a JSON structure to map the Typeform data to the appropriate fields in the template. The node is configured to download the generated PDF invoice with filename "invoice.pdf".

## Services:

-   **Typeform:** Collects user data via forms.
-   **APITemplate.io:** Generates documents (in this case, a PDF invoice) from templates using provided data.

## Hashtags:

#n8n #automation #invoice #typeform #apitemplateio
