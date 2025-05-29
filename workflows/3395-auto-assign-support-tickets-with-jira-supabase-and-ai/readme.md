# JIRA Issue Auto-Assignment with AI

## Use cases:

- **Automated Issue Assignment:** Automatically assign unassigned JIRA issues to team members based on their experience with similar, resolved issues.
- **Reduce Manual Work:** Minimize the manual effort required in managing issue backlogs, especially for teams with limited resources.
- **Optimize Resource Allocation:** Distribute workload evenly by considering team members' current workload when assigning new issues.

## How it works:

This workflow automates the process of assigning stale, unassigned JIRA issues to appropriate team members by leveraging AI and a vector database.  It operates in two main parts:

1.  **Populate Vector Store (Resolved Issues):**
    *   A **Schedule Trigger** initiates the process periodically.
    *   The **JIRA** node fetches the last resolved issues within the last day.
    *   The **Remove Duplicates** node ensures that each issue is added to the database only once.
    *   The **Collect Fields** node extracts relevant metadata from the issues (project key, issue key, assignee ID/name, etc.).
    *   This data is then sent to the **Embeddings OpenAI** node that generates embeddings.
    *   The **Default Data Loader** sets up the metadata and content for the documents
    *   A **Recursive Character Text Splitter** splits the document into chunks
    *   The **Issues Similarity Database (Supabase Vector Store)** stores the issue data, including the generated embeddings, in a Supabase vector database.

2.  **Auto-Assign Stale Issues:**
    *   Another **Schedule Trigger** starts this part of the workflow.
    *   The **JIRA** node identifies stale, unassigned issues (e.g., issues unassigned for more than 5 days).
    *   The workflow iterates through each stale issue using a **For Each Issue** node.
    *   An **AI Agent (Find Similar Issues + Assignees)** is used to query Supabase.
        *   The **Supabase Vector Store** retrieves similar, resolved issues from the vector database. The tool is configured to specifically find resolved issues and who resolved them in the past.
        *   The **Embeddings OpenAI1** generates embeddings for the query.
        *   The **OpenAI Chat Model** analyzes the retrieved issues and assignee information.
    *   The **To Structured Output** node converts the AI output to structured data.
    *   The **Issues to Items** node iterates through the output
    *   The **If has Items?** node validates if there are any similar issues.
    *   If similar issues are found, the **For Each User** splits the Assignees into different batches
    *   The workflow then checks the assignee's current workload.
        *   The **Count Assigned Open Issues per User** node counts the number of open issues assigned to each potential assignee.
        *   The **Check User Workflow** determines the count of in progress issues per user.
        *   The **Tally In-Progress Issues per User** node tallys the in progress issues per user
        *   The **Sort By Most Capacity** sorts assignees by their current in-progress workload
    *   The **Assign User to Ticket (JIRA)** node assigns the stale issue to the team member with the least assigned issues.
    *   The **Add Comment to Issue (JIRA)** node adds a comment to the issue, notifying the assignee of the auto-assignment.
    *   If similar issues are not found, the workflow skips the auto assignment by going to the **Skip** noOp.

## Services:

-   JIRA Software Cloud
-   Supabase (with pgvector extension)
-   OpenAI API

## Hashtags:

#n8n #automation #JIRA #AI #issueManagement
