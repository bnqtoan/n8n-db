# Simple OpenAI Image Generator

## Use cases:

*   **Content Creation:** Generate unique images for blog posts, social media, or marketing materials based on text prompts.
*   **Prototyping:** Quickly visualize concepts or ideas by creating images from descriptive prompts before investing in detailed design work.
*   **Educational Tool:** Allow students or users to explore creative image generation based on textual descriptions for artistic or learning purposes.

## How it works:

The workflow starts with a Form Trigger node, which presents a form to the user requesting an image prompt and the desired image size (1024x1024, 1024x1536, or 1536x1024). The OpenAI Image Generation node then takes the provided prompt and size and sends a request to the OpenAI API (using the GPT-Image-1 model) to generate an image. The API returns the image data in base64 format.  The Convert to File node converts the base64 data into a binary file. Finally, the Return to form node sends the generated image back to the user who submitted the form, allowing them to download the image.

## Services:

*   OpenAI API (for image generation)

## Hashtags:

#n8n #OpenAI #ImageGeneration #Automation #Workflow
