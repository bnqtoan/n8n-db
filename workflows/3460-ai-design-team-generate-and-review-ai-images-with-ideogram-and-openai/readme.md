# n8n Graphic Design Team

## Use cases:

- **Automated Image Generation and Review:** Streamline the process of generating images for marketing campaigns by automatically creating images based on specific prompts, having them reviewed by an AI, and storing the final approved images.
- **Content Creation for Social Media:** Automate the creation and refinement of images for social media posts, ensuring they meet brand guidelines and resonate with the target audience.
- **Iterative Image Improvement:** Utilize AI feedback to iteratively improve image prompts and generated images, leading to higher quality and more relevant visuals.

## How it works:

1.  **Trigger:** The workflow starts when a new form is submitted with an image prompt, target audience, and other parameters like aspect ratio, model, and style.
2.  **Creative Brief Setup:** The "creative brief" node compiles the data submitted via form to send it to the image generator.
3.  **Image Generation:** The "Ideogram Image generator" node uses the provided prompt and settings to generate an image using the Ideogram AI API.
4.  **Set Image Data:** The "SetImageData" node extracts the image URL, seed, and NSFW status from the generated image data.
5.  **Download Image:** The image is downloaded from the Ideogram AI using the "GET image" node.
6.  **Image Review:** The "Image Reviewer" node uses the image and prompt to ask an LLM via Langchain to review the image and provide an recommendation on whether to use as is, use with modifications, or reject and provide an enhanced prompt.
7.  **Decision Making:** The Switch node determines which to do base on the response from the "Image Reviewer" node, if it selects 'Use as is' it saves the image and if it needs to be remixed it will continue.
8.  **Remix Image Generation:** If the image needs adjustments, the workflow uses the "ideogram Remix" node to generate a new image based on the enhanced prompt and the original image.
9.  **File Storage:** The generated image is uploaded to Google Drive to a specified folder using the "Google Drive" node.
10. **Spreadsheet Update:** The workflow then saves all the image parameters and generated image to the google sheet.
11. **Notification:** The workflow then sends an email to notify when the image is ready for review and use.
12. **Setup Workflow:** There is a section in the workflow that allows the user to setup the workflow by creating the google drive folder, uploading the spreadsheet and getting the proper links to set up the other nodes.

## Services:

-   Ideogram AI: Generates images from text prompts.
-   Google Drive: Stores the generated images.
-   Google Sheets: Logs image data and metadata.
-   Gmail: Sends email notifications.
-   OpenAI: Reviews the generated images and provides an recommendation and enhanced prompt.

## Hashtags:

#n8n #automation #graphicdesign #AI #imagegeneration
