# Compare 2 SQL datasets

## Use cases:

- **Data Reconciliation:** Identify discrepancies between two datasets extracted from a SQL database over different time periods (e.g., sales data from 2003-2004 vs. 2004-2005). This is useful for ensuring data consistency after migrations or updates.
- **Trend Analysis:** Determine how customer order patterns have changed between two different timeframes (2003-2004 and 2004-2005 in this case). This could help businesses understand customer behavior shifts and adjust marketing strategies.
- **Data Auditing:** Verify the accuracy of aggregated data calculations (sums and counts) across different periods by comparing datasets and highlighting any inconsistencies.

## How it works:

1.  **Manual Trigger:** The workflow starts when manually executed using the "When clicking \"Execute Workflow\"" node.
2.  **Fetch Datasets from MySQL (Orders from 2003 and 2004 & Orders from 2004 and 2005):** Two "MySQL" nodes execute SQL queries to retrieve order data from a MySQL database for different year ranges.
    -   "Orders from 2003 and 2004" fetches data for the years 2003 and 2004, grouping by `customerNumber` and `year`, and calculating the total amount and order count for each customer in each year.
    -   "Orders from 2004 and 2005" does the same for the years 2004 and 2005.
3.  **Change ordercount:** The ordercount is set to 1 using the "Set" node.
4.  **Compare Datasets:** The "Compare Datasets" node compares the two datasets retrieved from the MySQL database. It merges the datasets based on the `customerNumber` and `year` fields. The multipleMatches option is set to "all" meaning that all matches will be included in the result.
5.  **Output:** The "Compare Datasets" node outputs the comparison results, which can then be further processed or exported.

## Services:

-   MySQL Database

## Hashtags:

#n8n #automation #SQL #dataComparison #database
