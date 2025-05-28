# WordPress Article Summarizer and Audio Generator

## Use cases:

-   **Accessibility:** Automatically convert blog posts into audio for users who prefer listening to reading, improving content accessibility.
-   **Content Repurposing:** Generate summaries of articles and create audio versions to share on social media, podcasts, or other platforms, expanding content reach.
-   **Educational Purposes:** Create audio summaries of articles for students or researchers who need a quick overview of the content.

## How it works:

1.  **Trigger:** The workflow starts when you manually click 'Test workflow'.
2.  **Settings**: Set the site URL for the wordpress API to be used later on
3.  **Retrieve WordPress Article:** Fetches a specific article from a WordPress site using its post ID.
4.  **Generate Summary or Transcription:** Utilizes a language model (Langchain) to summarize or transcribe the article's content, based on the prompt provided. Alternatively uses Open AI Chat Model to summarize
5.  **Generate Speech:** Converts the summarized text into speech using the Eleven Labs API. It sends a POST request to Eleven Labs with the text and voice settings.
6.  **Upload MP3:** Uploads the generated MP3 audio file to the WordPress media library, using the WordPress API. The filename is based on the article's slug.
7.  **Update WordPress Post:** Updates the original WordPress post by adding an audio player embed code to the content, linking to the uploaded MP3 file.

## Services:

-   WordPress: Used for retrieving and updating articles, and managing media files.
-   Eleven Labs API: Used for generating text-to-speech audio from the article summary.
-   LangChain: Used for summarization/transcription (optional, can be bypassed)
-   OpenAI: Used for summarization/transcription (optional, can be used instead of LangChain)

## Hashtags:

#n8n #automation #wordpress #elevenlabs #contentcreation
