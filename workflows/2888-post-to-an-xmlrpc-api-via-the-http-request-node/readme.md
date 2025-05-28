# Use XMLRPC via HttpRequest-node to post on Wordpress.com

## Use cases:

- **Automated Blog Posting:** Automatically create and publish blog posts on a WordPress.com blog from various data sources or events (e.g., new product releases, daily reports, or scheduled content).
- **Cross-Platform Content Management:** Integrate WordPress.com with other platforms or services by posting content generated or processed elsewhere in the n8n workflow.
- **Programmatic Content Updates:** Update existing blog posts programmatically or create new content based on specific triggers, such as database changes or API responses.

## How it works:

1.  **Manual Trigger:** The workflow starts with a Manual Trigger node, allowing you to initiate the process manually.
2.  **Settings:** The `Settings` node stores configuration parameters like the WordPress.com URL, username, application password, content title, and content text.  You need to replace the placeholder values with your actual credentials and content.
3.  **PrepareXML:** The `PrepareXML` node takes the settings and constructs an XML payload according to the WordPress XML-RPC protocol (`wp.newPost` method).  It escapes special characters in the title and content to ensure proper formatting in the XML.
4.  **PostRequest:** The `PostRequest` node sends an HTTP POST request to the WordPress.com XML-RPC endpoint (`/xmlrpc.php`). The body of the request contains the XML payload generated in the previous step.  The `Content-Type` header is set to `text/xml`.
5.  **HandleResponse:** The `HandleResponse` node parses the XML response received from WordPress.com.
6.  **IsSuccessful:** The `IsSuccessful` node checks if the response from WordPress.com contains a valid result. It verifies the existence of `methodResponse.params.param.value` to determine the success of the post.
7.  **Success/Error:** Based on the result of the `IsSuccessful` node, the workflow branches to either the `Success` or `Error` node.  These nodes currently do nothing, but they can be extended to handle successful or failed post submissions (e.g., sending a notification or logging the error).

## Services:

-   **WordPress.com:** The workflow interacts with the WordPress.com blogging platform via its XML-RPC interface.

## Hashtags:

#n8n #automation #wordpress #xmlrpc #blogging
