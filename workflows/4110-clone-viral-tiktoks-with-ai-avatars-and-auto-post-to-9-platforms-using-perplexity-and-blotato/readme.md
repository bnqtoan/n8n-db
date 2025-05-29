# 💥Clone a viral TikTok and auto-post it to 9 platforms using Perplexity & Blotato vide

## Use cases:

- **Content Repurposing:** Automatically create and distribute versions of viral TikTok videos across multiple social media platforms, saving time and effort for social media managers.
- **Trend Exploitation:** Quickly capitalize on trending TikTok content by generating similar videos with unique twists and automatically publishing them to various platforms.
- **Brand Awareness:** Enhance brand visibility by consistently posting engaging video content across a wide range of social media channels, tailored for each platform.

## How it works:

1.  **Trigger:** The workflow starts when a TikTok video URL is sent via Telegram.
2.  **Video Analysis:** The workflow downloads the TikTok video, extracts its thumbnail, and uses GPT-4o Vision to analyze the thumbnail content and extract overlay text. It also downloads the TikTok audio and transcribes it into a script using GPT.
3.  **Content Suggestion:** A unique content idea is generated using Perplexity AI based on the original video script.
4.  **Video Creation:** Captions AI generates a new video with your avatar, JSON2Video is used to add overlay text, and the final video URL is updated in Google Sheets.
5.  **Multi-Platform Posting:** The final video is uploaded to Blotato, which then automatically publishes it to 9 different social media platforms (Instagram, YouTube, TikTok, Facebook, Threads, Twitter, LinkedIn, Bluesky, and Pinterest).
6.  **Notification:** Send the final video URL and a preview to Telegram.

## Services:

-   Telegram
-   RapidAPI (TikTok Downloader)
-   Cloudinary
-   OpenAI (GPT-4o)
-   Perplexity AI
-   Google Sheets
-   Captions AI
-   JSON2Video
-   Blotato (Instagram, YouTube, TikTok, Facebook, Threads, Twitter, LinkedIn, Bluesky, Pinterest)

## Hashtags:

#n8n #automation #socialmedia #tiktok #contentcreation
