# Send Daily Birthday Reminders from Google Contacts to Slack

## Use cases:

- **Team Birthday Celebrations:** Automatically remind a team channel about a team member's birthday, encouraging team bonding and recognition.
- **Personal Birthday Reminders:** Get a daily digest of your friends' or family's birthdays, helping you stay connected and remember important occasions.
- **Client Relationship Management:** Remind account managers about client birthdays, allowing them to send personalized greetings and strengthen relationships.

## How it works:

This workflow automates sending daily birthday reminders from Google Contacts to a Slack channel.

1.  **Schedule Trigger:** The workflow starts with a `Schedule Trigger` node, configured to run daily at 8:00 AM.
2.  **Google Contacts:** It retrieves all contacts from your Google Contacts account, fetching details such as email addresses, birthdays, names, and nicknames.
3.  **Filter Contact:** Filters the contacts fetched from Google Contacts to get the contacts who have a birthday date filled in.
4.  **If:** Checks if today's date matches any of the birthdays in the retrieved contact list.
5.  **Slack:** If a birthday matches today's date, a message is sent to a specified Slack channel, notifying users about the birthday. The message includes the contact's first and last name.

## Services:

-   Google Contacts
-   Slack

## Hashtags:

#n8n #automation #workflow #googlecontacts #slack #birthdayreminder
