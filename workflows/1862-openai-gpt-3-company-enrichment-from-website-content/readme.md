# Website Analyzer and Data Extractor

## Use cases:

- **Market Research:** Automatically gather and analyze value propositions, industries, target audiences, and market segments of companies from a list of websites, populating a Google Sheet for easy comparison.
- **Lead Qualification:** Quickly assess potential leads by extracting key information from their websites and classifying them based on industry and target audience.
- **Competitive Analysis:** Monitor competitors' websites and track changes in their value propositions or target audiences over time.

## How it works:

1.  **Trigger:** The workflow starts manually by clicking "Execute Workflow".
2.  **Read Google Sheets:** Reads a list of website domains from a specified Google Sheet.
3.  **Split In Batches:** Splits the list of domains into batches to process them efficiently.
4.  **HTTP Request:** For each domain, the workflow sends an HTTP request to fetch the website's HTML content.
5.  **HTML Extract:** Extracts the entire HTML content of the website.
6.  **Clean Content:** Cleans and shortens the extracted HTML content, removing unnecessary whitespace and limiting the length.
7.  **OpenAI:** Uses the OpenAI node to analyze the website content and extract:
    *   The company's value proposition (short, casual tone).
    *   The company's industry (from a predefined list).
    *   The company's target audience (from a predefined list).
    *   Classification of the market into B2B or B2C.
8.  **Parse JSON:** Parses the JSON returned by OpenAI to create separate fields in the n8n item.
9.  **Merge:** Combines the original domain name with the extracted data from OpenAI.
10. **Update Google Sheets:** Updates the initial Google Sheet with the extracted information (value proposition, industry, target audience, and market) for each website domain.
11. **Wait:** Pauses for a set time before repeating the split batches node.

## Services:

-   Google Sheets
-   OpenAI API

## Hashtags:

#n8n #automation #webscraping #datascience #googlesheets
