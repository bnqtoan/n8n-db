# Add text to an image downloaded from the internet

## Use cases:

- **Meme Generation:** Automatically create memes by downloading an image and adding custom text overlays.
- **Watermarking:** Add a dynamic watermark to images fetched from a URL for branding or copyright protection.
- **Promotional Content:** Generate promotional images on the fly by fetching a background image and adding a call-to-action text.

## How it works:

1.  The workflow starts with a **Manual Trigger** node, which is activated when you click 'Execute'.
2.  The **HTTP Request** node downloads an image from the specified URL (`https://docs.n8n.io/assets/img/final-workflow.f380b957.png`). The response format is set to "file".
3.  The **Edit Image** node then receives the downloaded image. It adds the text "This is n8n" to the image. The text is positioned at X=300 and Y=500, and the font size is set to 100.

## Services:

-   n8n
-   HTTP Request
-   Image Editor

## Hashtags:

#n8n #imageprocessing #automation #http #editimage
