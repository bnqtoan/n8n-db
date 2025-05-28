# Send Welcome Private Message to New BlueSky Followers

## Use Cases:

1.  **Automated Welcome Messages:** Automatically send a personalized welcome message to each new follower on BlueSky, enhancing engagement and providing a positive first impression.
2.  **Promotional Link Sharing:** Include a link to your website, blog, or promotional content in the welcome message, driving traffic and increasing visibility.
3.  **Community Building:** Foster a sense of community by promptly acknowledging new followers and offering them a direct line to your content or services.

## How it works:

This workflow automates the process of sending welcome messages to new BlueSky followers. Here's a breakdown:

1.  **Authentication:** The workflow starts by authenticating with the BlueSky API using your username and app password via the "Create Session" node.
2.  **Fetch Followers:** It retrieves the current list of followers using the "List followers" node and compares it against a locally stored file.
3.  **Read existing followers:** The "Read followers from file" node reads existing followers to check who are the news ones.
4.  **Identify New Followers:** The "Find new followers" node compares the current list with the existing list from a local file. It identifies the new followers based on their DIDs (Decentralized Identifiers).
5.  **Prepare for Messaging:** The "Split Out" and "Loop Over Items" nodes prepare the new follower DIDs for individual processing.
6.  **Craft Welcome Message:** The "Define welcome message" node sets the text and link for your personalized greeting.
7.  **Initiate Conversation:** The "Get conversation ID" node creates or retrieves the conversation ID with each new follower to be able to send a private message.
8.  **Send Message:** The "Send message" node sends the welcome message, including the specified text and link, as a private message to the new follower.
9.  **Update Follower List:** The "Convert to File" and "Save followers to file" nodes update the locally stored follower list with the latest data, ensuring that only new followers receive the welcome message on subsequent runs.
10. **Wait:** The "Wait" node adds a delay before fetching all the followers to avoid the API limitation

## Services:

*   Bluesky API

## Hashtags:

#n8n #bluesky #automation #privatemessage #socialmedia
