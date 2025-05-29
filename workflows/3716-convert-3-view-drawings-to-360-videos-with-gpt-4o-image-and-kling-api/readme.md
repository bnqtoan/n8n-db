# Three-View Orthographic Projection to Dynamic Video Conversion

## Use cases:

- **Product Visualization:** Automatically create dynamic videos showcasing a product from different perspectives (front and side views) based on a single input image.
- **Character Animation Prototyping:** Generate short animated videos of characters or objects rotating, based on initial images, useful for quick prototyping and visualization.
- **E-commerce Marketing:** Enhance product listings with automatically generated videos that demonstrate the product's features and design from multiple angles.

## How it works:

1.  **Trigger:** The workflow starts when the "Test workflow" button is clicked.
2.  **Set Basic Parameters:** The "Basic Params" node sets initial parameters like the API key and the input image URL.
3.  **Generate Front and Side Views:** The workflow uses two "GPT-4o Generator" nodes, one to generate the front view and another for the side view of the image using the Piapi.ai API.
4.  **Extract Image URLs:** The "Get Image URL of Front/Side Image" nodes extract the generated image URLs from the GPT-4o API responses.
5.  **Verify Image Generation Status:** The "Verify Generation Status" nodes check if the image generation was successful. If either generation fails, the workflow loops back to regenerate the images.
6.  **Generate Kling Video:** The "Generate Kling Video" node uses the Piapi.ai API (Kling model) to create a video based on the generated front and side view images. It applies a smooth anticlockwise rotation to the character.
7.  **Get Kling Video:** The "Get Kling Video" node retrieves the video generation status from the Piapi.ai API by polling the task ID.
8.  **Verify Task Status:** The "Verify Task Status" node checks if the video generation is complete. If not, the workflow waits for a specified time before checking again.
9.  **Get Final Video:** Once the video generation is complete, the "Get Final Video" node extracts the video URL and watermark-free URL from the API response.
10. **Output:** The workflow outputs the final video URLs.

## Services:

-   **Piapi.ai API:** Used for image generation (GPT-4o) and video generation (Kling).

## Hashtags:

#n8n #automation #videoGeneration #imageProcessing #AI
