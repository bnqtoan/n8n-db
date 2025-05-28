# Simple API Endpoint

## Use cases:

-   Create a simple API endpoint that generates a Google search URL based on the provided first and last names.
-   Quickly build a custom search URL generator for specific needs.
-   Demonstrate the basic structure of an API endpoint using n8n's Webhook and Respond to Webhook nodes.

## How it works:

1.  The workflow starts with a **Webhook** node that listens for incoming HTTP requests at a specified path (`/6f7b288e-1efe-4504-a6fd-660931327269`).
2.  When a request is received, the **Create URL string** node extracts the `first_name` and `last_name` parameters from the request's query string.
3.  The **Create URL string** node constructs a Google search URL using these parameters in the form `https://www.google.com/search?q=first_name+last_name` and saves it to the `product` variable.
4.  The **Respond to Webhook** node sends a response back to the requester. The response is text, including the original first and last names and the created URL.

## Services:

-   Google Search (via URL construction)

## Hashtags:

#n8n #automation #API #webhook #googlesearch
