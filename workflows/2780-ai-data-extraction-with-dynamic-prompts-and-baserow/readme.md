# AI Data Extraction with Dynamic Prompts and Baserow

## Use Cases

- **Automated Data Entry:** Automatically populate Baserow tables from uploaded PDF files based on user-defined prompts. For example, extract data from invoices, receipts, or contracts and fill in corresponding fields in your Baserow database.
- **Dynamic Data Enrichment:** Enrich existing Baserow data by extracting information from relevant documents. When a new file is uploaded, the workflow automatically populates the relevant fields based on the extracted data.
- **Customizable Data Extraction:** Adapt the data extraction process without modifying the workflow. Users can adjust the prompts (field descriptions) in Baserow to extract different information from the same file type.

## How it Works

This workflow automates data extraction from PDF files uploaded to a Baserow table using dynamic prompts defined in the table's field descriptions. Here's a step-by-step breakdown:

1.  **Baserow Event Trigger:** The workflow starts when a row is updated or a field is created/updated in a Baserow table. A webhook listens for events like `row_updated`, `field_created`, and `field_updated`.
2.  **Event Type Router:** The workflow determines the event type (row updated, field created, or field updated) and routes the execution accordingly.
3.  **Get Table Schema:** Retrieves the table schema from Baserow using the Baserow API to get the field descriptions which act as prompts for data extraction.
4.  **Handle Row Updates:**
    *   Filters rows with valid file URLs.
    *   Loops through each row:
        *   Downloads the PDF file.
        *   Extracts text from the PDF.
        *   Generates field values using a Large Language Model (LLM) based on the extracted text and the dynamic prompts defined in the Baserow field descriptions.
        *   Updates the corresponding row in Baserow with the extracted values.
5.  **Handle Field Updates:**
    *   Lists all rows in the table.
    *   Filters rows where the input file column is not empty.
    * Loops through these rows
        * Downloads the PDF file
        * Extracts text from the PDF
        * Uses LLM to fill data for relevant field columns

## Services

-   Baserow: A no-code database platform.
-   OpenAI: Used via the Langchain integrations to provide LLM capabilities.

## Hashtags

#n8n #automation #baserow #llm #dataextraction
