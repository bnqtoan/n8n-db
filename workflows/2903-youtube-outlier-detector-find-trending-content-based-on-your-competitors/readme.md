# Youtube Searcher

## Use cases:

- Identify trending or high-performing videos from a list of YouTube channels for market research.
- Automatically populate a database with video statistics (views, likes, comments) for analysis and reporting.
- Filter out YouTube Shorts (videos under 210 seconds) from search results to focus on longer-form content.

## How it works:

1.  **Trigger:** The workflow starts with "Execute Workflow Trigger"
2.  **Fetch Channel IDs:** The "When clicking ‘Test workflow’" node provides initial YouTube channel IDs, which are then iterated over using the "Loop Over Items" node. The data from pinData in the trigger node contain url and id to youtube channels.
3.  **Get last publish time from DB:** The "fetch_last_registered" node queries a Postgres database to retrieve the most recent publish time for each channel.
4.  **Fetch Videos:** The "get_videos" node uses the YouTube API to search for videos from each channel, filtering by `channelId`, `regionCode`, and videos published after the timestamp retrieved in the previous step.  The result limit is 50 videos.
5.  **Check if data exist** The "if_is_empty" node check if the get_videos returned a valid set of data
6.  **Get video information** "find_video_data1" will use the YouTube API to search the id, contentDetails, statistics of the videos to gather information on them.
7.  **Remove Shorts:** The "remove_shorts" node filters out short-form videos (YouTube Shorts) based on their duration, keeping only videos longer than 210 seconds.
8.  **Check if valid data:** The "if_empty" node check if the result is valid
9.  **Map data:** The node "map_data" maps the data from the youtube api call in a json format
10. **Structure data:** The "structure_data" node check if the viewCount, likeCount, commentCount exist, else set the value to zero
11. **Create Query:** The "create_query" node construct a valid query to Postgres db
12. **Insert Items:** The "insert_items" node insert all the new information in the Postgres database.
13. **Sanitize Data:** The "sanitize_data" fetch data from a Postgres database with all the information about all the videos, and identify the trending video on each channel.

## Services:

-   YouTube API (for searching videos and retrieving video details)
-   PostgreSQL (for storing and querying video statistics)

## Hashtags:

#n8n #youtube #automation #database #api
