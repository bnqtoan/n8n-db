# Facebook Ads Competitor Creative Analysis & Automated Email Report

## Use Cases

1.  **Competitive Analysis:** Monitor competitor ad creatives on Facebook to identify trends, strategies, and high-performing content. This allows marketers to adapt their own campaigns for better results.
2.  **Content Inspiration:** Generate ideas for new ad creatives based on the analysis of competitor ads, helping to overcome creative blocks and improve ad performance.
3.  **Automated Reporting:** Automatically compile and send reports on competitor ad strategies to stakeholders, saving time and effort on manual data collection and analysis.

## How it Works

This workflow automates the process of scraping, analyzing, and reporting on competitor Facebook ads. Here's a breakdown:

1.  **Trigger:** The workflow starts with a "Form Submission" trigger, which initiates the process.
2.  **Scrape Ads:** The "Scrape ads" node fetches ad creatives from Facebook based on the parameters entered in the form.
3.  **Split Media:** The "Split Image Ads & Video Ads" node separates the scraped ads into image and video categories.
4.  **Image Processing:**
    *   Image ads go through duplicate removal ("Image Remove Duplicates") and are limited to the top 5 ("Image Limit 5").
    *   "Analyze Image" node uses the OpenAI node to analyze the image.
    *   The "Select Image Fields" node then picks relevant fields from the image ads.
5.  **Video Processing:**
    *   Video ads also undergo duplicate removal ("Video Remove Duplicates") and are limited to the top 5 ("Video Limit 5").
    *   The workflow downloads the video ("Download video"), uploads it to Gemini ("Upload video Gemini"), waits a bit ("Wait"), and then analyzes it using Gemini's API ("Analyze video Gemini").
    *   The "Select Video Fields" node selects relevant fields from the video ads analysis.
6.  **Data Aggregation:**  The "Merge Media Result" node combines the processed image and video ad data. This combined data is then aggregated into a single set using the "Aggregate" node.
7.  **Combine Ads Info:** "Combine all Ads information into a single text string" consolidates all the ad information into a single text string.
8.  **AI Analysis:** The "AI Agent" node utilizes Langchain to analyze the combined ad data.
9.  **Email Report:** Finally, the "Email the top job recommendations" node sends an email report containing the analysis of the competitor's ad creatives.

## Services

*   Facebook Ads
*   OpenAI
*   Gmail
*   Gemini API

## Hashtags

#n8n #automation #facebookads #competitoranalysis #AI
