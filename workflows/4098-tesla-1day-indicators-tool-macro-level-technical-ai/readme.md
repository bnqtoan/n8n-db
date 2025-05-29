# Tesla 1day Indicators Tool n8n

## Use cases:
- **Automated Technical Analysis:** Automatically analyze daily technical indicators for Tesla (TSLA) to generate summaries of market conditions, trend states, and indicator values.
- **Integration with Trading Strategies:** Integrate the analysis results into automated trading strategies or dashboards for swing and position trading decisions.
- **Financial Reporting:** Generate structured JSON outputs for use in financial reports or data visualization tools.

## How it works:
1.  The workflow is triggered by another workflow, specifically the **Tesla Financial Market Analyst Tool**, receiving a `message` and `sessionId` as input.
2.  The **Tesla 1day Indicators Agent** node, powered by LangChain, takes the input `message` and uses it in conjunction with a detailed system message to define its role as a Tesla 1-Day Technical Indicators Analyst AI.
3.  The agent utilizes the **OpenAI Chat Model** node, configured with the `gpt-4.1` model, to process the input and generate insights.
4.  The **1day Data** node makes an HTTP request to a secured webhook endpoint (`https://treasurium.app.n8n.cloud/webhook/1dayData`) to fetch Tesla's technical indicators (RSI, BBANDS, SMA, EMA, ADX, MACD) from Alpha Vantage.
5.  The **Simple Memory** node maintains context across requests within the same session, enabling consistent logic between indicator evaluations.
6.  The agent processes the fetched data, along with its prompt and memory, to output a structured JSON response containing a summary of overall trend conditions and exact indicator values.

## Services:
-   **Alpha Vantage:** Used via a secured webhook to fetch technical indicator data for Tesla (TSLA).
-   **OpenAI:** Utilized via the OpenAI Chat Model node for natural language processing and reasoning.

## Hashtags:
#n8n #automation #workflow #finance #technicalanalysis
