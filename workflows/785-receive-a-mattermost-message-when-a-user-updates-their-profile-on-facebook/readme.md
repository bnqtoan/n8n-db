# Receive a Mattermost message when a user updates their profile on Facebook

## Use cases:

*   **Monitoring Brand Mentions:** Get notified in Mattermost when a specific Facebook Page is mentioned in a user's profile update, allowing for timely engagement.
*   **Tracking Competitor Activity:** Receive alerts when users update their profiles with information related to competitors, enabling market intelligence gathering.
*   **Social Media Listening:** Be alerted to specific keywords or phrases used in user profile updates, providing insights into trending topics and sentiments.

## How it works:

1.  The workflow starts with the "Facebook Trigger" node, which listens for changes in Facebook user profiles via webhook. This node requires a configured Facebook App and associated credentials.
2.  When a user updates their profile, the "Facebook Trigger" captures the relevant data, including the user ID (`uid`), the field that was changed (`field`), and the new value (`value`).
3.  The "Mattermost" node receives the data from the "Facebook Trigger".
4.  It then formats a message containing the user ID, the changed field, and the new value, and sends it to a specified Mattermost channel. The message template uses n8n expressions to dynamically insert the data from the Facebook trigger.

## Services:

*   Facebook Graph API
*   Mattermost

## Hashtags:

#n8n #facebook #mattermost #automation #socialmediamonitoring
