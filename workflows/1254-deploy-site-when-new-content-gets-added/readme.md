# Netlify Site Creation via Webhook

## Use cases:

*   **Automated Content Publishing:** Automatically create new website content on Netlify when a specific event occurs, such as a form submission or a database update.
*   **Dynamic Website Generation:** Trigger the creation of new site pages or resources based on data received from external systems or APIs.

## How it works:

This workflow listens for incoming HTTP POST requests at a specific webhook URL. When a request is received, it extracts the "title" from the `body.data.title` field of the JSON payload and uses it to create a new Netlify site entry.

1.  **Webhook:** The workflow starts with a Webhook node, which is configured to listen for POST requests at the path `0d36a8db-0177-4501-9f7a-e46b6829d07a`.
2.  **Netlify:** The Webhook node triggers the Netlify node, which uses the Netlify API (authenticated via the "Netlify account" credential) to create a new site entry. The `title` parameter of the new entry is dynamically populated using the `{{$json["body"]["data"]["title"]}}` expression, extracting the relevant data from the incoming webhook payload.

## Services:

*   Netlify

## Hashtags:

#n8n #netlify #automation #webhook #website
