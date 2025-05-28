# TEMPLATES

## Use cases:

- **Enriching Monday.com Items with Subitem Data:** Automatically retrieve and integrate detailed information from subitems linked to a main item in Monday.com. This allows for a comprehensive view of all related data in one place.
- **Aggregating Contact Information from Linked Boards:** Extract contact details from linked boards in Monday.com to create a consolidated contact list or for further processing in other applications.
- **Automated File Upload to Monday.com:** Streamline the process of attaching files to specific items in Monday.com, potentially based on data transformations or external triggers.

## How it works:

1.  **Trigger:** The workflow is initiated manually using the "When clicking "Test workflow"" trigger node.
2.  **Get Item Details:** The "GET ITEM" node retrieves details of a specific item from Monday.com using its item ID (5775061188).
3.  **Extract Linked Board Data:** The "GET BOARD RELATION" node retrieves information from the "Additional Contacts" column. The "GET LINKEDPULSES" node extracts linkedPulse IDs. These IDs are then split into individual linkedPulse IDs, and finally, the "PULL LINKEDPULSE" node fetches the data of each linked item.
4.  **Extract Subitems:** The "PULL SUBITEMS" node extracts subitem IDs from a specific column ("Subitems") in the main item's data.
5.  **Process Subitems:** The "SPLIT SUBITEMS" node splits the extracted subitem IDs into individual IDs. The "GET EACH SUBITEM" node then retrieves details for each subitem from Monday.com.
6.  **Convert to JSON File:** The "Convert to File" node converts the main item's data to a JSON file format.
7.  **Merge data:** "Merge" node merges the data from the main item and its converted JSON file.
8.  **File Upload (Disabled):** The "MONDAY UPLOAD" node (currently disabled) is intended to upload a file to Monday.com, using data from previous steps.
9.  **Extract Column Data:** The "COLUMN BY NAME" and "COLUMN BY ID" nodes retrieve specific column values by name ("Zoom Date") and ID ("person").

## Services:

-   Monday.com

## Hashtags:

#n8n #mondaydotcom #automation #workflow #subitems