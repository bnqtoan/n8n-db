# Asana to Notion Task Sync

## Use cases:

- **Automated Task Management:** Automatically creates new tasks in a Notion database when new tasks are created in a specified Asana project.
- **Real-time Task Updates:** Keep your Notion task database synchronized with changes in Asana, such as task name updates or deadline modifications.
- **Centralized Task Tracking:** Consolidate task information from Asana into Notion for reporting, dashboards, or cross-functional team visibility.

## How it works:

1.  **Asana Trigger:** The workflow starts with an Asana Trigger node ("On update") that listens for events (task creation or updates) in a specified Asana project.
2.  **Get Unique Tasks:** A Function node ("Get unique tasks") parses the incoming Asana data to extract unique Asana task GIDs (Globally Unique Identifiers). It also constructs a filter to search for existing tasks in Notion with corresponding Asana GIDs.
3.  **Get Tasks Details:** The "Get tasks" node gets the detail from Asana using the task GID.
4.  **Find Tasks in Notion:** The Notion node ("Find tasks") searches for existing tasks in a specified Notion database using the filter generated in the previous step.
5.  **Determine Action:** A Function node ("Determine") compares the Asana task GIDs with the Notion database entries. It determines whether to create a new task in Notion ("Create") or update an existing one ("Update").
6.  **Conditional Branching:** An If node ("Determine create/update") routes the workflow based on the "action" determined in the previous step.
7.  **Create Task (if applicable):** A Notion node ("Create task") creates a new task in the Notion database, mapping the Asana task name and Asana GID to the appropriate Notion properties.
8.  **Check Required Fields:** Checks if the "due_on" field exists.
9.  **Update Task (if applicable):** A Notion node ("Update task") updates an existing task in the Notion database with the latest information from Asana, specifically the task name and deadline.
10. **Update Deadline (if applicable):** A Notion node ("Update deadline") updates the deadline in Notion

## Services:

-   Asana
-   Notion

## Hashtags:

#n8n #automation #Asana #Notion #taskmanagement
