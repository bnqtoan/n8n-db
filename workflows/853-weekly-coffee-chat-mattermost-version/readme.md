# Coffee Bot (Mattermost)

## Use cases:

- Automatically create and announce virtual coffee groups within a Mattermost channel to foster team connections.
- Schedule recurring coffee catch-ups and send calendar invites to the generated groups.
- Onboard new team members into the coffee rotation automatically.

## How it works:

1.  **Weekly trigger on monday:** The workflow starts with a Cron node that triggers every Monday at 10:00 AM.
2.  **Greetings:** A Mattermost node sends a greeting message to a specified channel, announcing the coffee groups for the week.
3.  **Employees in coffee chat channel:** Retrieves all users in the channel specified in the "Greetings" node using a Mattermost node.
4.  **Divide into groups:** A Function node takes the list of users and divides them into random groups of approximately 3 people. It shuffles the list of users and ensures no group has only one member by re-adjusting the groups.
5.  **Announce groups:** A Mattermost node announces the coffee groups in the specified channel by listing the usernames in each group.
6.  **Send calendar invites:** A Google Calendar node sends out calendar invites to each group, inviting them to a Hangouts Meet for their virtual coffee. The invite includes all group members as attendees.

## Services:

-   Mattermost
-   Google Calendar
-   Hangouts Meet

## Hashtags:

#n8n #automation #mattermost #googlecalendar #virtualcoffee
