# Get the price of BTC in EUR and send an SMS when the price is larger than EUR 9000

## Use cases

*   **Price Alerting:** Get notified via SMS when the price of Bitcoin in EUR reaches or exceeds a specified threshold (in this case, 9000 EUR).
*   **Automated Monitoring:** Continuously monitor the Bitcoin price and trigger actions based on price fluctuations, without manual intervention.
*   **Trading Signals:** Use the SMS notification as a signal for potential trading decisions.

## How it works

This workflow automates the process of checking the Bitcoin price in EUR and sending an SMS notification if the price goes above 9000 EUR.

1.  **Cron:** The workflow starts with a "Cron" node that triggers the workflow every minute.
2.  **CoinGecko:** The "CoinGecko" node retrieves the current price of Bitcoin (BTC) in EUR from the CoinGecko API.
3.  **IF:** The "IF" node checks if the retrieved Bitcoin price in EUR is greater than or equal to 9000.
4.  **Twilio:** If the condition in the "IF" node is true (the price is greater than or equal to 9000 EUR), the "Twilio" node sends an SMS to a specified phone number with a message containing the current Bitcoin price.
5.  **NoOp:** If the condition in the "IF" node is false (the price is lower than 9000 EUR), the workflow does nothing, and the "NoOp" node is triggered.

## Services

*   **CoinGecko API:** Used to fetch the current price of Bitcoin in EUR.
*   **Twilio:** Used to send SMS notifications.

## Hashtags

#n8n #automation #cryptocurrency #bitcoin #pricealert
