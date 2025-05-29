# Dropbox Watch Files

## Use cases:

- **Automated File Processing:** Trigger a workflow whenever a new file is added to a specific Dropbox folder. This is useful for automatically processing documents, images, or audio files as soon as they are uploaded.
- **Content Management System Integration:** Automatically update a CMS or database when new files are added to a Dropbox folder. For example, adding a new blog post draft to a "Blog Drafts" folder could automatically create a new entry in a CMS.
- **Backup and Archiving:** Monitor a Dropbox folder for new files and automatically back them up to another location, ensuring data redundancy and protection.

## How it works:

This workflow monitors specific folders in Dropbox for new files and triggers actions based on the file type.  Here's a breakdown:

1.  **Dropbox Webhook:** A `Webhook` node listens for changes in your Dropbox account. Dropbox sends a POST request to this webhook URL whenever a file is added, modified, or deleted. The workflow immediately responds to the webhook to acknowledge receipt within 10 seconds to avoid errors.
2.  **Set Folder Variables:** The workflow uses `Set` nodes (`set_folder A`, `set_folder to watch B`) to define the Dropbox folders to monitor. This makes the workflow reusable for different folders.
3.  **List Dropbox Folder Contents:** A `Dropbox` node (`Dropbox get files`, `Dropbox - List watched folder`) retrieves a list of all files and folders within the specified Dropbox folder.
4.  **Filter File Types:**  A `Switch` node (`Switch File vs Folder`, `Switch File vs Folder1`) filters the list to separate files from folders.
5. **Way 1 - process each file :** For each element founded, a subworkflow is triggered to process the file based on a specified workflow ID
6. **Way 2 - Filter New files only :** The node `NocoDB - Get know files to exclude` retreives a list of file already processed. Then the merge node keep only new files from the list. Those files are added in NocoDB and then a subworkflow is triggered to process each new files.
7.  **Execute Workflow (Subworkflow):** An `Execute Workflow` node (`Execute Workflow - what i want to do for this folder/file A`, `Execute Workflow - Something to do for new files`) then triggers another n8n workflow. This allows the user to defines the actions that are triggered for each new files.

## Services:

-   Dropbox
-   NocoDB

## Hashtags:

#n8n #dropbox #automation #filemanagement #webhook
