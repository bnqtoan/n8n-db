# Github MCP Server

## Use cases:

-  **AI-Powered Issue Interaction:** Allows an AI agent (like Claude) to retrieve the latest issues from a GitHub repository and add comments to them, streamlining issue management.
-  **Customized GitHub Support Tools:** Enables the creation of tailored support tools that focus on specific repositories or issues within an organization.
-  **Simplifying Github Access:** By using an MCP server, it simplifies access to Github for individuals who only need to view or comment.

## How it works:

1. **Trigger:** The workflow is triggered when executed by another workflow, receiving `operation`, `repo`, `issueNumber`, and `text` as inputs.
2. **Operation Routing:** A Switch node routes the workflow based on the `operation` input.  It handles "getLatestIssues", "getIssueComments", and "addIssueComment".
3. **GitHub Interaction:**
   - **Get Latest Issues:** Retrieves the latest issues from the specified GitHub repository.
   - **Get Issue Comments:** Retrieves comments associated with a specific GitHub issue.
   - **Add Issue Comment:** Creates a new comment on a specified GitHub issue.
4. **Data Simplification:** Simplifies the data from Github to make it available for the AI Agent.
5.  **Aggregation:** All Results are aggregated into the final result

## Services:

-   GitHub API

## Hashtags:

#n8n #automation #github #mcp #ai
