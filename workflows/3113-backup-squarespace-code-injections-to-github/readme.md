# Backup Squarespace code Injections to Github

## Use cases:

-   **Automated Website Backup:** Regularly back up your Squarespace website's header and footer code injections to a GitHub repository, ensuring that your custom code is safe and version-controlled.
-   **Disaster Recovery:** In case of accidental deletion or corruption of code injections on your Squarespace site, quickly restore the latest backup from your GitHub repository.
-   **Version Control for Collaboration:** If multiple team members work on the Squarespace site, track changes to code injections using GitHub's version control features, making collaboration easier and reducing the risk of conflicts.

## How it works:

1.  **Trigger:** The workflow starts either manually via the "On clicking 'execute'" trigger or automatically on a schedule using the "Schedule Trigger" node (every 2 hours, as configured).
2.  **Fetch Squarespace Data:** The "Get Squarespace data" node makes an HTTP request to your specified Squarespace website URL (edit this node to set the URL). It retrieves the website's page context, which contains the header and footer injections.
3.  **Extract and Clean Injections:**
    -   The "Get Header Injection" and "Get Footer Injection" nodes extract the raw header and footer injection data from the Squarespace response.
    -   The "Clean up Headers" and "Clean up Footers" nodes use Javascript code to parse this code and remove unnecessary elements and comments to make it cleaner for backup.
4.  **Merge data:** The "Merge Injections" node will merge the data from the `headers` and `footers` to send both to Github.
5.  **Looping and Global variables:**
    -   The "Loop Over Items" node divides the data into chunks of 2 in each execution to be processed individually.
    -   The "Globals" node contains configuration data such as repository owner, name and path. It should be edited accordingly.
6.  **GitHub Operations:**
    -   The "Edit Injection data" node attempts to update the corresponding file on the GitHub repository if it already exists.
    -   The "If" node validates if the file exists, if not the "Create Injection data" will create the file on the repository.
7.  **Commit to GitHub:** The "Create Injection data" node creates a new file in your specified GitHub repository with the cleaned-up header and footer injections and it repeats until all injections are uploaded. The commit message includes a timestamp of the backup.

## Services:

-   Squarespace
-   GitHub

## Hashtags:

#n8n #automation #Squarespace #GitHub #backup #codeinjections
