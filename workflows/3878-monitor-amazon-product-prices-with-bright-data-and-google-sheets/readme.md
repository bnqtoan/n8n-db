# Amazon Product Monitoring Workflow

## Use cases:

- **Price Tracking:** Automatically monitor the prices of specific Amazon products and update them in a Google Sheet for analysis and comparison.
- **Inventory Monitoring:** Use the workflow to monitor product availability. Although not explicitly present in this example, Bright Data can be configured to also extract inventory data and update it in the Google Sheet.
- **Competitive Analysis:** Track pricing changes of competitor products by using their ASINs and URLs in the Google Sheet.

## How it works:

1.  **Schedule Trigger:** The workflow is triggered on a schedule (defined in the "Schedule Trigger" node).
2.  **Read data from Google Sheet:** Reads a list of product URLs, ZIP codes, and ASINs from a Google Sheet. The Google Sheet should contain the columns: “Product URL,” “ZIP code,” and “ASIN.”
3.  **Process URLs by batch of 10s:** Splits the URLs into batches of 10 to avoid overwhelming the Bright Data API.
4.  **Combine the batch:** after running all the URLs it joins all the data in one execution.
5.  **Initiate request from URLs:** Sends a request to the Bright Data API to initiate data extraction for the products.
6.  **Space the request by 1 second:** Waits for 1 second before sending the next batch of requests to comply with API rate limits.
7.  **Wait:** Pauses the workflow to allow Bright Data to process the data extraction request.
8.  **Check Status by Snapshot ID:** Checks the status of the Bright Data snapshot using the snapshot ID returned by the "Initiate request from URLs" node.
9.  **Check the status of snapshot:** if the status is running loops back to `Wait` node, if the status is ready goes forward to `Get the data` node.
10. **Get the data:** Retrieves the extracted product data from Bright Data.
11. **Update the records by ASIN:** Updates the "Price" column in the Google Sheet with the latest prices extracted by Bright Data, matching the rows based on the "ASIN".

## Services:

-   **Google Sheets:** Used for storing and updating product information.
-   **Bright Data API:** Used for extracting product data (price, availability, etc.) from Amazon.

## Hashtags:

#n8n #automation #webscraping #amazon #productmonitoring
