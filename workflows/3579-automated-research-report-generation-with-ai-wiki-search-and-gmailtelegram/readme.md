# Automated Research Report Generation with OpenAI, Wikipedia, Google Search, and Gmail/Telegram

## Use Cases

- **Market Research:** Automatically generate reports on market trends, competitor analysis, or emerging technologies by providing relevant keywords.
- **Academic Research:** Streamline the research process by generating reports summarizing scholarly articles, news highlights, and Wikipedia data on specific topics.
- **Content Creation:** Create comprehensive blog posts, articles, or presentations by automatically gathering and summarizing information from various online sources.

## How it Works

1. **Input Validation:** The workflow starts by validating the user's research query to ensure it meets the minimum length requirement (3 characters).
2. **Query Refinement:** The input query is refined using an OpenAI Chat Model to improve its clarity and focus.
3. **Search Query Generation:** Based on the refined query, the workflow generates five related search queries to broaden the research scope using OpenAI.
4. **Research Agent:** The workflow uses a Research AI Agent to perform comprehensive research on the topic, utilizing various tools:
   - **Search News:** Fetches recent news articles related to the topic.
   - **Wikipedia:** Gathers foundational knowledge from Wikipedia.
   - **Google Search Web:** Searches the web for general information.
   - **SerpApi:** Searches Google Scholar for academic papers.
5. **Data Aggregation:** The research data (introduction, summary, key findings, news highlights, scholarly insights, Wikipedia summary, and sources) is parsed and split into individual items.
6. **Merge and Format:** The split research data is merged and aggregated into a structured JSON format.
7. **PDF Generation:** The workflow generates an HTML template for the PDF report, including a cover page, introduction, summary, key findings, and sources. The HTML is then converted into a PDF using the PDFShift API.
8. **Delivery:** The generated PDF is downloaded and sent via email using Gmail and via Telegram.
9. **Metadata Storage**: Topic, Search Queries, Sources and Timestamp are stored in a Google sheet.

## Services

- **OpenAI:** Used for query refinement and generating research content.
- **Wikipedia:** Used as a source for foundational knowledge.
- **Google Search:** Used to search the web for general information.
- **Google Scholar (via SerpApi):** Used to search for academic papers.
- **NewsAPI:** Used to fetch recent news articles.
- **PDFShift:** Used to convert HTML content to PDF.
- **Gmail:** Used to send the generated research report via email.
- **Telegram:** Used to send the generated research report via Telegram.
- **Google Sheets:** Used to store report metadata (topic, sources, timestamp)

## Hashtags

#n8n #automation #research #openai #pdfgeneration
