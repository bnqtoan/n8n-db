# SERPBear analytics template

## Use cases:

- **Automated SEO Performance Monitoring:** Automatically track keyword rankings in SERPBear, analyze the data using AI, and store the insights in Baserow for easy access and historical tracking.
- **Competitor Analysis:** By modifying the domain parameter, you can analyze competitor keyword rankings and identify areas where you can improve your SEO strategy.
- **Content Optimization:** Use the AI-generated insights to identify keywords needing attention and optimize content to improve rankings for those terms.

## How it works:

1.  **Trigger:** The workflow is triggered either manually ("When clicking ‘Test workflow’") or on a weekly schedule ("Schedule Trigger").
2.  **Get data from SerpBear:** Fetches keyword ranking data from SERPBear using the HTTP Request node. It retrieves data for a specific website (rumjahn.com) using the SerpBear API, filtering by a provided keyword ID. Requires a configured HTTP Header Auth credential to authenticate with SERPBear.
3.  **Parse data from SerpBear:** Parses the JSON data received from SerpBear, extracts keyword information (current position, historical positions), calculates the average position over the last week, and determines the ranking trend (improving, declining, or stable). It then creates a prompt containing a summary of this data for the AI analysis.
4.  **Send data to A.I. for analysis:** Sends the generated prompt to an AI model (meta-llama/llama-3.1-70b-instruct:free via OpenRouter) for analysis.  The AI is instructed to act as an SEO expert, summarize the data, and provide suggestions for improvement.  It uses the OpenRouter API and requires HTTP Header Authentication.
5.  **Save data to Baserow:** Saves the AI-generated analysis and the current date into a Baserow database. The workflow saves the date, AI analysis, and website name to a specified Baserow table. Requires a Baserow API credential and table setup.

## Services:

*   SERPBear
*   OpenRouter (for AI analysis)
*   Baserow

## Hashtags:

#n8n #SEO #automation #SERP #AI
