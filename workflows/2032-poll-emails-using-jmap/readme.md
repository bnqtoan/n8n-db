# Get Fastmail Unread Messages

## Use cases:

- **Daily Email Summary:**  Get a summary of the 3 latest unread emails in your Fastmail inbox every morning.  You could adapt this workflow to send yourself a notification (e.g., via Slack or email) with the subject lines and senders.
- **Prioritized Task Management:** Integrate with a task management system (like Todoist or Asana) to automatically create tasks based on unread emails from specific senders or containing certain keywords, ensuring important emails are immediately addressed.
- **Urgent Alert System:** Monitor for unread emails and trigger an alert (via SMS or push notification) if a critical email is received outside of working hours, enabling immediate response to emergencies.

## How it works:

This workflow retrieves and displays the 3 latest unread emails from your Fastmail inbox using the JMAP API. Here's a breakdown:

1. **Manual Trigger:** The workflow starts when you manually execute it ("When clicking 'Execute Workflow'").
2. **Fetch API Details:** It makes an HTTP request to the Fastmail JMAP session endpoint to get the `primaryAccounts` which contains the account ID.
3. **Get mailboxes:** It retrieves the mailboxes information to get the inbox id.
4. **Format Results:** Extracts the account ID and inbox ID from the responses of the previous two HTTP Requests nodes using the Set node.
5. **Get unread messages:** It sends a JMAP query to fetch the three most recent unread emails from the inbox, including their ID, received date, sender, subject, and keywords.
6. **Result:** The final output is a list of the unread emails' metadata.

## Services:

- Fastmail (JMAP API)

## Hashtags:

#n8n #Fastmail #JMAP #EmailAutomation #UnreadMessages
