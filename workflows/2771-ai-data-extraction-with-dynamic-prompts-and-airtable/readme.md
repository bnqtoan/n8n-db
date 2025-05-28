# AI Data Extraction with Dynamic Prompts for Airtable

## Use cases:

- **Automated Data Entry:** Automatically populate Airtable records by extracting information from uploaded PDF documents, eliminating manual data entry.
- **Content Enrichment:** Enhance existing Airtable data by automatically extracting relevant information from linked files, such as addresses, names, or other specific data points.
- **Dynamic Reporting:** Generate reports with up-to-date information extracted from documents, ensuring that data is always current and accurate.

## How it works:

This workflow automates data extraction from PDF files uploaded to an Airtable table using dynamic prompts.

1.  **Airtable Webhook Trigger:** The workflow starts when a row is updated or a field is created/updated in an Airtable table.
2.  **Fetch Table Schema:** The workflow retrieves the Airtable table schema, including field descriptions, which are used as dynamic prompts for the LLM.
3.  **Event Router:** The workflow routes the execution based on the event type: `row.updated`, `field.created`, or `field.updated`.
4.  **Filter Valid Rows/Fields:** Filters out rows or fields that do not meet the required criteria (e.g., missing file URL or field description).
5.  **Fetch Records:** Retrieves the records from Airtable that match the filter criteria.
6.  **Loop Over Items:** Iterates through the records to process each one individually.
7.  **Get File Data:** Downloads the PDF file from the URL stored in the Airtable record.
8.  **Extract from File:** Extracts the text content from the PDF file.
9.  **Generate Field Value:** Uses a Large Language Model (LLM) to extract data from the PDF content based on dynamic prompts defined in the Airtable field descriptions.
10. **Update Airtable Record:** Updates the Airtable record with the extracted data.

## Services:

-   **Airtable:** Used as a database and to trigger the workflow via webhooks.
-   **OpenAI (LLM):** Used to extract information from the PDF content based on dynamic prompts.

## Hashtags:

#n8n #automation #Airtable #dataextraction #LLM
