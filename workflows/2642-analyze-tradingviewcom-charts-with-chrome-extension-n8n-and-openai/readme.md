# chrome extension backend with AI

## Use cases:

- **Automated Stock Chart Analysis:** Users can upload a stock or cryptocurrency chart image from a Chrome extension, and this workflow automatically provides a simplified technical analysis, making it easier for novice traders to understand market trends.
- **Real-time Trading Insights:** Integrate the Chrome extension into trading platforms, allowing users to get instant, AI-powered analysis of charts directly within their trading environment.
- **Educational Tool for Traders:** Provide a tool where new traders can upload charts and receive explanations of market movements and technical indicators in simple terms, aiding their learning process.

## How it works:

1.  **Webhook:** The workflow starts when a POST request is received at the specified webhook URL (`/e9a97dd5-f1e7-4d5b-a6f1-be5f0c9eb96c`). This request likely comes from a Chrome extension, sending a base64 encoded image of a stock or crypto chart.
2.  **OpenAI:** The base64 image is sent to the OpenAI node. The OpenAI node uses the GPT-4O-MINI model and a custom prompt: "You are an expert financial analyst tasked with providing an advanced technical analyses of a stock or crypto currency chart provided. Your analysis will be based on various technical indicators and will provide simple insights for novice traders. Just explain to traders were you expect the market is moving. Also warn them this is not a binding advice. Make sure to explain everything in infant language.". It analyzes the image and generates a simplified technical analysis.
3.  **Respond to Webhook:** The analysis from OpenAI is then sent back as a response to the initial webhook request. The `Respond to Webhook` node sends the content of the AI's analysis as plain text.

## Services:

-   **OpenAI API:** Used for analyzing the stock or cryptocurrency chart image and generating a simplified technical analysis.

## Hashtags:

#n8n #automation #AI #trading #stockanalysis
