# My Workflow

## Use cases:

*   **Automated PDF Compilation:** This workflow can be used to automatically merge multiple PDF files from different URLs into a single PDF document.
*   **Dynamic Document Generation:** It can fetch PDFs dynamically based on data from other sources (e.g., a database or API) and combine them.
*   **Web Content Archiving:** The workflow can be scheduled to periodically download and merge PDF documents from specified URLs for archival purposes.

## How it works:

1.  The workflow starts with a "When clicking ‘Test workflow’" node, which triggers the workflow execution.
2.  A "PDF Array" Code node defines an array of PDF URLs.
3.  The "Split Out" node splits the array into individual PDF URLs, processing each one separately.
4.  For each PDF URL, an "HTTP Request1" node downloads the PDF file.
5.  The downloaded PDF content is then passed to a "Merge PDF" node, which merges all the downloaded PDFs into a single PDF file.
6.  The "Read/Write Files from Disk2" node writes the merged PDF to disk with the filename "test.pdf."
7.  Finally, the "Read/Write Files from Disk3" node reads the "test.pdf" file from the disk.

## Services:

*   **HTTP Request:** Used to download PDF files from URLs.
*   **CustomJS API:** Used for PDF Toolkit merge functionality.
*   **File System:** Used to write and read the merged PDF file from disk.

## Hashtags:

#n8n #PDF #Automation #Workflow #MergePDF
