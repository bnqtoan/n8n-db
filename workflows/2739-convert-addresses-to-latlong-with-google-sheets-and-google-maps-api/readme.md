# Convert Addresses to LatLong with Google Sheets and Google Maps API

## Use cases:

*   **Address Geocoding:** Automatically convert a list of addresses in a Google Sheet into geographic coordinates (latitude and longitude) for mapping or analysis.
*   **Location-Based Services:** Enrich customer or business data in Google Sheets with latitude and longitude information for targeted marketing or service delivery.
*   **Data Validation:** Verify and standardize address data in Google Sheets by geocoding them and identifying potential errors or inconsistencies.

## How it works:

1.  The workflow is initiated manually by clicking "Test workflow".
2.  It retrieves addresses from a specified Google Sheet using the "Extract The Places from Google Sheet" node. This node reads data, including a "row\_number", from the Google Sheet.
3.  For each address, the "Using Google Map API to Return Lat Long Back" node calls the Google Maps API to perform geocoding. It constructs a URL with the address as a query parameter and sends the request to the Google Maps API. The API key is used for authentication.
4.  The Google Maps API returns the latitude and longitude coordinates.
5.  The "Update Lat-Long in Each Places" node then updates the Google Sheet with the returned latitude and longitude values, using the corresponding "row\_number" to match the correct row.

## Services:

*   Google Sheets
*   Google Maps API

## Hashtags:

#n8n #automation #geocoding #googlemaps #googlesheets
