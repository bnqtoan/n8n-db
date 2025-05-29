# 📁🔁 GDrive CopyFolderStructure (n8n)

## Use cases

- **Backup Folder Structure:** Regularly copy the folder structure from a source Google Drive location to a destination for backup purposes, without copying the actual files.
- **Template Folder Creation:** Quickly create a standardized folder structure in Google Drive for new projects or clients, ensuring consistency across different instances.
- **Development/Production Sync:** Replicate a folder structure from a development Google Drive to a production Google Drive, streamlining deployment processes.

## How it works

This workflow automates the process of copying a folder structure from one Google Drive location (SOURCE) to another (DESTINATION).  It begins with a manual trigger. The workflow then works as follows:

1.  **Manual Trigger:** Starts the workflow execution.
2.  **EDIT_THIS_NODE:** This node likely contains initial setup parameters or configurations. Further details are needed to define its function accurately.
3.  **Get_Folders_DESTINATION:** Retrieves the list of folders in the destination Google Drive location.
4.  **Merge_Folder_Context:** Merges the data from the EDIT_THIS_NODE node with the folder information from the destination.
5.  **Set Destination Names:** This node likely modifies or prepares the destination folder names. Further details are needed to define its function accurately.
6.  **Get_Folders_SOURCE:** Retrieves the folder structure from the source Google Drive location.
7.  **Loop Over Items:** Iterates through each folder retrieved from the source location.
8.  **Check if folder exists:** Determines whether the current folder from the source already exists in the destination.
9.  **If exists:** A conditional statement that checks the result of the folder existence check.
10. **Create Folder:** If the folder doesn't exist in the destination, it creates the corresponding folder. The process then continues to loop over any remaining folders from the source.

## Services

-   Google Drive

## Hashtags

#n8n #googleDrive #automation #folderStructure #copyFolders
