# N8N Website Scraping workflow without APIs cost

## Use cases:

- **Website Analysis:** Quickly gather insights about competitor websites, including their purpose, target audience, and core offerings, without manually browsing and analyzing each site.
- **Content Aggregation and Summarization:** Automatically extract and summarize key information from various websites to create a curated digest of relevant content for research or monitoring purposes.
- **Lead Generation Research:** Scrape websites to identify potential leads, gather contact information, and understand their business offerings for targeted outreach campaigns.

## How it works:

1.  The workflow starts with a **"Click to Start"** manual trigger node.
2.  The **"Input Your Website URL"** node takes a website URL (currently defaulted to "https://medium.com") and retrieves the HTML content of the page using an HTTP request.
3.  The **"Convert to Markdown Format"** node converts the HTML content into Markdown format.
4.  The **"Process the Markdown to readable Contents"** node uses OpenAI to analyze the Markdown text. It extracts a concise summary paragraph explaining the website’s purpose, target audience, and core offerings, and it also provides a list of 10 key pieces of information from the website.
5.  Finally, the **"Save the Website Scraping content to Google Sheet"** node saves the summarized content and extracted information into a specified Google Sheet.  **Note:** You need to configure the Google Sheet name and document ID.

## Services:

-   OpenAI
-   Google Sheets

## Hashtags:

#n8n #automation #webscraping #openai #googlesheets
