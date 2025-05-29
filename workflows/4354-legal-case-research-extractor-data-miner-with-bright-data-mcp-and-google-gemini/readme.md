# Legal Case Research Extractor, Data Miner with Bright Data MCP & Google Gemini

## Use cases:

- **Legal Research Automation:** Automate the process of gathering legal case information from court websites based on specific keywords or legal topics.
- **Cybercrime Law Monitoring:** Track legal cases related to IT laws and cybercrime, providing up-to-date information on relevant court decisions.
- **Competitive Legal Analysis:** Gather data on legal cases involving competitors or specific industries to inform legal strategies and risk assessment.

## How it works:

1.  **Trigger:** The workflow is initiated manually using the "When clicking ‘Test workflow’" node.
2.  **Bright Data MCP Setup:** The "List all tools for Bright Data" node retrieves available tools from Bright Data MCP.
3.  **Set URL:** The "Set the Legal Case Research URL" node defines the initial search URL on CourtListener and other variables like the webhook URL and base URL.
4.  **Initial Data Extraction:** The "Bright Data MCP Client For Legal Case Research" node uses Bright Data MCP to scrape the initial search results page from CourtListener.
5.  **Case Data Extraction with Gemini:** The "Case Extractor" node uses Google Gemini to extract key data points from the scraped content.
6.  **Structured Output Parser:** The "Structured Output Parser" and "Google Gemini Chat Model For Case Data Extract" node attempts to put the extracted data into a structured JSON format.
7.  **Data Structuring**: The "Code to output the collection of cases" node, extract the output of the LLM model from the previous step.
8.  **Looping:** The "Loop Over Items" node iterates through each case found on the initial search results page.
9.  **Detailed Case Scraping:** Inside the loop, the "Bright Data MCP Client For Legal Case Research Within Loop" node scrapes the individual case page using the URL constructed from the base URL and the case link.
10. **Detailed Case Content Extraction with Gemini:** The "HTML to Textual Data Extract Within Loop" and "Google Gemini Chat Model for HTML to Textual Data Extract Within the Loop" node extracts textual content from the scraped HTML using Google Gemini.
11. **Webhook Notification:** The "Webhook Notification for HTML to Textual Data Extract Within the Loop" node sends the extracted case content to a specified webhook URL.
12. **File Writing**: The "Write the case content to disk" and "Create a binary data for LinkedIn company info extract" writes the case content to a JSON file on disk.
13. **Waiting**: The "Wait" node will introduce a delay before scraping the next case details.

## Services:

*   **Bright Data MCP:** A platform for web scraping and data extraction.
*   **CourtListener:** A website providing legal case information.
*   **Google Gemini:** A large language model (LLM) used for extracting and structuring data.
*   **Webhook.site:** Used as a placeholder for receiving webhook notifications

## Hashtags:

#n8n #automation #legaltech #datamining #webscraping
