# YT Bedtime Story - SHORTS - N8N Market

## Use Cases

*   **Automated YouTube Shorts Creation:** Automatically generates short videos for YouTube using AI-generated voiceovers, relevant images, and background music based on a scheduled trigger.
*   **Content Repurposing:** Transforms existing text content (e.g., bedtime stories) into engaging video format for wider audience reach.
*   **Hands-free Content Generation:** Creates videos without manual intervention, streamlining content creation and publishing.

## How it Works

This workflow automates the creation of YouTube Shorts, starting with a scheduled trigger:

1.  **Schedule Trigger:** Initiates the workflow based on a defined schedule.
2.  **Grab Animal:** Generates animal names for voiceover.
3.  **Generate Voice Over:** Generates voice-over audio using AI based on animal name.
4.  **Clean Voice Over:** Cleans the generated voice-over.
5.  **Prepare OpenAI TTS & OPENai TTS:** Configures and uses OpenAI's Text-to-Speech (TTS) service to convert text into natural-sounding audio.
6.  **Wait 5 sec:** Pauses execution for 5 seconds.
7.  **Save Audio GSC:** Saves the generated audio file to Google Cloud Storage (GCS).
8.  **Map Public Link:** Extracts the public URL of the saved audio file.
9.  **Download Audio from GSC:** Downloads the audio file from Google Cloud Storage using its public URL.
10. **Transcribe with OpenAI Whisper:** Transcribes audio to text using OpenAI Whisper.
11. **Create a list of Image Text1:** Creates a list of image prompts based on the story transcript.
12. **Split Out1:** Splits prompts for image creation.
13. **Combine Image Style and Elements:** Combines base images with new image promts.
14. **Split Out - Image prompts:** Splits combined Image Prompts.
15. **Make Image Prompts Gemini:** Enhances image prompts using Gemini.
16. **Clean Image Prompts:** Cleans the image prompts.
17. **Get image Base:** Retrieves image base.
18. **Convert to File:** Converts image to file.
19. **Wait 6 sec:** Pauses execution for 6 seconds.
20. **Save images to GC:** Saves images to Google Cloud Storage.
21. **Limit:** Limits the amount of images.
22. **Image Link:** Save the public Image Link.
23. **Combine Transcript1:** Combines transcript.
24. **Get Random BG music:** Get a random background music from google cloud storage.
25. **Pick Random song From GSC:** Picks a random song from Google Cloud Storage.
26. **Map Music:** Map public music link.
27. **Generate Json to Video:** Generates a JSON payload to create a video.
28. **Create Video:** Sends a request to a video creation service using the JSON payload.
29. **Wait 6 min for Rendering:** Pauses execution to wait for video rendering.
30. **Get Video Progress:** Checks the progress of the video rendering.
31. **Set Correct Video Url:** Sets the correct video URL.
32. **Clean Transcript:** Cleans the transcript.
33. **Generate Transcript With AI:** Generates Transcript With AI.
34. **Generate Title with AI:** Generates title with AI.
35. **Append GS:** Saves the title to google sheets.
36. **Grab Video from GS:** Get Video from Google Sheets.
37. **Download Video:** Downloads the video from Google Sheets.
38. **YouTube Seos Kanaal:** Uploads the downloaded video to YouTube.
39. **Upgrade Progress on GS:** Upgrades progress status on Google Sheets.
40. **Send message with Telegram:** Sends telegram message.

## Services

*   **Google Cloud Storage (GCS):** For storing audio and image files.
*   **OpenAI (TTS & Whisper):** For text-to-speech conversion and audio transcription.
*   **YouTube:** For uploading and publishing the generated video.
*   **Telegram:** For sending notification messages.
*   **Google Sheets:** For storing video information and tracking progress.
*   **Gemini:** For enhancing image prompts.

## Hashtags

#n8n #automation #youtube #shorts #contentcreation
