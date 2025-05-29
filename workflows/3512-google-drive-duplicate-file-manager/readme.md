# Google Drive Deduplication Workflow

## Use cases:

- **Automatic cleanup of duplicate files in a Google Drive folder:**  Regularly remove duplicate files to save storage space and improve organization.
- **Flagging potential duplicate files for manual review:** Instead of deleting, rename duplicates for a user to inspect and decide on the appropriate action.
- **Ensuring only the latest or oldest version of a file is kept:** Useful for managing documents that are frequently updated, ensuring either the initial or final version is retained.

## How it works:

1.  **Trigger:** The workflow is triggered by the "Google Drive Trigger" node when a new file is created in a specified folder.
2.  **Configuration:** The "Config" node sets workflow parameters like `keep` (first or last version), `action` (trash or flag duplicates), `owner` (file owner's email), and `folder` (the target Google Drive folder).
3.  **Get files from working folder:** The "Working Folder" node retrieves all files from the configured Google Drive folder, filtering by the specified owner.
4.  **Drop Google Apps files:** The "Drop Google Apps files" filter discards Google Docs, Sheets, Slides, Forms and other Google Apps files because their content can't be directly checked for duplication.
5.  **Keep First/Last:** This "Switch" node decides whether to keep the first or last received file when duplicates are detected according to the `keep` parameter of the config node.
6.  **Deduplication:**  The "Deduplicate Keep First" and "Deduplicate Keep Last" nodes (depending on the `keep` parameter) identify duplicate files based on their `md5Checksum` property. They add a `isDuplicate` property to each file. Files without the `md5Checksum` are marked as not duplicate.
7.  **Edit Fields:** The "Edit Fields" node extracts and sets the `isDuplicate`, `id`, and `name` properties for further processing.
8.  **Filter Duplicates:** The "Filter" node selects only the files identified as duplicates (`isDuplicate` is true).
9.  **Trash/Flag Duplicates:** This "Switch" node decides whether to send duplicates to trash or flag them according to the `action` parameter of the config node.
10. **Send to Trash/Flagging:** Based on the configuration:
    *   **Trash:** The "Send Duplicates to Trash" node moves the duplicate files to the Google Drive trash.
    *   **Flag:** The "Is Flagged" node checks if the file name already starts with "DUPLICATE-". If not, the "Google Drive" node renames the file by prepending "DUPLICATE-" to its name. If yes it skips the action doing "No Operation, do nothing".

## Services:

-   Google Drive API

## Hashtags:

\#n8n \#automation \#googleDrive \#deduplication \#workflow
