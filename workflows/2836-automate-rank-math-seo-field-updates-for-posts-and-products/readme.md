# Update Rank Math Meta

## Use cases:

- **Automated SEO Updates:** Automatically update the Rank Math meta information (title, description, canonical URL) for a specific post whenever content is updated or created in another system.
- **Programmatic SEO Optimization:** Use the workflow to programmatically optimize SEO meta based on data from external sources like product databases or marketing analytics.

## How it works:

1.  **Manual Trigger:** The workflow is initiated manually using the "When clicking ‘Test workflow’" node.
2.  **Settings:** The "Settings" node defines the base URL of the WooCommerce website. In this case, it's set to `https://mydom.com/`.
3.  **HTTP Request - Update Rank Math Meta:** The "HTTP Request" node sends a POST request to the Rank Math API endpoint on the specified WooCommerce website. It updates the meta information for a specific post (post_id=246) with the provided SEO title, description, and canonical URL. This node utilizes Wordpress API credentials for authentication.

## Services:

-   Rank Math API (via WordPress)

## Hashtags:

#n8n #automation #wordpress #rankmath #seo
