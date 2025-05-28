# Recurring Tasks Automation

## Use cases:

- **Automated Task Creation:** Automatically creates new tasks in Airtable based on a task template and a predefined schedule. Ideal for projects with recurring deliverables.
- **Client Project Management:** Streamlines client project management by automatically generating tasks with specific deadlines and assignees, ensuring timely execution and client satisfaction.
- **Team Task Assignment:** Simplifies task distribution within a team by automatically assigning tasks to specific team members based on predefined rules, promoting efficient workload management.

## How it works:

1.  **Airtable Trigger (Entered View "First Task - Create Task"):** The workflow starts when a new record enters a specific view ("First Task - Create Task") within an Airtable table. This view acts as a queue for tasks that need to be automated.
2.  **Set Airtable Base IDs (Airtable Base ID's):** A "Set" node stores the IDs of various Airtable tables (Task, Template, Clients, Team, Automate) within your base, allowing other nodes to dynamically access these tables.
3.  **Get Automated Task (Get Automated Task):** Retrieves data from the newly entered record in the "Automate" table, including the task template ID, assignee ID, client ID, and scheduling parameters.
4.  **Get Task Template (Get Task Template):** Fetches the task template from the "Template" table using the template ID obtained in the previous step. This provides the task name and description.
5.  **Get Assignee (Get Assignee):** Retrieves the details of the assigned team member from the "Team" table using the assignee ID.
6.  **Get Client (Get Client):** Retrieves the client information from the "Clients" table using the client ID.
7.  **Calculate Dates (Calculate Dates):** Calculates the "Kickoff Date," "Soft Due Date," and "Hard Due Date" for the new task based on the scheduling parameters (start date, time value, days for soft due date) and updates the "Automate" table with the "Last Task Created" and "Next Task Creation Date."
8.  **Create Task (Create Task):** Creates a new task in the "Task" table using the retrieved template data, calculated dates, assignee information, and client information.
9.  **Update Automated Record (Update Automated Record):** Updates the original record in the "Automate" table to indicate that the first task has been created and stores the "Last Task Created" and "Next Task Creation Date" for future recurring tasks.
10. **Notify Assignee (Notify Assignee):** *Disabled*. Sends a Slack notification to the assignee regarding the new task.

## Services:

-   Airtable
-   Slack (Optional, disabled in current workflow)

## Hashtags:

#n8n #automation #airtable #taskmanagement #recurringtasks
