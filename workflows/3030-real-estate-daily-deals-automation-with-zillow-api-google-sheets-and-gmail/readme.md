# Real Estate Daily Deals

## Use cases:

- **Daily Real Estate Deal Monitoring:** Automatically searches Zillow for new real estate listings matching specific criteria and calculates potential investment returns.
- **Rental Investment Analysis:** Fetches Zestimates for rental properties, performs investment calculations, and stores the data in a Google Sheet for tracking.
- **Automated Email Alerts:** Sends a daily email summarizing the best real estate deals based on investment potential.

## How it works:

1.  **9am Trigger:** The workflow starts with a schedule trigger that runs every day at 9 AM.
2.  **Set Parameters:** This node likely sets parameters for the Zillow search, such as location, price range, and property type. However, the parameters are not visible with the code provided.
3.  **Zillow Search:** The workflow uses an HTTP Request node to search Zillow for real estate listings based on the parameters set in the previous step.
4.  **Split Out:** The Split Out node separates the search results into individual items for processing.
5.  **RentZestimate:** An HTTP Request node fetches the Zestimate (estimated rent) for each property from Zillow.
6.  **Investment Calculator:** The Code node performs calculations to determine the investment potential of each property based on price, estimated rent, and other factors.
7.  **Google Sheets:** The calculated investment data for each property is written to a Google Sheets spreadsheet.
8.  **Gmail:** An email is sent with a summary of the best real estate deals found.

## Services:

-   Zillow API (via HTTP Request)
-   Google Sheets
-   Gmail

## Hashtags:

#n8n #realestate #automation #investment #deals
