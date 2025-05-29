# Telegram Tron Wallet Blacklist Checker

## Use cases:

*   **Real-time Blacklist Check:** Allow Telegram users to instantly check if a Tron wallet address is blacklisted before sending or receiving USDT.
*   **Scam Prevention:** Help users avoid interacting with potentially blacklisted addresses, reducing the risk of falling victim to scams or illicit activities.
*   **KYC/AML Compliance:** Integrate with internal systems to quickly verify wallet addresses against a blacklist during Know Your Customer (KYC) or Anti-Money Laundering (AML) processes.

## How it works:

1.  **Telegram Trigger:** The workflow starts when a user sends a message to the Telegram bot.
2.  **Check Wallet Address Format:** Validates that the Telegram message is a valid Tron address using a regular expression `T[A-Za-z1-9]{33}`.
3.  **Tron BlackList Stable Token Api Request:** If the wallet address format is valid, the workflow sends an HTTP request to the Tronscan API (`https://apilist.tronscanapi.com/api/stableCoin/blackList?blackAddress={{ $json.message.text }}`) to check if the address is blacklisted.
4.  **Check Api Response:** Processes the API response. If the `total` field in the response is greater than 0, it means the wallet is blacklisted. It then creates a message indicating whether the wallet is blacklisted or not.
5.  **Set Error Message (Wallet Address Format):** If the address is invalid the workflow sends a message indicating the user must enter a valid Tron address.
6.  **Telegram Send Message:** Finally, the workflow sends a message back to the user via Telegram, indicating whether the wallet address is blacklisted or prompting the user to enter a valid Tron address if they did not do so.

## Services:

*   Telegram
*   Tronscan API

## Hashtags:

#n8n #automation #telegrambot #tron #blacklist
