# CV Evaluation - Error Handling

## Use cases:

- **Centralized Error Notifications:**  Receive immediate email notifications when any of your n8n workflows encounter errors, whether at the execution or trigger level. This allows for faster identification and resolution of issues.
- **Detailed Error Analysis:**  The email provides a comprehensive overview of the error, including links to the failed workflow and the error handling workflow, execution details (if applicable), and a detailed JSON payload containing the error context.
- **Proactive Monitoring and Debugging:** By capturing and analyzing the error details, you can identify recurring issues, pinpoint the root causes of failures, and implement preventative measures to improve the reliability of your n8n workflows.

## How it works:

1. **Error Trigger:** The workflow starts with an "Error Trigger" node, which is automatically activated when another n8n workflow, configured to use this as its error workflow, encounters an error.
2. **Configuration:** The "Config" node defines essential settings like the n8n app URL, the recipient email address for error notifications, and the sender name.
3. **Constants:**  The "Constants" node constructs URLs and boolean values based on the environment, such as the main workflow and error handling workflow URLs, and identifies if the error is at execution level.
4. **Conditional HTML Generation:** The "If" node verifies the source of the error. If an execution error is the source, the flow continues to "HTML for Execution Error" or to "HTML for Trigger Error" if the error came from trigger level. These nodes extract relevant information from the error and format it into HTML.
5. **Merge HTML:** The "KeepEitherOfHTMLs" node combines the outputs from "HTML for Trigger Error" and "HTML for Execution Error" nodes.
6. **Merge:** The "Merge" node combines data from the "Constants" and "KeepEitherOfHTMLs" nodes.
7. **Gmail:** The "Gmail" node sends an email notification containing the error details. The email includes a subject line with the failed workflow ID, name, error source (execution or trigger), and error message, as well as a detailed HTML body and a comprehensive JSON payload.

## Services:

- Gmail

## Hashtags:

#n8n #automation #workflow #errorhandling #emailnotification
