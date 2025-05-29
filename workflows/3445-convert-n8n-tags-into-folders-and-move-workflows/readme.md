# Tags to Folders

## Use cases:

- **Automated Workflow Organization:** Automatically organize n8n workflows into folders based on tags, making it easier to navigate and maintain a large number of workflows.
- **Tag-Based Workflow Management:** Enable users to select existing tags from a dropdown to move workflows to corresponding folders, streamlining workflow categorization.
- **New Folder Creation:** Allow users to create new folders based on tags if the folders don't already exist, dynamically expanding the folder structure as needed.

## How it works:

1.  **Form Submission:** The workflow starts with a form submission containing tags.
2.  **Authentication:** The workflow authenticates with the n8n instance using provided credentials.
3.  **Fetch Tags:** It retrieves a list of existing tags from the n8n instance, filtering to only grab personal owned projects.
4.  **Format Tags:** It formats these tags for a dropdown selection in a subsequent form.
5.  **User Tag Selection:** The user selects one or more tags from the dropdown.
6.  **Project and Folder Retrieval:** The workflow fetches the user's projects and then, for each selected tag, attempts to find a folder with the same name as the tag.
7.  **Folder Creation (if needed):** If no folder exists for a given tag, a new folder is created with the tag's name.
8.  **Workflow Retrieval and Move:** Workflows associated with the selected tags are retrieved and moved to the corresponding folder.
9.  **Completion Message:** A completion message is displayed, showing the number of workflows imported and the folders they were moved to.

## Services:

-   n8n API

## Hashtags:

#n8n #automation #workflow #organization #tags #folders
