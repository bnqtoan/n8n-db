# Extract Business Leads from Google Maps with Dumpling AI to Google Sheets

## Use cases:

- **Market Research:** Identify potential business locations or analyze the competition in a specific area by extracting business details from Google Maps.
- **Lead Generation:** Generate leads for sales or marketing campaigns by gathering contact information (phone, website) of businesses based on keywords and location.
- **Real Estate Analysis:** Evaluate commercial properties by collecting data on nearby businesses, their ratings, and popularity.

## How it works:

1.  **Manual Trigger:** The workflow starts with a manual trigger, allowing you to initiate the process whenever needed.
2.  **Search Google Maps via Dumpling AI:** Sends a POST request to the Dumpling AI API to search Google Maps using a specified query (e.g., "best restaurants in New York").  The API key is stored in a credential for security.
3.  **Split Places List for Processing:** The Dumpling AI API returns a JSON object containing an array of places. This node splits the array into individual place objects for further processing.
4.  **Save Results to Google Sheet (Place Info):**  Appends the extracted data (name, address, rating, website, phone number, etc.) for each place to a specified Google Sheet. The Google Sheet document ID and sheet name are configured in the node.

## Services:

-   **Dumpling AI:** Used to extract data from Google Maps based on search queries.
-   **Google Sheets:** Used to store the extracted business leads in a structured format.

## Hashtags:

#n8n #automation #googlemaps #dumplingAI #googlesheets
