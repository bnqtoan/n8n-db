# MONDAY GET FULL ITEM

## Use cases:

- **Comprehensive Item Data Extraction:** Retrieve all relevant information about an item in Monday.com, including its column values, linked pulses (related items), and subitems, for reporting or analysis purposes.
- **Data Synchronization:** Use the extracted item data to update information in other systems or databases, ensuring consistency across platforms.
- **Customized Notifications:** Trigger notifications based on changes to an item's data, such as status updates, due dates, or assigned personnel, leveraging the full context of the item.

## How it works:

This workflow retrieves a full item from Monday.com, including column values, linked items, and subitems, then combines all the data into one JSON output.

1.  **Trigger:** The workflow is initiated by the "Execute Workflow Trigger" node and requires a `pulse` value to be set (item ID).
2.  **Get Item:** The workflow gets the item data from Monday.com using the "GET ITEM" node based on the provided `pulse` ID.
3.  **Get Column Data:** Three "GET ALL COLUMNS" nodes extract the column values associated with the item, linked pulses, and subitems. They transform the data into a more accessible format, indexing column values by ID or name.
4.  **Get Relations:** The workflow finds all the board relations with the node "GET ALL RELATIONS"
5.  **Linked Items and Subitems Processing:** The workflow extracts linked pulses (using "GET LINKEDPULSES1" and "SPLIT LINKED PULSES1" to handle multiple linked items) and subitems (using "PULL SUBITEMS" and "SPLIT SUBITEMS1" to handle multiple subitems). It then fetches the details of each linked pulse and subitem using the mondayCom node
6.  **Data Aggregation:** The workflow uses multiple "Merge" and "Aggregate" nodes to combine the item's main data, column values, linked pulses, and subitems into a single JSON output.
7.  **Output:** The final output contains all the item's data, with column values indexed by ID and name, along with an array of linked pulse and subitem details.

## Services:

-   Monday.com

## Hashtags:

#n8n #mondaydotcom #automation #workflow #boardrelation
