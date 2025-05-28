# FLUX-fill standalone

## Use cases:

- **Image Editing and Enhancement:** Allows users to modify images using prompts and masks, enhancing or altering specific regions within the image.
- **AI-Powered Content Creation:** Can be used to generate new image variations based on textual descriptions, suitable for content creators needing diverse visual assets.
- **Product Mockups:** Enables the creation of realistic product mockups by modifying existing images, useful for e-commerce and marketing.

## How it works:

1.  **Webhook Trigger:** The workflow starts with a Webhook node (`Webhook`) that listens for POST requests at the `/flux-fill` endpoint. This could be triggered from a website or application. The webhook also outputs a static list of images.
2.  **Prepare data for Editor** The `Merge` node merges the output of the `Webhook` and `Mockups` node into a single stream of data.
3.  **HTML Editor Page:** The `HTML` node (`Editor page`) creates an HTML page containing a Konva.js-based image editor. This editor allows users to select an image, draw a mask, and enter a prompt. The editor is configured with a default set of images and the webhook URL.
4.  **Respond to editor with HTML:** The `Respond to Webhook` node sends the built HTML page with javascript code to the user so they can start editing.
5.  **Image Processing with FLUX-Fill:** A click on the button in the HTML page, sends the image, mask, prompt, and other parameters to the `FLUX Fill` node, which calls the `https://api.bfl.ml/v1/flux-pro-1.0-fill` API using an HTTP Request node.  This node takes the image, mask, prompt, and settings from the webhook request and sends them to the FLUX API for processing.
6.  **Check FLUX status:** The workflow then waits for 3 seconds (`Wait 3 sec`) before checking the status of the FLUX Fill job using another HTTP Request node (`Check FLUX status`) that queries the `https://api.bfl.ml/v1/get_result` API.
7.  **Conditional Check:** An `If` node (`Is Ready?`) checks the status returned by the API. If the status is "Ready", the workflow proceeds; otherwise, it loops back to the `Wait 3 sec` node to check the status again.
8.  **Retrieve and Display Edited Image:** Once the FLUX Fill job is complete, the `Get Fill Image` node retrieves the generated image from the URL provided in the API response. Finally, the `Show the image to user` node sends the generated image back to the user through the `Respond to Webhook` node, setting the correct `Content-Type` header.

## Services:

-   **FLUX API (api.bfl.ml):**  An external API for image in-painting based on prompts and masks.
-   **Digital Ocean Spaces:** Storage for images

## Hashtags:

#n8n #automation #imageprocessing #AI #workflow
