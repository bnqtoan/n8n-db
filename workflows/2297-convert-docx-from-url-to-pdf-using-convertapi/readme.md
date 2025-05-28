# DOCX to PDF Conversion Workflow

## Use cases:

- **Automated Document Conversion:** Automatically convert DOCX files to PDF format for archiving, sharing, or standardization purposes.
- **Web Application Integration:** Integrate the workflow into a web application to allow users to upload DOCX files and receive PDF versions.
- **Email Attachment Processing:** Monitor an email inbox for DOCX attachments, automatically convert them to PDF, and save them to a designated location.

## How it works:

1.  **Manual Trigger:** The workflow is initiated manually using the "When clicking ‘Test workflow’" node.
2.  **Configuration:** The "Config" node sets the `url_to_file` variable, which contains the URL of the DOCX file to be converted. The default value is `https://cdn.convertapi.com/cara/testfiles/document.docx`.
3.  **HTTP Request:** The "HTTP Request" node sends a POST request to the ConvertAPI service (`https://v2.convertapi.com/convert/docx/to/pdf`) to convert the DOCX file to PDF. It passes the `url_to_file` as a parameter named `file` within the multipart-form-data body and authenticates using the ConvertAPI secret key using HTTP Query Authentication.  The response is configured to be returned as a file.
4.  **Read/Write Files from Disk:** The "Read/Write Files from Disk" node writes the received PDF data to a file named `document.pdf`.

## Services:

-   **ConvertAPI:** An external API service used for converting DOCX files to PDF.

## Hashtags:

#n8n #automation #docx #pdf #fileconversion
