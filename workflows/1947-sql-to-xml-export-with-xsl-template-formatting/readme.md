# XML usecase: advanced

## Use cases:
1.  **Product Catalog API:**  Expose a product catalog from a database as an XML feed, allowing other applications to easily consume and display product information.  This is especially useful for platforms that require XML data formats.
2.  **Dynamic Sitemap Generation:** Create a dynamic sitemap.xml file for a website based on content stored in a database.  This helps search engines crawl and index the website more effectively.
3.  **Data Transformation for Legacy Systems:** Transform data from a modern database into an XML format required by older systems that lack support for newer data formats like JSON.

## How it works:
This workflow automates the process of fetching data from a MySQL database, transforming it into XML format, and serving it via webhooks with an XSLT stylesheet for browser-side transformation. Here's a breakdown:

1.  **Webhooks (Webhook & Request xsl template):** Two webhooks are triggered. One to send product info the other to comply with CORS policy of modern browsers, requests XSL template, and serves it.
2.  **Database Query (Show 16 random products):** Retrieves a limited random list of products (16 in this case) from a MySQL database table named `products`.
3.  **Data Structure Definition (Define file structure):**  The `Define file structure` node structures the SQL data into a format suitable for XML conversion, mapping database columns to XML elements.
4.  **Concatenate Items (Concatenate Items):** All items will be merged into a single item with a single field containing all the items.
5.  **XML Conversion (Convert to XML):** Converts the structured JSON data into XML format. The `headless` option is enabled.
6.  **HTML Creation (Create HTML):** Adds XML declaration and a link to the XSL template, the webhook URL.
7.  **Move Binary Data (Move Binary Data):** Converts the XML data to binary data for sending as a webhook response.
8.  **Respond to Webhook:** Sends the XML response with `text/xml` content type.
9.  **Get XSLT:** Retrieves an XSLT stylesheet from a remote URL (GitHub Gist). This stylesheet defines how the XML data should be transformed for display in a browser.
10. **Respond to Webhook1:** Responds to the request xsl template webhook, sending the fetched XSLT content.

## Services:
*   MySQL database
*   GitHub Gist (for XSLT storage)

## Hashtags:
#n8n #automation #xml #database #webhook
