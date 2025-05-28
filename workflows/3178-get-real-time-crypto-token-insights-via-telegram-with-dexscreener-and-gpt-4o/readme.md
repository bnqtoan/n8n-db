# Blockchain DEX Screener Insights Agent

## Use cases:

- **Real-time DEX Insights:** Provide users with up-to-date information on token profiles, boosted tokens, trading pairs, and liquidity pools on decentralized exchanges (DEXs).
- **Token Analysis and Research:** Assist traders and investors in researching and analyzing tokens by fetching relevant data from DexScreener based on specific queries or token addresses.
- **Alerting and Monitoring:** Notify users about significant changes in token boosts, orders, or pool activities via Telegram based on predefined criteria.

## How it works:

1.  **Triggers:** The workflow starts with a `Telegram Trigger` or `When chat message received` node, which listens for incoming messages from a Telegram chat or other platform.
2.  **Session ID:** The `Adds SessionId` node extracts the chat ID from the incoming message to maintain a session for the conversation.
3.  **Agent Interaction:** The `Blockchain DEX Screener Insights Agent` node is the core of the workflow. It receives the user's query from Telegram and uses an AI agent powered by `OpenAI Chat Model` (specifically, `gpt-4o-mini`) to determine the best DexScreener tools to use for answering the query.  The `Window Buffer Memory` node provides memory for the AI agent.
4.  **DexScreener API Calls:** Based on the user's query and the agent's logic, the workflow uses various `DexScreener` nodes (`DexScreener Latest Token Profiles`, `DexScreener Latest Boosted Tokens`, `DexScreener Top Token Boosts`, `DexScreener Search Pairs`, `DexScreener Check Orders Paid for Token`, `DexScreener Get Pairs by Chain and Pair Address`, `DexScreener Token Pools`, `DexScreener Pairs by Token Address`) to fetch data from the DexScreener API. Each of these nodes performs a specific API call, adhering to rate limits and using appropriate parameters.
5.  **Response:** The `Telegram` node sends the AI agent's response, containing the requested information from DexScreener, back to the user via Telegram. The response includes attribution (optional).

## Services:

-   **DexScreener API:** Provides real-time data on decentralized exchanges, including token profiles, boosted tokens, trading pairs, and more.
-   **Telegram API:** Used for receiving user queries and sending responses.
-   **OpenAI API:** Powers the AI agent with the gpt-4o-mini model, enabling natural language understanding and tool selection.

## Hashtags:

#n8n #automation #blockchain #DEX #DexScreener
