# Create Google Drive Folders by Path

## Use cases:

- **Automated Project Folder Creation:** Automatically create a structured folder hierarchy in Google Drive whenever a new project is initiated, ensuring consistent organization from the start.
- **Client Onboarding:** When a new client is onboarded, automatically generate a dedicated folder structure for their documents and project files, streamlining the onboarding process.
- **Dynamic Report Generation:** Create a new folder structure for each report based on date, quarter, or other relevant parameters, allowing for easy access and retrieval of specific reports.

## How it works:

This workflow creates nested Google Drive folders based on a specified path and returns the ID of the final folder.

1.  **Trigger:** The workflow is designed to be triggered by another workflow, accepting `google_drive_folder_id` (the ID of the parent folder, defaulting to "root") and `desired_path` (the folder structure to create, e.g., "Projects/Clients/Reports") as input.
2.  **Split the path:**  The `desired_path` string is split into an array of folder names.
3.  **Main loop:** The workflow iteratively checks if each folder in the `desired_path` array exists within the current parent folder.
4.  **Check Folder Existence:** For each folder name, the workflow uses the Google Drive node to search for a folder with that name within the current parent folder (`google_drive_folder_id`).
5.  **Create Folder (if necessary):** If the folder doesn't exist, the workflow creates a new folder with the current folder name in the specified parent folder.
6. **Set parameters for next run**: After the folder is created, the created folder ID is saved to be used as the new parrent folder for the next iteration. 
7.  **Loop Continuation:** The workflow repeats steps 4 and 5 for each folder name in the `desired_path` array.
8.  **Complete path:** The process stops when all elements of the path are correctly created
9.  **Return value:** Finally, the workflow returns the ID of the last folder in the created path, so you can immediately use that folder in the calling workflow (e.g., to upload files).

## Services:

-   Google Drive

## Hashtags:

#n8n #googleDrive #automation #folderCreation #workflow
