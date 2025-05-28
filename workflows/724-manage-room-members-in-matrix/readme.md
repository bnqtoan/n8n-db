# Create a room, invite members from a different room, and send a message in the room we created

## Use cases

*   **Community Building:** Automatically create a dedicated chat room for new members joining a community platform.
*   **Event Coordination:** Set up a temporary room for event attendees to discuss logistics and share updates.
*   **Team Collaboration:** Quickly provision a chat room for project teams, inviting relevant members from a central directory.

## How it works

1.  **Trigger:** The workflow starts when the "On clicking 'execute'" node is manually triggered.
2.  **Create Room:** The "Matrix" node creates a new room in Matrix (likely a chat platform) with the name "n8n" and alias "discussion-n8n."
3.  **Get User IDs:** The "Matrix1" and "Matrix2" nodes retrieve the user ID of the workflow owner and the user IDs of all members from a specific room ("!cMUIsUgevrhCoeMkSG:matrix.org") respectively.
4.  **Check User:** The "IF" node compares the current user ID with the room members' user IDs fetched in the previous step.
5.  **Invite:** If the current user ID is not in the room member array, the "Matrix3" node invites the current user to the newly created room.
6.  **Send Welcome Message:** The "Matrix4" node sends a welcome message "Welcome to n8n!" to the newly created room.
7.  **No Operation:** If the current user ID is already in the room member array, the "NoOp" node does nothing and the workflow ends.

## Services

*   Matrix (Chat platform)

## Hashtags

#n8n #matrix #automation #chat #community
