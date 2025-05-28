# Complete Youtube

## Use cases:

- **Trend Analysis for Content Creators:** Helps YouTube creators identify trending topics and themes within their niche, enabling them to create content that resonates with current viewer interests.
- **Market Research for Video Marketing:** Assists marketers in understanding what type of video content is performing well in a specific industry, informing their video marketing strategies.
- **Competitive Analysis:** Enables users to monitor the content strategies of competitors by identifying trending videos and content patterns in their respective niches.

## How it works:

1.  The workflow is triggered by a `chat_message_received` event, likely a user inputting a niche.
2.  The `AI Agent` node, configured with a specific system message, acts as the central intelligence. It first verifies if the user provided a niche. If not, it prompts the user to provide one with suggestions.
3.  The `AI Agent` uses the `youtube_search` tool (another n8n workflow) to find trending videos based on the identified niche. The tool searches for videos from the last 2 days, prioritizing relevance.
4.  The `youtube_search` node calls the abstracted workflow to retreive video data.
5.  The `get_videos1` node retrieves the videos based on the search term provided by the AI Agent.
6.  The `loop_over_items1` loops through each video found.
7.  The `find_video_data1` node makes an HTTP request to the YouTube API to get details on each video's content details, snippet, and statistics using the video ID. It filters videos longer than 3 minutes and 30 seconds.
8.  The `group_data1` node extracts relevant information like ID, view count, like count, comment count, description, title, channel title, tags, and channel ID.
9.  The `save_data_to_memory1` node uses a `Code` node to clean the description and save all the video data to memory.
10. The `retrieve_data_from_memory1` node retrieves the data from the memory.
11. The `response1` node returns the response.
12. The `window_buffer_memory` node stores memory for the AI Agent

## Services:

-   YouTube API (via HTTP Request node)
-   YouTube (via YouTube node)
-   OpenAI (via Langchain nodes)

## Hashtags:

#n8n #automation #youtube #trendanalysis #contentcreation
