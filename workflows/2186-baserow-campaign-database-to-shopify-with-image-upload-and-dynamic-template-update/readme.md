# Shopify Campaign Image Updater

## Use cases:

*   **Automated Campaign Updates:** Automatically update Shopify campaign images and content based on changes in a Baserow database, ensuring that your online store always reflects the latest marketing materials.
*   **Content Management System Integration:** Connect a Baserow database, as a lightweight CMS, to your Shopify store, enabling content creators to manage campaign assets and descriptions from a central location without directly accessing the Shopify admin panel.
*   **Dynamic Ad Creation:** Generate dynamic ads by pulling image URLs and campaign details from Baserow, and automatically updating a Shopify theme snippet for displaying these ads.

## How it works:

1.  **Baserow Webhook Trigger:** The workflow starts with a "Call from Baserow" webhook node that listens for updates in a specified Baserow database table.  Specifically, it triggers when a row is updated.
2.  **Set Values:** The "Set values here!" node defines static values such as the Shopify subdomain, Theme ID, filename and default content of the snippet. **Important:** you need to edit this node to match your specific Shopify store and theme.
3.  **Conditional Check:** The "Check" node verifies if the campaign image or related settings have been updated in Baserow, by comparing the `Last modified` timestamp with previous data and checking that the `Active` and `Campaign Image` fields are not empty.
4.  **Image Upload to Shopify:** If the conditions are met, the "Upload Image" node uses the Shopify GraphQL API to upload the new campaign image to Shopify's file storage.  It retrieves the image URL, filename and alt text from the Baserow data.
5.  **Update Theme Snippet:** The "Save campaign.liquid" node uses the Shopify REST API to update a specified theme snippet (`campaign.liquid`) with the URL of the newly uploaded image.  It constructs the `asset` object containing the snippet's key and Liquid code. The `IMAGE` placeholder is replaced with the `visible_name` of the Campaign Image.

## Services:

*   **Baserow:** A no-code database platform used to manage campaign data and trigger workflow executions.
*   **Shopify:** An e-commerce platform where campaign images and theme snippets are updated.

## Hashtags:

#n8n #automation #Shopify #Baserow #eCommerce
