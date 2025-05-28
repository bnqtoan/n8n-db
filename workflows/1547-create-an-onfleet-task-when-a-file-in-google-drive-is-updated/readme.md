# Create an Onfleet task when a file in Google Drive is updated

## Use cases:

*   **Automated Task Assignment:** Automatically create a task in Onfleet when a specific file in Google Drive is updated, ensuring timely action on updated documents.
*   **Delivery Scheduling:**  Trigger an Onfleet delivery task when a spreadsheet containing delivery information is modified in Google Drive, streamlining logistics operations.

## How it works:

This workflow automates the process of creating an Onfleet task whenever a specific file in Google Drive is updated.

1.  **Google Drive Trigger:** The workflow starts with a "Google Drive Trigger" node. This node monitors a specified file in Google Drive. It is configured to trigger when the file is updated, checking every minute.
2.  **Onfleet:** Upon detecting a file update, the "Onfleet" node is activated. This node creates a new task in Onfleet.

## Services:

*   Google Drive
*   Onfleet

## Hashtags:

#n8n #automation #googleDrive #onfleet #taskManagement
