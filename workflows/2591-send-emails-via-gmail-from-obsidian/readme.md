# Send Emails from Obsidian

## Use cases:

- **Automated Note Sharing:** Automatically send daily or weekly meeting notes stored in Obsidian to team members.
- **Personal Knowledge Management:** Email yourself important insights or summaries from your Obsidian vault for review on the go.
- **Project Updates:** Distribute project status updates drafted in Obsidian to stakeholders via email.

## How it works:

1.  **Webhook Trigger:** The workflow is triggered by a POST request from the Obsidian Post Webhook plugin.  The "Webhook" node listens for this request and receives the note content and any attachments.
2.  **Attachment Check:** The "Check if attachments exist" node checks if the Obsidian note has any attachments.
3.  **Attachment Processing (if any):**
    *   If attachments exist, the "Separate attachment data" node splits the attachments array.
    *   "Fix Base64 string" remove "data:.*?,/" from each base64 attachment's string
    *   "Convert Attachment to File" converts each attachment to binary data.
    *   "Prepare Attachments for Email" aggregates all attachments into a single bundle.
4.  **Email Sending:**
    *   If attachments exist, "Email With Attachments" sends the email with the processed attachments. The email's "To," "CC," "BCC," "Subject," and "Body" are dynamically populated from the YAML frontmatter of the Obsidian note. The "from" name is configurable via YAML as well.
    *   If attachments do not exist, "Email Without Attachments" sends the email without attachments, also using data from the YAML frontmatter of the note.
    *   The "Check if it is a test" node checks if test key with boolean value true, if so, the workflow trigger "Test Succesfull" to obsidian back
5.  **Response to Obsidian:** The "Get date" node retrieves the current date and time. The "Respond to Obsidian" node sends a confirmation message back to Obsidian indicating that the email was sent with the date and time, or respond "Test Succesfull" if the test key it is true.

## Services:

*   Gmail (via Gmail OAuth2 credentials)
*   Obsidian (with Post Webhook plugin)

## Hashtags:

#n8n #Obsidian #EmailAutomation #PKM #Webhook
