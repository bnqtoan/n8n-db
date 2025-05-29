# Image AI Workflow

## Use cases:
- **Dynamic Image Generation for Marketing:** Generate unique product visuals on demand for marketing campaigns. For example, automatically create images of a product in various settings based on different prompts.
- **AI-Assisted Design Editing:** Allow designers to quickly iterate on illustrations and creative assets by using prompts to guide AI-powered edits, reducing the need for manual Photoshop work.
- **Automated Content Creation:** Automatically create blog post or social media thumbnails by generating images based on the content of the post, ensuring visually engaging and relevant content.

## How it works:
1.  The workflow starts with a **Manual Trigger**, allowing you to initiate the image generation and editing process manually.
2.  The **Create image call** node sends a POST request to the OpenAI `/v1/images/generations` endpoint. It uses the `gpt-image-1` model to generate an image based on the provided prompt (e.g., "A cute red panda like dark super hero"). The image is returned in base64-encoded JSON format (`b64_json`).
3.  The **Convert json binary to File** node converts the base64-encoded image data (`data[0].b64_json`) into a binary PNG file. This binary image is required for the subsequent image editing step.
4.  The **Edit Image (OpenAI)** node sends a POST request to the OpenAI `/v1/images/edits` endpoint. It takes the binary image from the previous step and applies edits based on a new prompt (e.g., "add a mask with horns"). The edited image is also returned in base64-encoded JSON format.
5.  The **Convert json binary to File final** node converts the base64-encoded edited image data (`data[0].b64_json`) into a final binary PNG file, which can be downloaded or previewed.

## Services:
-   OpenAI API (`/v1/images/generations`, `/v1/images/edits`)

## Hashtags:
#n8n #OpenAI #imagegeneration #imageediting #AIworkflow
