# Gumroad Clientbell

## Use cases:

- **Automated Customer Welcome:** Automatically send a thank you message via Telegram to new customers after they purchase a product on Gumroad.
- **Sales Data Logging:** Record Gumroad sales data into a Google Sheets spreadsheet for tracking and analysis.
- **Conditional Email Sending:** Based on criteria defined in the "If" node, send a personalized thank you email to customers using Gmail.

## How it works:

1.  **Gumroad Sales Trigger:** The workflow starts when a new sale is recorded on Gumroad.
2.  **This is SET to Clean & Extract:** This node processes and extracts relevant information from the Gumroad sales data, such as buyer name, email, product bought, and price paid.
3.  **Google Sheets:** The extracted sales data is then added to a Google Sheets spreadsheet.
4.  **Telegram:** A thank you message is sent to the customer via Telegram.
5.  **If:** The workflow evaluates conditions (likely based on the sale data) to determine whether to send a personalized email.
6.  **Prepare a manual email to replicate:** If the conditions in the "If" node are met, this node prepares the content for a personalized thank you email.
7.  **Gmail:** The personalized email is sent to the customer using Gmail.

## Services:

-   Gumroad
-   Google Sheets
-   Telegram
-   Gmail

## Hashtags:

#n8n #automation #gumroad #sales #customers
