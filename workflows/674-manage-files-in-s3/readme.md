# Upload a file and get a list of all the files in a bucket

## Use cases:

*   **Automated Asset Backup:** Automatically upload files from a specific URL to an S3 bucket for backup purposes whenever a trigger is activated.
*   **Content Mirroring:** Mirror publicly available content (e.g., images, documents) from a source URL to an S3 bucket for CDN or archival purposes.
*   **Scheduled Data Ingestion:**  Periodically fetch a file from a URL and store it in an S3 bucket, followed by retrieving a list of all files in the bucket for monitoring or inventory management.

## How it works:

1.  The workflow starts with a **"On clicking 'execute'"** Manual Trigger node, which initiates the workflow execution when manually triggered in n8n.
2.  An **"HTTP Request"** node fetches a file from the specified URL (`https://n8n.io/n8n-logo.png`). The `responseFormat` is set to "file", indicating that the response should be treated as a file.
3.  The **"S3"** node then uploads the fetched file to an Amazon S3 bucket named "n8n". The `fileName` parameter dynamically extracts the filename from the HTTP Request node's binary data, and the `operation` is set to `upload`.
4.  Finally, another **"S"** (S3) node retrieves a list of all files present in the "n8n" S3 bucket. The `operation` is set to `getAll` and `returnAll` is set to `true` to ensure all files are returned.

## Services:

*   Amazon S3

## Hashtags:

#n8n #automation #S3 #filemanagement #cloudstorage
