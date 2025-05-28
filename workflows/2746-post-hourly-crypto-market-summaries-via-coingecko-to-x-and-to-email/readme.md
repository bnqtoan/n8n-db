# My Workflow

## Use cases

*   **Real-time Cryptocurrency Price Updates:** Automatically fetch and post hourly updates about Bitcoin prices on X (formerly Twitter).
*   **Personal Cryptocurrency Monitoring:** Receive hourly email notifications about Bitcoin prices for personal tracking.

## How it works

1.  **Trigger:** The workflow starts with the "Crypto Hourly Trigger" node, which executes the workflow every hour.
2.  **Fetch Bitcoin Data:** The "Fetch Bitcoin Data" node makes an HTTP request to retrieve Bitcoin price data from an external API (the specific API is not defined in provided data, assuming a default one).
3.  **Format Crypto Message:** The "Format Crypto Message" node takes the data fetched from the API and formats it into a readable message. This node likely contains JavaScript code to extract and structure the relevant information.
4.  **Post Crypto Update on X:** The "Post Crypto Update on X" node uses the Twitter API to post the formatted message to a specified Twitter account.
5.  **Send Crypto Update Email:** The "Send Crypto Update Email" node sends the formatted message to a specified Gmail address.

## Services

*   **X (formerly Twitter):** Used for posting Bitcoin price updates.
*   **Gmail:** Used for sending Bitcoin price updates via email.
*   **Cryptocurrency API (Unspecified):** An external API is used to fetch Bitcoin price data.

## Hashtags

#n8n #automation #cryptocurrency #bitcoin #twitter #email
