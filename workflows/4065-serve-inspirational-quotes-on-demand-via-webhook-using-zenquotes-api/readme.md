# Serve Inspirational Quotes On-Demand via Webhook using ZenQuotes API

## Use cases:

*   **Inspirational Quote Service:** Provide a simple API endpoint to deliver random inspirational quotes to other applications or services.
*   **Automated Social Media Content:** Schedule posts to social media platforms with daily or hourly inspirational quotes fetched from the API.
*   **Personal Motivation App:** Integrate the workflow into a personal dashboard or application to display a new quote each time the application is opened.

## How it works:

1.  **Webhook:** The workflow starts with a "Webhook" node, which listens for incoming HTTP requests at a specific URL (`/c376e35b-80f3-4086-abec-d2c5a4501fb3`).
2.  **Get Random Quote from ZenQuotes:** Upon receiving a request, the "Get Random Quote from ZenQuotes" node makes an HTTP GET request to the ZenQuotes API (`https://zenquotes.io/api/random`) to retrieve random quotes (count=5 parameter is passed).
3.  **Format data:** The "Format data" node extracts the quote ("q") and author ("a") from the JSON response of ZenQuotes API and combines them into a formatted string: `"{{ $json.q }}" - {{ $json.a }}`. The new key `quotes` will contain the formatted data.
4.  **Send response:** Finally, the "Send response" node sends a JSON response back to the requester. The response includes the formatted quote.

## Services:

*   [ZenQuotes API](https://zenquotes.io/): Provides access to a collection of inspirational quotes.

## Hashtags:

#n8n #automation #webhook #API #inspirationalquotes
