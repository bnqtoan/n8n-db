# Generate Leads with Google Maps - AlexK1919

## Use cases:

- Generate a list of potential leads for a specific business category in a target zip code. For example, find all "Italian Restaurants" in "85001" zip code.
- Populate a CRM or database with business information (name, address, phone number, website, rating) extracted from Google Maps.
- Monitor and track business listings in a specific area for market research purposes.

## How it works:

This workflow automates the process of extracting business leads from Google Maps and storing them in a Google Sheet. Here's a breakdown:

1.  **Trigger:** The workflow is triggered manually.
2.  **Settings**: Reads configuration settings from a Google Sheet, including the Google Sheets URL, the sheet name containing zip codes to search in, and the sheet name containing the Google Maps categories to search for.
3.  **Get Zip Codes:** Retrieves a list of zip codes from a specified Google Sheet.
4.  **Loop Zips:** Iterates through each zip code in the list.
5.  **Get Subcategory**: Retrieves a list of subcategories from Google Sheets
6.  **Loop Subcats**: loops through the subcategories
7.  **Set Zip:** Adds the current zip code to the data for the current iteration.
8.  **Google Maps API Request:** Sends a request to the Google Maps API, searching for businesses matching the specified category in the selected zip code.
9.  **If Empty**: checks to see if the request came back empty
10. **Place Array:** Splits the array of places returned by the Google Maps API into individual items for further processing.
11. **Set Place ID:** Assigns the `place_id` from Google maps
12. **Remove Duplicates:** Removes duplicate entries based on `place_id` field.
13. **Add rows in Google Sheets:** Appends the extracted business information to a specified Google Sheet.
14. **GS - Get Status:** get the status of the search.
15. **Exponential Backoff:** Implements an exponential backoff strategy with retries in case of API rate limits.
16. **Check Max Retries:** If the max retries are triggered it will stop and error otherwise update google sheets.
17. **Update Status to Success:** update the status once it runs successfully.

## Services:

-   **Google Maps API:** Used to search for business listings.
-   **Google Sheets:** Used to store zip codes, search categories, settings, and extracted business information.

## Hashtags:

#n8n #automation #googlemaps #leadgeneration #googlesheets
