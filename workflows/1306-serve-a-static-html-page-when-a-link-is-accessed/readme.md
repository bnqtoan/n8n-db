# My Workflow

## Use cases:

*   **Simple Webhook Responder:** This workflow can be used to quickly create a simple endpoint that responds to any incoming webhook with a basic HTML page. Useful for testing webhook integrations or providing a placeholder response.
*   **Custom Webhook Acknowledgement:**  Instead of a default success message, provide a custom HTML-based acknowledgement page to users or systems that trigger a webhook. This allows for branded confirmations or instructions.
*   **Basic Landing Page from Webhook:**  Serve a static "thank you" or confirmation landing page upon receiving data from a form submission (though data is not processed in this example).

## How it works:

The workflow listens for incoming HTTP requests on the `/my-form` path using the "Webhook" node. When a request is received, the "Respond to Webhook" node immediately sends back an HTML page as a response. The HTML includes a basic Bootstrap 5 template displaying "Hello, world!". The response includes a `Content-Type` header set to `text/html; charset=UTF-8`.  The workflow doesn't process any data sent via the webhook; it simply responds with the defined HTML.

## Services:

*   Bootstrap CDN (Content Delivery Network)

## Hashtags:

#n8n #webhook #automation #html #response
