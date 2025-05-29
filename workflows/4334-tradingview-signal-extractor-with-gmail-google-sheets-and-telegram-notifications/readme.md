# Kite TradingView Alert Automation

## Use cases:

- **Automated Tracking of TradingView Alerts:** Automatically captures trading signals from TradingView, sent via email, and logs them into a Google Sheet for performance tracking and analysis.
- **Real-time Telegram Notifications:** Receives TradingView alerts, extracts key information, and sends immediate notifications to a Telegram channel, enabling timely trading decisions.
- **Email Filtering and Organization:** Efficiently filters important trading-related emails from TradingView, ignoring irrelevant communications and maintaining a clean inbox.

## How it works:

1.  **Email Trigger:** The workflow starts with the "Email Received" node, which triggers when a new email arrives in a specified Gmail inbox.
2.  **Mark as Read:** The "Gmail" node marks the email as read based on the id.
3.  **Clean Email:** The "Clean Email" node extracts the sender's email address from the email's "From" field. It handles cases where the "From" field is missing or invalid.
4.  **Verify Mail:** The "Verify Mail" node checks if the email is from `noreply@tradingview.com`.
5.  **Get Email:** The "Get Email" node fetches the email.
6.  **Extract Company Name:** The "Extract Company Name" node parses the email subject to extract the stock symbol from TradingView alerts (e.g., "Alert: Price crossed for AAPL").
7.  **Get Current Date & Time:** The "Current Date & Time" node fetches the current date and time.
8.  **Formatted Date & Time:** The "Formatted Date & Time" node formats the current date into a "DD" format.
9.  **Google Sheets Update:** The "Google Sheets" node appends a row to a specified Google Sheet, logging the extracted stock symbol and formatted date.
10. **Send Message:** The "Send Message" node sends a Telegram message containing the email's snippet.

## Services:

*   Gmail
*   Google Sheets
*   Telegram

## Hashtags:

#n8n #automation #tradingview #googlesheets #telegram
