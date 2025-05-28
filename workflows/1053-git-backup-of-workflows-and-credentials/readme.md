# Tools / Backup Gitlab

## Use cases

*   **Automated Backup:** Regularly back up your n8n workflows and credentials to a Git repository, ensuring you have a version-controlled history of your automation configurations.
*   **Disaster Recovery:** In case of system failure or accidental data loss, quickly restore your n8n setup from the Git repository backup.
*   **Version Control and Collaboration:** Track changes to your n8n workflows and credentials over time, facilitating collaboration and allowing easy rollback to previous versions.

## How it works

This workflow automates the backup process of your n8n workflows and credentials to a Git repository.

1.  **Trigger:** The workflow starts either manually via the "On clicking 'execute'" node or automatically based on a schedule defined in the "Cron" node (running every 6 hours).
2.  **Export Workflows:** The "Export Workflows" node executes a command-line instruction to export all n8n workflows into a designated directory within the "repo/workflows/" folder. The `--backup` flag ensures that the exported files are suitable for backup purposes.
3.  **Export Credentials:** Similarly, the "Export Credentials" node executes a command-line instruction to export all n8n credentials to a "repo/credentials/" directory, also using the `--backup` flag.
4.  **Git Add:** This node stages all changes within the "repo" directory, preparing them for a commit.
5.  **Git Commit:** The "Git Commit" node commits the staged changes with an automated message that includes the current date and time, providing a timestamp for each backup.
6.  **Git Push:** Finally, the "Git Push" node pushes the committed changes to the remote Git repository, completing the backup process.

## Services

*   **Git:** The workflow relies on Git for version control and storing the backups.
*   **n8n CLI:** The workflow utilizes the n8n command-line interface (`npx n8n`) to export workflows and credentials.

## Hashtags

#n8n #automation #backup #Git #versioncontrol
