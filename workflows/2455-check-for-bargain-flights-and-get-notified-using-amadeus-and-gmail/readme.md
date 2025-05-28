# Amadeus Flight Bargains

## Use cases:

- **Bargain Flight Hunting:** Automatically searches for flights below a specified price threshold between two locations and notifies you when a match is found.
- **Price Monitoring:** Continuously monitors flight prices for a specific route and alerts you when prices drop to your desired level.
- **Weekend Getaway Planning:** Set your origin and destination, along with a maximum price, and receive notifications about affordable flights for a spontaneous trip.

## How it works:

1.  **Schedule Trigger:** Initiates the workflow daily at 8:00 AM.
2.  **FromTo:** Sets the origin and destination airports (e.g., LHR to JFK).
3.  **Get Carrier Codes:** Retrieves the carrier codes from Amadeus API.
4.  **CarrierNameLookup:** Parses data of Carrier codes.
5.  **Get Dates:** Generates a list of dates to search for flights (7 and 14 days from today).
6.  **Loop Over Items:** Iterates through each date in the generated list.
7.  **Wait:** Pause the execution for 3 seconds to avoid rate limiting from Amadeus API.
8.  **Amadeus Flight Search:** Queries the Amadeus API for flights on the current date and origin/destination.
9.  **Merge & Extract:**
    *   Merges the result from the search.
    *   Extracts data fields like legs, time, duration, and price from the API response.
10. **Under Price:** Filters the results to only include flights with a price below $600.
11. **Gmail:** Sends an email notification with the flight details if a bargain is found.

## Services:

-   Amadeus API: Used for flight search and carrier code lookup.
-   Gmail: Used for sending email notifications.

## Hashtags:

\#n8n \#automation \#flights \#travel \#bargainFlights
