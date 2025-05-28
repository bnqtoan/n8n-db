# Youtube Automation - Animal Category

## Use cases:

- **Automated YouTube Content Creation:** This workflow automates the process of creating YouTube videos, particularly for the "Animal Category," by fetching video content, generating audio, creating image prompts, and assembling the final video.
- **Content Repurposing:** Automatically repurpose existing content by grabbing videos from a Google Sheet, generating transcriptions, and using that to create visual content.
- **Scheduled Content Generation:** Schedule the workflow to automatically create and upload videos on a regular basis (e.g., daily, weekly) based on a predefined schedule.

## How it works:

1.  **Trigger:** The workflow is triggered either manually ("When clicking ‘Test workflow’") or on a schedule ("Schedule Trigger").
2.  **Video Acquisition:** If triggered by schedule, a video URL is grabbed from a Google Sheet ("Grab Video"), otherwise use `Video Category` node. The video is then downloaded ("Download Video").
3.  **Audio Generation:** The workflow retrieves transcript from Deepseek API ("Get Transcript By Deepseek"), then fetches the audio from ElevenLabs ("Fetch Elevenlabs").
4.  **Audio Processing:** Workflow waits for sometime before saving audio to Google Cloud Storage ("Save Audio").
5.  **Image Generation:** The transcription is used to generate image prompts.
    *   The transcription is split into individual text items ("Create a list of Image Text" and "Split Out").
    *   Each text item is converted into a prompt for image generation ("Convert to Flux Prompt").
    *   The image prompt is split into single prompts ("Split Out - Image prompts").
    *   The prompts will be converted to base64 ("Get image Base 64").
    *   The base64 will be converted to file ("Convert to File").
    *   Wait for sometime ("Wait1")
    *   Then saved to Google Cloud Storage ("Save images to GC")
    *   Then creates a limited number of images ("Limit")
    *   Create a URL link for each Image ("Image Link").
6.  **Video Creation:** The generated images and audio are combined to create a video ("Create Video").
7.  **Metadata Generation:**
    *   Generates a video title ("Get Title By Deepseek") and caption ("Get Caption By Deepseek") using the Deepseek API.
8.  **Video Upload:** The video is uploaded to YouTube ("YouTube").
9.  **Sheet Update:** The workflow will update sheet with video ID ("Update Sheet")
10. **Final Sheet Update:** The generated title and transcript are saved to a Google Sheet ("Google Sheets").

## Services:

-   **Google Sheets:** Used for retrieving video URLs and storing final video information.
-   **ElevenLabs:** Used for generating audio from text.
-   **Google Cloud Storage:** Used for storing audio and images.
-   **YouTube:** Used for uploading the final video.
-   **Deepseek API:** Used for generating video titles, captions, and transcriptions.
-   **Flux API:** Used for generating Image Prompts

## Hashtags:

#n8n #automation #youtube #contentcreation #animalvideos
