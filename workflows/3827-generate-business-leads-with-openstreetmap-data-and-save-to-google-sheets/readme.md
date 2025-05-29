# Overpass Lead Generation System

## Use cases:

- **Lead Generation for Businesses:** Automatically extract contact information (emails, websites) for businesses in specific locations and industries based on Overpass API queries. This could be used to build targeted marketing lists.
- **Market Research:** Gather data about businesses in a particular area to understand market trends, competitive landscapes, and identify potential business opportunities.
- **Data Enrichment:** Enhance existing business databases with up-to-date contact information and website details, ensuring data accuracy and completeness.

## How it works:

1.  **Trigger:** The workflow is initiated either manually via "When clicking 'Test workflow'" node, or by another workflow via "When Executed by Another Workflow" node.
2.  **Input Data:** The workflow starts with a list of locations and keywords (e.g., city and business type) obtained from the trigger node. The "Loop Over Items1" node then iterates through each location/keyword pair.
3.  **External Workflow Execution:** For each location/keyword pair, the "Execute Workflow" node triggers another workflow.
4.  **HTTP Request:** The "When Executed by Another Workflow" node receives the location and keyword, and the "HTTP Request" node queries the Overpass API to retrieve business data based on the provided criteria.
5.  **Data Extraction:** The "Extract List" node extracts relevant information from the API response.
6.  **Data Organization and Filtering:** The workflow then organizes the extracted data, checks for website and email availability, and filters out entries without contact information.
7.  **Website HTML Retrieval:** If a website is present, the "Get Website HTML" node retrieves the HTML content of the website for further scraping.
8.  **Email Scraping:** The "Scrape HomePage" node extracts email addresses from the website's HTML. The extracted email addresses are then cleaned.
9.  **Data Appending and Merging:** Different "Merge" nodes are used to combine data from various branches of the workflow, appending website and email information to the initial business data.
10. **Google Sheets Integration:** Finally, the processed data, including business names, locations, contact information, and website URLs, is written to a Google Sheet.

## Services:

-   **Overpass API:** Used to query OpenStreetMap data and retrieve business information.
-   **Google Sheets:** Used to store the generated leads and their contact information.

## Hashtags:

#n8n #automation #leadgeneration #overpassapi #googlesheets
