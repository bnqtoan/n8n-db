# My workflow

## Use cases:
- **Lead Capture and Management:** Automatically collect form submissions and store them in a Google Sheet for tracking and analysis.
- **Real-time Notifications:** Instantly receive email and Discord notifications whenever a new form is submitted, ensuring timely follow-up.
- **Email Verification:** Verify the validity of submitted email addresses to filter out fake or invalid leads, improving data quality.

## How it works:
1.  The workflow starts with an **n8n Form Trigger** node, which listens for submissions to a specified form.
2.  Upon form submission, the data is passed to a **Hunter** node, which verifies the email address provided in the form.
3.  An **If** node checks if the email address is valid.
    *   If the email is valid, the workflow proceeds to send a notification email via **Gmail**, update a **Google Sheets** spreadsheet with the form data, and send a notification to a **Discord** channel.
    *   If the email is invalid, the workflow does nothing, thanks to the **No Operation, do nothing** node.
4.  The **Gmail** node sends an email containing the form data to a specified email address.
5.  The **Google Sheets** node updates a specified Google Sheet with the form data, including the submission timestamp.
6.  The **Discord** node sends a message to a specified Discord channel, notifying users of the new form submission.

## Services:
- Google Sheets
- Gmail
- Discord
- Hunter.io API

## Hashtags:
#n8n #automation #leadgeneration #forms #emailverification
