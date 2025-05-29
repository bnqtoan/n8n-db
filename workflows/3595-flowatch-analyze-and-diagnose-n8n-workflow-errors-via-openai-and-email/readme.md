# Error Alert and Summarizer

## Use cases:

- **Real-time Error Notification:** Immediately notify designated personnel (e.g., IT support, developers) via email when an error occurs in an n8n workflow, ensuring prompt attention to critical issues.
- **Automated Root Cause Analysis:** Leverage AI to automatically diagnose the cause of errors and suggest resolutions, reducing the time and effort required for manual troubleshooting.
- **Centralized Error Reporting:** Compile and send detailed error reports, including workflow context, execution details, and AI-driven analysis, to improve error tracking and resolution efficiency.

## How it works:

1.  **Error Trigger:** The workflow starts when an error occurs in any other active workflow. This is achieved using the `Error Trigger` node.
2.  **SET EMAIL:** Sets the recipient, CC, and BCC email addresses. This information is used later to send the error notification.
3.  **Remove Manual Exec:** Checks if the workflow execution mode is "manual." If it is, the workflow stops to prevent sending error notifications for manual executions.
4.  **Get Failed Exec:** Retrieves the details of the failed execution using the execution ID obtained from the `Error Trigger`. This provides context about the workflow and the error.
5.  **Extract Error Details:** Extracts relevant information from the execution data, such as the workflow name, node that caused the error, error message, and other metadata. This information is formatted into a JSON object.
6.  **Error Solver Agent:** This node uses the Langchain Agent node to summarize the error that triggered the workflow using OpenAI.
7.  **Set Diagnosis Fields:** Populates fields `diagnosis`, `cause` and `resolution` to be used to send via email.
8.  **Generate Email:** Creates a formatted HTML email body that includes the error details, diagnosis, cause, and resolution, making it easy to understand the issue.
9.  **Send Gmail:** Sends the email with the error report to the configured recipient(s) using the Gmail node.

## Services:

-   **n8n API:** Used to fetch execution details.
-   **OpenAI API:** Used to analyze and summarize the error.
-   **Gmail API:** Used to send email notifications.

## Hashtags:

#n8n #automation #errorhandling #AI #workflow
