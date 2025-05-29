# My Workflow

## Use cases:
*   **Automated Sprint Planning Preparation:** This workflow automates the process of gathering and preparing user stories for sprint planning, saving time and ensuring consistency.
*   **Definition of Ready (DoR) Compliance:** It helps ensure that user stories meet the Definition of Ready (DoR) criteria before being included in a sprint, improving the quality and predictability of sprint execution.
*   **Scrum Master Assistance:** Provides the Scrum Master with AI-powered feedback and draft emails to facilitate communication and decision-making during sprint planning.

## How it works:

1.  **Trigger:** The workflow can be triggered manually or on a schedule (although the schedule trigger is disabled in the provided JSON).
2.  **Calendar Check:** It checks the Scrum Master's Google Calendar for upcoming Sprint Planning meetings.
3.  **Data Gathering:**
    *   Fetches links to the Definition of Ready (DoR) document and the backlog from Google Drive.
    *   Retrieves open stories from the current sprint and stories ready for sprint planning from Google Sheets.
4.  **DoR Check:**
    *   The workflow fetches the DoR criteria from a Google Sheet.
    *   Iterates through each user story and uses the Langchain/OpenAI models to check if the story meets the DoR criteria.
    *   The AI feedback is then appended to the user story data.
5.  **Scrum Master Feedback:** The workflow creates a dynamic form with current sprint stories and sends it to the Scrum Master for feedback via Gmail. The workflow processes the scrum master feedback via email by splitting out the index and appending the feedback to the story.
6.  **Sprint Goal Suggestion & Email Draft:** The workflow uses Langchain/OpenAI to generate a draft email for sprint goal suggestions and a draft email for sprint planning, which are then sent to the Product Owner (PO) and the attendees respectively after the approval.
7.  **Error Handling:** If any errors occur during the process, an email is sent to notify relevant stakeholders.

## Services:

*   Google Calendar
*   Google Sheets
*   Google Drive
*   Gmail
*   OpenAI (via Langchain)

## Hashtags:

#n8n #automation #scrum #sprintplanning #ai
