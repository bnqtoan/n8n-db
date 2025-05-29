# Youtube Video Transcript Extraction

## Use cases:

- **Content Repurposing:** Automatically extract transcripts from YouTube videos to create blog posts, social media updates, or summaries, saving time and effort on manual transcription.
- **Educational Material Generation:** Educators can quickly obtain transcripts of educational videos to create study guides, lecture notes, or accessible learning resources for students.
- **Accessibility Improvement:** Generate text transcripts of videos to improve accessibility for viewers who are deaf or hard of hearing, ensuring content is inclusive and compliant with accessibility standards.

## How it works:

1.  **YoutubeVideoURL (Form Trigger):** This node presents a form to the user, requiring them to input the YouTube video URL.
2.  **extractTranscript (HTTP Request):** Takes the provided YouTube video URL and sends a request to the YouTube Transcript API (using RapidAPI). It extracts the transcript data (if available) from the video.
    *   The node configures the API endpoint, including necessary headers and query parameters (video ID).
    *   It uses the user-provided video URL as the main parameter for the transcript extraction.
3.  **processTranscript (Function):** Processes the raw transcript data received from the API.
    *   It handles different API response formats, extracting the actual transcript text.
    *   It cleans the transcript by removing extra spaces and normalizing punctuation for better readability.
4.  **cleanedTranscript (Set):** Takes the cleaned transcript from the previous node and assigns it to a variable called "transcript". This makes the cleaned transcript available for further use in the workflow.

## Services:

-   **YouTube Transcript API (via RapidAPI):**  This API provides access to the transcript data of YouTube videos.

## Hashtags:

#n8n #automation #youtube #transcript #contentcreation
