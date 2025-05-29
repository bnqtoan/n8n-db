# Auto-create and publish AI social videos with Telegram, GPT-4 and Blotato

## Use cases:

- **Content creators automating social media presence:** Streamline the creation and distribution of engaging video content across multiple platforms, saving time and effort.
- **Marketing teams amplifying brand messaging:** Quickly generate and share videos tailored to different social media channels, ensuring consistent brand visibility.
- **Businesses enhancing customer engagement:** Leverage AI to create compelling video content that resonates with their target audience, driving higher engagement and conversions.

## How it works:

1.  **Receives Input:** The workflow starts with a Telegram trigger, accepting either a text prompt or an image as input.
2.  **Processes Input:** The prompt is split to extract video idea, caption idea, and music style. An image is downloaded from Telegram and uploaded to Cloudinary.
3.  **Generates Video:** Based on whether the input is text or an image, a video is generated. The text prompt is sent to Blotato and the image is sent to piapi.ai to create the video.
4.  **Generates Audio:** A music file is generated using Piapi based on the extracted music style from the prompt. A script is generated using GPT-4o.
5.  **Merges Video & Audio:** JSON2Video is used to merge the video, music and script using the platform.
6.  **Generates Additional Content:** GPT-4 is used to generate the social media caption and SEO title.
7.  **Saves and Notifies:** The video metadata (URL, title, caption) is appended to a Google Sheet and the final video is sent to a Telegram channel.
8.  **Posts to Social Media:** Finally, the video is uploaded to Blotato and shared across platforms like Instagram, YouTube, TikTok, Facebook, Threads, Twitter, LinkedIn, Bluesky, and Pinterest.

## Services:

*   Telegram
*   Cloudinary
*   Piapi AI
*   GPT-4
*   JSON2Video
*   Google Sheets
*   Blotato

## Hashtags:

#n8n #automation #AI #socialmedia #videomarketing
