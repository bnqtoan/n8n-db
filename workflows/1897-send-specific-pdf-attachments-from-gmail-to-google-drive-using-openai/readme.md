# Gmail to Google Drive PDF Parser using OpenAI

## Use cases:

- Automatically save payslips received via Gmail to a specific Google Drive folder.
- Archive invoices from email attachments in Google Drive for accounting purposes.
- Extract and store contracts sent as PDF attachments to Google Drive for legal compliance.

## How it works:

1.  The workflow is triggered when a new email is received in Gmail (`On email received` node).
2.  It checks if the email has attachments. If not, the workflow ends.
3.  The workflow iterates over each attachment in the email (`Iterate over email attachments` node).
4.  It verifies if the attachment is a PDF file (`Is PDF` node). If not, it skips to the next attachment.
5.  The PDF content is read (`Read PDF` node).
6.  Checks if the text is within the token limit to prevent issues with OpenAI (`Is text within token limit?`).
7.  The PDF text is sent to OpenAI, which determines whether the PDF content matches a specified search term (e.g., "payslip", "invoice") (`OpenAI matches PDF textual content` node).  The "Match on" term and other configurations like token sizes are defined in the `Configure` node.
8.  The results from the PDF reader and OpenAI are merged (`Merge` node).
9.  The workflow checks the response from OpenAI (`Is matched` node).
10. If the PDF matches the search term, the PDF file is uploaded to a specified folder in Google Drive (`Upload file to folder` node).
11. If the PDF does not match, it skips to the next attachment, if one exists (`This is not a matched PDF` node).

## Services:

-   Gmail
-   Google Drive
-   OpenAI

## Hashtags:

#n8n #automation #gmail #googledrive #openai #pdf
