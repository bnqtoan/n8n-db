# Batch File Upload to Google Drive with Folder Management

## Use cases:

- **Automated Document Archiving:** Automatically archive files submitted through a form into specific Google Drive folders based on user input (e.g., project name, client ID).
- **Course Material Organization:** Students submit assignments via a form, and the workflow automatically creates a folder for each student (if it doesn't exist) and uploads their files into it, ensuring organized storage of course materials.
- **Client Project File Management:** When a new client project starts, the workflow automatically creates a folder in Google Drive (if not exists) based on the client's name, and files related to the project submitted via form are uploaded into the corresponding folder.

## How it works:

1.  **Form Submission:** The workflow is triggered by a form submission containing file(s) and a target folder name ("On form submission" node).
2.  **Extract Folder Name:** Extracts the folder name from the form data ("Get Folder Name" node).
3.  **Search for Existing Folder:** Searches Google Drive for a folder with the specified name and parent folder ID ("Search specific folder" node).  **Important**:  The `<folderId>` placeholder needs to be replaced with a valid Google Drive Folder ID.
4.  **Folder Existence Check:**  Checks if the folder was found ("Folder found ?" node).
5.  **Conditional Branching:**
    *   **If Folder Exists:** Prepares the submitted files for upload to the existing folder ("Prepare Files for Upload" node) and uploads them ("Upload Files" node).
    *   **If Folder Does Not Exist:** Creates a new folder in Google Drive with the specified name ("Create Folder" node), then prepares the submitted files for upload to the new folder ("Prepare Files for New Folder" node) and uploads them ("Upload to New Folder" node).
6. **File preparation for upload:** Split binary data to be uploaded to Google Drive.
7. **File Upload**: Uploads files to a folder

## Services:

-   n8n
-   Google Drive
-   Form Trigger

## Hashtags:

#n8n #GoogleDrive #Automation #FileUpload #FolderManagement
