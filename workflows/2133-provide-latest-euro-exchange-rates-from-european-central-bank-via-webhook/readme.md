# Euro Exchange Rate Workflow

## Use cases:

*   **Real-time Exchange Rate Information:** Fetch the latest Euro exchange rates against other currencies for use in financial applications, dashboards, or reports.
*   **Currency Conversion API:** Provide an API endpoint that accepts a currency code and returns the corresponding exchange rate, allowing users to easily convert amounts.
*   **Automated Alerts:** Monitor specific exchange rates and trigger notifications when they reach a certain threshold, enabling timely decision-making.

## How it works:

1.  **Incoming Webhook Trigger:** Listens for incoming HTTP requests on the `/eu-exchange-rate` endpoint. It extracts URL query parameters if they exist.
2.  **Get latest Euro exchange rates:** Retrieves the latest Euro exchange rates from the European Central Bank (ECB) website. A random URL parameter is added to prevent caching.
3.  **Convert XML to JSON:** Converts the XML response from the ECB into JSON format for easier data manipulation.
4.  **Split Out Data:** Parses the nested json to return each currency.
5.  **If Webhook Trigger has URL query:** Checks if the incoming webhook request contains URL query parameters.
6.  **Filter the currency symbol:** If query parameters exist, it filters the exchange rates based on the requested currency symbol provided in the query.
7.  **Respond Asked Item:** Sends the exchange rate for the requested currency as a response to the webhook request.
8.  **Respond All Items:** If no query parameters are provided, it sends all exchange rates as a response to the webhook request.

## Services:

*   European Central Bank (ECB) API (via HTTP Request)

## Hashtags:

#n8n #automation #exchangerate #euro #API
