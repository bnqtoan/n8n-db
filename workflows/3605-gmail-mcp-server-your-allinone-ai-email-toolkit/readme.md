# Gmail MCP Server

## Use cases:

- **AI-Powered Email Management:** Integrate with an AI agent to automatically triage, label, and respond to emails based on content and sender.
- **Automated Email Organization:** Use AI to create and apply labels to emails, threads, and drafts, keeping your inbox organized.
- **Enhanced Email Workflow for Agents:** Provide AI agents with tools to search, retrieve, and manipulate Gmail data, improving their ability to assist users.

## How it works:

This workflow acts as a server, exposing various Gmail functionalities for use by an AI agent or other applications. It uses the Gmail Tool nodes to perform actions on emails, drafts, labels and threads. The "Gmail MCP Server" trigger node listens for requests on a specific path (`/gmail-enhanced`).

When a request is received, the workflow can perform the following actions, based on the request parameters:

- **Message Operations:**
    - `search`: Searches for emails based on specified criteria (sender, date range, keywords).
    - `get`: Retrieves the details of a specific email message.
    - `reply`: Sends a reply to an email message, with options for CC, BCC, and attachments.
    - `delete`: Deletes an email message.
    - `markAsRead`: Marks an email message as read.
    - `markAsUnread`: Marks an email message as unread.
    - `addLabels`: Adds labels to an email message.
    - `removeLabels`: Removes labels from an email message.
- **Draft Operations:**
    - `createDraft`: Creates a new email draft.
    - `getDraft`: Retrieves an email draft.
    - `getManyDrafts`: Retrieves multiple drafts.
    - `deleteDraft`: Deletes an email draft.
- **Label Operations:**
    - `getLabels`: Retrieves a list of labels.
    - `getLabel`: Retrieves a specific label.
    - `createLabel`: Creates a new label.
    - `deleteLabel`: Deletes a label.
- **Thread Operations:**
    - `getManyThreads`: Retrieves multiple email threads based on filters.
    - `getThread`: Retrieves details of an email thread.
    - `addLabelThread`: Adds labels to an email thread.
    - `removeLabelThread`: Removes labels from an email thread.
    - `replyThread`: Reply to an email thread.

Each operation relies on parameters configurable through AI. The initial Sticky Note provides instructions on how to obtain the server URL for use with an AI Agent flow.

## Services:

- Gmail API

## Hashtags:

#n8n #gmail #automation #ai #email
