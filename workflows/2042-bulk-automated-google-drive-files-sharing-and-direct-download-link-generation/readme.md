# My Workflow

## Use cases:

- **Bulk Download Link Generation:** Generate direct download links for all files within a specific Google Drive folder, which can be useful for sharing large amounts of data with external users without granting folder access.
- **Making Files Publicly Downloadable:** This workflow automates the process of making multiple files in a Google Drive folder accessible to anyone with the generated download link, simplifying the sharing of public documents, resources, or assets.
- **Automated Content Distribution:** It allows automating sharing files stored on Google Drive.

## How it works:

1.  **Manual Trigger (Optional):** The workflow can be triggered manually.
2.  **Set Folder ID:**  A "Set" node allows you to manually enter the Google Drive Folder ID that is to be processed, the default value is "Enter Your Folder ID here"
3.  **Google Drive:** This node retrieves a list of files from a specified Google Drive folder using the provided Folder ID. It uses the OAuth2 authentication to access the Google Drive account.
4.  **Loop Over Items:** Splits the items (files) into batches for processing.
5.  **Generate Download Links:** A "Code" node generates a direct download link for each file retrieved from Google Drive. The download link is created using the file ID.
6.  **Change Status:** This Node grants public access to files, so that anyone can download them with the link.
7.  **Merge:** Merge back all splitted data into one.
8.  **Replace Me:** Replace this No-Op node with the desired data store node.
9.  **Output:** The workflow outputs a list of JSON objects, each containing the direct download link and the name of the file.

## Services:

*   Google Drive

## Hashtags:

#n8n #GoogleDrive #Automation #DownloadLinks #FileSharing
