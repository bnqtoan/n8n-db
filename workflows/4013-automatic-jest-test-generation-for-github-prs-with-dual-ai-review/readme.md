# Automatic Unit Test Creator from Github

## Use cases:

- **Automated Code Review:** Automatically generate unit tests for pull requests to ensure code quality and prevent regressions.
- **Accelerated Test-Driven Development:** Quickly create initial test suites based on code changes, facilitating a test-driven development approach.
- **Improved Code Coverage:** Identify areas of code lacking sufficient test coverage and automatically generate tests to address the gaps.

## How it works:

1.  **Webhook Trigger:** The workflow is triggered by a GitHub webhook when a pull request is created or updated.
2.  **Extract API Details:** The "Extract API URL, owner, and repo" node extracts relevant information about the repository and pull request from the webhook data.
3.  **.diff File Retrieval:** The "GET .diff file" node retrieves the diff file from the pull request, which contains the code changes.
4.  **Code Splitting and Filtering:** The ".diff" file is split into an array, and each element is filtered for component files.
5.  **Filename Extraction:** The "Get Filename" node extracts the names of the modified files.
6.  **Code Analysis and Test Generation:** Langchain Agents "Code Reviewer" and "Test Maker" are used to analyze the code changes.  Large Language Models are utilized to generate unit tests based on the file content, changes and repository information.
7.  **Comment Posting:** The "Prepare for POST" and "POST Comments" nodes format and post the generated unit tests as comments on the GitHub pull request.

## Services:

*   GitHub API
*   OpenAI API (via Langchain)

## Hashtags:

#n8n #automation #github #unittest #codereview
