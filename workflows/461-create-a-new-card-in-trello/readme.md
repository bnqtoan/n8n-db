## n8n Workflow: Create a new card in Trello

This workflow automates the creation of a new card in a specified Trello list.

### Use cases:

*   **Quick Task Creation:**  Instantly create Trello cards for new tasks or ideas directly from n8n.
*   **Manual Triggered Task:**  Use a button press or a manual trigger to make a new card with defined information.

### How it works:

1.  **Manual Trigger:** The workflow starts when the "On clicking 'execute'" node is manually triggered within n8n.
2.  **Create Trello Card:**  The "Trello" node then creates a new card in Trello. The card's name is set to "Hello", and a description, "Here are some details" is included.  The `listId` parameter is left blank, which will likely cause an error. You need to set this parameter to a valid Trello list ID for the workflow to function correctly.

### Services:

*   Trello

### Hashtags:

#n8n #trello #automation #workflow #taskmanagement
