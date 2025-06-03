[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/core-nodes/n8n-nodes-base.emailimap.md "Edit this page")

# Email Trigger (IMAP) node[#](#email-trigger-imap-node "Permanent link")

Use the IMAP Email node to receive emails using an IMAP email server. This node is a trigger node.

Credential

You can find authentication information for this node [here](../../credentials/imap/).

## Operations[#](#operations "Permanent link")

*   Receive an email

## Node parameters[#](#node-parameters "Permanent link")

Configure the node using the following parameters.

### Credential to connect with[#](#credential-to-connect-with "Permanent link")

Select or create an [IMAP credential](../../credentials/imap/) to connect to the server with.

### Mailbox Name[#](#mailbox-name "Permanent link")

Enter the mailbox from which you want to receive emails.

### Action[#](#action "Permanent link")

Choose whether you want an email marked as read when n8n receives it. **None** will leave it marked unread. **Mark as Read** will mark it as read.

### Download Attachments[#](#download-attachments "Permanent link")

This toggle controls whether to download email attachments (turned on) or not (turned off). Only set this if necessary, since it increases processing.

### Format[#](#format "Permanent link")

Choose the format to return the message in from these options:

*   **RAW**: This format returns the full email message data with body content in the raw field as a base64url encoded string. It doesn't use the payload field.
*   **Resolved**: This format returns the full email with all data resolved and attachments saved as binary data.
*   **Simple**: This format returns the full email. Don't use it if you want to gather inline attachments.

## Node options[#](#node-options "Permanent link")

You can further configure the node using these **Options**.

### Custom Email Rules[#](#custom-email-rules "Permanent link")

Enter custom email fetching rules to determine which emails the node fetches.

Refer to [node-imap's search function criteria](https://github.com/mscdex/node-imap) for more information.

### Force Reconnect Every Minutes[#](#force-reconnect-every-minutes "Permanent link")

Set an interval in minutes to force reconnection.

## Templates and examples[#](#templates-and-examples "Permanent link")

**Effortless Email Management with AI-Powered Summarization & Review**

by Davide

[View template details](https://n8n.io/workflows/2862-effortless-email-management-with-ai-powered-summarization-and-review/)

**AI Email Analyzer: Process PDFs, Images & Save to Google Drive + Telegram**

by Davide

[View template details](https://n8n.io/workflows/3169-ai-email-analyzer-process-pdfs-images-and-save-to-google-drive-telegram/)

**A Very Simple "Human in the Loop" Email Response System Using AI and IMAP**

by Davide

[View template details](https://n8n.io/workflows/2907-a-very-simple-human-in-the-loop-email-response-system-using-ai-and-imap/)

[Browse Email Trigger (IMAP) integration templates](https://n8n.io/integrations/email-trigger-imap/), or [search all templates](https://n8n.io/workflows/)