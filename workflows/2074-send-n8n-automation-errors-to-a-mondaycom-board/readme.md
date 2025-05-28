# Error Tracking Workflow

## Use cases:

- Automatically log errors that occur in n8n workflows to a monday.com board for tracking and resolution.
- Capture error details such as the workflow name, error message, stack trace, and timestamp for easier debugging.
- Centralize error information in a structured format on monday.com for improved team collaboration and visibility.

## How it works:

1.  **Error Trigger:** This node activates when an error occurs in the n8n workflow it is connected to. The provided `pinData` simulates an error, triggering the workflow.
2.  **Monday:**  This node creates a new item (representing the error) on a specified monday.com board within a defined group, using the execution ID from the error trigger as the item's name.
3.  **Date & Time:** This node retrieves the current date and time.
4.  **Code:** This node extracts the error stack trace from the `Error Trigger` data and URL-encodes it.
5.  **UPDATE:** This node updates the item created in the "Monday" node with details such as the workflow name, error stack trace, error message, and date/time.  It uses data from the "Error Trigger", "Code", and "Date & Time" nodes to populate specific columns on the monday.com board.

## Services:

-   monday.com

## Hashtags:

#n8n #automation #errorTracking #mondayCom #workflow
