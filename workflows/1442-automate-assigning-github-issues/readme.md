# Automate assigning GitHub issues

## Use cases:

- Automatically assign newly opened GitHub issues to the issue creator if no one is assigned and the issue body requests assignment.
- Automatically assign a GitHub issue to a commenter if they request assignment in their comment and the issue is currently unassigned.
- Streamline issue management in GitHub repositories by automating the assignment process, reducing manual effort.

## How it works:

1.  The workflow starts with a **GitHub Trigger** node, listening for `issue_comment` and `issues` events on a specified repository.
2.  A **Switch** node filters the events based on the `action` property in the webhook payload: `opened` or `created` events go to the "IF no assignee?" branch, while `issue_comment` events are routed to the "IF wants to work?" branch.
3.  For newly created issues, the "IF no assignee?" node checks if the issue has any assignees AND if the issue body contains a phrase such as "assign me". If there are no assignees and an assignment is requested, the workflow assigns the issue to the user who created the issue using the **Assign Issue Creator** node and add the "assigned" label.
4.  For issue comments, the "IF wants to work?" node verifies if the comment body contains an assignment request (e.g., "assign me").
5.  If an assignment request is detected in the comment, the "IF not assigned?" node checks if the issue has any assignees.
6.  If the issue is unassigned, the **Assign Commenter** node assigns the issue to the user who made the comment and add the "assigned" label.
7.  If the issue is already assigned and someone requests to be assigned via a comment, the **Add Comment** node posts a comment informing the user that the issue is already assigned to someone else.

## Services:

-   GitHub

## Hashtags:

#n8n #GitHub #Automation #IssueManagement #Workflow
