# Coffee Bot (Matrix)

## Use cases:

*   **Automated virtual coffee breaks:** Randomly groups employees in a Matrix chat room for weekly virtual coffee breaks, fostering team bonding and informal communication.
*   **Facilitating cross-departmental interaction:** Ensures employees from different departments or teams get a chance to connect, promoting knowledge sharing and collaboration.
*   **Boosting employee morale:** Provides a structured opportunity for social interaction, especially beneficial for remote teams, leading to improved employee morale and engagement.

## How it works:

1.  **Weekly Trigger:** The workflow starts with a "Weekly trigger on monday1" node, which triggers every Monday at 10:00 AM.
2.  **Greetings:** Then a "Greetings" node sends a message to a specified Matrix room (defined by its Room ID) using Matrix credentials, announcing the start of the virtual coffee groups.
3.  **Get Employees:** The "Employees in coffee chat channel" node retrieves a list of members from a specified Matrix room using Matrix credentials.
4.  **Divide into groups:** The "Divide into groups" node shuffles the list of employees and divides them into groups of approximately three. It ensures that no group has only one member by re-adjusting members between groups.
5.  **Announce groups:** Finally, the "Announce groups" node sends a message to a specified Matrix room (defined by its Room ID) using Matrix credentials, announcing the created groups and their members to the Matrix room.

## Services:

*   **Matrix:** The workflow interacts with the Matrix chat platform for sending messages and retrieving room member information.

## Hashtags:

#n8n #automation #matrix #coffeebreak #teambuilding
