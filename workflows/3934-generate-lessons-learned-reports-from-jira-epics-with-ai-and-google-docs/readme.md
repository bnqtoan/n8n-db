# Jira Retrospective

## Use cases:

- **Automated Retrospective Report Generation:** Automatically generate a retrospective report in Google Docs whenever a Jira Epic is marked as "Done," saving time and effort in manual report creation.
- **Lessons Learned Documentation:** Systematically capture lessons learned from completed Epics to improve future project execution.
- **Knowledge Sharing:** Facilitate knowledge sharing by providing a structured retrospective document that highlights key findings, observations, and actionable recommendations.

## How it works:

1.  **Jira Trigger:** The workflow starts when a Jira issue (specifically an Epic) is updated.
2.  **Condition Check:** It verifies if the Epic's status has changed to "Done."
3.  **Fetch Issues and Comments:**  Once an Epic is Done it retrieves all issues and comments associated with that Epic from Jira.
4.  **Data Extraction:** Extracts relevant information from the Jira issues and comments, including the Epic name, Epic status, issue title, issue description, and comments.
5.  **Data Aggregation:** Concatenates all comments into a single string for analysis.
6.  **AI-Powered Analysis:** Uses an AI Agent (Leveraging OpenAI) to analyze the aggregated data and generate a "Lessons Learned" report. The AI Agent follows a predefined template for the report structure, including key findings, observations, actionable recommendations, metrics, and tags.
7.  **Memory Buffer:** Use the Simple Memory to store the previous conversations.
8.  **Google Docs Update:** The generated report is then inserted into a specified Google Docs document.

## Services:

-   Jira
-   Google Docs
-   OpenAI

## Hashtags:

#n8n #automation #workflow #jira #retrospective
