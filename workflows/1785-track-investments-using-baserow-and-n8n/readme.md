# Investment Portfolio Tracker

## Use cases:

- **Daily Investment Report:** Automatically fetches stock prices and sends a daily report of your investment portfolio's current value and changes to your email.
- **Portfolio Monitoring:** Keeps track of your investment values and alerts you to significant changes or when specific thresholds are met (requires modification to add conditional logic).
- **Scheduled Performance Review:** Generates a weekly or monthly performance report to help you analyze your investment strategy.

## How it works:

1.  **Trigger:** The workflow is triggered either manually via the "On clicking 'execute'" node or automatically on a schedule defined in the "Cron" node (daily at 7:15 AM on weekdays).
2.  **Fetch Investment Data:** The "Baserow" node retrieves a list of investments (ISIN, Count, Purchase Price etc) from a specified Baserow database and table.
3.  **Fetch Stock Prices:** For each investment, the "Fetch tradegate stock page" node retrieves the current stock price from Tradegate using the ISIN.
4.  **Parse Stock Prices:** The "Parse tradegate stock page" node extracts the Bid and Ask prices, WKN, ISIN, Currency and Name from the HTML content of the Tradegate stock page.
5.  **Format result:** The "Format result" node structures the data and calculates the current value of the investment based on the "Bid" price from Tradegate and the count from the Baserow database. It also copies the Name, ISIN, and Count from Baserow
6.  **Calculate change:** The "Calculate change" node calculates the absolute change and percentage change compared to the purchase price
7.  **Build HTML:** The "Build HTML" node takes the collected data and generates an HTML table containing the portfolio information.
8.  **Send Email:** The "SendGrid" node sends an email with the generated HTML table as the email body.

## Services:

-   **Baserow:** A no-code database platform used to store investment information (ISIN, Count, Purchase Price, Name).
-   **Tradegate:** A stock exchange where current stock prices are fetched.
-   **SendGrid:** An email delivery service used to send the investment report.

## Hashtags:

#n8n #automation #investments #stockmarket #portfolio
