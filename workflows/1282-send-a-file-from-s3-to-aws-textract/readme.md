# AWS Textract Workflow

## Use cases:

*   **Automated Invoice Processing:** Automatically extract data from scanned invoices stored in AWS S3, eliminating manual data entry.
*   **Document Digitization:** Process scanned documents like forms or contracts stored in S3, making the information accessible and searchable.

## How it works:

1.  The workflow is triggered manually using the "On clicking 'execute'" node.
2.  The "AWS S3" node retrieves a file named "Rechnung.jpg" from the "textract-demodata" bucket in AWS S3.
3.  The "AWS Textract" node processes the image retrieved from S3, extracting the text and structured data from the document.

## Services:

*   AWS S3
*   AWS Textract

## Hashtags:

#n8n #AWS #Textract #S3 #Automation
