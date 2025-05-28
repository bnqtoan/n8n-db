# YouTube to Raindrop

## Use cases

*   Automatically save new videos from a specific YouTube playlist to a Raindrop.io collection for later viewing.
*   Create a personal archive of educational or entertaining content from YouTube channels you follow.
*   Share interesting YouTube videos with your team or community by automatically saving them to a shared Raindrop.io collection.

## How it works

1.  The workflow is triggered either manually ("On clicking 'execute'") or every 30 minutes ("Every 30 mins").
2.  It retrieves all items from a specified YouTube playlist using the "YouTube" node.  **Important:** You need to replace `CHANGE_ME` with the actual playlist ID.
3.  The "Flatten JSON" node extracts the `snippet` part from each YouTube item.
4.  The "Filter new items" node filters out already existing youtube videos by comparing with a stored list of ids.
5.  The "Raindrop Bookmark" node creates a new bookmark in Raindrop.io for each new video, using the video URL, channel title, and video title. It also adds the "youtube" tag. **Important:** The `collectionId` in the "Raindrop Bookmark" node is set to `0`, which likely needs to be changed to a valid collection ID in your Raindrop.io account.

## Services

*   YouTube
*   Raindrop.io

## Hashtags

#n8n #YouTube #Raindrop #Automation #Bookmarks
