# AI-Powered Social Media Post Automation

## Use cases:

- **Content Calendar Automation:** Automatically generate and schedule social media posts for a consistent online presence based on a predefined content calendar in a Google Sheet.
- **Brand Consistency:** Maintain a consistent brand voice and style across all social media posts by leveraging AI to generate content that aligns with specific brand guidelines.
- **Cross-Platform Content Adaptation:** Adapt content concepts and captions for different social media platforms (e.g., Instagram and LinkedIn) to maximize engagement and reach.

## How it works:

The workflow automates the creation and publishing of social media posts, primarily focusing on Instagram. Here's a step-by-step breakdown:

1.  **Scheduled Start:** The workflow is triggered on a schedule to check for new post ideas.
2.  **Fetch Post Idea:** It retrieves the next unprocessed post idea (where "Status" is 0) from a Google Sheet, including the topic, target audience, brand voice, and platform.
3.  **Prepare Input Variables:**  The fetched data is extracted and set as variables for subsequent nodes.
4.  **Generate Content Concept (Gemini):** It uses the Google Gemini AI model to generate a single, unique content concept tailored for the specified platform (Instagram or LinkedIn), ensuring the format is a "Single Image".
5. **Elaborate Image Prompt Options (Gemini):** Uses Google Gemini again to take generated content and create two distinct image generation prompts optimized for social media platform.
6.  **Generate Image (Replicate):** The workflow uses the *first* generated prompt to generate the actual image using Replicate's Flux model.
7.  **Generate Caption (Gemini):**  Google Gemini writes a short, engaging caption tailored to the target platform, including relevant hashtags.
8.  **Prepare Data for Instagram API:** The generated image URL and caption are formatted to meet the requirements of the Instagram Graph API.
9.  **Publish to Instagram:**
    *   The workflow creates a media container in Instagram with the image and caption.
    *   It waits for Instagram to process the container.
    *   Finally, it publishes the container as a post to the linked Instagram account.
10. **Update Google Sheet:** The workflow updates the "Status" column in the Google Sheet to "1" for the processed post idea, preventing it from being used again.

## Services:

-   **Google Sheets:** Used for storing and managing post ideas and their statuses.
-   **Google Gemini (via Langchain):** AI model used for content concept generation, prompt engineering, and caption writing.
-   **Replicate (Flux model):** AI platform used for generating images from prompts.
-   **Instagram Graph API:** Used for publishing the generated content to Instagram.

## Hashtags:

#n8n #automation #socialmedia #AI #contentcreation
