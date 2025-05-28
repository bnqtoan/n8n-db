## n8n Workflow: Get a Pipeline in CircleCI

This workflow retrieves pipeline information from CircleCI.

**Use cases:**

*   **Monitoring Pipeline Status:**  Automatically check the status of a specific pipeline in CircleCI after a commit or deployment event. This allows for proactive identification of build failures.
*   **Integrating with Reporting Tools:** Fetch pipeline data (e.g., status, duration, triggered by) and feed it into reporting dashboards or spreadsheets for performance analysis.
*   **Triggering Actions on Pipeline Completion:**  Based on the pipeline status (success, failed, etc.), automatically trigger follow-up actions like sending notifications or deploying artifacts.

**How it works:**

1.  The workflow is manually triggered by the "On clicking 'execute'" node. This node serves as the starting point for the workflow.
2.  The "CircleCI" node then retrieves pipeline information from CircleCI.  This node requires you to configure the `vcs` (version control system), `projectSlug` and credentials for accessing the CircleCI API.

**Services:**

*   CircleCI

**Hashtags:**

#n8n #CircleCI #automation #pipeline #CI
