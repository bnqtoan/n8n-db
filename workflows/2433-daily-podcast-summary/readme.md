# Daily Podcast Summary

## Use cases:

- **Daily Briefing:** Get a summarized email of top podcasts in a specific genre to stay updated on the latest trends and discussions without listening to full episodes.
- **Content Curation:** Quickly identify relevant podcast episodes for research, articles, or social media sharing by reviewing their summaries.
- **Personalized Learning:** Filter podcasts by genre and receive summaries to learn about specific topics efficiently.

## How it works:

1.  **Schedule Trigger:** The workflow starts at a scheduled time (e.g., 8 AM) using the "Schedule" node.
2.  **Set Genre:** The "Genre" node sets the podcast genre to be analyzed (e.g., Technology).
3.  **Taddy API Request:** The "TaddyTopDaily" node queries the Taddy API to get a list of top podcast episodes in the specified genre from Apple charts. It requires an API key and user ID which you can get at https://taddy.org/signup/developers.
4.  **Split Out Episodes:** The "Split Out" node separates the list of podcast episodes into individual items for processing.
5.  **Download Podcast:** The "Download Podcast" node downloads the audio file of each podcast episode from the URL provided by the Taddy API.
6.  **Request Audio Crop:** The "Request Audio Crop" node sends a request to the Aspose audio cutter API to crop the downloaded audio file to a specified time frame (8:00 - 24:00).
7.  **Get Download Link:** The "Get Download Link" node retrieves the download link for the cropped audio file from the Aspose API.
8.  **If Downloads Ready:** The "If Downloads Ready" node checks if the download is ready, or waits using the "Wait" node.
9.  **Download Cut MP3:** The "Download Cut MP3" node downloads the cropped MP3 audio file.
10. **Whisper Transcription:** The "Whisper Transcribe Audio" node uses the OpenAI Whisper API to transcribe the audio into text. It requires an OpenAi account and API key.
11. **Summarize Podcast:** The "Summarize Podcast" node uses the OpenAI API (gpt-4o-mini) to summarize the transcribed text.
12. **Final Data:** The "Final Data" node prepares the data by storing the podcast name, episode name, audio URL, and the generated summary.
13. **Merge Results:** The "Merge Results" node aggregates the data from all the processed podcast episodes.
14. **HTML Formatting:** The "HTML" node converts the processed data into an HTML table, formatting the podcast information and summaries for easy readability.
15. **Gmail:** The "Gmail" node sends an email containing the formatted HTML table.

## Services:

-   Taddy API ([https://api.taddy.org/](https://api.taddy.org/))
-   OpenAI Whisper API ([https://api.openai.com/v1/audio/transcriptions](https://api.openai.com/v1/audio/transcriptions))
-   OpenAI API
-   Aspose Audio Cutter API ([https://api.products.aspose.app/audio/cutter/api/cutter](https://api.products.aspose.app/audio/cutter/api/cutter))
-   Gmail API

## Hashtags:

#n8n #podcast #automation #summarization #openai
