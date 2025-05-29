# My Workflow

## Use cases:

- **Automated Customer Support via SMS:** Automatically answers customer inquiries received via SMS by leveraging website content to provide relevant and accurate responses.
- **Proactive Website Content Updates for AI Agent:** Regularly updates an AI agent's knowledge base by scraping website content, ensuring the agent is always equipped with the latest information.
- **Personalized SMS Responses:** Tailors SMS replies based on the context of the conversation and the user's specific needs, providing a more engaging and helpful customer experience.

## How it works:

1.  **Schedule Website Scraping or Triggered by SMS:** The workflow starts either on a schedule, scraping the specified website, or by a webhook triggered by an SMS reply from GoHighLevel (GHL).
2.  **Scrape Website Content:** The workflow scrapes the target website's homepage and its sitemap (if available) to extract all the links.
3.  **Extract and Filter Links:** The scraped HTML content and/or sitemap are parsed to extract links and filter them to ensure they point to the relevant pages of the website.
4.  **Fetch Content from Each Link:** Each valid link is visited, and the HTML content is extracted.
5.  **Vectorize Content and Store in Vector Database:** The text content from each page is converted into vector embeddings and stored in an in-memory vector database.
6.  **Receive SMS via Webhook:** When an SMS reply is received via GHL, a webhook triggers the workflow.
7.  **Look Up Contact in GHL:** The workflow uses the contact ID from the SMS to retrieve the contact's information from GHL.
8.  **Query AI Agent:** The SMS text is sent to the AI Agent, which uses the vector database and Redis chat memory to generate a relevant response.
9.  **Send SMS Reply:** The generated response is sent back to the customer via SMS using the GHL API.

## Services:

-   **GoHighLevel (GHL):** Used for receiving SMS messages and sending replies.
-   **Bright Data:** Used to scrape website content (or HTTP Request with N8N cloud).
-   **OpenAI:** Used for embeddings and AI Agent.
-   **Redis:** Used for storing chat memory.

## Hashtags:

#n8n #automation #AIagent #SMS #GoHighLevel #WebScraping
