# S3 Bucket File Downloader and Compressor

## Use cases:

- **Backup Automation:** Regularly back up specific folders from an S3 bucket by downloading and compressing them into a single ZIP file. This ensures data is stored securely and efficiently.
- **Content Archiving:** Archive project-related files stored in an S3 bucket once a project is completed. The workflow bundles all files into a ZIP archive for easy storage and retrieval.
- **Data Portability:** Easily transfer files from an S3 bucket to another location by downloading and compressing them. This is useful for migrating data or sharing it with collaborators.

## How it works:

1.  **Trigger:** The workflow starts when you manually click "Test workflow".
2.  **List Files:** The "List ALL Files\*" node connects to your AWS S3 bucket and retrieves a list of all files located in the specified folder.  It requires you to set the "folderKey" and "bucketName" parameters to your specific folder and bucket.
3.  **Download Files:** For each file found, the "Download ALL Files from Folder\*" node downloads the file from the S3 bucket. It requires you to set the "bucketName" parameter to your specific bucket. The node uses the file key obtained from the previous step to download the correct file.
4.  **Aggregate into One Item:** The "All into one Item (include Binary)" node gathers all the downloaded files (including binary data) into a single item.  This is essential for compressing all files together.
5.  **Compress to ZIP:** Finally, the "Compress all of them to a ZIP" node takes all the aggregated files and compresses them into a single ZIP archive named "s3-export.zip". The binary data is included in the ZIP file.

## Services:

-   AWS S3

## Hashtags:

#n8n #AWSS3 #automation #backup #filemanagement
