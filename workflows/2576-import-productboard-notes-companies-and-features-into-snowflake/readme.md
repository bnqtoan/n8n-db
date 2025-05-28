# Import Productboard Notes, Companies and Features into Snowflake

## Use cases:

*   **Centralized Product Insights:** Consolidate Productboard data (notes, companies, features) into Snowflake for comprehensive analysis alongside other business data.
*   **Automated Reporting:** Generate weekly reports on new product insights and unprocessed feedback directly within Snowflake, and notify the team via Slack.
*   **Data-Driven Product Decisions:** Enable data scientists and analysts to query and analyze Productboard data in Snowflake to identify trends, prioritize features, and improve product strategy.

## How it works:

1.  **Data Extraction (Productboard):** The workflow starts with a scheduled trigger (weekly) that activates the data import process. It fetches data from Productboard using the HTTP Request node for `features`, `companies`, and `notes`. Pagination is handled automatically using the API's `nextURL` to retrieve all records.
2.  **Data Transformation (Set Nodes):** For each of the Productboard objects fetched, there are nodes dedicated to manually mapping the fields to appropriate names.
3.  **Data Splitting (SplitOut Nodes):** The data received from Productboard is in JSON format with all items into one property (data). These nodes, splits the data into individual items for further processing.
4.  **Data Loading (Snowflake):**
    *   The workflow first truncates and recreates tables in Snowflake: `PRODUCTBOARD_NOTES`, `PRODUCTBOARD_COMPANIES`, `PRODUCTBOARD_FEATURES`, and `PRODUCTBOARD_NOTES_FEATURES`.
    *   The extracted data is then loaded into Snowflake tables via `Update` nodes.
    *   A `splitInBatches` node splits the data for notes and features to handle large data volume.
5.  **Note-Feature Association:** Creates the `PRODUCTBOARD_NOTES_FEATURES` table by extracting the feature IDs related to each note, combining these IDs, and then loading the combined data into the table.
6.  **Slack Notification:** After the data import, a query is executed against Snowflake to get the number of new notes in the last 7 days, as well as the number of unprocessed notes. This data is then sent to a Slack channel using a formatted message with the number of notes and a link to a Metabase dashboard (not directly integrated, link is just added to the slack message).

## Services:

*   Productboard API
*   Snowflake
*   Slack

## Hashtags:

#n8n #automation #productboard #snowflake #dataetl
