# Google Drive PDF Translator with DeepL

## Use cases:

- **Automatic Translation of Documents:** Automatically translate PDF documents stored in a specific Google Drive folder into a target language for broader accessibility.
- **Content Localization:** Localize content by automatically creating translated versions of documents and storing them back in Google Drive.
- **Multilingual Archiving:** Archive documents in multiple languages for compliance or internal documentation purposes.

## How it works:

1.  **Trigger:** The workflow is manually triggered.
2.  **Configuration:** The workflow takes `folder_url`, `target_lang`, and `source_lang` (optional) from the `⚙️ config` node.  These parameters define the Google Drive folder to monitor, the target language for translation, and the source language (if known, otherwise DeepL auto-detects it).
3.  **Get Files:** It retrieves a list of files from the specified Google Drive folder using the Google Drive node.
4.  **Filter PDFs:** It filters the list to only include PDF files that do not already have the target language code appended to their name (e.g. avoids re-translating files that already have "--DE" in their filename.)
5.  **Download Files:** The PDF files are downloaded from Google Drive.
6.  **Send Translate Request:** The workflow sends a translation request to the DeepL API, specifying the target language, source language (if provided), and the PDF file content.
7.  **Check Translation Status:** It periodically checks the translation status using the DeepL API.
8.  **Wait a bit:** The workflow waits for 5 seconds before checking the translation status to avoid overwhelming the DeepL API with requests.
9.  **file translated?:**  Evaluates the "status" returned from the DeepL API. If the status is "done", it means the translated file is ready to be downloaded.  If not, it loops back to "Wait a bit" and "Check translation status" until the translation is complete.
10. **Wait between documents:** Pauses for 2 seconds to respect API rate limits.
11. **Get Translated Document:** Once the translation is complete, the translated document is retrieved from the DeepL API.
12. **Upload to Google Drive:** The translated PDF is uploaded back to the original Google Drive folder, with the target language code appended to the original filename.

## Services:

-   Google Drive
-   DeepL API

## Hashtags:

#n8n #googleDrive #deepl #translation #automation
