# DigialOceanUpload

## Use cases:

- **File Sharing:** Allow users to upload files (e.g., images, documents) via a web form and share the publicly accessible link.
- **Content Management:** Enable a simple content upload mechanism where uploaded files are stored in Digital Ocean Spaces for use in websites or applications.
- **Data Collection:** Collect files from users through a form for research, feedback, or other data gathering purposes.

## How it works:

1.  **On form submission:** The workflow starts when a user submits a form with a file upload field. The form includes a field labeled "File to Upload."
2.  **S3:** The file is uploaded to a Digital Ocean Spaces bucket named "dailyai." The filename from the submission is preserved. The file is made publicly readable (`publicRead`).
3.  **Form:** After the file upload is complete, the user is shown a completion message in the form. This message includes a link to the uploaded file on Digital Ocean Spaces. The URL is constructed using the filename, providing direct access to the uploaded file.

## Services:

-   Digital Ocean Spaces (S3-compatible storage)

## Hashtags:

#n8n #DigitalOcean #FileUpload #Automation #Workflow
