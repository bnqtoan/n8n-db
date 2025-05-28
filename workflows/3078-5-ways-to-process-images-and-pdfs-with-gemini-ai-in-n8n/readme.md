# AI-Powered Media Analysis with Gemini

## Use cases:

- **Content Moderation:** Automatically analyze images and PDFs to identify inappropriate content, such as hate speech, violence, or nudity.
- **Image Understanding for E-commerce:**  Extract product features and descriptions from images for better product categorization and searchability.
- **Document Summarization:**  Process PDF documents to generate summaries, extract key information, and identify relevant topics.

## How it works:

This workflow provides five different approaches to analyze media (images and PDFs) with AI, utilizing the Google Gemini API:

1.  **Single Image Analysis with Binary Passthrough:** Fetches an image from Unsplash and sends it directly to the AI Agent node. The "Automatically Passthrough Binary Images" option allows for analysis without data transformation.
2.  **Multiple Images with Custom Prompts:** Defines a list of image URLs and corresponding prompts. The workflow splits these into individual items, filters them based on a 'process' flag, fetches the images, and then uses a Loop node to process each image with its specific prompt via the AI Agent.
3.  **Standard n8n Item Processing with Direct API:** Defines multiple image URLs, splits them into individual items, fetches each image, transforms it to base64, and then calls the Gemini API directly for each image.
4.  **PDF Analysis via Direct API:** Fetches a PDF file, transforms it to base64 format, and sends it to the Gemini API for analysis, asking "Whats on this pdf?".
5.  **Image Analysis via Direct API:** Fetches an image, transforms it to base64 format, and makes a customized API call to Gemini, asking "Whats on this image?".

The workflow starts with a "When clicking ‘Test workflow’" trigger. Depending on the chosen branch, it fetches images or PDFs from URLs. Images can be passed directly to the AI Agent for analysis, or transformed to base64 for direct API calls to Google Gemini. The AI Agent node uses the Google Gemini Chat Model for image and prompt analysis.

## Services:

-   Google Gemini API
-   Unsplash

## Hashtags:

#n8n #automation #AI #Gemini #imageanalysis #pdfanalysis
