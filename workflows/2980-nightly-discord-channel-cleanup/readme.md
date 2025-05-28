# Keep discord clean

## Use cases:
- **Automated Discord Channel Maintenance:** Automatically delete old messages in Discord channels to keep them clean and organized, reducing clutter and improving navigation for users.
- **Compliance with Retention Policies:** Ensure compliance with data retention policies by automatically removing messages older than a specified timeframe (e.g., 7 days), which can be crucial for legal or regulatory requirements.
- **Community Management:** Efficiently manage large Discord communities by automatically removing inactive content, fostering a more active and engaging environment for members.

## How it works:
This workflow automates the process of cleaning up Discord channels by deleting messages older than 7 days.

1.  **Scheduler Trigger:** The workflow starts every day at 9:00 PM based on the "Every day at 9pm" node.
2.  **Retrieve Channels:** It retrieves all Discord channels from a specified server using the "Get all Discord channels" node, using your Discord credentials and filtering for text and news channels.
3.  **Rate Limiting:** It pauses briefly using the "Cool down Discord API rate limits" node to respect Discord API rate limits, avoiding potential issues.
4.  **Loop Through Channels:** The "Loop Over Channels" node iterates through each retrieved channel.
5.  **Get Messages:** For each channel, the "Get messages from Channel" node fetches all messages.
6.  **Rate Limiting:** It pauses briefly using the "Cool down Get messages API rate limits" node to respect Discord API rate limits, avoiding potential issues.
7.  **Filter Old Messages:** The "Filter Messages older than 7 days" node filters out messages older than 7 days based on their timestamp.
8.  **Loop Through Messages:** The "Loop Over Messages" node iterates through each filtered message.
9.  **Delete Messages:** The "Delete Message" node deletes each old message from the corresponding channel.
10. **Rate Limiting:** It pauses briefly using the "Cool down Message deletion API rate limits" node to respect Discord API rate limits, avoiding potential issues.
The workflow includes error handling ("onError":"continueRegularOutput") on "Get messages from Channel" and "Delete Message" nodes to ensure that errors in one channel or message do not stop the entire workflow, which will continue to iterate through the rest of the messages and/or channels.

## Services:
- Discord API

## Hashtags:
#n8n #discord #automation #channelcleanup #messagedeletion
