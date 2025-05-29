# 🎥 Gemini AI Video Analysis

## Use cases:
- **Content Moderation:** Automatically analyze uploaded video content to identify potentially inappropriate or policy-violating material.
- **Video Cataloging:** Generate detailed descriptions of video content to improve searchability and organization in video libraries.
- **Marketing Insights:** Extract key elements, actions, and branding from marketing videos to assess their effectiveness and identify trends.

## How it works:
The workflow automates video analysis using the Gemini AI.

1.  **Trigger:** The workflow starts when the "Test Workflow" button is clicked.
2.  **Set Input:** A video URL is manually defined and set.
3.  **Download Video:** The workflow downloads the video from the URL and converts it into binary data.
4.  **Upload video Gemini:** The video is uploaded to Google's Gemini servers. The node configures the upload headers, including content type and length, and sends the binary data.
5.  **Wait:** The workflow waits until the video is processed on Google's servers.
6.  **Analyze video Gemini:** Gemini AI is prompted to describe in detail what is visually happening in the video, including key elements, actions, colors, and branding.
7.  **Get Result:** The AI-generated description is extracted and saved to the videoDescription variable.

## Services:
- Google Gemini AI

## Hashtags:
#n8n #automation #videoanalysis #geminiai #ai
