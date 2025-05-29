# Translate SRT File

## Use Cases:

- **Subtitle Localization:** Automatically translate SRT subtitle files into different languages for video content, making it accessible to a global audience.
- **Content Adaptation:** Adapt video courses, tutorials, or presentations for various regions by translating the subtitles.
- **Accessibility Enhancement:** Quickly provide translated subtitles for viewers who speak different languages, enhancing the accessibility of video content.

## How it works:

1.  **Receive SRT File to Translate:** A webhook receives an SRT file and the target language through a form submission.
2.  **Expose Binary:** Exposes the binary data of the uploaded file.
3.  **Extract text from Binary File:** Extracts the text content from the binary SRT file.
4.  **Split SRT Lines:** Splits the SRT file content into individual subtitle entries (groups of lines).
5.  **Split Out:** Splits the subtitle entries into individual items for processing.
6.  **Prep Parts for Translate:** Extracts and prepares the first part (typically the timecode) and the second part (the subtitle text) of each subtitle entry for translation. The target language is also extracted here.
7.  **Google Translate:** Translates the subtitle text using the Google Translate API to the desired language.
8.  **Clean Translations & Group Titles:** Cleans the translated text, replaces escape characters, and formats each translated subtitle. It splits the translated text into two lines and combines the first part (timecode) with the formatted translation.
9.  **Aggregate:** Combines all the translated subtitle entries into a single item.
10. **Join completed text with double new line:** Combines all the subtitle text into a single string with a double new line (\n\n) separator.
11. **Edit Fields:** Adds the complete translated text and the original file metadata into a single object.
12. **Generate Binary:** Encodes the complete translated text into Base64 format and prepares it to be written to the new file.
13. **Convert to File:** Converts the Base64 encoded data into a binary file.
14. **Respond with file:** Sends the translated SRT file as a response through the webhook.

## Services:

-   Google Translate API

## Hashtags:

#n8n #automation #subtitletranslation #SRT #localization
