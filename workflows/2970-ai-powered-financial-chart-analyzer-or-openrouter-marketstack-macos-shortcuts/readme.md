# Sell: Process Candlestick Chart Using OpenRouter-ChatGPT, MarketStack, SerpAPI

## Use cases:

- **Automated Stock Analysis:** Receive candlestick chart images via webhook and automatically generate market analysis reports, including potential buy/sell recommendations, using AI and financial data.
- **Real-time Trading Alerts:** Triggered by new candlestick patterns, the workflow analyzes market trends and sends alerts about potential trading opportunities.
- **Educational Tool:** Analyze user-submitted candlestick charts and provide insights and explanations for educational purposes.

## How it works:

1.  **Webhook:** The workflow is initiated by a webhook, which receives data, presumably including a candlestick chart image (likely base64 encoded).
2.  **Fields_Data:** This node likely prepares the incoming data from the webhook for subsequent processing, extracting relevant fields.
3.  **Base64\_To\_Binary\_Image:** Converts the base64 encoded image data into a binary image file.
4.  **AI Agent:** This is the core of the workflow. It uses a Langchain AI Agent to analyze the candlestick chart and generate a report.
5.  **OpenRouter Chat Model:** This node utilizes the OpenRouter Chat Model (likely ChatGPT or a similar LLM) to provide natural language processing capabilities to the AI Agent for analysis and report generation.
6.  **Window Buffer Memory:** This node provides the AI Agent with memory, so it can perform better on multiple requests over time.
7.  **Calculator:** This node provides mathematical calculation abilities to the AI Agent.
8.  **Marketstack:** Provides the AI Agent with financial data to make informed decisions.
9.  **SerpAPI:** Provides the AI Agent with search engine capabilities to retrieve extra information.
10. **Markdown:** Converts the AI Agent's response into Markdown format for readability.
11. **Respond to Webhook:** Sends the generated Markdown report back as a response to the initial webhook request.

## Services:

-   OpenRouter
-   MarketStack API
-   SerpAPI

## Hashtags:

#n8n #automation #trading #AI #marketanalysis
