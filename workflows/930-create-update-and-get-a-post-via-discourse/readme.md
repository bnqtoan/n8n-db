# My Workflow

## Use cases

*   **Automated Forum Posting:** Automatically create a new post in a Discourse forum when a specific event occurs (simulated here by manual trigger, but could be triggered by, for example, a new entry on a Google Sheet, or a webhook).
*   **Post Update Notifications:** Update an existing Discourse post with new information based on an external trigger. This is useful for keeping announcement threads updated automatically.
*   **Content Retrieval & Archiving:** Retrieve content from a Discourse forum for archiving, analysis, or integration with other systems.

## How it works

1.  The workflow starts with a **Manual Trigger** node, which is activated by manually clicking the "Execute" button in n8n.
2.  The **Discourse** node creates a new post in the Discourse forum with a predefined title and content.  The category for the post is also specified.
3.  The **Discourse1** node updates the post created in the previous step. It uses the ID of the created post to update its content.
4.  The **Discourse2** node retrieves data from the post updated on the previous step.

## Services

*   Discourse

## Hashtags

#n8n #Discourse #Automation #Forum #Posts
