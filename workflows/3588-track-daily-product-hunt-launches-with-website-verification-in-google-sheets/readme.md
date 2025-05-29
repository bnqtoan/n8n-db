# Product Hunt Posts to Google Sheets

## Use cases:

- **Daily Product Tracking:** Automatically gather information about the top products featured on Product Hunt each day and store them in a Google Sheet for trend analysis and market research.
- **Competitor Monitoring:** Track specific product categories or competitors featured on Product Hunt to stay informed about their launches, taglines, and descriptions.
- **Content Curation:** Collect daily posts from Product Hunt to create a curated list of interesting products for a newsletter, blog post, or social media content.

## How it works:

1.  **Daily Trigger:** The workflow starts with a "Daily Trigger" that runs every day.
2.  **Set Date:** A "Set Date" node sets the current date in ISO format.
3.  **Fetch Product Hunt Posts:** An "HTTP Request" node fetches the daily posts from the Product Hunt API using a GraphQL query, filtering by the current date.  **Note:** You will need to replace `"=Bearer YOUR_PRODUCT_HUNT_API_KEY"` with your actual Product Hunt API token.
4.  **Extract Product Info:** A "Code" node extracts relevant product information (name, tagline, description, website) from the API response.
5.  **Resolve Website Redirection:** An "HTTP Request" node resolves the final website URL of the product, accounting for potential redirects.
6.  **Data Manipulation:** "Set" nodes prepare the extracted data (product information and redirect URL) for merging.
7.  **Merge Data:** A "Function" node merges the product information and the resolved website URL into a single data structure.
8.  **Append to Google Sheets:** A "Google Sheets" node appends the extracted product details (name, tagline, description, and resolved website URL) to a specified Google Sheet.

## Services:

-   **Product Hunt API:** Used to retrieve daily product listings.
-   **Google Sheets:** Used to store the extracted product information.

## Hashtags:

#n8n #automation #producthunt #googlesheets #webscraping
