# Retry on fail except for known error Template

## Use cases:

- **Automated Data Retrieval with Error Handling:**  Imagine a workflow that fetches data from an external API. This template can be used to automatically retry the API request if it fails due to temporary network issues or server unavailability, but not when a specific "resource not found" error occurs, preventing endless retries for permanent errors.
- **Resilient Order Processing:** Consider an e-commerce system where orders sometimes fail during processing due to transient errors in payment gateways or inventory systems. This workflow could retry order placement a few times, but skip retries if the customer's address is invalid, preventing further processing until the address is corrected.
- **Web Scraping with Targeted Retry Logic:** When scraping websites, errors can occur due to website changes or temporary downtime. This template can retry scraping a page if it times out or returns a server error, but stop retrying if the page consistently returns a "404 Not Found" error, indicating the page no longer exists.

## How it works:

1.  **Initialization (Manual Trigger & Set Tries):** The workflow starts with a manual trigger. The "Set tries" node initializes a counter variable `tries` to 0. This counter tracks the number of retry attempts.
2.  **Main Operation (Replace Me):** The "Replace Me" node represents the core operation that needs to be retried (e.g., an HTTP request to an API).  **Important:** This node needs to be replaced with the actual node that performs the desired task. The node needs to have the error output enabled and connected.
3.  **Error Handling (Catch known error):** This node verifies if the error catched is a known error based on the conditions defined. The workflow splits into two branches:
    *   If the error is known, it goes to the "Known Error" node, ending the retry mechanism.
    *   If the error is unknown, it goes to the "Wait" node.
4.  **Wait and Retry (Wait, Update Tries, If tries left):** The "Wait" node pauses the workflow for a specified duration (e.g., 5 seconds). The "Update tries" node increments the `tries` counter. The "If tries left" node checks if the `tries` counter is less than the maximum allowed retries (default is 3).
    *   If retries are remaining, the workflow loops back to the "Set tries" node, restarting the main operation.
    *   If the retry limit is reached, the workflow proceeds to the "Retry limit reached" node, which stops the workflow and signals an error.
5.  **Success (Success):** If the "Replace Me" node executes successfully (no error occurs), the workflow proceeds to the "Success" node, indicating the operation was completed successfully.

## Services:

This template does not directly use any external services but is designed to work with any service implemented in the "Replace Me" node. Examples include:

-   Any API via HTTP Request
-   Databases (e.g., MySQL, PostgreSQL)
-   Cloud Storage (e.g., AWS S3, Google Cloud Storage)

## Hashtags:

#n8n #automation #retry #errorhandler #workflow
