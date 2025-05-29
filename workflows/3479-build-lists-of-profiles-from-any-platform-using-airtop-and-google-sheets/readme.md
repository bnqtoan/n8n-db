# List Builder

## Use cases:

- **Lead Generation:** Automatically identify and compile lists of key individuals (e.g., influencers, experts) in a specific niche or industry based on search queries.
- **Competitor Analysis:** Gather information on competitors or related businesses by searching for lists of companies or individuals in a specific market.
- **Research & Data Collection:** Build a database of profiles and relevant URLs for research purposes by extracting data from online lists.

## How it works:

1.  **Trigger:** The workflow starts with a "When clicking ‘Test workflow’" node, which is manually triggered for testing or can be replaced with a scheduled trigger for automated execution.
2.  **Set Parameters:** The "Parameters" node sets the values for "who" (e.g., "Top 'Build in Public' influencers") and "where" (e.g., "X", likely meaning Twitter) to use as query parameters.
3.  **Get URLs from Search:** The "Get urls" node uses the Airtop service to perform a Google search using the "who" and "where" parameters. It extracts up to 10 non-sponsored search result URLs that lead to lists of the specified individuals on the specified platform.
4.  **Format Results:** The "Format results" node parses the JSON response from Airtop and extracts the URLs from the search results.
5.  **Get People from URLs:** The "Get people" node uses Airtop to extract information (name, handle/ID, and URL) from each of the URLs obtained in the previous step, extracting up to 20 profiles from each page.
6.  **Deduplicate Results:** The "Dedupe results" node removes duplicate entries based on the extracted URLs, ensuring a unique list of profiles. It also cleans the URLs.
7.  **Add to Spreadsheet:** The "Add to spreadsheet" node appends the extracted and deduplicated data (Name, ID or Handle, URL, Who?, Where?, Added on) to a Google Sheet.

## Services:

-   Google Sheets
-   Airtop

## Hashtags:

#n8n #automation #leadgeneration #webscraping #datascience
