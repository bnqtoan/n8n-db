# AI-Powered Email Outreach Workflow

## Use cases:

*   **Lead Generation:** Automatically generate targeted email lists for sales and marketing outreach based on AI-driven Google Maps searches and website content analysis.
*   **Personalized Outreach Campaigns:** Craft highly personalized emails using AI, leveraging scraped website content and user data to increase engagement.
*   **Automated Email Marketing:** Streamline email marketing efforts by automating the entire process from lead generation to email sending, including content personalization and scheduling.

## How it works:

1.  **Generate Search Queries (OpenAI):** The workflow starts by using OpenAI to generate relevant search queries for Google Maps based on an initial product description.
2.  **Search Google Maps:** These queries are used to search Google Maps for relevant businesses.
3.  **Extract URLs:** The workflow extracts URLs from the Google Maps search results.
4.  **Filter and Deduplicate URLs:** It filters out unwanted URLs (e.g., Google, schema pages) and removes duplicates to ensure unique website targets.
5.  **Fetch Website Content:** The workflow retrieves the content of each unique website.
6.  **Extract and Filter Emails:** It extracts email addresses from the website content.
7.  **Remove Duplicate Emails:** The workflow removes duplicate email addresses.
8.  **Extract Domain from Email** The email's domain is extracted
9.  **Scrape Website Content (Jina.ai)** Uses Jina.ai to scrape content of the domain found
10. **Generate Personalized Email (LLM Chain):** OpenAI is used to generate a personalized email based on information from the website.
11. **Send Email (Gmail):** Finally, the personalized email is sent via Gmail with randomized delays.

## Services:

*   **Google Maps:** Used for business discovery and data extraction.
*   **OpenAI:** Used for generating search queries and email content.
*   **Gmail:** Used for sending personalized emails.
*   **Jina.ai:** Used for scraping web content from the domain name

## Hashtags:

#n8n #automation #emailmarketing #leadgeneration #AI
