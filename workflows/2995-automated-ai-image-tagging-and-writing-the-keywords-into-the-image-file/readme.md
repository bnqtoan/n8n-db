# Automated Image Metadata Tagging

## Use cases:

- **Automatic Tagging for Stock Photos:** Automatically analyze and tag images uploaded to a stock photo library, making them easily searchable for potential buyers.
- **Content Management for Social Media:** Automatically categorize and tag images uploaded to social media accounts for better organization and discoverability.
- **Archiving and Organization:** Tag images uploaded to personal Google Drive folders, making it easier to search for specific images based on their content.

## How it works:

1.  **Google Drive Trigger:** The workflow starts when a new file is added to a specific Google Drive folder.
2.  **Download Image File:** The newly added image file is downloaded from Google Drive.
3.  **Analyze Image Content:** The image is sent to OpenAI's API to analyze its content and generate a comma-separated list of descriptive keywords.
4.  **Extract from File:** Extracts binary data from the image to be used later.
5.  **Merge Metadata and Base64 Code:** Combines the extracted base64 code from the original file and the content analysis from OpenAI.
6.  **Write Metadata to Base64 Code:** A code node crafts XMP metadata containing the generated keywords and injects it into the image file's base64 data.
7.  **Convert to File:** Converts the modified Base64 data back into a binary file.
8.  **Update Image File:** The original image file in Google Drive is updated with the new metadata and updated file.

## Services:

*   Google Drive
*   OpenAI API

## Hashtags:

#n8n #automation #imageprocessing #metadata #googledrive
