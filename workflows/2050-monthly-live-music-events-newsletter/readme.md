# Monthly Event Newsletter

## Use cases:

*   **Automated Event Digest:** Automatically compile and send a monthly newsletter featuring local events to subscribers.
*   **Personalized Event Recommendations:** Send targeted event recommendations based on user-specified locations.
*   **Curated Event Calendar:** Generate a shareable HTML calendar of upcoming events for a specific venue or city.

## How it works:

1.  **Schedule Trigger (🤖 Each month):** Initiates the workflow on a monthly basis.
2.  **Setup location and email:** Sets the location and email address.
3.  **Get events page (Get events page):** Retrieves the events page from a specified location. It iterates through pages using the `url` parameter.
4.  **Get all events from the page (Get all events from the page):** Extracts HTML data related to events from the page retrieved in the previous step.
5.  **Split events (Split events):** Splits the extracted events data into individual items for further processing.
6.  **Last page? (Last page?)**: Conditional to check if all pages has been read using the length of the items
7.  **Wait 3s (Wait 3s)**: Wait 3 seconds
8.  **Collect all results (Collect all results):** Collects results from the "Split events" node.
9.  **Get each event data (Get each event data):** Extracts specific details such as date, artist, support, location, and event link from each event item.
10. **💄 Lick the stamp (💄 Lick the stamp):** Formats the extracted event data into an HTML table.
11. **✉️ Send it (✉️ Send it):** Sends an email with the generated HTML table of events to the specified email address using Gmail.

## Services:

*   **Gmail:** Used to send the monthly event newsletter.
*   **Songkick** (Inferred): The workflow is designed to scrape event data from a Songkick-like website.

## Hashtags:

#n8n #automation #eventnewsletter #webscraping #gmail
