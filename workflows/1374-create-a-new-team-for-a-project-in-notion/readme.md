# Team Creation Workflow

## Use cases:

- **Onboarding New Project Teams:** Automatically create project pages in Notion and associate team members when a new project team is formed.
- **Semester-Based Project Tracking:**  Link users to specific semesters and track which projects they are involved in during that semester.
- **Streamlining Project Creation:**  Quickly generate project entries from a single webhook request, handling default project names and idea descriptions.

## How it works:

1.  **Webhook Trigger ("Team Creation"):**  Receives a POST request with project details (name, idea, team members' names and emails).  It's the entry point for the workflow.
2.  **Data Extraction ("Get Project Name & Idea", "Get Team Members", "Query Current Semester"):** Extracts the project name, project idea, and a list of team members from the webhook data. It also queries the current semester ID from a Notion database.
3.  **User Handling:**
    *   For each team member:
        *   **Search for Existing User ("Query for User"):** Checks if the user already exists in a Notion database based on their email.
        *   **Create User if Needed ("If user exists", "Create User"):** If the user doesn't exist, a new user entry is created in the Notion database with their name and email.
        *   **Merge User Data ("Merge4"):** Merges the user's existing data (if found) with the current workflow's data.
        *   **Get User ID ("Query User"):** Retrieves the user's Notion ID.
    *   **Associate User with Semester:**
        *   **Concatenate Semester IDs ("Concatenate SemesterIDs"):** Combines the current semester ID with any existing semester IDs associated with the user in Notion.
        *   **Update User's Semester Relation ("Update Semester for User"):** Updates the user's Notion entry to include the current semester in the "Semesters" relation property.
4.  **Project Creation:**
    *   **Set Project Information:**
        *   **Set Default Project Name:** The workflow sets project Name if a project name is provided if not sets a default one ("Use Default Name if Not Specified").
    *   **Create Project ("Create Project"):** Creates a new project page in a specified Notion database. The project name, associated semester, and project idea are added to the project page properties.
    *   **Associate User with Project:**
        *   **Concatenate Project IDs ("Concatenate ProjectIDs"):** Combines the new project ID with any existing project IDs associated with the user in Notion.
        *   **Update User's Project Relation ("Update Project Relation"):** Updates the user's Notion entry to include the new project in the "Project" relation property.

## Services:

*   Notion
*   Basic Authentication

## Hashtags:

#n8n #Notion #Automation #TeamManagement #ProjectManagement
