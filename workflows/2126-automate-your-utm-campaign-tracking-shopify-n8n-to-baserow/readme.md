# Shopify order UTM to Baserow

## Use cases:

- Automatically track marketing campaign performance by capturing UTM parameters from Shopify orders and storing them in Baserow for analysis.
- Create a centralized database of customer acquisition data, linking specific orders to the marketing campaigns that drove them.
- Enhance customer segmentation and personalization strategies by understanding the sources and channels that attract different customer segments.

## How it works:

1.  **Schedule Trigger:** The workflow starts every day at 00:00.
2.  **Set Shopify Subdomain:**  Sets the Shopify subdomain to use for the API call. You need to set the subdomain in this node.
3.  **Get orders from Shopify:** Retrieves orders from Shopify for the previous day using a GraphQL query. The query fetches order details, including customer journey information and UTM parameters.
4.  **Split Shopify data into n8n items:** Splits the array of orders into individual n8n items for processing.
5.  **Transform incoming data structure:** Extracts and transforms relevant data from each order, including order name, UTM parameters (campaign, content, medium, source, term), and revenue.
6.  **Check if "Campaign" is present:** Checks if the "campaign" parameter exists in the UTM parameters.
7.  **Baserow:** If the "campaign" parameter exists, creates a new row in a specified Baserow table with the extracted order and UTM data.
8.  **No Operation, do nothing:** if the "campaign" parameter does not exists, do nothing.

## Services:

-   Shopify (via GraphQL API)
-   Baserow

## Hashtags:

#n8n #Shopify #Baserow #Automation #UTMTracking
