# User Request Management

## Use cases:

- **Streamline Internal Requests:** Automate the process of collecting and organizing internal requests (e.g., document creation, presentation updates) from employees, ensuring no request is missed and all are properly categorized.
- **Centralized Task Management:** Automatically create tasks in a project management tool (ClickUp) based on user requests submitted through a form, eliminating manual task creation and assignment.
- **Prioritized Workflow:** Route requests to specific lists within ClickUp based on the type of request, enabling teams to prioritize and address them efficiently.

## How it works:

1.  **Typeform Trigger:** The workflow starts when a user submits a request via a Typeform form. The form captures information such as the request type, a short title, a detailed description, the requester's name, and email address.
2.  **Pick List:** This Switch node determines the type of request being made (e.g., Document, Presentation, Update, Workflow) based on the user's selection in the Typeform.
3.  **ListID nodes:** Based on the request type selected in the Pick List node, the workflow routes the data to a specific "ListID" Set node. Each "ListID" node contains a specific ClickUp List ID associated with each different type of request.
4.  **ClickUp:** A task is created in ClickUp with details extracted from the Typeform submission. The task name, description, requester information, and priority are populated in the ClickUp task. The task is created within a specific Team, Space, and Folder, within ClickUp.

## Services:

-   Typeform
-   ClickUp

## Hashtags:

#n8n #automation #workflow #requestManagement #clickup #typeform
