# Wekan Board and Task Automation

## Use cases:

- **Automated Project Setup:** Automatically create a new Wekan board with pre-defined lists (e.g., "To Do," "Done") for each new project. This ensures consistency and saves time when starting new initiatives.
- **Task Progression Automation:** Automatically move a task to the "Done" list when a specific trigger occurs (e.g., a code review is completed, a form is submitted).
- **Standardized Documentation Workflow:** Create a board for documentation, populate it with a "To Do" list, and automatically add a documentation task for a specific Wekan node upon workflow execution. Later, simulate moving the card to a done status.

## How it works:

1. **Manual Trigger:** The workflow is initiated manually when the user clicks the "execute" button.
2. **Create Board:** A new Wekan board named "Documentation" is created.
3. **Create "To Do" List:** A "To Do" list is created on the newly created Wekan board, this node references the board ID from the previous step.
4. **Create "Done" List:** A "Done" list is created on the Wekan board, similar to the "To Do" list.
5. **Create a Card on 'To Do' List:** A new card named "Document Wekan node" is created in the "To Do" list.
6. **Update Card:** The card "Document Wekan node" is moved from the "To Do" list to the "Done" list.

## Services:

- Wekan

## Hashtags:

#n8n #wekan #automation #projectmanagement #taskmanagement
