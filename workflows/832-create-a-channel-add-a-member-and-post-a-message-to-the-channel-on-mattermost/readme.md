# Create a channel, add a member, and post a message to the channel

## Use cases:

*   **Team Onboarding:** Automatically create a dedicated channel for new teams or projects, add the relevant members, and post a welcome message to get them started.
*   **Event Management:** Set up a channel for an upcoming event, add participants, and post initial information about the event schedule and logistics.
*   **Incident Response:** In case of an incident, rapidly create a channel, add the on-call team members, and post an initial incident report to coordinate response efforts.

## How it works:

1.  The workflow is triggered manually by clicking 'execute' in n8n.
2.  The **Mattermost** node creates a new channel in a specified team with the name "docs".
3.  The **Mattermost1** node adds a specific user to the newly created channel.
    *   It retrieves the channel ID from the output of the previous Mattermost node (the channel creation node).
4.  The **Mattermost2** node posts a welcome message to the channel.
    *   It retrieves the channel ID from the output of the first Mattermost node (the channel creation node).

## Services:

*   Mattermost

## Hashtags:

#n8n #Mattermost #Automation #ChannelManagement #TeamCollaboration
