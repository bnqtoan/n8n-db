# Copy Viral Reels with Gemini AI

## Use cases

- **Identify trending content:** Automatically discover viral Instagram Reels from specific creators and understand their key elements to replicate successful strategies.
- **Content creation inspiration:** Analyze successful Reels to extract insights about visual elements, captions, and themes to inspire new content ideas.
- **Automated social media analysis:** Regularly monitor Instagram Reels performance and store structured data in Airtable for easy reporting and trend analysis.

## How it works

This workflow automates the process of analyzing Instagram Reels to identify key elements and store them in Airtable. Here's a step-by-step breakdown:

1.  **Trigger:** The workflow starts either on a schedule (using the "Schedule Trigger" node) or when triggered by another workflow ("When Executed by Another Workflow" node).
2.  **Fetch Reels:** It retrieves Instagram Reels data using the Apify actor ("Apify - Fetch Reels"), scraping reels from the specified Instagram accounts and retrieves creator's details from Airtable.
3.  **Sort Reels:** The fetched Reels are sorted by view count in descending order to prioritize the most popular ones ("Sort" node).
4.  **Limit:** The workflow limits the number of Reels to process, focusing on the top-performing ones ("Limit" node).
5.  **Save Relevant Fields:** Extracts the video URL, views, caption, and creator information from each reel and saves it in JSON format ("Save Fields" node).
6.  **Create/Update Airtable Record:** The extracted information is then used to create a new record in Airtable with the Video URL, views, caption, and creator information ("Create Video" node).
7. **Get Video Details:**  Retrieves video information from Airtable using the record ID.
8. **Generate Upload URL (Gemini):** Generates a resumable upload URL from the Google Generative Language API for uploading the video file ("Gemini - Generate Upload URL" node).
9. **Download File:** Downloads the video file from the Instagram Reel URL ("Download File" node).
10. **Upload File (Gemini):** Uploads the downloaded video file to the Google Generative Language API using the resumable upload URL ("Gemini - Upload File" node).
11. **Save Values:** Stores the Gemini file URL and MIME type for later use ("Save Values" node).
12. **Wait:** Pauses the workflow execution for 60 seconds ("Wait" node).
13. **Set Prompt:** Defines the prompt for Gemini to analyze the video ("Set Prompt" node). The prompt includes instructions to identify key elements like background, pose, text, clothes, context, and people/participants/roles.
14. **Ask Questions (Gemini):** Sends the prompt and the uploaded video file to the Gemini API for analysis ("Gemini - Ask Questions" node).
15. **Set Guideline:** Updates the Guideline field in the Airtable record with the analysis results from Gemini ("Set Guideline" node).

## Services

-   **Airtable:** Used for storing and managing video data and creator information.
-   **Apify:** Used to scrape Instagram Reels data.
-   **Google Gemini API:** Used for analyzing video content based on a given prompt.

## Hashtags

#n8n #automation #instagram #geminiAI #socialmediaanalysis
