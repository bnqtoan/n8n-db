# n8n Community Meetup Invitation Workflow

## Use cases:

*   **Automated Event Invitation:** Automatically generate and send iCalendar invites for community meetups or webinars when triggered.
*   **Personalized Event Reminders:**  Adapt the workflow to send reminders before an event by adding a delay node and modifying the email content.
*   **Internal Meeting Scheduling:** Use this workflow to schedule internal meetings, generate invites, and automatically email them to participants.

## How it works:

1.  The workflow starts with a "On clicking 'execute'" node, which triggers the workflow manually.
2.  The "iCalendar" node generates an iCalendar (.ics) file with the event details (start time, end time, title). The start time is set to "2021-06-11T15:30:00.000Z", end time to "2021-06-11T16:15:00.000Z", and the title to "n8n Community Meetup".
3.  The "Send Email" node sends an email. The email body includes a pre-defined message inviting the recipient to the n8n Community Meetup and attaches the generated iCalendar file as an invite. The email uses the "Outlook Burner Credentials" for SMTP authentication.

## Services:

*   **Email (SMTP via Outlook):** Sends email invitations with iCalendar attachments.

## Hashtags:

#n8n #automation #iCalendar #eventmanagement #email
