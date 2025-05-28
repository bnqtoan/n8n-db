# Create a channel, invite users to the channel, post a message, and upload a file

## Use cases:

- **Automated Onboarding:** Automatically create a dedicated Slack channel for new team members, invite them to the channel, post a welcome message, and share essential documents or images.
- **Event-Based Communication:** Set up a new Slack channel for each event, invite relevant participants, share event details, and upload related files like agendas or speaker slides.
- **Project Kickoff:** When a new project starts, automatically generate a Slack channel, add project members, post an introductory message with project goals, and upload relevant documents such as project plans.

## How it works:

1.  **Manual Trigger:** The workflow starts when the "On clicking 'execute'" node is manually triggered.
2.  **Create a Slack Channel:** The "Slack" node creates a new channel (named "n8n-docs") using the provided Slack API credentials.
3.  **Invite Users:** The "Slack1" node invites specific users (e.g., "U01797FGD6J") to the newly created channel, referencing the channel ID from the previous step.
4.  **Post Welcome Message:** The "Slack2" node sends a welcome message "Welcome to the channel!" to the channel. It also includes an attachment with the n8n logo. The channel ID is dynamically retrieved from the created channel in the "Slack" node.
5.  **Download a file:** The "HTTP Request" downloads a file from "https://n8n.io/n8n-logo.png"
6.  **Upload File:** The "Slack3" node uploads the file obtained from the previous step to a specific channel (C01FZ3TJR5L).

## Services:

-   Slack
-   n8n

## Hashtags:

#n8n #Slack #Automation #Workflow #ChannelManagement
