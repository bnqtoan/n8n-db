# Narrating Video Using Vision AI

## Use cases:

- **Automated video content creation:** Generate voiceovers for videos automatically, saving time and resources for content creators.
- **Accessibility enhancement:** Create audio descriptions for videos, making them accessible to visually impaired users.
- **Educational content generation:** Automatically narrate educational videos, explaining complex concepts through visual and auditory channels.

## How it works:

1.  **Download Video:** The workflow starts by downloading a video from a specified URL using the HTTP Request node. In this case a sample video from Pixabay is downloaded.
2.  **Capture Frames:** A Python Code node extracts evenly distributed frames from the video using the OpenCV library. It captures a maximum of 90 frames to limit the processing load.
3.  **Split Frames:** The extracted frames are then split into individual items using the Split Out Frames node for further processing.
4.  **Batch Frames for LLM:** The frames are then put into batches of 15.
5.  **Resize Frame:** Each frame is converted to binary data and resized to 768x768 pixels using the Edit Image node.
6.  **Aggregate Frames:** The resized binary frames are aggregated into a single item to be passed to the LLM.
7.  **Generate Narration Script:** The aggregated frames are sent to an OpenAI Chat Model via a ChainLLM node. The ChainLLM node generates a narration script based on the content of the frames in the style of David Attenborough. It intelligently prepends previous iterations to form a cohesive script, ensuring a continuous narrative.
8.  **Stay Within Service Limits:** A Wait node is introduced to adhere to service rate limits, particularly useful for users on lower-tier plans.
9.  **Combine Script:** All the partial scripts are combined into a single script using the Aggregate node.
10. **Use Text-to-Speech:** The combined script is then sent to the OpenAI node to generate an audio voiceover using the text-to-speech functionality.
11. **Upload to GDrive:** Finally, the generated audio file is uploaded to Google Drive for storage and sharing.

## Services:

-   Pixabay (for video download)
-   OpenAI (for chat model and text-to-speech)
-   Google Drive (for file storage)

## Hashtags:

#n8n #automation #videoProcessing #visionAI #voiceover
