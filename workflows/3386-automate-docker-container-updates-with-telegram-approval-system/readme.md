# n8n update

## Use cases:

- **Automated n8n Self-Update:** Automatically checks for new n8n releases and updates the n8n instance with minimal manual intervention. This ensures the n8n instance is always running the latest version.
- **Scheduled Version Checks:** Regularly checks for new n8n versions based on a defined schedule (e.g., every three days) and notifies the user if an update is available.
- **Remote n8n Instance Management:** Manages and updates n8n instances running on remote servers via SSH, streamlining the update process across multiple deployments.

## How it works:

1.  **Trigger:** The workflow is triggered either manually ("When clicking ‘Test workflow’") or on a schedule ("Schedule Trigger").
2.  **Set Default Variables:**  The "Set Default variable" node defines the `working-directory` (where `docker-compose.yml` resides), `n8n-container-name`, and `telegram-id`.
3.  **Get Latest Version from GitHub:** "Github HTTP Request" fetches the latest n8n version tag from the n8n GitHub releases API.
4.  **Clean Version String:** The "Edit Version String" node removes "n8n@" from the tag name retrieved from GitHub (e.g., converts "n8n@1.84.3" to "1.84.3").
5.  **Get Current Installed Version:**  The "check n8n installed version" node connects to the server via SSH and executes a Docker command to retrieve the version of the running n8n container.
6.  **Merge Results:** The "Merge Results" node combines the latest version from GitHub and the current installed version using a SQL-like query.
7.  **Compare Versions:** The "Comapre Two Input" node compares the current n8n version with the latest version from GitHub.
8.  **Conditional Actions:**
    *   **If versions are the same:** A "Telegram Notif" node sends a Telegram message indicating that n8n is already up to date.
    *   **If versions are different:**
        *   A "Telegram Approve" node sends a message via Telegram asking for permission to proceed with the update.
        *   Upon approval (via Telegram's webhook response), "Pull n8n Image" pulls the latest n8n Docker image from Docker Hub via SSH.
        *   "docker compose pull" pulls the images defined in the docker-compose.yml file.
        *   "docker compose up" updates the n8n container using Docker Compose via SSH.
        *   "Telegram Notif1" sends a Telegram message to notify that the n8n update is completed.

## Services:

*   GitHub API: Used to retrieve the latest n8n version.
*   Docker: Used to manage n8n container
*   Telegram API: Used to send notifications and receive user approval.
*   SSH: Used to execute commands on a remote server.

## Hashtags:

#n8n #automation #selfUpdate #docker #telegram
