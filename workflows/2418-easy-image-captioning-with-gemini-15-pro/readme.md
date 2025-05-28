# Image Captioning Agent

## Use cases:

-   **Automated Social Media Posting:** Automatically generate captions for images before posting them on social media platforms, saving time and increasing engagement.
-   **Content Creation for Blogs:** Enhance blog posts with relevant and engaging captions for images, improving the overall quality and appeal of the content.
-   **Watermarking/Copyrighting Images:** Add a generated caption onto images for copyright purposes

## How it works:

1.  **Trigger:** The workflow starts when the "When clicking ‘Test workflow’" node is manually triggered.
2.  **Get Image:** The "Get Image" node fetches an image from a specified URL.
3.  **Get Info** The "Get Info" node retrieves information about the image, such as its size.
4.  **Resize for AI:** The "Resize for AI" node resizes the image to 512x512 pixels, ensuring it meets the requirements of the AI model and enhancing performance.
5.  **Image Captioning Agent:** The "Image Captioning Agent" node utilizes a language model (Google Gemini through the Google Gemini Chat Model node) to generate a caption for the image based on the provided prompt ("Generate a caption for this image.").
    -   It uses a structured output parser to structure the response into a "caption\_title" and "caption\_text" field.
6.  **Merge Image & Caption:** The "Merge Image & Caption" node combines the original image with the generated caption.
7.  **Calculate Positioning:** The "Calculate Positioning" node calculates the optimal position for the caption text on the image, considering factors like font size, line length, and image dimensions.
8.  **Merge Caption & Positions:** The "Merge Caption & Positions" node merges the caption with the calculated position data.
9.  **Apply Caption to Image:** The "Apply Caption to Image" node uses the image editing capabilities of n8n to overlay the generated caption onto the image at the calculated position.

## Services:

-   Pexels (via HTTP Request): Used to fetch a sample image.
-   Google Gemini (via Google Gemini Chat Model node): Used to generate image captions using its multimodal capabilities.

## Hashtags:

#n8n #automation #imageCaptioning #AI #workflow
