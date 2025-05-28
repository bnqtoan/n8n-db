# AI Trading Agent with Technical Analysis

## Use cases:

- **Real-time Stock Analysis via Telegram**: Users can send a stock ticker to a Telegram bot and receive a detailed technical analysis, including candlestick patterns, RSI, and Stochastic RSI.
- **Scheduled Stock Analysis**: The workflow can be scheduled to automatically analyze a list of stocks from Airtable and provide periodic reports.
- **Voice-based Stock Analysis**: Users can send voice messages to the Telegram bot, which will be transcribed and used to request a stock analysis.

## How it works:

1.  **Telegram Trigger**: The workflow starts when a user sends a message to the Telegram bot.
2.  **Switch**: Determines if the message is text or voice.
    *   If **text**, it extracts the stock ticker.
    *   If **voice**, it downloads and transcribes the audio using OpenAI.
3.  **Set Text**: Assigns text from message or transcription to variable "text"
4.  **AI Agent**: An AI agent processes the input using a system message that defines its role as a financial analyst.  The agent can call the `GetChart` and `SaveTicker` tools.
5.  **Get Chart (Tool)**:  Gets chart using the Trading Agent workflow.
6.  **Trading Agent (Workflow)**: This workflow gets triggered by the "Get Chart" tool. It retrieves a stock chart image based on the ticker, chart style using the `chart-img.com` API.
    *   **Workflow Input Trigger**: Receive ticker and chart style as input
    *   **Set Values**:  Sets the ticker and chart_style
    *   **Get Chart URL**: Retrieves the chart image URL from chart-img.com based on ticker and chart style
    *   **Download Chart**: Downloads the chart image.
    *   **Technical Analysis**: Utilizes OpenAI to perform technical analysis on the downloaded chart, focusing on candlestick patterns, RSI, and Stochastic RSI.
    *   **Send Chart**: Sends the analyzed chart image to Telegram.
    *   **Response**: Creates a variable with the technical analysis
7.  **Save Ticker (Tool)**: Saves requested ticker to an Airtable database.
8.  **Send Analysis**: The AI agent uses the workflow's results to respond back to the user via Telegram.
9.  **Scheduled Analyses**:
    *   **Schedule Trigger**: Runs the workflow on a defined schedule
    *   **Get tokens**: Retreives all requested tickers from Airtable database
    *   **Loop Over Items**: Loops over the tickers retrieved from Airtable
    *   **Run Agent**: Sends the ticker to the AI Agent

## Services:

-   **Telegram API**: For receiving user messages and sending analysis results.
-   **OpenAI API**: For transcribing voice messages and performing technical analysis on charts.
-   **Airtable**: For storing and retrieving stock tickers (used in scheduled analysis).
-   **chart-img.com API**: For generating stock charts.

## Hashtags:

#n8n #automation #workflow #stockanalysis #tradingagent
