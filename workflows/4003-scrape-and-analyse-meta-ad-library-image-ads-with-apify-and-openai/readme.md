# Scrape & Analyze Meta Ad Library Image Ads with OpenAI and store results in Google Sheets

## Use cases:

- **Competitive Analysis:** Automatically gather and analyze image ads from competitors on Facebook and Instagram to identify successful visual strategies and messaging.
- **Trend Identification:** Scrape the Meta Ad Library for image ads related to specific keywords or industries, and use OpenAI to identify emerging visual trends and themes.
- **Ad Performance Insights:** Enhance existing ad performance data by automatically analyzing the visual content of ads and correlating it with metrics like reach, impressions, and conversions.

## How it works:

1.  **Trigger:** The workflow is manually triggered using the "When clicking ‘Test workflow’" node.
2.  **Settings & Prompt Cleaning:** Initial settings are configured, and the prompt for OpenAI is prepared.
3.  **Scrape Meta Ad Library:** The "Scrape Meta Ad Library with Apify" node (using an HTTP Request) fetches data from the Meta Ad Library based on specified search criteria.
4.  **Calculate Runtime:** The workflow calculates the runtime of each ad in days.
5.  **Sort Ads:** The scraped ads are sorted by either reach or the number of days they have been running.
6.  **Filter Image Ads:** Only ads containing images are retained for further processing.
7.  **Limit Images:** The workflow limits the number of image ads to be analyzed to manage costs and processing time.
8.  **Extract Relevant Fields:** The "Pass relevant Fields" node selects the necessary fields from the scraped data, such as the image URL.
9.  **Download Image:** The image from each ad is downloaded using the "Download Image" node (another HTTP Request).
10. **Analyze Image with OpenAI:** The downloaded image is then passed to two parallel flows:
    *   **Save Image to Google Drive**: The image is saved in a dedicated Google Drive folder.
    *   **Analyze Image Contents:** OpenAI is used to analyze the image's content and generate insights (using "OpenAI Chat Model", "Structured Output Parser" and "Analyze Image Contents" Nodes).
11. **Merge Data:** The original ad data, the saved image URL from Google Drive, and the OpenAI analysis results are merged into a single dataset.
12. **Store Data in Google Sheets:** Finally, the combined data is stored in a Google Sheets spreadsheet for easy analysis and reporting.

## Services:

*   **Meta Ad Library:** Facebook/Instagram Ad Library used to get the add data.
*   **Apify:** Used to Scrape Meta Ad Library
*   **OpenAI:** Used for image analysis and content generation.
*   **Google Drive:** Used to store the downloaded images.
*   **Google Sheets:** Used to store the final analyzed data.

## Hashtags:

#n8n #automation #metaads #openai #googlesheets
