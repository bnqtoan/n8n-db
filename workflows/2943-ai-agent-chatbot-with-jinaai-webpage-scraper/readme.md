# 🌐🪛 AI Agent Chatbot with Jina.ai Webpage Scraper

## Use cases:

- **Real-time Information Retrieval:** A user needs to quickly find specific information from a website and wants to get a summarized answer directly within a chat interface. For example, "What are the installation steps for Ollama on Windows according to the official documentation at `https://github.com/ollama/ollama`?"
- **Customer Support Automation:** Integrate the chatbot into a customer service platform to automatically answer frequently asked questions by scraping relevant pages from the company's website.
- **Research Assistant:** Use the chatbot to gather and analyze data from multiple websites for research purposes, providing a summarized overview of the findings.

## How it works:

1.  The workflow starts when a user sends a chat message to the "When chat message received" node, which acts as a trigger.
2.  The message is passed to the "Jina.ai Web Scraping Agent" node, which uses AI to determine if the user's question requires scraping a website. The agent is pre-configured with a prompt to guide its behavior, focusing on using the `scrape_website` tool.
3.  If web scraping is needed, the "Jina.ai Web Scraper Tool" node (an HTTP Request tool) extracts the URL from the user's prompt and scrapes the content of the specified website. The scraped content is then passed back to the agent.
4.  The "Window Buffer Memory" node stores the conversation history, providing context for subsequent interactions.
5.  The "gpt-4o-mini" language model node processes the scraped data and generates a clear, accurate, and concise response based on the user's initial question and the information retrieved from the website. The AI Agent utilizes the language model to get the final answer for the user.

## Services:

-   Jina AI: Utilized indirectly through the `https://r.jina.ai/{url}` endpoint for web scraping.
-   OpenAI: Used via the "gpt-4o-mini" language model for generating responses.

## Hashtags:

#n8n #AIagent #WebScraping #Chatbot #Automation
