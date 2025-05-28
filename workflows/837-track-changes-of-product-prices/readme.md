# My Workflow

## Use cases:

- **Price Monitoring and Alerting:** Tracks the prices of products on various websites and sends an email notification when the price drops below a certain threshold. This is useful for consumers looking to snag deals on specific items.
- **Competitor Price Analysis:** Regularly monitors competitor pricing for specific products and stores the data for analysis. Useful for businesses trying to stay competitive.
- **Inventory Replenishment Trigger:** Automatically checks the price and availability of key components from suppliers. Trigger purchase orders when prices are favorable and stock is low.

## How it works:

1.  **Initialization and Scheduling:** The workflow starts with a Cron node that triggers the process every 15 minutes and an initialization node.
2.  **Item List:** A "changeME" Function Item node defines a list of items to watch, including their URLs, CSS selectors for extracting the price, and currency.
3.  **Loop through Items:** The workflow iterates through each item in the list. The "initItem" node prepares the data for each item in the loop.
4.  **Fetch Webpage Content:** The HTTP Request node fetches the HTML content of the product page from the URL specified for the current item.
5.  **Extract Price:** The HTML Extract node extracts the price from the fetched HTML content using the CSS selector defined for that item.
6.  **Price Validation:** Check if the price exists and convert into number using "getActualPrice" function item.
7. **Check existing saved data** checkifexists node verify if the file exists and the IF1 node route to save or update flows.
8.  **Compare and Notify:** The workflow reads existing price data from a file. If the extracted price is lower than the stored price, an email notification is sent via the Email Send node.
9.  **Update and Save:** The new price is saved to the file, updating the historical price data.
10. **Continue Loop**: The IF node at the end of the flow checks if the loop should continue by looking at the `canContinue` flag.
11. **Error Handling**: If the price cannot be extracted, an email is sent via the Email Send node.
12. **Clean data** The workflow have one node for cleaning all saved data.

## Services:

-   Websites (via HTTP Request)
-   Email (SMTP)

## Hashtags:

#n8n #automation #webscraping #pricetracking #emailalert
