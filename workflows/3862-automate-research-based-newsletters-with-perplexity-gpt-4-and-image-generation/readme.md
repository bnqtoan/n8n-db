# The Ultimate AI Newsletter Automation [Public]

## Use Cases

*   **Automated Newsletter Creation:** Generate engaging newsletter content on a scheduled basis using AI, saving time and effort for content creators.
*   **Personalized Newsletter Delivery:** Tailor newsletter content to different client segments by fetching client lists and merging them with AI-generated content before sending via Gmail.
*   **Hands-free Newsletter Topic Curation:** automatically fetch new topics from a Google Sheet, generate an image for the content and then send it to client lists through Gmail

## How It Works

This workflow automates the process of generating and sending AI-driven newsletters. Here's a breakdown:

1.  **Schedule Trigger:** The workflow starts with a `Schedule Trigger` node, activating the workflow according to a defined schedule.
2.  **GetNewsletterTopic:** Fetches the first available topic from a Google Sheet.
3.  **UpdateStatus:** Updates the status of the topic in the Google Sheet to indicate it's being processed.
4.  **AI Agent:** This node utilizes an AI agent (powered by Perplexity Search, OpenAI Chat Model) to generate content based on the fetched topic.
5.  **GPT Image Generation:**  An image URL is generated using GPT based on the content of the Newsletter.
6.  **Convert to Binary File**: the image converts to a binary file to be uploaded to Google Cloud Storage.
7.  **Google Cloud Storage 2:** Upload the generated image to Google Cloud Storage
8.  **SetImageURL1:**  Set a valid URL for the generated image
9.  **GetClientList:** Retrieves a list of clients from a Google Sheet.
10. **Merge:** Merges the AI-generated content with client data.
11. **SendNewsletter:** Sends the personalized newsletter to each client via Gmail.

## Services

*   **Google Sheets:** Used for fetching newsletter topics and client lists, and updating topic status.
*   **OpenAI:** Powers the AI agent for content generation.
*   **Gmail:** Sends the generated newsletters to the client list.
*   **Google Cloud Storage:** Stores generated images for the newsletter.
*   **Perplexity:** Used by the AI Agent to search the web

## Hashtags

#n8n #automation #newsletter #AI #GPT #GoogleSheets #Gmail
