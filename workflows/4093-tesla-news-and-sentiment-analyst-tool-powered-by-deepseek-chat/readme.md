# Tesla News and Sentiment Analyst Tool n8n

## Use cases:
- **Automated Sentiment Analysis for Trading:** This workflow can be used to automatically analyze news sentiment related to Tesla (TSLA) and generate trading signals based on whether the news is bullish, bearish, or neutral.
- **Real-time Monitoring of Tesla-related News:** Investors and analysts can use this workflow to continuously monitor news feeds and receive instant updates on the sentiment surrounding Tesla.
- **Risk Management:** Traders can use the workflow's sentiment analysis to incorporate news-driven sentiment into their risk management strategies.

## How it works:

1.  **Trigger:** The workflow is initiated by another n8n workflow, specifically the `Tesla Quant Trading AI Agent`. It receives two inputs: `message` (optional prompt context) and `sessionId` (to maintain memory context).
2.  **News Aggregation:** The workflow fetches Tesla-related news from five different RSS feeds using the RSS Feed Read node:
    *   Google News (Tesla/TSLA stock)
    *   Yahoo Finance (TSLA)
    *   Electrek (Tesla news)
    *   CleanTechnica (Tesla archive)
    *   TeslaNorth
3.  **AI-Powered Sentiment Analysis:** The aggregated news headlines are then fed into a DeepSeek Chat Model, which parses the headlines, detects the tone and narrative themes, and extracts structured summaries.  A Simple Memory node maintains short-term memory to avoid duplicate analysis.
4.  **Sentiment Classification and Summary:** The `Tesla News and Sentiment Analyst` agent combines the LLM output, classifies the overall sentiment as bullish, bearish, or neutral, and generates a 2-3 sentence summary highlighting major drivers. It also selects the top 3-5 headlines relevant to the analysis.
5.  **Structured Output:** The agent outputs the results in a strict JSON format containing the sentiment, summary, and top headlines.

## Services:

*   Google News
*   Yahoo Finance
*   Electrek
*   CleanTechnica
*   TeslaNorth
*   DeepSeek LLM API

## Hashtags:

#n8n #automation #Tesla #SentimentAnalysis #Trading
