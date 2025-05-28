# Summing USD Amounts

## Use cases:

*   **Simple Transaction Aggregation:** Calculate the total value of a series of transactions in USD, useful for summarizing daily sales or expense reports.
*   **Budget Monitoring:** Aggregate individual expenses to track spending against a budget, providing a real-time overview of financial performance.
*   **Data Processing Pipeline:** As part of a larger data processing pipeline, sum specific amounts from different sources for reporting or analysis.

## How it works:

1.  **Trigger:** The workflow starts with a manual trigger, initiated by clicking 'execute' in n8n.
2.  **Generate Mock Data:** The "Mock data" Function node generates an array of JSON objects, each containing an `amount_USD` field with a numeric value. This simulates receiving data from an external source.
3.  **Sum Amounts:** The "Summing function" Function node iterates through the array of JSON objects, extracts the `amount_USD` value from each object, and calculates the total sum.
4.  **Output Total:** The "Summing function" node returns a single JSON object with the `total_value` field, representing the aggregated sum of all `amount_USD` values.

## Services:

*   None - This workflow operates solely within n8n, using its built-in nodes for data generation and processing.

## Hashtags:

#n8n #automation #workflow #dataaggregation #summation
