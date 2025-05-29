# AutoQoutesV2_template

## Use cases:
- Automatically create quote videos for social media platforms like YouTube, enhancing content strategy and engagement.
- Generate visually appealing and thematically relevant videos based on quotes stored in a Google Sheet, saving time and effort.
- Automate content creation for motivational or inspirational channels, ensuring a consistent flow of engaging content.

## How it works:
1. **Trigger**: The workflow is initiated manually using the "When clicking ‘Test workflow’" node.
2. **Get Quote**: It retrieves quote data (quote text, author, and background prompts) from a specified Google Sheet using the "Get data from Google Sheet" node, filtering based on the 'Video Status' column.
3. **Generate Image Background**: An image is created via the PiAPI (Qubico/flux1-dev) based on prompts from Google Sheets (txt2img) using "Generate Image" and waits 2 minutes ("Wait image 2 min")
4. **Get Image**: After waiting, retrieves the generated image using "Get image", then updates the Google Sheet with the image URL ("Update image background URL").
5. **Create Video Background**: A cinematic vertical video is generated using PiAPI Kling based on the generated image and prompts from the Google Sheet ("Image-to-Video") and waits 5 minutes ("Wait video 5 min").
6. **Get Video**: Retrieves the generated video from PiAPI Kling using "Get Video", saves it locally ("Save Video Background Locally1") and updates the Google Sheet with the video URL ("Update video background URL").
7. **Get Binary Video Background**: Downloads the video file from the URL provided by the PiAPI.
8. **Create Sound Background**: An ambient sound is generated using ElevenLabs based on the scene prompt ("Generate Audio").
9. **Upload Sound to Google Drive**: Uploads the generated audio file to a specified Google Drive folder ("Upload Sound to Google Drive")
10. **Update Sound Background URL**: Stores the URL of the uploaded audio in the Google Sheets document.
11. **Prepare Overlay Text (Quote & Author)**: The quote text and author are formatted for overlay on the video using a JavaScript code node ("Prepare Overlay Text (Quote & Author)1"). The code prepares FFmpeg drawtext commands to display the quote and author nicely on the video.
12. **Generate Final Video Clip**: FFmpeg is used to merge the video, sound, and quote text into a final video clip ("Generate Final Video Clip1").
13. **Video Upload & Post-Processing**:
    - "Initiate YouTube Resumable Upload": Starts the YouTube upload process, getting an upload URL.
    - "Read output file": Reads the locally saved video.
    - "Upload Video to YouTube": Uploads the final video to YouTube.
    - "Update Quote Upload Status": Updates the Google Sheet with the YouTube video link.

## Services:
- Google Sheets: Used for storing and updating quote data, image URLs, video URLs, and upload status.
- PiAPI: Utilized for image and video generation from prompts.
- ElevenLabs: Used for generating background music.
- Google Drive: Used for storing the music.
- YouTube API: Used for uploading the final video to YouTube.
- FFmpeg: Used to merge the video, sound and quote text into a final video clip

## Hashtags:
#n8n #automation #contentcreation #youtube #quotes
