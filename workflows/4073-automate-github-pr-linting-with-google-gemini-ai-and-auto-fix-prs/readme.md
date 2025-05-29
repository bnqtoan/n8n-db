# LintBot: Your Automated Code Quality Assistant

## Use cases:

-   **Automated Code Review:** Automatically identify and fix linting issues in pull requests, reducing the burden on human reviewers.
-   **Enforce Code Style Consistency:** Ensure that all code adheres to a consistent style guide, improving code readability and maintainability.
-   **Prevent Bugs:** Catch potential errors and bugs early in the development process by enforcing best practices.

## How it works:

1.  **Trigger:** The workflow starts when a pull request is created or updated in a GitHub repository. The `Listen for Trigger from Github Workflow` node listens for webhook events from GitHub.
2.  **Fetch Files:** The workflow retrieves the list of files changed in the pull request using the `Get PR Files` node, which makes an API call to GitHub.
3.  **Get File Contents:** For each file, the workflow fetches its content using the `Get File Contents` node. The content is base64 encoded.
4.  **Convert to Text and Extract:** The `Convert Base64 to Text File` node converts the base64 encoded content to a text file. The `Extract from File` node retrieves the text content for further use.
5.  **Prepare Data for AI:** The `Create Code/FilePath Object` node creates a data object containing the file path and code of the file.
6.  **Aggregate Files:** The `Collect All Files Changed` node collects all the Code/FilePath object in a list.
7.  **AI-Powered Linting:** The `AI Agent` node receives the file contents, its path and uses Google Gemini Chat Model to identify and fix linting issues. The AI agent is configured to create a new branch, commit the changes and create a pull request.
8.  **Create/Update Branch:** The workflow determines the branch name using the id of the pull request and then creates or reuses the branch.
9.  **Create Blob, Tree, and Commit:** The workflow creates a Git blob for the updated file content, then creates a Git tree object referencing the new blob. Finally, it creates a Git commit object referencing the new tree and the parent commit SHA.
10. **Create Pull Request:** The workflow creates a pull request to merge the linting changes into the main branch.
11. **Respond:** The `Respond to Webhook` node sends a response back to GitHub, acknowledging the webhook event.

## Services:

-   GitHub API
-   Google Gemini Chat Model

## Hashtags:

#n8n #automation #github #linting #codereview
