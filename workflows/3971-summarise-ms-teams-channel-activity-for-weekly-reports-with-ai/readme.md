# Team Activity Summarizer

## Use cases:

-   **Automated Weekly Team Updates:** Generate a summarized report of team activities on Microsoft Teams to keep members informed about progress, discussions, and important decisions made during the previous week.
-   **Project Status Reporting:** Quickly extract relevant information from team chats to provide stakeholders with concise updates on project status, challenges, and key accomplishments.
-   **Identify Key Trends and Issues:** Analyze team communication patterns to identify recurring challenges, areas of high engagement, or potential knowledge gaps within the team.

## How it works:

1.  **Schedule Trigger:** The workflow is triggered on a schedule (e.g., every Monday at 6 AM) to initiate the report generation process.
2.  **Fetch Latest Channel Messages:** Retrieves all messages from a specified Microsoft Teams channel for the past week.
3.  **Group Messages By UserId:** Groups the messages by the user who sent them.
4.  **Groups to Items:** Splits the grouped messages into individual items, each representing a user and their messages.
5.  **Team Member Weekly Report Agent:** An AI agent uses the Langchain LLM to analyze each user's messages and generate a personalized weekly report, highlighting wins, challenges, and key activities.
6.  **Merge Report With User Data:** Merges the generated report with the original user data.
7.  **Reports to Single List:** Combines all individual team member reports into a single list.
8.  **Team Weekly Report Agent:** An AI agent uses the Langchain LLM to summarize all individual team member reports into a final team report, highlighting overall progress, common themes, and potential areas of concern.
9.  **Markdown to HTML:** Converts the final report from Markdown to HTML format.
10. **Send Report to Channel:** Posts the final report as an HTML message to the specified Microsoft Teams channel.

## Services:

-   Microsoft Teams
-   OpenAI

## Hashtags:

#n8n #automation #microsoftteams #openai #teamreport
