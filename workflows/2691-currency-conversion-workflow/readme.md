# Currency Conversion Workflow

## Use cases:

- **Real-time Currency Conversion:** Provide users with up-to-date currency exchange rates via a webhook trigger.
- **Dynamic Pricing:** Integrate into e-commerce platforms to display product prices in different currencies based on real-time conversion rates.
- **Financial Reporting:** Automate the conversion of financial data from one currency to another for reporting purposes.

## How it works:

1.  **Capture Conversion Query (Webhook):** The workflow starts when a request is sent to the specified webhook URL. This node captures the incoming request, which is expected to contain the currency conversion query (e.g., base currency, target currency, and amount).
2.  **Fetch Exchange Rate (HTTP Request):**  An HTTP Request node uses data from the webhook to fetch the current exchange rate from an external API or website (the URL isn't specified in the JSON, but it's implied).
3.  **Extract Conversion Data (HTML Extract):** This node parses the data received from the HTTP request to extract the relevant currency conversion information. This step is needed if the HTTP request returns HTML content from which the data need to be extracted.
4.  **Format Currency Response (Set):** The extracted conversion data is formatted into a user-friendly response using the Set node. This might include calculations, rounding, and adding currency symbols.
5.  **Send Conversion Response (Respond to Webhook):** Finally, the formatted currency conversion response is sent back to the original requester via the Respond to Webhook node.

## Services:

-   External API for currency exchange rates (e.g. exchangerate.host, CurrencyBeacon, Open Exchange Rates)

## Hashtags:

#n8n #automation #currency #webhook #exchangeRate
