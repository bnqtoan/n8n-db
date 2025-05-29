# Tesla Quant Trading AI Agent n8n

## Use cases:

- **Automated TSLA Trading Report Generation:** Generate swing-trading reports for Tesla (TSLA) stock automatically through Telegram commands.
- **Real-Time Technical Analysis and Sentiment Integration:** Combines real-time market data with news sentiment to provide comprehensive trading recommendations.
- **Personalized Trading Assistant:** Provides users with a personalized AI trading agent accessible via Telegram, offering specific trade strategies for TSLA.

## How it works:

1.  **Telegram Trigger:** The workflow starts when a user sends a message to the Telegram bot.
2.  **User Authentication:**  The workflow validates the user's Telegram ID against a pre-defined list to ensure only authorized users can trigger the report generation. **Important:** You need to replace the placeholder ID in the "User Authentication" node with your actual Telegram ID.
3.  **Timestamp Capture:** The current date and time are captured for session tracking.
4.  **Session Metadata Generation:**  A unique session ID based on the Telegram chat ID and the current date/time is created.
5.  **AI Agent Invocation:** The main "Tesla Quant Trading AI Agent" node is invoked, which uses a GPT model (specified as `gpt-4o-mini`) to generate a structured TSLA swing-trading report. This node utilizes the defined prompt and system instructions to behave as a seasoned quantitative analyst.
6.  **Data Gathering:** The AI Agent uses two `Tool Workflow` nodes to get supporting data:
    - **Tesla Financial Market Data Analyst Tool:**  Retrieves real-time technical indicators (RSI, BBANDS, SMA, EMA, ADX, MACD) and candlestick patterns for TSLA from various timeframes. This is sourced from a separate n8n workflow (Work Drive — Tesla Financial Market Data Analyst)
    - **Tesla News and Sentiment Analyst Tool:** Scrapes news headlines related to Tesla from sources like Google News and Yahoo Finance, and analyzes the sentiment. This is sourced from a separate n8n workflow (Work Drive — Tesla News and Sentiment Analyst)
7. **Short-Term Memory Module:**  The workflow uses memory to help the AI agent track message history and previous context during the session.
8.  **Message Splitting:** If the generated report exceeds Telegram's message length limit (4000 characters), it splits the message into smaller chunks.
9.  **Telegram Output:**  The final report (or its chunks) is sent back to the user via Telegram.

## Services:

-   **Telegram API:** Used for receiving commands and sending reports to users.
-   **OpenAI API:** Used to run the GPT model for generating trading reports.
-   **Alpha Vantage API:** (Implied) Used by the "Tesla Financial Market Data Analyst Tool" workflow to get market data.
-   **RSS Feeds (Google News, Yahoo Finance, Electrek, CleanTechnica, TeslaNorth):** (Implied) Used by the "Tesla News and Sentiment Analyst Tool" workflow to collect news data.

## Hashtags:

#n8n #automation #trading #AI #Tesla
