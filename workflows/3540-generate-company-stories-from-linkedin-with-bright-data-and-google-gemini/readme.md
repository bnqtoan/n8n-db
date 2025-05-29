# Generate Company Stories from LinkedIn with Bright Data & Google Gemini

## Use cases:

- **Automated Content Creation:** Automatically generate company stories or blog posts from LinkedIn company pages, saving time and resources for content creators.
- **HR Branding & Recruitment:**  Create engaging content showcasing company culture and achievements for recruitment purposes.
- **Competitive Analysis:** Extract and summarize information from competitor LinkedIn pages to understand their activities and messaging.

## How it works:

1. **Trigger:** The workflow starts when you manually trigger it by clicking "Test workflow."
2. **Set LinkedIn URL:** Sets the target LinkedIn company page URL (e.g., `https://il.linkedin.com/company/bright-data`).
3. **Perform LinkedIn Web Request:** Uses Bright Data's Web Scraper API to extract data from the specified LinkedIn page.  It triggers a snapshot of the page and retrieves the raw data.
4. **Set Snapshot ID:** Extracts the snapshot ID from the Bright Data API response.
5. **Check Snapshot Status:** Periodically checks the status of the Bright Data snapshot using the snapshot ID.
6. **If (Snapshot Ready?):** Checks if the snapshot status is "ready". If not, the workflow waits.
7. **Wait for 30 seconds:** Pauses execution for 30 seconds before checking the snapshot status again.
8. **Check on Errors:** Checks if any errors occurred during the snapshot creation. If so, the workflow will not continue.
9. **Download Snapshot:** Downloads the snapshot data (in JSON format) from Bright Data.
10. **LinkedIn Data Extractor:** Uses a Google Gemini Chat Model to format the LinkedIn response to produce a story. The LLM uses information extraction to create a blog post or story that utilizes all company context provided.
11. **Concise Summary Generator:** Utilizes another Google Gemini Chat Model to create a concise summary of the generated company story.
12. **Webhook Notifier:** Sends the generated story and summary to a specified webhook URL.

## Services:

- **Bright Data:**  Web Scraper API for extracting data from LinkedIn.
- **Google Gemini:** Language model for generating stories and summaries.
- **Webhook.site:** Used as a mock webhook to receive the results.

## Hashtags:

#n8n #automation #linkedin #brightdata #googleai
