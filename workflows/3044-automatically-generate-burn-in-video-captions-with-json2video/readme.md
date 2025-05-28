# Fully automated Video Captions generation with json2video

## Use cases:

- **Content creators:** Automatically generate captions for videos to improve accessibility and engagement on platforms like YouTube, Vimeo, and social media.
- **Online educators:** Enhance video lectures and tutorials with accurate captions, making the content more understandable for students with diverse learning needs.
- **Marketing teams:** Quickly produce captioned video ads and promotional content, ensuring that key messages are conveyed even when the sound is off.

## How it works:

1.  **Trigger:** The workflow starts when you manually click "Test workflow".
2.  **Configuration:** A "Set" node ("Config") defines the video URL, width, and height. Example values are pre-filled, but these should be adjusted to match the video you want to caption.
3.  **json2video - Add Captions:** The workflow sends a request to the json2video API to add captions to the specified video. It uses the video URL, width, and height from the "Config" node and specifies settings for the caption style, font, and colors.
4.  **Wait:** The workflow pauses for 10 seconds to allow json2video to process the video.
5.  **json2video - Get Status:** The workflow checks the status of the video processing job on json2video.
6.  **Is Error?:** Checks if the json2video API return with an error status. If so, the workflow ends at "Handle Error" node.
7.  **is Completed?:** The workflow verifies if the video processing is complete (status = "done"). If the video is not processed yet, it goes back to wait. If completed, it proceeds to the next step.
8.  **Output:** The workflow extracts the URL, duration, size, dimensions, rendering time, project, and remaining quota of the newly captioned video and outputs it.

## Services:

-   [json2video](https://json2video.com/?afco=manu): A video automation service that adds captions to videos.

## Hashtags:

#n8n #automation #video #captions #json2video
