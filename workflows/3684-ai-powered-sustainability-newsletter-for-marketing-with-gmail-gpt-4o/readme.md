# EU Sustainability News Digest Workflow

## Use cases:

- **Curated Sustainability Newsletter:** Automatically compiles and sends a daily or weekly newsletter featuring the latest sustainability-related news from the EU Commission website.
- **Sustainability News Monitoring:** Tracks and records sustainability-related articles from the EU Commission in a Google Sheet for analysis and reporting.
- **Automated Content Discovery:** Identifies and flags articles related to sustainability among a large volume of daily news releases from the EU Commission.

## How it works:

1.  **Trigger:** The workflow starts at 08:30 AM using a Schedule Trigger node.
2.  **Data Extraction:** It queries the EU Commission's news page (`https://commission.europa.eu/news-and-media/news_en`) using an HTTP Request node and extracts article blocks from the HTML content.
3.  **HTML Parsing:** The HTML content is parsed to extract key information such as title, link, date, type, description, image, and reading time using the HTML Extract node.
4.  **Filtering by Date and Type**: The If node filters articles based on their date and type. It verifies if the article's date matches a specific date (5 days prior to the current date) and if the type is "News article."
5.  **AI-Powered Classification:** Each article is passed through an AI Agent (Langchain Agent node) that uses a chat model (OpenAI Chat Model3 node) to classify whether the article is about sustainability. The AI model analyzes the title and description.  The structured output parser converts the string into JSON format.
6.  **Flagging:** The "Sustainability Flag" node records the boolean result (true/false) from the AI classification.
7.  **Data Recording:** The article details and the sustainability flag are merged and appended to a Google Sheet using the Google Sheets node.
8.  **Email Generation:** If the article is flagged as "sustainability" in Google Sheet, the workflow generates an HTML email body containing a summary and links to the articles.
9.  **Email Sending:**  Finally, the workflow sends the generated HTML email to a specified recipient via the Gmail node.

## Services:

-   **EU Commission Website:** Source of news articles.
-   **Google Sheets:** Used for recording article data and sustainability classifications.
-   **OpenAI:** Used for AI-powered classification of articles.
-   **Gmail:**  Used to send the generated news digest emails.

## Hashtags:

#n8n #automation #workflow #sustainability #news
