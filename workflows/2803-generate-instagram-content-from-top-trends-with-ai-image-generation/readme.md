# Generate Instagram Content from Top Trends with AI Image Generation

## Use cases:

- **Automated Content Creation:** Automatically generate Instagram posts based on trending topics, saving time and effort for social media managers.
- **Consistent Brand Presence:** Maintain a consistent and engaging brand presence on Instagram by regularly posting AI-generated content relevant to your audience's interests.
- **Trend-Driven Marketing:** Leverage current trends to increase visibility and engagement by creating content around popular hashtags and themes.

## How it works:

1. **Schedule Trigger:** The workflow starts on a predefined schedule, triggering the process of content generation.
2. **Credential Setup:** Sets API keys and IDs for Telegram, Instagram, RapidAPI, and Replicate using Set nodes.
3. **Trend Discovery:** Retrieves top posts from Instagram based on specified hashtags (e.g., #blender3d, #isometric) using the RapidAPI Instagram Scraper API.
4. **Content Filtering:** Filters out video content and extracts relevant data (prompt, content code, thumbnail URL, and tag) from the retrieved posts using Code nodes.
5. **Database Check:** Checks if the content already exists in a PostgreSQL database to avoid duplicates.
6. **AI-Powered Content Generation:**
   - If the content is new, it inserts the data into the database.
   - Analyzes the image using OpenAI's GPT-4o model to generate a detailed description.
   - Uses the image description to create an engaging Instagram caption using OpenAI.
   - Generates a new image based on the AI-analyzed description using Replicate's Flux AI model.
7. **Instagram Publishing:**
   - Prepares the generated image and caption for posting on Instagram using the Facebook Graph API.
   - Publishes the media to the specified Instagram Business Account.
8. **Status Monitoring:** Checks the status of the media upload and publishing process using the Facebook Graph API.
9. **Telegram Notifications:** Sends status updates (success or failure) via Telegram messages to a specified chat ID.
10. **Error Handling:** Sends Telegram notifications if errors occur during the database interaction or media upload.

## Services:

- **Instagram API (via RapidAPI):** Used to scrape trending posts based on hashtags.
- **PostgreSQL:** Database to store and check for existing content.
- **OpenAI:** Used for image analysis and caption generation.
- **Replicate (Flux AI):** Used for generating new images based on content descriptions.
- **Facebook Graph API:** Used to prepare and publish content to Instagram.
- **Telegram API:** Used for sending notifications about the workflow's progress and any errors.

## Hashtags:

#n8n #automation #instagram #ai #contentcreation
