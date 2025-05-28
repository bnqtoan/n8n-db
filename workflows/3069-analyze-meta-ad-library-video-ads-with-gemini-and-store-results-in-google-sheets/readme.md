# Scrape Meta Ad Library and analyze Video Ads with Gemini and store data to Google Sheets

## Use cases:

1.  **Competitive Ad Analysis:** Automatically gather and analyze video ads from competitors on the Meta Ad Library to understand their strategies, identify trends, and improve your own ad campaigns.
2.  **Content Performance Insights:** Extract key insights from successful video ads, such as themes, messaging, and visual elements, using Gemini's AI capabilities to inform future content creation.
3.  **Data-Driven Ad Optimization:** Store structured analysis results in Google Sheets, allowing for easy tracking, reporting, and data-driven decision-making to optimize ad spend and improve ROI.

## How it works:

1.  **Trigger:** The workflow is initiated manually using the "When clicking ‘Test workflow’" trigger node.
2.  **Settings:** Set initial configurations using the "Settings" node.
3.  **Clean Prompt:** The "Clean Prompt" node prepares the prompt for scraping.
4.  **Scrape Meta Ad Library:** The "Scrape Meta Ad Library with Apify" node uses an HTTP Request to scrape video ad data from the Meta Ad Library, using Apify (based on the node name, it is assumed).
5.  **Calculate Runtime in Days:** Calculate the duration of each ad campaign using the "Calculate Runtime in Days" node.
6.  **Sort by Reach or Days Running:** Sorts ads based on reach or duration using the "Sort by Reach or Days Running" node.
7.  **Filter only Video Ads:** Filters for video ads only using the "Filter only Video Ads" node.
8.  **Limit Videos to Analyze:** Limits the number of videos to be analyzed using the "Limit Videos to Analyze" node.
9.  **Pass Relevant Fields:** Selects and passes the most important fields from the scraped data using the "Pass relevant Fields" node.
10. **Loop Over Items:** The "Loop Over Items" node iterates through the video ads.
11. **Download File:** The "Download File" node downloads the video file from the URL.
12. **Change Filetype to Video:**  The "Change Filetype to Video" node sets the file type correctly.
13. **Upload Video to Gemini:** The "Upload Video to Gemini" node uploads the video to the Gemini API via an HTTP Request.
14. **Pass Values for Gemini:** Stores relevant data from the upload, using the "Pass Values for Gemini" node, for use in the Gemini API call.
15. **Wait for Upload Processing:** Waits for the video upload to be processed by Gemini using the "Wait for Upload Processing" node.
16. **Analyze Video with Gemini:** The "Analyze Video with Gemini" node sends a request to the Google Gemini API to analyze the video content using an HTTP Request.
17. **Google Gemini Chat Model:** Uses the "Google Gemini Chat Model" node to generate a prompt.
18. **Structured Output Parser:** Uses the "Structured Output Parser" to specify the output format expected from the Gemini API.
19. **Structured Output Parsing Agent:** Uses the "Structured Output Parsing Agent" to convert the raw text from Gemini into a structured format
20. **Store Data:** The "Store Data" node writes the extracted and analyzed data to a Google Sheets spreadsheet.

## Services:

*   Meta Ad Library
*   Apify (Likely, based on node name)
*   Google Gemini API
*   Google Sheets

## Hashtags:

#n8n #automation #marketing #AI #adanalysis
