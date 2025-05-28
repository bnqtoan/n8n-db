## Use cases:

*   **Regular Data Processing:** This workflow can be used to periodically process data, adding or modifying fields based on a predefined schedule. For example, you can enrich data pulled from an external source every two hours.
*   **Scheduled Task Execution:**  The workflow facilitates running specific tasks at set intervals. You can use it to trigger processes that require periodic execution, such as updating a database field or initiating a monitoring process.

## How it works:

The workflow begins with a "2 hours Interval" node, which triggers the workflow execution every two hours. Upon activation, the "FunctionItem" node executes a JavaScript code snippet that adds two new variables (`myVariable` and `myVariable2`) to the input data. Finally, the "Set" node extracts the value of `myVariable2` from the FunctionItem node, assigns it to a field named `data`, and outputs only this field. effectively keeping only the value of `myVariable2`.

## Services:

*   None (The workflow utilizes n8n's built-in nodes for scheduling, data manipulation, and variable assignment, without relying on external services.)

## Hashtags:

#n8n #automation #workflow #scheduler #dataProcessing
