# Add AI Labels to Gmail Messages

## Use cases:

- **Automated Email Sorting:** Automatically categorize incoming emails based on their content, helping users prioritize and manage their inbox more efficiently. For example, automatically label emails related to "Partnership", "Inquiry", or "Notification".
- **Lead Qualification:** Quickly identify and label potential leads from incoming emails, ensuring prompt follow-up and improving sales efficiency.
- **Customer Support Triage:** Automatically route and label customer support emails based on the nature of the issue, enabling faster response times and improved customer satisfaction.

## How it works:

This workflow automates the process of adding AI-driven labels to Gmail messages. Here's a step-by-step breakdown:

1.  **Gmail Trigger:** The workflow starts with a Gmail Trigger node, which monitors a specified Gmail inbox for new incoming messages. It is configured to trigger when a new email arrives.
2.  **Get Message Content:** Once a new email is detected, the "Get message content" node retrieves the body content of the email using the message ID.
3.  **Assign labels for message:** The email content is passed to an AI model to determine the most appropriate labels. The prompt type is set to "define".
4.  **OpenAI Chat:** This node uses the `gpt-4o-mini` model and is responsible for processing email content and suggesting labels.
5.  **JSON Parser:** This node parses the JSON output from the AI, extracting the `labels` array based on the provided schema (`"Inquiry", "Partnership", "Notification"`).
6.  **Set label values:** The labels extracted by the JSON parser are passed to this node.
7.  **Get All Labels:** This node retrieves all available labels from the user's Gmail account.
8.  **Split Out Assigned Labels:** Splits the array of AI assigned labels into individual items for processing.
9.  **Merge Corresponding Labels:** Merges the labels retrieved from Gmail with the labels assigned by AI based on their names.
10. **Aggregate Label IDs:** Combines the IDs of the assigned labels into an array.
11. **Add Labels to Message:** Finally, the "Add labels to message" node adds the determined labels to the original email in Gmail. This uses the message ID and the array of label IDs generated in the previous step.

## Services:

-   Gmail API
-   OpenAI API

## Hashtags:

#n8n #automation #gmail #ai #emailmanagement
