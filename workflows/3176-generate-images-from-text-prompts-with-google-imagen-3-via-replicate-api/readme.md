# Image Prediction Workflow

## Use Cases

*   **Automated Image Generation:** Generate images based on text prompts, useful for creating marketing materials, social media content, or concept art.
*   **Iterative Image Refinement:**  Refine images by checking prediction status and adjusting prompts for better results, ideal for creative professionals.
*   **AI-Powered Art Creation:**  Experiment with different prompts to create unique and personalized artwork using an AI image generation service.

## How it works

This workflow automates the process of creating images from text prompts using an AI image prediction service.

1.  **Trigger:** The workflow starts when the "When clicking ‘Test workflow’" node is manually triggered.
2.  **Set Prompt:** The "Set prompt" node allows you to define the initial text prompt for the image you want to generate.
3.  **Create Prediction:** The "Create prediction" node sends the text prompt to the AI image prediction service.
4.  **Pause:** The "Pause" node introduces a delay, allowing the prediction service time to process the request.
5.  **Set fields for prediction:** The "Set fields for prediction" node prepares the request to check the prediction status.
6.  **Check Prediction Status:** The "Check prediction status" node queries the AI service to determine if the image generation is complete.
7.  **Check for success:** "Check for success" node check if the image prediction status is successful.
8.  **Check for errors:** The "Check for errors" node verifies if there were any errors during prediction. If errors exist, it stops the workflow, and if not, it will wait, then continue the process from step 5 until no errors occur.
9.  **Get the image URL:** The "Get the image URL" node retrieves the URL of the generated image after a successful prediction.
10. **Stop and Error:** The "Stop and Error" node stops the workflow.

## Services

*   AI Image Prediction Service (likely accessed via HTTP Request)

## Hashtags

#n8n #automation #imagegeneration #AI #workflow
