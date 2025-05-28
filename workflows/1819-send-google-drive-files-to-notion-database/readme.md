# Google Drive File Upload to Notion Page

## Use cases:

- Automatically create a Notion page entry whenever a new file is uploaded to a specific Google Drive folder, acting as a file management system within Notion.
- Log all uploaded files with their names and links in a Notion database for easy tracking and collaboration.
- Trigger project-related workflows when a file is added to a specific project folder in Google Drive, creating a centralized hub for files and project management in Notion.

## How it works:

1.  The workflow starts with the "On file upload" node, which is a Google Drive Trigger. This node monitors a specific folder (`1_vYi00lSdzU2p6wGrnW_IqsOblOL-3zG`) for new file uploads. It polls every minute to check for new files.
2.  When a new file is detected, the trigger node outputs the file's information, including its name and web view link.
3.  The "Create database page" node receives the file information from the previous node. It then creates a new page in a specified Notion database (`d637c796-d33b-4768-b955-55c66a0966b7`).
4.  The Notion page's title is set to the name of the uploaded file (using the expression `{{$node["On file upload"].json["name"]}}`).
5.  The "File" property within the Notion database is updated with the URL and name of the uploaded file. The URL is taken from `{{ $json["webViewLink"] }}`, and the name of the file from `{{ $node["On file upload"].json["name"] }}`

## Services:

-   Google Drive
-   Notion

## Hashtags:

#n8n #GoogleDrive #Notion #Automation #FileManagement
