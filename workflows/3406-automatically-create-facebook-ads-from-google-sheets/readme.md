# Facebook Ad Automation from Google Sheets

## Use cases:

- **Automated Ad Creation from Spreadsheet Data:** Automatically create Facebook Ads based on data (like ad copy, image URLs, and targeting parameters) stored in a Google Sheet.  This is useful for quickly launching multiple ads with different variations.
- **Campaign Management & Scaling:**  Easily scale advertising efforts by updating ad details in a Google Sheet and having the changes automatically reflected in newly created Facebook Ads. Great for A/B testing or seasonal campaigns.
- **Dynamic Ad Updates:**  Use data from Google Sheets to update ad creatives and parameters based on real-time information, such as product availability or pricing changes.

## How it works:

1.  **Google Sheets Trigger:** The workflow starts when a new row is added or updated in a Google Sheet.  This trigger captures data like ad copy, image URLs, and other relevant information.
2.  **Specify variables:** Sets the variables based on data from Google Sheets.
3.  **Create an Ad Set:** The workflow creates a new ad set on Facebook based on the data from Google Sheets.
4.  **Get image:** Retrieves an image from a specified URL, likely the ad creative image.
5.  **Upload Ad image:** Uploads the retrieved image to Facebook's Ads platform as an ad creative asset.
6.  **Facebook Ad Creative:** Creates a new ad creative on Facebook, using the uploaded image and other information.
7.  **Create an Ad:** Creates a new Facebook Ad linked to the ad creative.
8.  **Update Google Sheets:** After successfully creating the ad, it updates the Google Sheet with information about the created ad, such as the Ad ID.

## Services:

-   Google Sheets
-   Facebook Graph API (Facebook Ads)

## Hashtags:

#n8n #automation #facebookads #googlesheets #marketingautomation
