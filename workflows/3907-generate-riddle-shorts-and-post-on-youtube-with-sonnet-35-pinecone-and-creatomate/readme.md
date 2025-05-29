# Quizzes Shorts Generator copy

## Use Cases:

- **Automated YouTube Shorts Creation:** Automatically generates and uploads YouTube Shorts based on quizzes or riddles, saving time and effort for content creators.
- **Content Repurposing:** Transforms existing quiz content into engaging video formats for wider audience reach.
- **Scheduled Content Release:** Schedules the generation and upload of new quizzes or riddles Shorts at regular intervals, ensuring a consistent stream of content.

## How it works:

This workflow automates the creation and uploading of quiz-based YouTube Shorts. Here's a breakdown:

1.  **Schedule Trigger:** The workflow starts on a defined schedule.
2.  **Riddle generation AI Agent:** Uses a AI Agent node to generate riddles or quiz questions. It uses the Vector Store to Find Previous Riddles node to avoid creating duplicate riddles.
3.  **Fetch Audio From Sheet (Ensuring Rotation):** Retrieves an audio track from a Google Sheet. The workflow is designed to rotate through the available audio tracks to prevent repetition.
4.  **Convert Riddles JSON to 1 Text item for Vector Insertion:** Converts the riddle generated in the previous step to plain text for insertion to the Vector Store.
5.  **Insert Riddles to Vector Store:** Inserts the riddle data into Pinecone, to avoid creating duplicate riddles in the future.
6.  **Fetch Current Shorts Title (Numbered):** Fetches the current highest shorts title number from Google Sheets.
7.  **Calculate Next Shorts Title Number (To update at the end):** Calculates the next shorts title number to be used.
8.  **Merge:** Merges the audio track and the short title number data.
9.  **Render Youtube Short:** Sends a request to render a YouTube Short using an external service.
10. **Wait:** Pauses the workflow execution briefly (likely to allow the rendering process to complete).
11. **Youtube Upload HTTP request Setup:** Prepares the HTTP request for uploading the rendered short to YouTube.
12. **Get Binary for Rendered Short:** Retrieves the rendered short as a binary file using an HTTP request.
13. **Upload Binary to Youtube HTTP:** Uploads the binary data of the short to YouTube via an HTTP request.
14. **Send Notification with YouTube link:** Sends a notification (likely via Gmail) containing the link to the newly uploaded YouTube Short.
15. **Update Audio Used Status:** Updates the Google Sheet to mark the used audio track as "used".
16. **Update Next Shorts title:** Updates the next short title number in Google Sheets.
17. **Check if all audio tracks have been used:** Check if all audio tracks have been used. If so it resets them.
18. **If:** Checks if all the audio tracks have been exhausted.
19. **get all track rows:** Retrieves all the track rows from Google Sheets.
20. **update all track rows back to unused:** Updates all track rows to mark them as unused, resetting the cycle.

## Services:

-   Google Sheets
-   Anthropic
-   OpenAI
-   Pinecone
-   YouTube
-   Gmail

## Hashtags:

#n8n #youtube #automation #contentcreation #shorts
