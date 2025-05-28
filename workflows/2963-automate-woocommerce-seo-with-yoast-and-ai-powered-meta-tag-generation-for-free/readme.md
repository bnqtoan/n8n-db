# WooCommerce SEO Yoast Meta Tag Generation

## Use Cases

*   **Automated SEO Optimization:** Automatically generate and update meta titles and descriptions for WooCommerce products, improving search engine visibility and driving more organic traffic.
*   **Content Refresh:** Regularly update meta tags for products based on changes in product descriptions or market trends, ensuring content remains relevant and optimized.
*   **Bulk Meta Tag Generation:** Quickly generate meta tags for a large number of products, saving significant time and effort compared to manual optimization.

## How it Works

This workflow automates the generation of SEO-friendly meta titles and descriptions for WooCommerce products using a combination of data retrieval, AI-powered content generation, and data updating.

1.  **Trigger:** The workflow is triggered manually ("When clicking ‘Test workflow’") or on a schedule ("Schedule Trigger").
2.  **Get Product ID:** Retrieves product IDs from a Google Sheet. The workflow looks for product IDs that don't have existing meta titles or descriptions.
3.  **Get Product:** Fetches product details (title, description, short description, categories) from WooCommerce using the product ID.
4.  **Generate metatitle e metadescription:** Uses Gemini 2.0 via OpenRouter to generate optimized meta titles (max 60 characters) and meta descriptions (max 160 characters) based on the product details. It leverages a prompt that instructs the AI to act as an SEO expert.
5.  **Structured Output Parser:** Parses the output from the LLM Chain in order to format it in JSON
6.  **Update Product:** Updates the WooCommerce product with the newly generated meta title and description using the Yoast SEO plugin's custom fields.
7.  **Update Sheet:** Updates the Google Sheet with the generated meta titles, descriptions, product URL, current date, the title of the product, and the row number for tracking and auditing purposes.

## Services

*   **Google Sheets:** Used for storing and managing product IDs and tracking meta tag updates.
*   **WooCommerce:** The e-commerce platform where product data is retrieved and updated.
*   **OpenRouter:** Provides access to the Gemini 2.0 Flash model for generating meta titles and descriptions.
*   **Yoast SEO Plugin:** Used within WooCommerce to manage SEO metadata.

## Hashtags

#n8n #automation #woocommerce #seo #metatags
