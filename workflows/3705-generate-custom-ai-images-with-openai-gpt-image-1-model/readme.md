# New OpenAI Image Generation

## Use cases:

- **Automated Content Creation:** Generate unique images for blog posts, social media campaigns, or marketing materials based on text prompts.
- **E-commerce Product Visualization:** Automatically create product images from text descriptions, allowing for rapid prototyping and testing of different designs.
- **Art and Design Exploration:** Explore artistic ideas and generate visual representations of abstract concepts through AI-powered image generation.

## How it works:

This workflow automates image generation using the OpenAI API. Here's a breakdown:

1.  **Manual Trigger:** The workflow starts when you manually trigger it by clicking 'Test workflow'.
2.  **Set Variables:** Sets several variables. Those variables set the image prompt ("a 4-frame cartoon strip telling a joke about AI"), the number of images to generate (2), the desired image quality ("high"), the image size ("1024x1024"), and the OpenAI image model to use ("gpt-image-1").
3.  **OpenAI - Generate Image:** Sends a request to the OpenAI API to generate images based on the defined prompt and parameters. It uses the "OpenAi account" credential for authentication.
4.  **Separate Image Outputs:** Splits the response from the OpenAI API, which contains data for multiple images, into individual items for further processing.
5.  **Convert to File:** Converts the base64 encoded image data received from OpenAI into a binary file format. The `b64_json` property, which is assumed to hold the base64 data, is used as the source.

## Services:

-   OpenAI API: Used for generating images based on text prompts.

## Hashtags:

#n8n #OpenAI #ImageGeneration #Automation #AI
