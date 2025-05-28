# Post New YouTube Videos to X

## Use cases:
- Automatically promote newly uploaded YouTube videos on X (formerly Twitter) to increase visibility and engagement.
- Schedule regular updates on X whenever a new video is posted on a specific YouTube channel.
- Create a consistent social media presence by automatically sharing YouTube content on X without manual intervention.

## How it works:
1.  **Check Every 30 Min:** The workflow starts with a schedule trigger that runs every 30 minutes.
2.  **Fetch Latest Videos:** It retrieves the latest video uploaded to a specified YouTube channel within the last 30 minutes.  This is done using the YouTube node and providing a Channel ID.  A sticky note reminds the user to provide their Channel ID.
3.  **Generate Post for X with ChatGPT:** The title and description of the fetched video are then passed to the OpenAI node, which uses ChatGPT to generate an engaging post suitable for X with a maximum length of 140 characters, including a link to the video.
4.  **Post to X:** Finally, the generated post is automatically published to X via the X (Twitter) node.

## Services:
-   YouTube API
-   OpenAI API (ChatGPT)
-   X (formerly Twitter) API

## Hashtags:
#n8n #automation #youtube #x #socialmedia
