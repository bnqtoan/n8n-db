# Compare Datasets

## Use cases:

- **Data Reconciliation:** Identify discrepancies between two datasets containing similar information (e.g., customer lists, product catalogs) from different sources, allowing for data cleansing and merging.
- **Inventory Management:** Compare current inventory data with updated stock levels to identify items that need reordering or items with discrepancies.
- **A/B Testing Analysis:** Compare results from two different A/B test groups to see what the differences are.

## How it works:

1.  **Manual Trigger:** The workflow starts when you manually click the "Execute Workflow" button.
2.  **Dataset 1 & Dataset 2:** Two "Code" nodes create sample datasets. These datasets contain information about fruits and their colors.
3.  **Compare Datasets:** The "Compare Datasets" node takes the two datasets as input and compares them based on the "fruit" field. This node identifies items that are present in both datasets, only in the first dataset, only in the second dataset, and any differences within common items.
4.  **Output Exploration:** The results are categorized into different output streams of the "Compare Datasets" node, allowing you to analyze the differences and similarities between the datasets.

## Services:

-   None (This workflow primarily uses n8n's built-in nodes and does not interact with external services.)

## Hashtags:

#n8n #automation #datasets #datacomparison #workflow
