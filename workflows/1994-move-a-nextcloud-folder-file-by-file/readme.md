# Nextcloud Folder Transfer Workflow

## Use cases:

- **Migrating folders between Nextcloud instances:** Easily move folders and their contents from one Nextcloud server to another.
- **Archiving old projects:** Transfer completed project folders to an archive location within Nextcloud.
- **Organizing files:** Restructure your Nextcloud file system by moving folders to different locations.

## How it works:

This workflow automates the process of transferring a folder, including all its subfolders and files, within Nextcloud. Here's a breakdown:

1.  **Trigger:** The workflow can be triggered manually ("When clicking Execute Workflow"), via a Webhook, or from another n8n workflow ("Execute Workflow Trigger").
2.  **Set Paths:** The `from` and `to` paths for the folder transfer are specified. These paths represent the source and destination folders within Nextcloud.
3.  **Create Destination Folder:** The workflow checks if the destination folder exists and creates it if necessary, using the "Create to folder if necessary" node.
4.  **Get Files and Subfolders:** It retrieves a list of all files and subfolders within the source folder using the "Get all folders/files in from-folder" node.
5.  **Loop Through Items:** The workflow iterates through each item (file or subfolder) found in the source folder.
6.  **Check if file:** Conditional flow to check if the current item is a file
7.  **Handle Files:** "Consolidate all files and folders found" merges all files from the first found folder
8.  **Handle Subfolders:** If the item is a subfolder, "Set new path for subfolder" sets the correct from and to path and creates the subfolder. The workflow gets the files from the created subfolder with "Get all folders/files in found subfolder".
9.  **Check if more files / subfolders are found:** "Whether there is are more files or subfolders found" checks if more files and subfolders are found
10. **Enrich Files:** The new path for all found files are enriched with the correct path using the code node "Set new path for file"
11. **Move Files:** The workflow iterates through each file and moves it to the corresponding location in the destination folder using the "Move file to destination" node.
12. **Delete Old Folder (Optional):** After successfully moving all files and subfolders, the workflow can optionally delete the original source folder using the "Delete from-folder" node.

## Services:

-   **Nextcloud:** The workflow interacts with a Nextcloud instance to list files, create folders, and move files.

## Hashtags:

#n8n #Nextcloud #Automation #FileManagement #Workflow
