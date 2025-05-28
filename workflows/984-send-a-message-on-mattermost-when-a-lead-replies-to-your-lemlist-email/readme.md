# Lemlist Reply to Mattermost Notification

## Use cases:

- Get instant notifications in Mattermost when leads reply to your Lemlist email campaigns, allowing for timely follow-up.
- Centralize communication by bringing Lemlist reply notifications directly into your team's Mattermost channel.
- Track engagement with specific Lemlist campaigns and identify leads who are showing interest based on their replies.

## How it works:

This workflow triggers when a lead replies to an email sent from a specific Lemlist campaign. It extracts the lead's first name, the campaign name, and the reply text, then sends a message to a designated Mattermost channel.

1.  **Lemlist Trigger:** This node listens for the "emailsReplied" event from Lemlist, specifically for the campaign with the ID "cam\_H5pYEryq6mRKBiy5v".  It requires valid Lemlist API credentials.
2.  **Mattermost:** This node sends a message to the Mattermost channel specified by the "channelId". The message includes the lead's first name, the campaign name, and the text of the lead's reply, formatted as a quote. It requires valid Mattermost API credentials.

## Services:

-   Lemlist
-   Mattermost

## Hashtags:

#n8n #Lemlist #Mattermost #Automation #SalesEngagement
