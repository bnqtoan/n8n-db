# YouTube to Airtable Anonym

## Use cases:
- **Content Repurposing:** Automatically transform YouTube videos into blog posts, social media updates, or newsletter content.
- **Learning & Knowledge Management:** Extract key insights from educational YouTube videos and store them in Airtable for future reference and easy retrieval.
- **Competitor Analysis:** Analyze competitor YouTube content at scale by automatically extracting main ideas and key takeaways, storing them in a structured format in Airtable for comparison.

## How it works:
1.  **Schedule Trigger:** The workflow is triggered based on a set schedule (e.g., every 5 minutes).
2.  **Airtable:** It searches an Airtable base ("Content Hub") and table ("Ideas") for entries where the "Status" field is empty and the "Type" is "Youtube Video".
3.  **Get Video ID:** Extracts the YouTube video ID from the "Source" field of the Airtable record using a regular expression.
4.  **Get video transcript:** Uses the extracted video ID to retrieve the video transcript from a third-party API (YouTube Video Summarizer GPT AI RapidAPI).  It sends a request to the RapidAPI endpoint, including the video ID and API key.
5.  **Get All Transcripts:** Extracts the transcripts from the RapidAPI response.
6.  **Combine Transcripts:** Combines the individual transcript segments into a single, complete transcript.
7.  **Get Full Transcript:** Saves the combined transcript to a variable.
8.  **Extract detailed summary:** Uses the Langchain Information Extractor node and the combined transcript to generate a detailed summary containing the main idea and key takeaways.
9.  **Get Main Idea & Key Takeaways:** Saves the extracted "Main Idea" and "Key Takeaways" from the Langchain node to variables.
10. **Update Airtable:** Updates the original Airtable record with the extracted main idea, key takeaways, and updates the "Status" field.

## Services:
-   Airtable
-   YouTube Video Summarizer GPT AI RapidAPI
-   Langchain

## Hashtags:
#n8n #automation #youtube #airtable #contentcreation
