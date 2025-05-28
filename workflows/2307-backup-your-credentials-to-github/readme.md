# n8n Credentials Backup to GitHub

## Use cases:

- **Automated Credentials Backup:** Regularly back up your n8n credentials to a GitHub repository to prevent data loss in case of system failures or accidental deletions.
- **Version Control for Credentials:** Track changes to your n8n credentials over time, allowing you to revert to previous versions if needed.
- **Disaster Recovery:** Quickly restore your n8n credentials to a new instance in case of a disaster.

## How it works:

1.  **Trigger:** The workflow is triggered either manually ("On clicking 'execute'") or on a schedule ("Schedule Trigger," set to run every 2 hours).
2.  **Export Credentials:** The "Execute Command" node runs an n8n command (`npx n8n export:credentials --all --decrypted`) to export all your decrypted credentials as a JSON string.
3.  **Format JSON:** The "JSON formatting" node converts the JSON string from the command line output into a usable JSON object within n8n. If no valid JSON is found, it creates an error object.
4.  **Loop Through Credentials:** The "Loop Over Items" node splits the array of exported credentials into individual items to be processed one by one.
5.  **Execute Sub-Workflow:** For each credential, the "Execute Workflow" node triggers a sub-workflow to handle the GitHub interaction. The sub-workflow significantly reduces memory usage
6.  **Sub-Workflow Trigger:** The "Execute Workflow Trigger" node receives the credential data.
7.  **Global Variables:** The "Globals" node defines global variables for the GitHub repository owner, name, and path. **Important:** You must update the values in this node to point to your GitHub repository.
8.  **Get Existing File (GitHub):** The "Get file data" node attempts to retrieve the existing credential file (named `credential_ID.json`) from the specified GitHub repository. The `credential_ID` part comes from the credential's ID.
9.  **Conditional Check:** "If file too large" checks if the 'content' field exists in the Github data AND is not empty. If it is empty, or an error ocurred, it jumps to "Get File". Otherwise it goes to merge.
10. **Get File via HTTP:** The "Get File" node download the file from Github.
11. **Merge data:** The "Merge Items" node merges the file and Github data.
12. **Compare Credentials:** The "isDiffOrNew" code node compares the content of the existing file (if found) with the current credential data. It determines if the credential is "same," "different," or "new."
13. **Check Status:** The "Check Status" node directs the workflow based on the comparison result:
    *   **Same:** The "Same file - Do nothing" node does nothing.
    *   **Different:** The "File is different" node triggers the "Edit existing file" node.
    *   **New:** The "File is new" node triggers the "Create new file" node.
14. **GitHub Operations:**
    *   **Create new file:** The "Create new file" node creates a new file in the GitHub repository with the current credential data.
    *   **Edit existing file:** The "Edit existing file" node updates the existing file in the GitHub repository with the current credential data.
15. **Return:** The "Return" node ends the sub-workflow with a "Done" flag.

## Services:

-   GitHub

## Hashtags:

#n8n #automation #GitHub #backup #credentials
