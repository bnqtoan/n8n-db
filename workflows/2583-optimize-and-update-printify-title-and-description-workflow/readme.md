# Printify Automation - Update Title and Description - AlexK1919

## Use cases:

- **Automated Product Listing Optimization:** Automatically refine product titles and descriptions in Printify to improve SEO and conversion rates across various e-commerce platforms (Shopify, Etsy, Amazon, TikTok Shops).
- **Seasonal Content Updates:** Quickly update product listings with seasonal content, like Christmas-themed descriptions, to boost sales during specific holidays or events.
- **A/B Testing Product Copy:** Generate multiple variations of product titles and descriptions to test which performs best, enhancing marketing strategies.

## How it works:

1.  **Trigger:** The workflow is triggered either manually or by an update in a Google Sheet, specifically when the "upload" column is set to "yes."
2.  **Fetch Brand Guidelines:** Sets the brand name, brand tone, and custom instructions to be used by the AI to tailor the title and descriptions.
3.  **Fetch Printify Shops and Products:** Retrieves a list of your Printify shops and then fetches the products for each shop.
4.  **Split and Loop Products:** Splits the product data and loops through each product to process them individually.
5.  **Split - id, title, desc:** Selects the product id, title and description to be passed to Google sheets.
6.  **Set the Number of Options:** Sets the number of options (re-writes) for the product title and description.
7.  **Calculate Options:** Calculates the desired amount of options.
8.  **Write data to Google Sheets:** Adds the initial Printify product data to a Google Sheet.
9.  **Title and Description Generation:** Uses OpenAI to generate a new title and description for each product, based on the original content, brand guidelines, custom instructions, and a keyword for the product.
10. **Update Google Sheet:** After OpenAI generates the new title and description, the Google sheet is updated.
11. **Remember Options:** Keeps track of how many options have been generated.
12. **Update Printify Product:** Updates the product title and description in Printify using the generated content from OpenAI. Uses data from Google Sheets to update the product based on the product ID.

## Services:

-   Printify API
-   OpenAI API
-   Google Sheets API

## Hashtags:

#n8n #automation #printify #openai #ecommerce
