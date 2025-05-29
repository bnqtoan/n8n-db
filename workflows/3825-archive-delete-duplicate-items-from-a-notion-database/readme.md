# 🧹 Archive (delete) duplicate items from a Notion database

## Use cases:
- **Content Management:** Automatically archive duplicate entries in a Notion database used for managing blog posts, articles, or other content, ensuring a clean and organized content repository.
- **Task Management:** Remove redundant tasks or projects from a Notion task database to avoid confusion and maintain a focused workflow.
- **Customer Relationship Management (CRM):** Archive duplicate contact entries in a Notion CRM database to ensure data accuracy and prevent redundant outreach efforts.

## How it works:
1.  **Trigger:** The workflow starts either daily ("Every day" node) or when a new page is added to the Notion database ("When a page is added to the database" node).
2.  **Get Pages:** It fetches all pages from a specified Notion database ("Get pages from database" node).
3.  **Format Items:** It extracts and formats the `id` of each page and assigns the value of a specified property to the field `property_to_check` ("Format items properly" node).  **Important:** The user must configure the `property_to_check` field in this node to specify which Notion property will be used to identify duplicates.
4.  **Aggregate Items:** All retrieved page data are aggregated into a single item containing a list of pages ("Aggregate all items" node).
5.  **Filter Duplicates:**  A code node ("Filter duplicates") identifies duplicate pages based on the `property_to_check` value.  It creates a list of only the duplicate entries.
6.  **Archive Pages:**  The workflow then archives (deletes) the duplicate pages from the Notion database using their IDs ("Archive pages" node).

## Services:
-   Notion

## Hashtags:
#n8n #Notion #Automation #DuplicateRemoval #DataManagement
