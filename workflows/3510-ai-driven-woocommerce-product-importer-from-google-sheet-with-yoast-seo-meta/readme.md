# AI-Driven WooCommerce Product Importer with SEO

## Use cases:

*   **Automated Product Listing:** Automatically create and update WooCommerce products directly from a Google Sheets spreadsheet, saving time and effort.
*   **SEO Optimization:** Enhance product visibility by automatically generating SEO-optimized meta titles and descriptions for each product.
*   **Bulk Product Import:** Efficiently import a large number of products to WooCommerce, complete with images, categories, pricing, and SEO metadata.

## How it works:

1.  **Trigger:** The workflow is manually triggered.
2.  **Get Products:** Fetches product data from a specified Google Sheets document, using the "DONE" column as a filter.
3.  **Loop Products:** Splits the retrieved product data into individual items for processing.
4.  **Map Categories:** Parses the product categories from the Google Sheets data, converting them into a numerical array.
5.  **Create Product:** Creates a new product in WooCommerce using the data from Google Sheets, including title, images, SKU, prices, categories, descriptions, and stock information.
6.  **Creation Done:** Updates the Google Sheet to mark the product as "DONE" and record the WooCommerce product ID and permalink.
7.  **AI-Powered SEO Optimization:**
    *   **OpenRouter Chat Model:** Calls an OpenRouter Chat Model which will be used to create SEO meta.
    *   **Structured Output Parser:** Parses the output of the OpenRouter Chat Model in a structured way.
    *   **SEO Expert:** Creates an optimized meta title and meta description using the product data and a Langchain LLM chain for SEO expertise.
8.  **Set SEO meta:** Updates the product in WooCommerce with the newly generated meta title and meta description, using the Yoast SEO plugin meta keys.
9.  **Update meta:** Updates the Google Sheet with the generated meta title and description.
10. **Send Message:** Sends a Telegram message to a specified chat ID to confirm that the product creation is completed.

## Services:

*   Google Sheets
*   WooCommerce
*   OpenRouter
*   Telegram

## Hashtags:

#n8n #woocommerce #automation #seo #googlesheets
