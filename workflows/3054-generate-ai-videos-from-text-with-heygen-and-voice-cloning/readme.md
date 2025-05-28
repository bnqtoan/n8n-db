# Generate AI Videos with HeyGen

## Use cases:

- **Automated Content Creation:** Generate marketing videos, social media content, or educational materials using AI avatars and voices based on text input.
- **Personalized Video Messages:** Create personalized video greetings or announcements for customers or team members with dynamic text.
- **Accessibility Solutions:** Convert written content into video format with AI avatars for users who prefer visual or auditory learning.

## How it works:

1.  **Trigger:** The workflow is manually triggered using the "When clicking ‘Test workflow’" node.
2.  **Configuration:** The "Config" node sets the `avatar_id`, `voice_id`, and `text` variables with specific values (Avatar ID, Voice ID and the text that the avatar will speak in the video).
3.  **Create Video:** The "Create Video" node sends a POST request to the HeyGen API to generate a video. It uses the variables set in the "Config" node to specify the avatar, voice, and text for the video.
4.  **Wait:** The "Wait" node pauses the workflow for 10 seconds.
5.  **Get Video Status:** The "Get Video Status" node retrieves the status of the video from the HeyGen API using the video ID returned by the "Create Video" node.
6.  **is Completed?:** The "is Completed" node checks if the video status is "completed".
7.  **Output:** If the video is completed, the "Output" node extracts the `video_url` from the HeyGen API response. If the video is not completed, the workflow loops back to the "Wait" node to check the status again.

## Services:

-   **HeyGen:** AI video generation platform with customizable avatars and voices.

## Hashtags:

#n8n #automation #HeyGen #AIvideo #contentcreation
