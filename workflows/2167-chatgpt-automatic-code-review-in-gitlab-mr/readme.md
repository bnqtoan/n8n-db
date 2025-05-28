# Code Review Automation with GitLab and OpenAI

## Use cases:

- **Automated Code Review:** Automatically trigger code reviews on GitLab merge requests to identify potential issues and ensure code quality.
- **Improved Code Quality:** Provide developers with immediate feedback on their code changes, leading to better code quality and fewer bugs.
- **Streamlined Development Workflow:** Speed up the code review process and reduce the time it takes to merge code changes.

## How it works:

1.  **GitLab Webhook Trigger:** The workflow is triggered by a GitLab webhook whenever a new note is created in a merge request.
2.  **Filter Comments:** An IF node filters the incoming webhook data to only process comments starting with "+0" (Need Review).
3.  **Get Changes:** Retrieve the list of changed files in the merge request using the GitLab API.
4.  **Split Out:** Split the array of changes into individual items for processing.
5.  **Skip File Changes:** Skips renamed or deleted files, it continues if it's a diff.
6.  **Parse Last Diff Line:** Extracts the line numbers from the git diff.
7.  **Code:** Extracts the original and new code from the diff.
8.  **LLM Chain:** Formulates a prompt to the OpenAI chat model.
9.  **OpenAI Chat Model:** Uses OpenAI's gpt-4o-mini model to generate code review feedback based on the code changes.
10. **Post Discussions:** Posts the generated feedback as a discussion comment in the GitLab merge request.

## Services:

-   GitLab
-   OpenAI

## Hashtags:

#n8n #automation #codereview #gitlab #openai
