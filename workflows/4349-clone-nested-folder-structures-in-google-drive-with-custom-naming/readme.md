# Google Drive Folder Structure Cloner - Visual

## Use cases:

*   **Template Creation:** Quickly replicate a standard folder structure in Google Drive for new projects, teams, or clients.
*   **Backup and Migration:** Duplicate a folder structure to a new location within Google Drive for backup purposes or when migrating data.
*   **Onboarding:** Set up a consistent folder structure for new employees or team members to ensure organized file management.

## How it works:

1.  **Trigger:** The workflow is manually triggered using the "When clicking \"Test workflow\"" node.
2.  **Configuration:** The "⚙️ CONFIG - Edit the 3 variables above" node (likely a Code node) is used to set configuration parameters, like source folder ID, destination folder ID, and Google Drive credentials (though these are not explicitly visible in the JSON provided).
3.  **Get All Folders:** The "📁 Get All Folders" node uses an HTTP Request node to retrieve a list of all folders from the source Google Drive folder, which needs the Google Drive credentials set up.
4.  **Process Folders:** The "🔄 Process Folders" node iterates through the list of folders fetched and prepares data for the next step. It likely extracts relevant information such as folder names and parent folder IDs.
5.  **Should Create?:** The "🔀 Should Create?" node uses a conditional (IF) statement to determine if a folder with the same name already exists in the destination. This likely involves checking against existing folders in the destination drive.
6.  **Create Folder:** If the folder doesn't exist (according to the conditional check), the "✨ Create Folder" node uses an HTTP Request node to create a new folder in the destination Google Drive, using the extracted name and placing it in the correct parent folder based on the source folder's structure.
7.  **Final Report:** The "📊 Final Report" node, a Code node, likely aggregates results and logs actions, giving an overview of folders created.

## Services:

*   Google Drive (via Google Drive API, accessed through HTTP Request nodes)

## Hashtags:

#n8n #googleDrive #automation #folderManagement #workflow
