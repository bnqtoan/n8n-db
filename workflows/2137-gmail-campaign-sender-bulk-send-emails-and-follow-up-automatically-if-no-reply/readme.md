# Automated Email Follow-up Campaign

## Use Cases

- **Sales Outreach:** Automatically send a sequence of personalized emails to potential leads, nurturing them until they respond.
- **Recruitment:** Automate follow-up emails to candidates after initial contact, keeping them engaged throughout the hiring process.
- **Marketing Campaigns:** Send a series of emails to subscribers, promoting products, services, or events over a defined period.

## How it Works

This workflow automates sending a sequence of emails based on data from a Google Sheet and previous email interactions. Here's a breakdown:

1.  **Schedule Trigger:** The workflow starts based on a schedule (e.g., hourly, daily).
2.  **Weekend Filter**: Prevents sending emails on weekends.
3.  **Settings:** Loads settings such as the Google Sheet URL, email subject, sender name, email column name, and a mail ID for tracking.
4.  **Email Sequence:** Defines the email sequence to be sent, including the message content and the number of days to wait between emails.
5.  **Get Emails:** Retrieves data from a Google Sheet, each row representing a contact to email.
6.  **First Email Filter:** Checks if `first_emailed` is empty to know if the email has been previously contacted.
7.  **Prepare First Message Params:** Sets the parameters like `message_template`, `to_email`, `subject`, `sender_name`, `mail_id`, and `mail_seq` for the first email in the sequence.
8.  **Prepare Reply Params:** Sets the parameters like `message_template`, `reply_message_id`, `sender_name`, `mail_id`, `mail_seq`, and `to` for the following emails in the sequence.
9.  **Package placeholder values**: Extracts the placeholders form the email sequence and matches them to the relevant columns in the Google Sheet
10. **Get Previous Message Threads:** Searches the Gmail inbox for previous email threads with the same subject.
11. **Get Thread Details:** Retrieves details of the found email thread.
12. **Decode Messages:** Decodes the HTML content of the emails in the thread.
13. **Classify Threads:** Determines if a follow-up email is due based on the email thread history and the defined email sequence.
14. **Next Message Due?**: Filter node that routes the workflow if the email should be sent now.
15. **Decode Placeholder Values:** Extracts placeholder values from the decoded email messages.
16. **Call message send sub-workflow1 / Call message send sub-workflow**: Calls the sub-workflow to send the email.
17. **Set message template**: Sets the message template
18. **Fill message placeholders**: Populates the placeholders in the message template with values extracted from the sheet or previous emails.
19. **Compose message**: Composes the message with HTML formatting.
20. **Replying?**: Checks whether we have a reply or a new message to send.
21. **Reply to message / Send new message:** Sends the email via Gmail.
22. **Update Last Contacted Time:** Updates the "first_emailed" column in the Google Sheet with the current date for the contact.

## Services

-   **Google Sheets:** Used as a data source for contact information and to track the "first emailed" status.
-   **Gmail:** Used to send emails and search for previous email threads.

## Hashtags

#n8n #automation #emailmarketing #googlesheets #gmail
