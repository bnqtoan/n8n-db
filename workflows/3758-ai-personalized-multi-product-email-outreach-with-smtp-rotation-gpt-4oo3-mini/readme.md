# AI-Powered Email Outreach Workflow

## Use cases:

- **Lead Generation:** Automatically find potential leads by scraping business information from Google Maps and websites, then sending personalized outreach emails.
- **Targeted Marketing:** Identify specific businesses fitting a particular profile and promote tailored services or products to them.
- **Competitive Analysis:** Gather information about competitors and their offerings by scraping their websites, then use this data to personalize outreach to their clients or potential customers.

## How it works:

1.  **Initiation:** The workflow starts with a manual trigger, where a list of products with details (name, link, description) are initiated.
2.  **Query Generation (OpenAI):** Uses an OpenAI model to generate relevant Google Maps search queries based on the product details.
3.  **Google Maps Search:** Searches Google Maps for businesses using the generated queries.
4.  **URL Extraction:** Extracts website URLs from the Google Maps search results.
5.  **URL Filtering:** Filters out unwanted URLs (e.g., Google, schema).
6.  **Website Content Fetching:** Retrieves content from each unique website URL.
7.  **Email Extraction:** Extracts email addresses from the website content.
8.  **Email Processing:** Aggregate the email in a list then remove duplicate emails and split the email to be use in the email section.
9. **Email Domain Extraction:** Extract the domain of each unique email to use in content scraping.
10. **Content Scraping:** Scrapes the content of the extracted website.
11. **Email Personalization (OpenAI):** Uses another OpenAI model to generate personalized email content based on the scraped website content and product details.
12. **Email Sending (Gmail):** Sends the personalized email using one of five Gmail accounts, with a random selection to avoid spam detection.
13. **Delay:** Random delay to not be market as spam before sending the email.

## Services:

-   **Google Maps:** Used for searching and finding local businesses.
-   **OpenAI:** Used for generating search queries and personalizing email content.
-   **Gmail:** Used for sending personalized emails.
-   **Jina AI:** (Potentially) Used for website scraping, though `n8n-nodes-base.httpRequest` is the actual node type used.
    -   **NOTE**:  The description mentions Jina AI for scraping but the node used is a standard HTTP Request.  Clarification needed if Jina AI is directly used or just a general HTTP request.

## Hashtags:

#n8n #automation #emailmarketing #leadgeneration #scraping
