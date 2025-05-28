# My Workflow

## Use cases:

- Back up specific files from web URLs to a Dropbox folder as a compressed ZIP archive.
- Create a ZIP archive containing images fetched from multiple URLs and store it in Dropbox for easy sharing or archiving.
- Automate the process of collecting visual assets from different online sources, compressing them, and saving them to a centralized Dropbox location.

## How it works:

1.  The workflow starts with a manual trigger, meaning it will execute when you click the "Execute Workflow" button in n8n.
2.  Two "HTTP Request" nodes fetch files from the specified URLs ("https://docs.n8n.io/assets/img/final-workflow.f380b957.png" and "https://n8n.io/n8n-logo.png"). The `responseFormat` parameter is set to "file", so the nodes retrieve the content of the URL as a file. The `dataPropertyName` parameter specifies which property will store the file data ("workflow_image" and "logo").
3.  The "Compression" node takes the retrieved images (referred to as "logo" and "workflow_image") and compresses them into a ZIP archive named "images.zip". The `outputFormat` is set to "zip" and it stores it in binary format.
4.  Finally, the "Dropbox" node uploads the generated "images.zip" file to the specified path ("/images.zip") in your Dropbox account.

## Services:

-   Dropbox
-   n8n

## Hashtags:

#n8n #automation #dropbox #filemanagement #compression
