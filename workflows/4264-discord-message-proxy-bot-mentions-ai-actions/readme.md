# Automatic [slow] Discord Task Worker with no community Trigger node (This is a bad way to do this and you should probably not)

## Use cases:

- **Scheduled Discord Monitoring:** Periodically scans Discord channels for specific mentions or commands to trigger actions.
- **Automated Task Execution:**  Upon detecting a valid command from an authorized user, it can trigger an HTTP request to an external service to perform a task.

## How it works:

1.  **Schedule Trigger:** The workflow starts on a defined schedule.
2.  **Set Values**: An empty node.
3.  **Get All Servers' Channels:** Fetches all channels from all Discord servers the bot is in.
4.  **Filter (Remove empty):** Filters out any empty channels from the list of channels obtained in the previous step.
5.  **Get last message:** Retrieves the last message from each of the remaining Discord channels.
6.  **Remove Duplicates:** Removes any duplicate messages.
7. **Filter (Remove Old):** Filters out old messages based on a defined timeframe.
8.  **Discord1:** An empty node.
9.  **Remove Duplicates1:** Removes any duplicate messages.
10. **Filter (Messages with mentions):** Filters for messages that include mentions.
11. **Filter (Messages mentioning bot):** Filters for messages that mention the bot.
12. **Filter (Authorized User):** Checks if the message author is an authorized user.
13. **Clean Message:** Cleans the message content, presumably extracting relevant information.
14. **HTTP Request:** Sends an HTTP request to a specified URL, potentially triggering an action based on the extracted information.
15. **It:** Sends a message back to Discord, possibly confirming the action taken.

## Services:

*   Discord
*   HTTP Request

## Hashtags:

#n8n #Discord #Automation #ScheduledTask #Bot
