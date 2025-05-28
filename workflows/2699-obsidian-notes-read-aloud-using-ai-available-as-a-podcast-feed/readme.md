# Obsidian Notes Read Aloud: Available as a Podcast Feed

## Use cases:

- **Personal Podcast Creation:** Automatically convert your Obsidian notes into a podcast feed for personal consumption, allowing you to listen to your notes on the go.
- **Content Repurposing:** Transform written content from Obsidian into an audio format, expanding the reach of your ideas and insights to a wider audience.
- **Accessibility:** Make your notes more accessible by providing an audio version for individuals who prefer listening to reading.

## How it works:

1.  **Webhook Trigger (Webhook GET Note):** The workflow is triggered when a note or selected text from Obsidian is sent via a webhook using the "Post Webhook Plugin."
2.  **Text-to-Speech Conversion (OpenAI1):** The content of the note is converted into an audio file (MP3) using OpenAI's text-to-speech capabilities.
3.  **Podcast Description Generation (OpenAI):** OpenAI generates a concise description for the podcast episode based on the note's content.
4.  **Audio Upload (Upload Audio to Cloudinary):** The generated audio file is uploaded to Cloudinary for hosting and to obtain duration metadata.
5.  **Data Merging (Merge):** The audio metadata from Cloudinary and the generated description from OpenAI are merged.
6.  **Data Aggregation (Aggregate):** Aggregates data into a single item
7.  **Data Formatting (Rename Fields):** Formats the data, extracting relevant information such as title, link, description, and duration, and renames the fields for the Google Sheets.
8.  **Google Sheets Integration (Append Item to Google Sheet):** The podcast episode data (title, link, description, date, duration) is appended to a Google Sheet.
9. **Google Sheets Integration (Get Items from Google Sheets):** Retrieves all podcast episode data from Google Sheets.
10. **Podcast Metadata (Manually Enter Other Data for Podcast Feed):** Manually set some data about the podcast that will be used when generating the feed like podcast title, description, owner and cover image URL.
11. **RSS Feed Generation (Write RSS Feed):** Generates an RSS feed in XML format using the data from Google Sheets. It combines static podcast metadata with dynamic episode data.
12. **Podcast Feed Delivery (Return Podcast Feed to Webhook):** Respond to the Webhook request with the generated RSS feed as an XML file.

## Services:

-   **Obsidian:** A note-taking and knowledge management app.
-   **OpenAI:** Used for text-to-speech conversion and generating podcast episode descriptions.
-   **Cloudinary:** A cloud-based media management platform for storing and delivering audio files and retrieving metadata.
-   **Google Sheets:** Used for storing podcast episode data.
    
## Hashtags:

#n8n #automation #podcast #obsidian #contentcreation
