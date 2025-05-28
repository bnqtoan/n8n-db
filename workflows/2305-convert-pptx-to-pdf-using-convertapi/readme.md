# PPTX to PDF Conversion Workflow

## Use cases:

- **Automated Document Conversion:** Automatically convert PPTX files to PDF format for archiving, sharing, or standardization purposes.
- **Content Management System Integration:** Integrate with a CMS to automatically convert uploaded PPTX files to PDF for wider accessibility.
- **Email Attachment Conversion:** Convert PPTX attachments received via email to PDF for easier viewing on various devices.

## How it works:

1.  The workflow starts with a "When clicking ‘Test workflow’" node, which triggers the workflow manually.
2.  The "Download PPTX File" node downloads a PPTX file from a specified URL (`https://cdn.convertapi.com/public/files/demo.pptx`).
3.  The "File conversion to PDF" node sends the downloaded PPTX file to the ConvertAPI service to convert it to PDF. Authentication is handled through a generic credential type "httpQueryAuth."
4.  The "Write Result File to Disk" node writes the resulting PDF file to the n8n's file system with the name `document.pdf`.

## Services:

-   ConvertAPI ([https://www.convertapi.com/](https://www.convertapi.com/)): Used for converting the PPTX file to PDF.

## Hashtags:

#n8n #automation #workflow #PDF #ConvertAPI
