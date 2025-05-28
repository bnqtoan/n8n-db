# Zotero Collection Articles Extractor

## Use cases:

*   **Extracting articles from a specific Zotero collection for analysis:** Researchers or writers can use this workflow to automatically retrieve a list of articles from a Zotero collection and process the data for further research, literature reviews, or content creation.
*   **Creating a backup or inventory of Zotero collections:** Users can extract data to create a local copy of their Zotero library or generate a structured inventory of their collections.
*   **Populating a database or spreadsheet with Zotero collection data:** Automate exporting collection data to other tools or platforms for reporting, collaboration, or integration with other research workflows.

## How it works:

1.  **Manual Trigger:** The workflow starts when you manually trigger it using the "When clicking ‘Test workflow’" node.
2.  **User ID Setup:** The "User ID" node sets the Zotero user ID. You need to replace "FILL WITH USER ID" with your actual Zotero user ID (obtained from Zotero Web settings).
3.  **Fetch Collections:** The "Collections" node retrieves a list of collections from the Zotero API for the specified user ID. It requires an API key set up in the HTTP Header Authentication.
4.  **Select Collection:** The "Select Collection" node filters the collections based on a specific collection key.  You need to replace "FILL WITH COLLECTION KEY" with the key of the desired Zotero collection.
5.  **Initialize Loop:** The "Set Loop" node sets up the loop to handle large collections exceeding 100 items.  It calculates the number of loops required based on the total number of items in the collection.
6.  **Conditional Check:** The "If" node checks if the current loop count is less than the maximum loop count.
7.  **Get Articles (Loop):** The "Get Articles" node retrieves articles from the selected collection in batches of 100.  It uses the loop count to paginate through the collection.
8.  **Increment Loop:** The "Loop Discount" node increments the loop counter after fetching each batch of articles.
9.  **Merge Articles:** The "Merge 100+" node merges the batches of articles into a single stream of data.
10. **Filter (Optional):** The "Filter" node allows you to filter the articles based on specific criteria.
11. **Edit Fields (Optional):** The "Edit Fields" node allows you to select and rename specific fields from the articles for clarity or compatibility.

## Services:

*   Zotero API

## Hashtags:

#n8n #Zotero #API #Automation #DataExtraction
