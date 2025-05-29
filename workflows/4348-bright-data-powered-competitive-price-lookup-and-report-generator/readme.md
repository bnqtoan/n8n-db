# Google Shopping Price Comparison and Email Report

## Use Cases

- **Price Monitoring:** Track the prices of specific items on Google Shopping over time to identify the best deals.
- **Competitive Analysis:** Compare the prices of products across different sellers to understand the market landscape.
- **Automated Deal Alert:** Receive email notifications when the price of a desired item drops below a certain threshold.

## How it works

1.  **Trigger:** The workflow starts when you manually trigger it using the "When clicking ‘Test workflow’" node.
2.  **Read Google Sheets:** Reads a list of product names (specifically the "title") from a specified Google Sheet using the "Google Sheets" node.
3.  **Loop Over Items:** Iterates through each product name from the Google Sheets using the "Loop Over Items" node.
4.  **Snapshot Request (Bright Data):** For each product, a request is sent to Bright Data to filter the Google Shopping dataset based on the product "title" and ensures that the price is not null. It uses the "Snapshot Request" node.
5.  **Wait & Poll (Bright Data):** The workflow waits for 30 seconds using the "Wait 30s - Polling Bright Data" node to allow Bright Data to gather the Google Shopping data and create the snapshot.
6.  **Snapshot Progress (Bright Data):** Retrieves the metadata of the created Bright Data snapshot using the "Snapshot Progress" node.
7.  **Check Snapshot Status:** It checks the status of the snapshot using the "If - Checking status of Snapshot" node. If the status is "running", it loops back to the wait node ("Wait 30s - Polling Bright Data").
8.  **Error Handling:** If the snapshot status is "failed," the "If - Checking status for errors" node triggers the "Error message (replace with webhook/other notifier if needed)" node, which sets an error message that will be included and send to the loop over node.
9.  **Snapshot Content (Bright Data):** Once the snapshot is ready, it retrieves the content of the Bright Data snapshot with the "Snapshot Content" node.
10. **Check if snapshot ready:** If there is no products in the snapshot, the workflow go back to the Loop to continue.
11. **Extract Data:** The "Code - Extract Necessary Data" node filters the results to only include items with prices, and extracts the price, seller name, title, and URL.
12. **Compare Prices and Generate Report:** The extracted data is passed to the "Compare Prices and Generate Report" node, which uses the Gemini AI model to analyze the listings and identify the top sources offering the lowest prices.
13. **Generate HTML:** The markdown from the previous node is transformed to HTML using the "Markdown" node, then formatted with the "Code - Build HTML" node.
14. **Email Report:** Finally, an email report with the price comparison and rankings is sent to a specified email address using the "Email Report" node.

## Services

-   Google Sheets
-   Bright Data
-   Google Gemini
-   SMTP (for sending emails)

## Hashtags

#n8n #automation #googleshopping #pricecomparison #emailreport
