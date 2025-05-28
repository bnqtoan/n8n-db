# Create, update and get a case in TheHive

## Use cases

*   Automatically create a new case in TheHive when a specific event occurs (e.g., a form is submitted, an email is received).
*   Update the severity level of an existing case in TheHive based on certain conditions or triggers.
*   Retrieve case details from TheHive for reporting, analysis, or integration with other systems.

## How it works

This workflow automates the process of creating, updating, and retrieving cases in TheHive.

1.  **On clicking 'execute'**: The workflow is triggered manually, initiating the process.
2.  **TheHive (Create)**: A new case is created in TheHive with the following details:
    *   Title: "n8n"
    *   Description: "Creating a case from n8n"
    *   Severity: 1
    *   Tags: "n8n, theHive"
    *   Owner: "Harshil"
    *   Start Date: 2020-12-03
3.  **TheHive1 (Update)**: The newly created case is updated. The case ID is dynamically obtained from the output of the previous "TheHive (Create)" node. The severity is updated to 3.
4.  **TheHive2 (Get)**: The updated case is then retrieved from TheHive. The case ID is dynamically obtained from the output of the "TheHive (Create)" node.

## Services

*   TheHive

## Hashtags

#n8n #TheHive #automation #security #casemanagement
