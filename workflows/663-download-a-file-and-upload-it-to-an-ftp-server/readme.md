# FTP File Uploader and Lister

## Use cases

*   **Automated File Backup:** Automatically download a file from a URL and upload it to an FTP server for backup purposes.
*   **Content Mirroring:** Regularly fetch content (e.g., images, documents) from a web server and mirror it to an FTP server for redundancy or distribution.

## How it works

1.  **Manual Trigger:** The workflow starts when you manually click the "execute" button in n8n.
2.  **HTTP Request:** An HTTP Request node downloads a file (n8n logo in this case) from `https://n8n.io/n8n-logo.png`.  The `responseFormat` parameter is set to "file", ensuring the response is handled as a file.
3.  **FTP Upload:** The downloaded file is then uploaded to an FTP server using the FTP node. The `path` parameter specifies the destination directory and filename (`/upload/n8n_logo.png`). The connection to the FTP server is established using the `ftp_creds` credentials.
4.  **FTP List:** The workflow lists the content of the directory `/upload/` on the FTP server.

## Services

*   FTP
*   HTTP

## Hashtags

#n8n #FTP #Automation #FileTransfer #Backup
