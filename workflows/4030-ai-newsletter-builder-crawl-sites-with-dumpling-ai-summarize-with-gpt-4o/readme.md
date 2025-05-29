# AI Newsletter Builder: Crawl Sites with Dumpling AI, Summarize with GPT-4o

## Use cases

- **Curated Content Newsletter:** Automatically create a newsletter with summaries of articles from a list of websites, saving time on manual content aggregation and summarization.
- **Competitive Intelligence Digest:** Monitor competitor websites and generate a newsletter summarizing their latest content and updates for internal stakeholders.
- **Personalized News Briefing:** Subscribe to specific websites and receive a daily or weekly newsletter summarizing the latest articles based on user-defined interests.

## How it works

1.  **Start Workflow:** The workflow is initiated manually.
2.  **Get Website URLs:** Fetches a list of website URLs from a specified Google Sheet.
3.  **Crawl and Extract Content:** Uses Dumpling AI to crawl each website, extract the main content, and return structured data, including title, URL, and content.
4.  **Split Results:** Splits the extracted results into individual items for processing.
5.  **Map Data:** Maps and extracts relevant data fields (title, URL, content) from the Dumpling AI response.
6.  **Combine Articles:** Formats all extracted article data into a single prompt for the GPT-4o model.
7.  **Generate Newsletter:** Employs GPT-4o to create a compelling subject line and an HTML-formatted newsletter body with summaries of each article.
8.  **Send Newsletter:** Sends the generated newsletter via Gmail to the specified recipient.

## Services

-   **Google Sheets:** Used to store and retrieve the list of website URLs to crawl.
-   **Dumpling AI:** A web crawling service that extracts content from websites.
-   **OpenAI (GPT-4o):** Utilized to generate a subject line and summarize articles in an HTML newsletter format.
-   **Gmail:** Used to send the generated newsletter.

## Hashtags

#n8n #automation #AINewsletter #webcrawling #GPT4o
