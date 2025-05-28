# Notion to Clockify Sync Template

## Use cases:

- **Automated Client, Project, and Task Synchronization:** Keep your client, project, and task data consistent between Notion and Clockify, reducing manual data entry and errors.
- **Real-time Status Updates:** Ensure that when a project or task status is updated in either Notion or Clockify, the change is reflected in the other platform automatically, providing accurate progress tracking.
- **Streamlined Project Management:** Simplify project management by centralizing client, project, and task information in Notion while leveraging Clockify for time tracking, with automatic synchronization between the two.

## How it works:

This workflow automates the synchronization of clients, projects, and tasks between Notion databases and Clockify. It operates in three main sections:

1.  **Client Synchronization:**
    -   It retrieves active clients from both Notion and Clockify.
    -   It compares the datasets to identify differences and updates clients in Clockify based on changes in Notion, including archiving clients.
    -   If a client exists in Notion but not in Clockify, it creates the client in Clockify and stores the Clockify ID in Notion.

2.  **Project Synchronization:**
    -   It fetches active projects from Notion and Clockify, filtering out completed or obsolete projects in Notion.
    -   It compares project datasets and updates project information in Clockify, including archiving, based on changes in Notion.
    -   If a project exists in Notion but not in Clockify, it creates the project in Clockify and stores the Clockify ID in Notion.

3.  **Task Synchronization:**
    -   It retrieves active tasks from Notion and Clockify.
    -   It compares the datasets to update tasks in Clockify based on changes in Notion, including marking tasks as "DONE" (archived) or "ACTIVE".
    -   If a task exists in Notion but not in Clockify, it creates the task in Clockify and stores the Clockify ID in Notion.

The workflow is triggered either by a daily schedule or via a webhook, allowing for manual synchronization initiated from Notion. Workspace ID is set as global value. The workflow also implements error handling to prevent data loss and ensure synchronization integrity.

Key nodes include:

-   **Notion Nodes:** Retrieve and update clients, projects, and tasks from/to specified Notion databases.
-   **Clockify Nodes:** Retrieve, create, update, and delete clients, projects, and tasks in Clockify.
-   **Compare Datasets:** Compares data from Notion and Clockify to identify differences.
-   **If Nodes:** Control the flow based on whether items are mapped or unmapped between the two platforms.
-   **Set Nodes:** Maps and transforms data between the two services.

## Services:

-   Notion
-   Clockify

## Hashtags:

#n8n #automation #Notion #Clockify #synchronization