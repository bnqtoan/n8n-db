# AAVE Portfolio Professional AI Agent

## Use cases:

- **Automated DeFi Portfolio Monitoring:**  Monitor the health of Aave V3 positions across multiple wallets, receiving regular updates on key metrics like liquidation risk, health factor, and asset breakdowns.
- **Risk Management:**  Identify and alert users to potential liquidation risks based on health factors, enabling timely adjustments to their DeFi strategies.
- **Informative Reporting:**  Generate comprehensive reports on DeFi positions, summarizing complex data into easily understandable information for portfolio analysis and decision-making.

## How it works:

This workflow automates the process of monitoring Aave V3 DeFi positions for multiple wallets.  It begins with a `Schedule Trigger` that periodically starts the workflow. It fetches wallet addresses from a `Google Sheets` document, sets variables for the `Wallet_Address` and `current_date`. The workflow uses the Langchain `AAVE Portfolio Professional AI Agent` to generate a report with three `Moralis API` calls to fetch wallet DeFi data. Finally, the generated report is sent to a Telegram bot and `Gmail`, formatted for readability in each medium.

Key nodes:

- **Schedule Trigger:** Triggers the workflow execution based on a defined schedule.
- **Google Sheets:** Reads a list of Ethereum wallet addresses from a specified Google Sheet.
- **Edit Fields:** Sets the wallet address and current date, used for subsequent API calls.
- **AAVE Portfolio Professional AI Agent:**  An AI Agent that use the `OpenAI Chat Model` and the `getDefiSummary`, `getDefiPositionsSummary`, `getDefiPositionsByProtocol` nodes to fetch and analyze DeFi data related to Aave V3 positions for the given wallet.
- **Moralis API Nodes:** (`getDefiSummary`, `getDefiPositionsSummary`, `getDefiPositionsByProtocol`) Fetches data from the Moralis API, including a summary of DeFi protocols, position summaries, and detailed Aave V3 position information.
- **Format Email:** Formats the AI-generated output into HTML and plain text for email delivery.
- **Telegram:** Sends the formatted AI report to a Telegram chat.
- **Gmail:** Sends the formatted AI report to a specified Gmail address.

## Services:

- Google Sheets
- Moralis API
- OpenAI
- Telegram
- Gmail

## Hashtags:

#n8n #DeFi #Aave #Automation #PortfolioMonitoring
