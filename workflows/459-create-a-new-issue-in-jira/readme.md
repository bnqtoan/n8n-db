## n8n Workflow: Create a New Issue in Jira

This workflow automates the creation of new issues in a Jira project.

**Use cases:**

*   **Incident Reporting:**  Quickly create a Jira issue when a critical incident occurs (e.g., a server outage or security breach).
*   **Manual Task Logging:**  Log tasks directly into Jira without navigating through the Jira interface.
*   **Simple Bug Reporting:** Create simple bug reports directly from n8n with predefined values for quicker reporting.

**How it works:**

1.  The workflow is triggered manually using the "On clicking 'execute'" node.  This node serves as the starting point and initiates the workflow when executed within n8n.
2.  The "Jira" node then creates a new issue in Jira based on the configured parameters. The workflow currently uses a hardcoded summary "Firewall on fire".  The issue is created with issue type ID "10001". You must configure the `Jira` node with a valid `project` key and credentials to enable the workflow. Also make sure that issue type ID `10001` is an existing issue type in your Jira project.

**Services:**

*   Jira

**Hashtags:**

#n8n #Jira #Automation #IssueTracking #Workflow
