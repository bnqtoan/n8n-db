# Flux Dev Image Generation Fal.ai

## Use cases:

- **Automated Image Generation for Social Media:**  Automatically generate images for social media posts based on a set of predefined prompts and parameters, ensuring a consistent brand aesthetic.
- **Programmatic Creation of Visual Assets for Marketing:** Generate different variations of images for A/B testing in marketing campaigns, allowing for data-driven decisions on visual content.
- **Rapid Prototyping of Visual Concepts:** Quickly create and iterate on visual concepts for design projects or product development, saving time and resources in the initial stages.

## How it works:

This workflow automates the process of generating images using the Fal.ai Flux API and storing them in Google Drive.

1. **Trigger:** The workflow starts when manually triggered via "When clicking ‘Test workflow’" node.
2. **Set Parameters:** The "Edit Fields" node defines parameters like the image prompt, width, height, number of steps, and guidance scale for the image generation. Default values are set for testing, but these can be modified.
3. **Fal.ai Flux Request:** The "Fal Flux" node sends a POST request to the Fal.ai Flux API with the specified parameters to initiate image generation.  It requires an API key set in a generic credential type with the header `Authorization`.
4. **Wait for Processing:** The "Wait 3 Sec" node pauses the workflow for 3 seconds to allow the image generation process to start.
5. **Check Status:** The "Check Status" node queries the Fal.ai Flux API for the status of the image generation request.
6. **Completion Check:** The "Completed?" node checks if the status is "COMPLETED". If so, it proceeds to download the image; otherwise, it loops back to the "Wait 3 Sec" node to check the status again.
7. **Get Image Result URL:** The "Get Image Result URL" node retrieves the URL of the generated image from the Fal.ai Flux API response.
8. **Download Image:** The "Download Image" node downloads the image from the URL obtained in the previous step.
9. **Save to Google Drive:** The "Google Drive" node uploads the downloaded image to a specified folder ("Flux Image") in Google Drive.  This requires valid Google Drive credentials.

## Services:

- **Fal.ai Flux API:**  Used for generating images based on prompts and parameters.
- **Google Drive:** Used for storing the generated images.

## Hashtags:

#n8n #automation #imagegeneration #falai #googledrive
