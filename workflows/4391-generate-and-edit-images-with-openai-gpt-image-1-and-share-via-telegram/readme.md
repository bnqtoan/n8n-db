# GPT Image Generation and Editing Workflow

## Use cases:

- **Content Creation:** Generate unique images from text prompts for social media, blog posts, or marketing materials.
- **Image Enhancement:** Edit and refine existing images based on text prompts, such as changing the style, adding objects, or altering the background.
- **Automated Image Generation for E-commerce:** Automatically create product images with specific backgrounds or styles based on product descriptions.

## How it works:

1.  **Form Submission:** The workflow starts with a form submission that captures a text prompt, desired image quality (low, medium, high), and optionally an input image file or URL.
2.  **Switch Mode:** Depending on the form data, the switch node determines whether to use an existing image to image generation, generate an image from a URL or only to generate an image from promt.
3.  **Image Generation/Editing:**
    *   If no image url and no image file the OpenAI Image Generation node creates a new image based on the provided text prompt using the `gpt-image-1` model.
    *   If there is an input image, the workflow uploads to openAI and generates an image from it.
    *   If there is an image url, the workflow get the image from it and uploads to openAI for image to image generation.
4.  **Convert to File:** The base64 encoded image data from OpenAI is converted to a PNG file.
5.  **Upload to Google Drive OR to imgbb:** The converted image is uploaded to either Google Drive or imgbb.
6.  **Set up API KEY:** To use imgbb the API KEY is set.
7.  **Set Access Permissions**: If uploading to google drive, set access permission to anyone.
8.  **Create File Link:** Creates a shareable link to the uploaded image. The `webContentLink` and `webViewLink` are extracted.
9.  **Send to Telegram:** Finally, the generated image and its link are sent to a specified Telegram chat. The message includes the original text prompt and chosen quality.

## Services:

-   **OpenAI API:** Used for image generation and editing.
-   **Google Drive API:** Used for uploading and sharing the generated image.
-   **imgbb API:** Used for uploading the generated image.
-   **Telegram API:** Used to send the image and its link to a Telegram chat.

## Hashtags:

#n8n #automation #openai #imagegeneration #imagediting #googleDrive #telegram
