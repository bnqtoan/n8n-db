# GitLab MR Auto-Review & Risk Assessment

## Use cases:

- **Automated Code Review:** Automatically analyze GitLab Merge Requests (MRs) for potential issues, security risks, and adherence to coding standards, reducing the manual effort required by code reviewers.
- **Risk Assessment:** Provide a risk assessment for each MR, helping project managers and developers prioritize reviews and address critical issues first.
- **QA Test Case Generation:** Automatically generate test cases based on code changes, enabling the QA team to efficiently test new features and bug fixes.

## How it works:

1.  **GitLab Trigger:** The workflow is triggered when a new Merge Request (MR) is created or updated in a specified GitLab repository.
2.  **Merge:** Merges the data from different GitLab Triggers if multiple are active.
3.  **Extract Diff:** Fetches the code changes (diff) from the GitLab MR using the GitLab API. This node requires a GitLab API token with appropriate permissions.
4.  **If Some Change:** Checks if the MR contains any code changes. If there are no changes, the workflow stops.
5.  **AI Agent:** Sends the code diff to a Claude AI model for analysis. The AI model identifies potential issues, provides recommendations, suggests test cases, and assesses the overall risk level of the changes. Requires an Anthropic API key. The AI agent is defined with a specific schema for its output, ensuring structured data.
6. **Auto-fixing Output Parser:** Cleans and refines the AI output for structured reporting.
7. **Anthropic Chat Model:** Implements a chat model (Claude) for language processing within the AI workflow.
8. **Structured Output Parser:** Further cleans and refines AI output.
9.  **Distribution List Generator:** Generates a distribution list of relevant developers and QA team members based on the project associated with the MR.  It uses a predefined mapping of projects to email addresses. It also includes the MR author's email in the list.
10. **Comment Back on MR:** Posts a formatted comment on the GitLab MR with the AI-generated analysis, including the risk level, issues, recommendations, and test cases. This requires a GitLab API token.
11. **Send to DL ( Email Notification):** Sends an HTML-formatted email to the generated distribution list with the MR review report, including the AI-generated summary, risk level, recommendations, test cases, and issues. Requires Gmail credentials.

## Services:

*   GitLab API
*   Anthropic API (Claude AI)
*   Gmail

## Hashtags:

#n8n #automation #workflow #gitlab #ai #codereview #riskassessment
