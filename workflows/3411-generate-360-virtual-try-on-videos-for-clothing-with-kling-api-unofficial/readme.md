# Generate 360° Virtual Try-on Videos for Clothing with Kling API

## Use cases:

- **E-commerce Product Showcasing:** Automatically generate virtual try-on videos for clothing items listed on an e-commerce platform, allowing customers to visualize how the clothes would look on a model from all angles.
- **Fashion Brand Marketing:** Create engaging marketing content by showcasing new clothing lines through dynamic 360° videos, enhancing customer interest and driving sales.
- **Content Creator Engagement:** Enable fashion and lifestyle influencers to easily create try-on videos for their audience, boosting engagement and providing a more immersive viewing experience.

## How it works:

1.  **Trigger:** The workflow is manually triggered by clicking ‘Test workflow’ in n8n.
2.  **Set Preset Parameters:** Sets predefined parameters such as the API key, model input URL, clothing input URLs (dress, upper, and lower options), and a video generation prompt.
3.  **Kling Virtual Try-On Task:** Sends a request to the Kling API to generate a virtual try-on image using the provided model and clothing inputs.
4.  **Wait for Image Generation:** Pauses the workflow until the virtual try-on image generation is completed.
5.  **Get Kling Virtual Try-On Task:** Retrieves the status of the virtual try-on task from the API to verify if it's completed or failed.
6.  **Check Data Status:** Evaluates the status of the virtual try-on image generation task.
7.  **Switch:** Navigates the flow based on the status of virtual try-on generation task.
8.  **Generate kling video:** Sends a request to the Kling API to generate a video using the generated try-on image and a predefined prompt (e.g., "Walk on the catwalk, turn around, and finally stand still and pose").
9.  **Wait for Video Generation:** Pauses the workflow until the video generation is completed.
10. **Get Kling Video Task:** Retrieves the status of the video generation task from the API to verify if it's completed or failed.
11. **Get Video Data Status:** Evaluates the status of the video generation task.
12. **Check Video Data Status:** Evaluates the status of the video, and then retrieves the output url.
13. **Get Final Video URL:** Extracts the generated video URL from the API response.

## Services:

*   **PiAPI (Kling Model):** AI-powered platform for virtual try-on and video generation.

## Hashtags:

#n8n #automation #virtualtryon #AI #fashion
