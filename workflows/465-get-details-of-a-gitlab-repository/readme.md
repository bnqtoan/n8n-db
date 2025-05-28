## n8n Workflow: Gitlab Repository Information

This workflow retrieves information about a specified Gitlab repository.

**Use cases:**

*   **Repository Monitoring:** Automatically fetch repository details (e.g., creation date, last activity) to track repository status and activity.
*   **Gitlab Integration:** Use repository data within other n8n workflows, such as sending notifications on specific repository events.

**How it works:**

1.  **Trigger:** The workflow starts manually when the "On clicking 'execute'" node is triggered within the n8n interface.
2.  **Gitlab API Call:** The "Gitlab" node uses the Gitlab API to fetch information about a specific repository.  It requires the owner's username (`shaligramshraddha`) and the repository name (`trial`). The node uses the `get` operation on the `repository` resource.

**Services:**

*   Gitlab API

**Hashtags:**

*   #n8n
*   #gitlab
*   #automation
*   #repository
