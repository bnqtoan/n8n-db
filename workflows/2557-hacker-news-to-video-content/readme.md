# Hacker News to Video Template - AlexK1919

## Use cases:

- **Automated Content Creation:** Automatically creates short videos from trending Hacker News articles for social media platforms like YouTube, X (Twitter), Instagram, and LinkedIn.
- **Newsletter Generation:** Generates newsletter content, including article summaries and image prompts.
- **Social Media Marketing:** Streamlines the process of sharing engaging video content related to AI and automation topics, driving traffic and engagement.

## How it works:

1.  **Trigger:** The workflow is initiated manually via the "When clicking ‘Test workflow’" node.
2.  **Fetch Hacker News Articles:** The "Hacker News" node retrieves trending articles.
3.  **Limit the number of articles:** The "Limit" node keeps only the last 50 articles to be processed.
4.  **Loop Through Articles:** The "Loop Over Items" node iterates through each article fetched from Hacker News.
5.  **Article Analysis:** For each article, the "Article Analysis" node (Langchain Agent) utilizes OpenAI to:
    *   Determine if the article is related to automation or AI.
    *   Generate a 250-word summary of the article.
    *   Extract any relevant image URLs.
6.  **Conditional Check:** The "If Topic" node checks if the article is related to automation or AI, based on the "related" field in the output of the Article Analysis node. If true, it proceeds to the next steps; otherwise, it loops to the next article.
7.  **Image Retrieval and Analysis:** If an image URL is found, the "Get Image" node fetches the image. The "Image Analysis" node analyze the content of the image.
8.  **Article Preparation:** The "Article Prep" node uses OpenAI to refine the article summary and generate image prompts, creating content suitable for a newsletter or video.
9.  **Generate Image:** The "Leo - Improve Prompt" and "Leo - Generate Image" nodes utilize Leonardo AI to create images based on the generated prompts. The workflow waits using "Wait1" to ensure image generation is complete.
10. **Generate Video:** The "Runway - Create Video" node takes the generated image and creates a short video. The "Wait2" node pauses the workflow to allow video processing.
11. **Generate Second Image and Video:** Nodes "Leo - Improve Prompt2", "Leo - Generate Image2", "Runway - Create Video2" and its respective "Wait" nodes repeat steps 9-10 to create a second video.
12. **Stitch it all together:** The "Cre - Generate Video1" and its respective "Wait3" nodes utilize Creatomate to stitch together the two videos, title and audio.
13. **Asset Upload:** The generated video can be uploaded to cloud storage services like MinIO, Dropbox, Google Drive, and Microsoft OneDrive.
14. **Social Media Posting:** Finally, the video can be posted to social media platforms like YouTube, X (Twitter), Instagram, and LinkedIn.

## Services:

*   Hacker News API
*   OpenAI
*   Leonardo AI
*   RunwayML
*   Creatomate
*   MinIO
*   Dropbox
*   Google Drive
*   Microsoft OneDrive
*   YouTube API
*   X (Twitter) API
*   Instagram API
*   LinkedIn API

## Hashtags:

#n8n #automation #video #AI #contentcreation
