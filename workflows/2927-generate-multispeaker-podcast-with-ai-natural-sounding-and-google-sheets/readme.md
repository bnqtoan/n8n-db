# Generate multispeaker podcast with AI natural-sounding and Google Sheets

## Use cases:

- **Automated Podcast Production:** Automatically generate podcast episodes from text content stored in Google Sheets, ideal for content creators looking to streamline their workflow.
- **Text-to-Speech Automation:** Convert written articles or blog posts into audio format for accessibility or wider distribution, leveraging AI-powered natural-sounding voices.
- **Content Repurposing:** Quickly transform existing written content into a podcast format to reach a different audience and enhance content engagement.

## How it works:

1.  **Trigger:** The workflow starts with a manual trigger, "When clicking ‘Test workflow’".
2.  **Fetch Podcast Text:** The "Get Podcast text" node retrieves podcast content from a specified Google Sheet.
3.  **Aggregate rows:** The "Get all rows" node takes the data retrieved from the Google Sheets and aggregates it for future processing.
4.  **Podcast Text Creation:** The "Full Podcast Text" node likely processes the extracted data (retrieved from the Google sheet) and prepares it for audio generation.
5.  **Audio Creation:** The "Create Audio" node sends the text to an external service (likely an AI text-to-speech service) to generate the audio file.
6.  **Wait and Check Status:** The "Wait 60 sec." node pauses the workflow for 60 seconds, presumably to allow the audio generation process to complete. The "Get status" node then checks the status of the audio creation.
7.  **Conditional Branching:** The "Completed?" node checks if the audio generation is complete. If not, it loops back to the "Wait 60 sec." node to check again.
8.  **Get Audio URL:** Once the audio is generated, the "Get Url Audio" retrieves the URL of the generated audio file.
9.  **Download Audio File:** The "Get File Audio" downloads the audio file from the URL.
10. **Upload to Google Drive:** Finally, the "Upload Audio" node uploads the downloaded audio file to a specified Google Drive folder.

## Services:

-   Google Sheets
-   Google Drive
-   AI Text-to-Speech Service (likely via HTTP Request, details depend on the actual configuration of the "Create Audio" node)

## Hashtags:

#n8n #automation #podcast #texttospeech #googlesheets
