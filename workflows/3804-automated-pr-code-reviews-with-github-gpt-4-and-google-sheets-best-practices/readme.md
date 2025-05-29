# Code Review Workflow

## Use cases:

- **Automated Code Review:** Automatically reviews code changes in GitHub pull requests, providing feedback on code quality, potential bugs, and adherence to coding standards.
- **Faster Feedback Loop:** Speeds up the code review process by providing initial feedback from an AI agent, allowing human reviewers to focus on more complex issues.
- **Enforce Coding Standards:** Ensures that code changes adhere to established coding best practices by incorporating guidelines from a Google Sheet or other data source.

## How it works:

1.  **PR Trigger:** The workflow starts when a new pull request is created or updated in a specified GitHub repository.
2.  **Get file's Diffs from PR:** The workflow retrieves the diffs (changes) for each file in the pull request using the GitHub API.
3.  **Create target Prompt from PR Diffs:** A code node formats these diffs into a structured prompt for the AI agent, including instructions and context, such as to act like a senior iOS developer. It replaces triple backticks to prevent markdown errors.
4.  **Code Review Agent:** Uses an AI agent (powered by OpenAI) to review the code changes based on the generated prompt and information. The AI agent can reference code best practices from a Google Sheet.
5.  **GitHub Robot:** Posts the AI-generated review as a comment on the pull request using the GitHub API.
6.  **Add Label to PR:** Adds a label (e.g., "ReviewedByAI") to the pull request to indicate that it has been reviewed by the AI agent.

## Services:

-   GitHub: For triggering the workflow, fetching code diffs, posting comments, and adding labels to pull requests.
-   OpenAI: For providing AI-powered code review and feedback.
-   Google Sheets: For storing and retrieving code best practices to guide the AI review (optional, can be replaced with other data sources).

## Hashtags:

#n8n #automation #codereview #github #ai
