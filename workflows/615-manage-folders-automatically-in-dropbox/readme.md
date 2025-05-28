# My Workflow

## Use cases

*   **Automated File Download and Storage:** Automatically download a file from a specific URL and store it in a designated Dropbox folder.
*   **Backup System:** Periodically back up files from a web server to a Dropbox account.
*   **Content Management:** Fetch images or documents from a website and organize them into specific folders within Dropbox.

## How it works

1.  **Trigger:** The workflow is manually triggered using the "On clicking 'execute'" node.
2.  **Create Dropbox Folder:** A folder named "n8n" is created in your Dropbox account (if it doesn't exist) using the "Dropbox" node.
3.  **Download File:** The "HTTP Request" node downloads a PNG image (n8n-logo.png) from the specified URL (`https://n8n.io/n8n-logo.png`) and saves it as a file.
4.  **Upload to Dropbox:** The downloaded image is then uploaded to the "n8n" folder in your Dropbox account as "file.png" using the "Dropbox1" node.
5.  **List Folder Content:** The "Dropbox2" node lists the contents of the `/n8n` folder, potentially including the uploaded image.

## Services

*   Dropbox
*   HTTP Request (Any Website/API that serves files)

## Hashtags

#n8n #dropbox #automation #filemanagement #http
