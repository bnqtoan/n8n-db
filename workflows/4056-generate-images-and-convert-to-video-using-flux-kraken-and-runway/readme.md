# Generate Image and Convert to Video

## Use cases:

- **Content Creation:** Automatically generate images from text prompts and then convert them into short videos for social media, marketing campaigns, or educational content.
- **Rapid Prototyping:** Quickly visualize ideas by generating images from descriptions and animating them to get a sense of motion and flow.
- **Creative Exploration:** Experiment with different text prompts and styles to generate unique visual content and explore the possibilities of AI-driven art.

## How it works:

This workflow automates the process of generating an image from a text prompt and then converting that image into a video using different AI services. The workflow splits into two main paths, one using official APIs, and another using RapidAPI endpoints.

**Official APIs Path:**

1.  **Manual Trigger:** The workflow is initiated manually.
2.  **generate image (flux):** Sends a text prompt to Blackforest labs Flux API to generate an image.
3.  **Wait:** Pauses the workflow for 15 seconds to allow image processing to complete.
4.  **get\_image\_url:** Retrieves the generated image URL from the Blackforest labs API.
5.  **get\_image:** Downloads the image from the URL.
6.  **upload to kraken:** Uploads the downloaded image to Kraken.io for optimization (likely for URL generation).
7.  **image to video (runway):** Sends the optimized image to RunwayML's image-to-video API to generate a video.
8.  **1 minute2:** Pauses the workflow for 1 minute.
9.  **Download Video:** Downloads the generated video from RunwayML.
10. **1 minute2:** Pauses the workflow for 1 minute, repeating the process of downloading the video.

**Rapid API Path:**

1.  **generate image (flux-rapid-api):** Generates an image from a text prompt using a Flux Rapid API endpoint.
2.  **Get Image3:** Retrieves the generated image from the Rapid API.
3.  **upload to kraken1:** Uploads the image to Kraken.io.
4.  **image to video (runway-rapid-api):** Converts the Kraken.io image to a video using RunwayML's Rapid API endpoint.
5.  **1 minute3:** Pauses the workflow for 1 minute to allow video processing to complete.
6.  **Get Video Generation Status1:** Checks the status of the video generation task at RunwayML.
7.  **Confirm Generation Status:** Based on the generation status ("success" or pending), the workflow either proceeds to the next step or loops back to check the status again after a delay.
8.  **1 minute3:** After Confirm Generation Status failed, pauses the workflow for 1 minute and try to **Get Video Generation Status1** again.

## Services:

-   **Blackforest labs Flux API:** An AI image generation service.
-   **Kraken.io:** An image optimization service.
-   **RunwayML:** An AI video generation service.
-   **RapidAPI:** A marketplace for APIs, used to access Flux and RunwayML.

## Hashtags:

#n8n #automation #imagegeneration #videoediting #AI
