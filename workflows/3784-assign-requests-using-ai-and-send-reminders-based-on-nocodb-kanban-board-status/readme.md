# Noco Kanban Board with AI Prioritization

## Use cases:

- **Automated Incident Management:** Streamline the process of handling incidents reported by users by automatically categorizing and assigning them to the appropriate personnel based on AI analysis.
- **Proactive Task Monitoring:** Automatically monitor tasks in a NocoDB Kanban board and send reminders to assignees and clients when tasks are not picked up or completed within the expected timeframe.
- **Enhanced Support Workflow:** Improve the efficiency of support teams by leveraging AI to prioritize and categorize incoming incidents, ensuring that critical issues are addressed promptly.

## How it works:

1.  **Incident Submission:** The workflow starts when a user submits an incident report via an **Incident Form** (can be replaced by another trigger like email or webhook).
2.  **Incident Definition Retrieval:** The **Get incident definitions** node retrieves incident definitions (Title, Definition, Response time, Resolution time, Default assignee) from a NocoDB table.
3.  **AI-Powered Categorization:** The **Aggregate for AI parsing** node aggregates all incident definitions. The **Assign Category** node uses an OpenAI Chat Model (GPT-4o-mini) to analyze the incident description against the defined categories and assign a category, response time, resolution time, and default assignee.
4.  **Structured Output:** The **Structure Output Todoist Ready1** node formats the output from the AI model into a structured JSON format.
5.  **NocoDB Integration:** The **Format for Noco** node formats the AI parsing result. The **Insert Incident** node then creates a new incident record in a NocoDB table, including the assigned category, assignee, and expected response/resolution times.
6.  **Task Monitoring (Scheduled):** A **Schedule Trigger** (**Check status every day**) initiates a daily check for overdue or unpicked tasks.
7.  **Unpicked Task Check:** The **Get Unpicked Tasks** node retrieves tasks from NocoDB with the "todo" status that have not been picked up within their expected response time.
8.  **Unfinished Task Check:** The **Get Unfinished Tasks** node retrieves tasks from NocoDB that are not marked as "done" but are past their expected resolution time.
9.  **Notifications:**
    -   If a task is not picked up (**Task is not picked up after expected response**), an email is sent to the client (**Send email to client**) notifying them that their request has not been looked at yet, and a reminder email is sent to the assignee (**Send email to asignee**), if the assignee email exists (**If there is asignee email**).
    -   If a task is not completed within the expected time (**Task is not complete in expected time**), an email is sent to the client (**Send email to client1**) to inform them of the delay. If assignee slack is defined (**If there is assignee slack**), a slack message will be send to assignee (**Slack to assignee**) and also another email (**Send another email to asignee**).

## Services:

-   NocoDB
-   OpenAI
-   SMTP (Email)
-   Slack (Optional)

## Hashtags:

#n8n #automation #nocodb #openai #incidentmanagement
