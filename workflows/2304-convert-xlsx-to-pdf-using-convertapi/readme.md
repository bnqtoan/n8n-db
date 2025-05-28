# XLSX to PDF Converter

## Use cases:

- **Automated Document Archiving:** Convert Excel spreadsheets to PDF format for long-term storage and compliance, ensuring data integrity and accessibility.
- **Report Generation:** Automatically convert XLSX reports into PDFs for easy distribution to stakeholders who may not have Excel installed.
- **Data Sharing:** Transform Excel files into a more universally accessible PDF format before sharing them with clients or partners, preserving formatting and layout.

## How it works:

1.  **Manual Trigger:** The workflow starts when you manually trigger it using the "When clicking ‘Test workflow’" node.
2.  **Download XLSX File:** It downloads an XLSX file from a specified URL (`https://cdn.convertapi.com/public/files/demo.xlsx`) using an HTTP Request node. The node is configured to retrieve the response as a file.
3.  **File conversion to PDF:** The XLSX file is sent to the ConvertAPI service to convert it to PDF.
    -   It uses the `https://v2.convertapi.com/convert/xlsx/to/pdf` endpoint with the POST method.
    -   It passes the downloaded XLSX file as form data using the `file` parameter.
    -   Authentication is handled via a generic HTTP Query Auth credential.
4.  **Write Result File to Disk:** Finally, the converted PDF file is written to disk with the name `document.pdf` using the "Write Result File to Disk" node.

## Services:

-   **ConvertAPI:** Used for converting the XLSX file to PDF.
-   **ConvertAPI Account:** Is needed to ensure authentication on the API.

## Hashtags:

#n8n #automation #excel #pdf #fileconversion
