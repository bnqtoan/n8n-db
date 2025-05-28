# Linkedin Chrome Extensions

## Use cases:

-   **Security Audits:** Identify potentially malicious or vulnerable Chrome extensions installed by employees within an organization by comparing them against the list of extensions Linkedin tracks.
-   **Data Privacy Compliance:** Understand the data access patterns of Chrome extensions used by employees to ensure compliance with data privacy regulations.
-   **Competitive Analysis:** Analyze Chrome extensions used by professionals in specific industries to gain insights into their workflow and tools.

## How it works:

1.  **Trigger:** The workflow starts manually when you click the "Test workflow" button.
2.  **Set extension IDs var:** A Code node defines a large JSON array (gg) containing Chrome extension IDs and file paths extracted from LinkedIn pages. It transforms this array into a list of items for processing.
3.  **Load already processed items:** Fetches data from a Google Sheet containing a list of already processed Chrome extension IDs. This Google Sheet uses the "chrome_ext" document ID.
4.  **Exclude processed items:** The "Merge" node compares the initial list of Chrome extension IDs with the list of already processed IDs from the Google Sheet. It keeps only the IDs that are not present in the Google Sheet, ensuring only new items are processed.
5.  **Limit:** Limits the number of processed items to a maximum of 200 per workflow run to prevent overloading the system.
6.  **Loop Over Items:** Splits the list of Chrome extension IDs into batches of 2 for parallel processing.
7.  **SERP Request:** For each Chrome extension ID, an HTTP Request node queries the Google SERP (Search Engine Results Page) API for the extension's details using the query `"site:chromewebstore.google.com " + <extension_id>`. It utilizes RapidAPI's SERP API and requires a valid API key to function. It is configured to continue execution even if the request fails.
8.  **Upsert to Google Sheets:** This node appends or updates data in a Google Sheet, including the extension ID, URL, title, snippet, resource file, and a timestamp of when the item was processed, retrieved from the SERP API response if it was found. Uses the same google sheet as before with the "chrome_ext" document ID.

## Services:

-   **Google Sheets:** Used to store and retrieve the list of processed Chrome extension IDs, as well as to save the discovered extension details.
-   **RapidAPI (SERP API):** Used to query Google's search results for Chrome extension details.

## Hashtags:

#n8n #automation #workflow #linkedin #chromeextensions
