# My Workflow

## Use cases:

- Automatically download a file from a specified URL and upload it to a NextCloud instance for archiving or sharing.
- Periodically fetch an updated version of a file (e.g., a logo or configuration file) from a web server and update the corresponding file in NextCloud.
- Triggered manually or automatically, this workflow will download content from a specified URL, store it to nextcloud, and list all folders from nextcloud

## How it works:

1.  The workflow is initiated by a manual trigger ("On clicking 'execute'").
2.  A NextCloud node creates a folder called "n8n" in Nextcloud.
3.  An HTTP Request node fetches the file located at `https://n8n.io/n8n-logo.png` and stores it as binary data.
4.  The binary data (the n8n logo) is then uploaded to NextCloud, specifically to the `n8n/logo.png` path.
5.  Finally the workflow lists all folders located on `/n8n` path.

## Services:

-   NextCloud
-   HTTP Request

## Hashtags:

#n8n #NextCloud #FileManagement #Automation #HTTPRequest
