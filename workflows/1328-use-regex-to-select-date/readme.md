# Close Date Management Workflow

## Use cases:

-   **Automated Date Validation:** Ensures that a "Close Date" field exists and conforms to a valid date format (YYYY-MM-DD) before further processing.
-   **Conditional Date Adjustment:** Automatically adjusts the "Close Date" by adding three weeks if the initial date is invalid or missing.
-   **Preserving Original Date:**  When the date is valid, this workflow ensures that it carries on unchanged through the workflow.

## How it works:

1.  The workflow starts with a "Manual Trigger" node, which is activated manually by clicking 'execute' within n8n.
2.  The "Set Close Date" node sets an initial close date, in this case `"2021-11-29T00:00:00.000Z"`.
3.  The "Check for Close Date" node verifies whether the "Close Date" is a valid date, using a Regular expression.
4.  If the "Close Date" is not a valid date format it uses the "Set Close Date 3 Weeks Later" node, which calculates a date three weeks from the current date and assigns it to the "Close Date" field.
5.  If the "Close Date" is a valid date format, the "Set Close Date To Original" node sets the value back to the original date.
6.  The "NoOp" node does nothing but end the workflow on either the date has been updated or it hasn't.

## Services:

-   None. This workflow relies solely on n8n's built-in nodes and does not interact with external services or APIs.

## Hashtags:

#n8n #automation #datevalidation #dateformatting #conditionalworkflow
