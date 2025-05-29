# day9_getting_updated_in_crypto

## Use cases:
- **Cryptocurrency investment analysis:** Provide real-time buy/sell/hold recommendations based on price movements, volatility, and other market indicators.
- **Portfolio risk assessment:** Categorize cryptocurrencies by risk level (High, Medium, Low, Unknown) to help investors diversify their portfolio.
- **Automated crypto market monitoring:** Continuously monitor the cryptocurrency market and receive alerts when specific price or volatility thresholds are met.

## How it works:
1.  **Webhook trigger:** Listens for incoming webhook requests to initiate the workflow.
2.  **Fetch Crypto Data:** Retrieves market data for the top 10 cryptocurrencies from the CoinGecko API.
3.  **Loop Over Items:** Iterates through each cryptocurrency in the fetched data.
4.  **Calculate Market Metrics:** Calculates volatility score, market cap to volume ratio, price to ATH ratio, and a composite market score for each cryptocurrency.
5.  **Conditional Price Checks:**
    *   **IF 24h Price Up >5%:** Checks if the price increased by more than 5% in the last 24 hours.
    *   **IF 24h Price Down >5%:** Checks if the price decreased by more than 5% in the last 24 hours.
    *   **IF High Volatility:** Checks if the volatility score is above a defined threshold.
6.  **Set Data Nodes:** Sets the price action, signal, recommendation, and investment strategy of each coin based on its 24h Price and volatility Score.
7.  **Merge Results:** Merge all result in order to group them together.
8.  **Switch by Market Score:** Determines the risk rating for each cryptocurrency based on its composite market score.
9.  **Set Risk Rating Nodes:** Assigns a risk rating (High, Medium, Low, or Unknown) and adjusts the investment strategy accordingly.
10. **Final Merge:** Merge the final results together.
11. **Format Final Analysis:** Formats the analysis results into a user-friendly summary, including price changes, market metrics, recommendations, and investment strategies.
12. **Collect All Analyses**: Groups all the analyzed coins for portfolio-level insights.
13. **Generate Portfolio Summary**: Creates a summary of the cryptocurrency market analysis, including buy/sell signal counts, risk distribution, a top opportunity, and a detailed analysis of each coin.
14. **Split Out:** Split the different result to have them separate
15. **Respond to Webhook:** Responds to the initial webhook request with the generated portfolio summary and individual coin analyses.

## Services:
*   CoinGecko API: Used to fetch cryptocurrency market data.

## Hashtags:
#n8n #cryptocurrency #automation #investment #marketanalysis
