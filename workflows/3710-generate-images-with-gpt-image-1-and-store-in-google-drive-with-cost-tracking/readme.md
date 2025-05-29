# template-demo-chatgpt-image-1-with-drive-and-sheet copy

## Use Cases

- **Automated Image Generation and Storage:** Automatically generate images based on chat prompts and save them to Google Drive, with links to the images and thumbnails stored in a Google Sheet. This is useful for content creators or marketers looking to quickly generate and organize visual content.
- **Prompt and Cost Tracking:** Track the prompts used for image generation, along with the estimated cost (based on token usage) in a Google Sheet. This helps monitor spending and optimize prompts for cost-effectiveness.
- **AI-Powered Visual Content Management:** Create a system where users can simply input a text prompt via chat, and the workflow automatically generates an image, saves it to a designated cloud storage folder, and records the details in a spreadsheet for easy access and management.

## How it Works

1.  **Chat Input:** The workflow starts when a chat message is received via the "When chat message received" trigger. The message content is considered as prompt.
2.  **Image Generation Request:** The chat message (prompt) is passed to the "HTTP Request" node, which sends a POST request to the OpenAI API (`/v1/images/generations`) to generate an image based on the prompt. Parameters like model, output format, quality, size, and number of images are configured here.
3.  **Image Array Splitting:** The "Split Out" node splits the image array data into individual items for processing.
4.  **Loop for processing:** The workflow uses a "Loop Over Items" node to handle the array of images.
5.  **File Naming:** The "Edit Fields-file_name" sets the filename for each image based on the current timestamp.
6.  **Convert to Binary:** The "Convert to File" node converts the base64 encoded image data ("b64_json") into a binary file.
7.  **Google Drive Upload:** The "Google Drive" node uploads the binary image file to a specified folder in Google Drive, naming the file according to timestamp.
8.  **Metadata Handling:**  The "Edit Fields1" node extract properties from Google drive upload like id, webViewLink, thumbnailLink, and file_name.
9.  **Google Sheets Update (Image Details):** The "Google Sheets" node appends a new row to a Google Sheet, containing the prompt, a link to the generated image in Google Drive, and a thumbnail link.
10. **Token and Cost Tracking** The "Aggregate" and "Google Sheet1" Nodes track the propmt, token usage and estimated price for each image generated.

## Services

-   OpenAI API: Used for generating images based on text prompts.
-   Google Drive: Used for storing the generated image files.
-   Google Sheets: Used for storing image links, thumbnails, and tracking cost.

## Hashtags

#n8n #automation #imagegeneration #openai #googledrive #googlesheets
