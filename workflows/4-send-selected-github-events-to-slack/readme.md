## n8n Workflow: GitHub Star Notifications to Slack

### Use cases:

1.  **Monitor GitHub repository stars:** Automatically receive notifications in a Slack channel whenever someone stars (or un-stars) a specified GitHub repository.
2.  **Track community interest:** Get real-time updates on the popularity of your open-source projects or repositories.
3.  **Boost team engagement:** Keep your team informed about GitHub activity, fostering a sense of community and encouraging contribution.

### How it works:

This workflow monitors a specified GitHub repository for star events (created or deleted) and sends notifications to a Slack channel.

1.  **GitHub Trigger:** The workflow starts with a "GitHub Trigger" node, configured to listen for 'star' events on a specific repository ("n8n" owned by "n8n-io" in this example).  This node triggers the workflow whenever a user stars or un-stars the repository.
2.  **IF Condition:** The "IF" node checks the "action" field in the GitHub event data. It determines whether the star was "created" (added) or "deleted" (removed).
3.  **Slack Notifications:**
    *   **Star Added:** If the star was "created," the workflow proceeds to the "Slack - Add" node. This node sends a message to the "#general" Slack channel, including the user's avatar, their profile link, their username, and the updated star count for the repository.  The message uses a green color to indicate a star was added.
    *   **Star Removed:** If the star was not "created" (implying it was removed), the workflow proceeds to the "Slack - Remove" node. This node sends a similar message to the "#general" Slack channel, also including the user's avatar, their profile link, their username, and the updated star count. This message uses a red color to indicate a star was removed.

### Services:

*   **GitHub:** Used as the event source, triggering the workflow on star events.
*   **Slack:** Used for sending notifications to a specified channel.

### Hashtags:

#n8n #GitHub #Slack #Automation #Notifications
