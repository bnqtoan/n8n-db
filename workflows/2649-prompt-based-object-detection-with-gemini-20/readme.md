# Gemini 2.0 Object Detection with Bounding Boxes

## Use cases:

- **Automated Image Analysis:** Automatically identify and locate specific objects (e.g., products, defects) within images for quality control, inventory management, or e-commerce applications.
- **Contextual Image Search:** Enhance image search capabilities by allowing users to search for objects based on context or description.
- **Security and Surveillance:** Detect and highlight specific items or people in surveillance footage for security monitoring.

## How it works:

1.  **Download Test Image:** The workflow starts by downloading an image from a specified URL using the HTTP Request node.
2.  **Get Image Info:** The "Edit Image" node gets the image's width and height, which is crucial for scaling the bounding box coordinates later.
3.  **Gemini 2.0 Object Detection:** The image is sent to the Gemini 2.0 API along with a prompt (e.g., "I want to see all bounding boxes of rabbits in this image.").  The API processes the image and returns bounding box coordinates for the identified objects.
4.  **Get Variables:** Gets the coordinates from the API along with image width and height.
5.  **Scale Normalised Coords:** A Code node rescales the coordinates received from Gemini 2.0 to fit the original image dimensions. Gemini returns coordinates normalized to a 0-1000 scale, so this step converts them to pixel values.
6.  **Draw Bounding Boxes:** The "Edit Image" node uses the rescaled coordinates to draw bounding boxes around the detected objects on the original image.

## Services:

-   Google Gemini API
-   HTTP Request

## Hashtags:

#n8n #automation #imageprocessing #objectdetection #geminiAPI
