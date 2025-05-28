# Generate Image Workflow

## Use cases:

*   **Dynamic Image Generation for Social Media:** Automatically generate images for social media posts with customized text, colors, and fonts based on predefined templates or data inputs.
*   **Personalized Banner Creation:** Create personalized banners for websites or marketing campaigns by dynamically generating images with user-specific information.
*   **API-Based Image Service:** Offer an internal image generation service within a company, allowing different departments to create visuals programmatically.

## How it works:

This workflow generates an image by making a request to a dummy image API.

1.  **Manual Trigger:** The workflow is initiated manually by clicking the "Test workflow" button.
2.  **Set Image Properties:** A "Set" node defines the parameters for the image, including size (600x400), background color (cc22e3), text color (ffffff), text ("Generated!"), font size (100), font family (pacifico), and image type (png).
3.  **Fetch Image from API:** An "HTTP Request" node calls the dummyjson.com image API, passing the properties defined in the previous step as URL parameters. The API generates an image based on these parameters.

## Services:

*   DummyJSON Image API ([https://dummyjson.com/image](https://dummyjson.com/image))

## Hashtags:

#n8n #imagegeneration #automation #API #dynamicimages
