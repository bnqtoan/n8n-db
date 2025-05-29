# Monitor USDT ERC-20 Wallet Balance with Etherscan and Telegram Notifications

## Use cases:

- **Real-time Balance Monitoring:** Track your USDT (ERC-20) wallet balance and receive instant Telegram notifications when the balance changes.
- **Security Alerts:** Get notified of any unexpected changes in your wallet balance, potentially indicating unauthorized transactions.
- **Automated Reporting:** Keep a log of your USDT balance over time for personal finance tracking or accounting purposes (by extending the workflow to log the data).

## How it works:

1.  **Schedule:** The workflow starts with a "Check Balance Every 5 Minutes" node, which triggers the workflow every 5 minutes.
2.  **Configuration:** The "userData" node stores your wallet address, Etherscan API key, and the USDT ERC-20 token address.
3.  **Fetch Balance:** The "Fetch USDT Balance from Etherscan" node uses the Etherscan API to retrieve the current USDT balance of your wallet.  It dynamically constructs the API request using the data from the "userData" node.
4.  **Balance Check:** The "balanceChecker" node compares the current balance with the previously stored balance (using workflow static data, which persists across workflow executions). It determines if the balance has changed and stores the current balance for the next check.
5.  **Conditional Notification:** The "Balance Changed?" node checks if the `balanceChanged` flag is true.
6.  **Telegram Notification:**
    *   If the balance has changed, the "Balance Changed." node sends a Telegram notification with the wallet address, previous balance, and new balance.
    *   If the balance remains unchanged, the "Balance Not Changed." node sends a Telegram message confirming balance stability.

## Services:

-   **Etherscan API:** Used to fetch the USDT balance of the specified wallet address.
-   **Telegram:** Used to send notifications about balance changes.

## Hashtags:

#n8n #automation #cryptocurrency #USDT #Telegram #Etherscan
