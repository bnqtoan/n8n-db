# [PRODUCT] IversusAI_YT_Summary_Automation_v4

## Use cases:

- **Automatic Note-Taking for YouTube Content:** Converts YouTube videos into structured notes in Markdown format, ideal for students, researchers, or anyone who wants to efficiently capture and review video content.
- **Content Repurposing:** Extracts key information and summaries from YouTube videos, which can then be used to create blog posts, social media updates, or other forms of content.
- **Personal Knowledge Management:** Helps build a personal knowledge base by automatically saving summaries and links to YouTube videos in a structured manner within a Dropbox folder, making it easy to find and revisit information later.

## How it works:

This workflow automates the process of summarizing YouTube videos and saving them as Markdown notes in Dropbox.

1.  **Trigger:** The workflow is initiated by a "Run Workflow on Schedule" node, which runs at a defined interval.
2.  **Get Playlist Videos:** Fetches a list of videos from a specified YouTube playlist using the "Get Playlist Videos" node.
3.  **Get Video Details:** For each video, the workflow retrieves detailed information like title, channel name, likes, duration, and subtitle availability using the "Get Video Details" node via RapidAPI.
4.  **Get Video Transcript:**  Downloads the video's transcript (VTT format) using the subtitle URL obtained in the previous step, also via RapidAPI using the "Get Video Transcript" node.
5.  **Clean Transcript:** Cleans and formats the raw transcript using a JavaScript code node ("Clean Transcript"), removing timestamps, tags, consolidating lines, and cleaning vowel.
6.  **Summarize Video:** Uses an OpenAI (GPT-4o) node ("Summarize Video") to create a structured summary of the video content, using the cleaned transcript, video title, and channel information as context.
7.  **Combine Content:** Combines the AI-generated summary with video metadata (title, channel, link, likes, duration) into a single block of Markdown text using "Combine Content" node.
8.  **Create Frontmatter:** Generates a YAML frontmatter section for the note, including tags and aliases, using OpenAI (GPT-4o) with the "Create Frontmatter" node.
9.  **Create Links:** Creates Obsidian-style internal links based on video title and content using OpenAI (GPT-4o Mini) with the "Create Links" node.
10. **Assemble Note:** Assembles the final Markdown note by combining the frontmatter, video metadata, summary, and internal links using "Assemble Note" node.
11. **Create File:** Converts the assembled Markdown text into a binary file using the "Create File" node.
12. **Save Note to Dropbox:** Saves the Markdown file to a specified Dropbox folder using the "Save Note to Dropbox" node.
13. **Remove from Source Playlist:** Removes the processed video from the original YouTube playlist using the "Remove from Source Playlist" node.

## Services:

-   **YouTube:** Used to retrieve playlist videos and to remove videos from the playlist.
-   **RapidAPI:** Used to fetch video details and transcripts.
-   **OpenAI (GPT-4o):** Used to summarize video content, generate frontmatter, and create internal links.
-   **Dropbox:** Used to store the generated Markdown notes.

## Hashtags:

#n8n #automation #youtube #noteTaking #productivity
