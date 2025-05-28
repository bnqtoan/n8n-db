# USDT TRC20 Wallet Tracker

## Use cases:
- **Real-time Transaction Monitoring:** Track incoming USDT (or other TRC20 tokens) transactions to a specific wallet address and get notified of new transactions.
- **Wallet Activity Reporting:** Generate a report of all USDT transactions received by a wallet within a specific timeframe (last 15 minutes in this case).
- **Personal Finance Tracking:** Automatically log and categorize incoming USDT transactions for personal accounting or expense tracking purposes.

## How it works:

1.  **Schedule Trigger:** The workflow starts with a `Schedule Trigger` node, which runs every 15 minutes.
2.  **Wallet Configuration:** The `Edit Fields` node stores your TRC20 wallet address and the number of transactions to retrieve per request.
3.  **TronScan API Request:** The `TronScan API` node makes a request to the TronScan API to fetch USDT transaction data related to the specified wallet address. It retrieves the last N transactions (defined in the "Edit Fields" node).
4.  **Split Out:** The `Split Out` node takes the JSON response from the API and splits the `token_transfers` array into individual items for processing.
5.  **Filter Transactions:** The `Filter` node filters the transactions to only include those that were received in the last 15 minutes and where the `to_address` matches the wallet address you provided.
6.  **Final Results:** The `Final Results` node structures each transaction, keeping only the required fields and renaming some fields for clarity.  It also uses the wallet address specified in the `Edit Fields` node to indicate "Your Wallet Address" in the results.
7.  **Aggregate:** The `Aggregate` node combines all the filtered and formatted transaction records into a single list.

## Services:

*   **TronScan API:** Used to retrieve transaction data for a given TRC20 wallet address.

## Hashtags:

#n8n #automation #TRC20 #USDT #Tronscan
