# My Workflow

## Use cases:

- **Automated Data Processing:** Automatically fetch customer data from a spreadsheet (either locally, via URL, or from a cloud service like Google Drive or OneDrive), calculate customer age based on their `created` date, and generate an updated spreadsheet file.
- **Scheduled Report Generation:** Schedule the workflow to run daily and automatically generate daily reports of data from a spreadsheet file. The data in the spreadsheet has an age column calculated.
- **Data Archiving with Transformation:** Fetch data from a spreadsheet, calculate customer ages, create a new spreadsheet and archive the updated file to a local filesystem, SFTP server, or cloud storage.

## How it works:

1.  **Load Spreadsheet File:** The workflow starts by loading a spreadsheet file. The file can be loaded from multiple sources:
    *   A public URL using the **HTTP Request** node.
    *   A local file system using the **Read Binary File** node.
    *   A cloud service like Google Drive or Microsoft OneDrive.
2.  **Convert to JSON:** The **Spreadsheet File** node converts the spreadsheet data into JSON format, which is a format that n8n nodes can easily manipulate.
3.  **Calculate Age:** The **Set** node (named "Work out Age") calculates the age of customers. It uses the customer's `created` date (assuming it's in `yyyy-MM-dd` format) to calculate the age in years.
4.  **Convert back to Spreadsheet:** The **Spreadsheet File** node converts the JSON data back into a spreadsheet format, specifically `.xlsx`. The file name includes the current date in `yyyyMMdd` format.
5.  **Save or Upload:** The updated spreadsheet file can be saved or uploaded to various destinations:
    *   Local filesystem using the **Write Binary File** node.
    *   SFTP server using the **FTP** node.
    *   Google Drive using the **Google Drive** node.
    *   Microsoft OneDrive using the **Microsoft OneDrive** node.

## Services:

-   **Google Drive:** Used to download and upload spreadsheet files.
-   **Microsoft OneDrive:** Used to download and upload spreadsheet files.
-   **SFTP:** Used to upload the generated spreadsheet file to a remote server.
-   **HTTP Request:** Used to download the spreadsheet file from a public URL.

## Hashtags:

#n8n #automation #spreadsheet #excel #dataTransformation
