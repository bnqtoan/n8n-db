# Remove PII from CSV Files

## Use cases:

*   **Data Anonymization for Analysis:** Automatically remove personally identifiable information (PII) from CSV files before sharing them with data analysis teams or uploading them to analytics platforms. This helps comply with privacy regulations and protects sensitive data.
*   **Compliance with Data Protection Regulations:** Ensure that data stored or processed adheres to regulations like GDPR or CCPA by automatically sanitizing files containing PII before they are used in downstream applications.
*   **Secure Data Sharing:** Facilitate secure sharing of data with third parties by removing PII, allowing for collaborative work without exposing sensitive information.

## How it works:

1.  **Google Drive Trigger:** The workflow starts with a Google Drive Trigger node that monitors a specific folder for newly created files.
2.  **Get Filename:** extracts the original filename for later use
3.  **Google Drive Download:** When a new file is detected, the workflow downloads the file content.
4.  **Extract from File:** The file content is extracted by converting it to json data.
5.  **OpenAI PII Detection:** Sends the tabular data to OpenAI with instructions to analyze and identify columns containing PII, returning a comma-separated list of column names.
6.  **Get result:** extracts the data from OpenAI response
7.  **Merge:** Merge the data need to the next node
8.  **Remove PII Columns:** A Code node removes the identified PII columns from the CSV data. It parses the CSV content, identifies the columns to remove, and generates a sanitized CSV string with the PII columns removed.
9.  **Upload to Drive:** Uploads the modified CSV content to a specified folder in Google Drive with a new filename indicating that PII has been removed.

## Services:

*   Google Drive
*   OpenAI

## Hashtags:

#n8n #automation #googledrive #openai #pii #dataprivacy
