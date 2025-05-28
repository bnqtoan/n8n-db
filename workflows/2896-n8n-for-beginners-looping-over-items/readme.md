# N8N for Beginners: Looping over Items

## Use cases:
- Web scraping multiple URLs: Extract data from a list of URLs, processing each one individually to gather information such as titles, descriptions, or prices.
- Data transformation and enrichment: Process a list of customer records, applying a series of transformations or enrichments to each record before loading them into a database or CRM.
- Sending personalized notifications: Iterate through a list of users and send each one a personalized email or SMS notification based on their specific data.

## How it works:

This workflow demonstrates how n8n handles looping over items, highlighting the difference between processing an unsplit array of strings (single item) vs. a split array (multiple items).

1.  **Manual Trigger:** The workflow starts with a Manual Trigger node, which is configured to receive a JSON payload containing an array of URLs.
2.  **Split Array of Strings into Array of Objects:** The Split Out node takes the `urls` array and transforms it into individual JSON objects, each containing a single URL.
3.  **Loop Over Items (Loop 1):** This node receives the original, unsplit array and processes it as a single item.
4.  **Loop Over Items (Loop 2):** This node receives the split array, iterating over each URL separately.
5.  **Add param1 to outputX:** A Code node adds a `param1` field to each item, demonstrating data modification within the loop.
6.  **Wait one second:** (just for show): Adds a 1 second delay per item in Loop Over Items 2
7.  **ResultX:** NoOp nodes are used to display the output at various stages, allowing you to observe the effect of each step.

## Services:

-   No external services are used in this workflow. It primarily demonstrates n8n's internal data manipulation capabilities.

## Hashtags:

#n8n #automation #workflow #looping #beginners
