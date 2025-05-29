# Amazon Reviews Analysis and Ad Creative Generation Workflow

## Use cases:

- **Competitor Analysis**: Monitor competitor products on Amazon, gather customer reviews, and identify their weaknesses.
- **Ad Creative Generation**: Automatically generate ad creatives based on insights from competitor product reviews.
- **Reputation Management**: Track customer sentiment towards competitor products and identify potential areas for improvement in your own product offerings.

## How it works:

1.  **Trigger**: The workflow starts when an Amazon product URL is submitted via a form.
2.  **Bright Data Integration**: The URL is sent to Bright Data's Dataset API to extract product reviews.
3.  **Polling**: The workflow periodically checks the status of the data extraction process.
4.  **Data Retrieval**: Once the data is ready, the extracted reviews are retrieved from Bright Data.
5.  **Data Storage**: The reviews are appended to a Google Sheet for further analysis and record-keeping.
6.  **Review Aggregation**: All the review texts are aggregated into a single string.
7.  **LLM-Powered Summary**: An OpenAI Chat Model processes the aggregated reviews to identify and summarize the competitor's weaknesses.
8.  **Creative Generation**: Based on the summary of weaknesses, OpenAI is used to generate an image creative for an ad campaign.
9.  **Email Notification**: An email is sent via Gmail to media buyers with the summary of weaknesses and the generated ad creative.

## Services:

-   **Bright Data**: A data extraction platform used to scrape Amazon product reviews.
-   **Google Sheets**: A spreadsheet program used to store and organize the extracted reviews.
-   **OpenAI**: An artificial intelligence research and deployment company that provides the OpenAI Chat Model and Image generation.
-   **Gmail**: An email service used to send notifications and ad creatives to media buyers.

## Hashtags:

#n8n #automation #amazon #reviews #adcreative
