# My Workflow

## Use cases:

- **Lead Generation and Email Outreach:** Automatically extract email addresses from websites, generate personalized email content using AI, and send emails to potential leads.
- **Brand Monitoring:** Scrape website content based on specific queries (e.g., brand mentions), summarize the content, and send email notifications.
- **Content Aggregation and Summarization:** Extract content from multiple URLs related to a specific topic, summarize the information using AI, and deliver a consolidated report via email.

## How it works:

1. **Trigger:** The workflow starts when the "When clicking ‘Test workflow’" node is manually triggered.
2. **Generate Search Queries:**  The "Generate queries" node (Langchain OpenAI) creates search queries based on initial input (e.g., a domain name).
3. **Format Queries:** The "fomate queries" node prepares the generated queries for use in subsequent steps.
4. **Loop Through Queries:** The "Loop Over queries" node iterates through each generated search query.
5. **Gmail Search:** For each query, the "Gmail search" node (HTTP Request) searches for relevant emails in Gmail.
6. **Extract URLs:** The "Extract Urls" node extracts URLs from the search results.
7. **Filter URLs:** The "Filter urls" node filters the extracted URLs based on specified criteria.
8. **Check if URL is Empty:** The "If url is not empty" node checks if the URL exists. The workflow follows one path if a URL is present and another if the URL is not present.
9. **Remove Duplicate URLs (if URL is present):** The "Remove Duplicates" node removes any duplicate URLs, then the workflow gets the website content.
10. **Extract Domain name:** The "Extract Domain Name" node takes a URL and extracts the domain.
11. **Fetch website content:**  The "get website with Jina.ai" node (HTTP Request) fetches the HTML content of the extracted website.
12. **Conditional check:** The "If1" node conditionally evaluates the information extracted from the website. One one branch, the markdown text is generated and trimmed and the workflow goes to step 16. On the other branch, the queries are run again.
13. **Limit Markdown:** The "Limit Markdown" node limits the text to a specific amount of characters.
14. **Generate Email Content:** The "Generate Email content" node (Langchain OpenAI) generates the email content based on extracted website content.
15. **Send Email:** The "Gmail1" node sends an email with the generated content.
16. **Store Data in Google Sheets:** The "Google Sheets" node appends the extracted and processed data to a Google Sheet.
17. **(Alternative flow) Extract Emails from Websites (if URL is not present):** The "Extract Emails" node extracts email addresses from the extracted website, loops over, aggregates emails and removes duplicates.
18. **Complete:** The workflow stores the data in google sheets, then waits and restarts to loop over items again.

## Services:

- Google Sheets
- Gmail
- OpenAI (via Langchain)
- Jina AI

## Hashtags:

#n8n #automation #email #leadgeneration #webscraping
