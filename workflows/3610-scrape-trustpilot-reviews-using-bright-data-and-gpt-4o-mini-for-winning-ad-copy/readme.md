# Scrape Trustpilot Reviews Using Bright Data for Winning Ad Insights

## Use cases:

- **Competitor Analysis:** Automatically gather and analyze negative reviews of competitors to identify their weaknesses and areas for improvement.
- **Ad Campaign Optimization:** Generate targeted ad copy that addresses customer pain points highlighted in competitor reviews, increasing ad relevance and conversion rates.
- **Product Development:** Uncover common complaints about competitor products to inform product development and innovation efforts, leading to better and more customer-centric offerings.

## How it works:

1.  **Form Submission:** The workflow starts with a form where the user inputs a competitor's Trustpilot URL and selects a timeframe for reviews (e.g., last 30 days).
2.  **Bright Data API Call:** An HTTP request is sent to Bright Data's dataset API, requesting Trustpilot reviews for the specified competitor and timeframe.  The Bright Data API Key must be provided.
3.  **Polling for Data:** The workflow waits for a specified amount of time (2 minutes) and then checks the status of the Bright Data snapshot. This polling continues until the snapshot is ready.
4.  **Data Retrieval:** Once the data is ready, another HTTP request is sent to Bright Data to retrieve the scraped reviews in JSON format.
5.  **Data Storage:** The retrieved reviews are appended to a Google Sheet for storage and analysis.  The Google Sheet ID must be provided.
6.  **Review Filtering:** The workflow filters the reviews, isolating only those with a rating of 1 or 2 stars (negative reviews).
7.  **Review Aggregation:** The negative reviews are aggregated into a single text string containing the review content.
8.  **LLM Analysis & Ad Copy Generation:** OpenAI's GPT-4o-mini model is used to analyze the aggregated negative reviews and generate three different ad copy variations tailored to address the identified customer pain points. An OpenAI API Key must be provided.
9.  **Email Notification:** Finally, an email is sent to the marketing team with a summary of the competitor's weaknesses, the generated ad copy, and the aggregated negative reviews.  The target email must be provided.

## Services:

-   **Bright Data:** Used for scraping Trustpilot reviews via their dataset API.
-   **Google Sheets:** Used for storing the scraped review data.
-   **OpenAI:** Used for analyzing the aggregated reviews and generating ad copy using the GPT-4o-mini model.
-   **Gmail:** Used for sending the summary and ad copy to the marketing team.

## Hashtags:

#n8n #automation #webscraping #competitoranalysis #adcopy
