# My Workflow

## Use cases:

*   **Capture Adobe Sign Webhooks and Extract Data:** Automatically process Adobe Sign webhooks to extract key information like agreement ID, status, and participant details.
*   **Custom Header Response:** Respond to webhooks with custom headers, such as including the Adobe Sign client ID for tracking or authentication purposes.

## How it works:

1.  **Webhook Trigger (POST/GET):** The workflow starts when a POST or GET request is received at the specified webhook URL (`/test1`).
2.  **Function Node:** A Function node is used to extract the Adobe Sign client ID (`x-adobesign-clientid`) from the request headers and add it as a new field (`clientID`) to the JSON data. It also adds another field called `myNewField` with value 1.
3.  **Respond to Webhook:** The Respond to Webhook node sends a response back to the original request. Critically, it includes a custom header `x-adobesign-clientid` with the value of the extracted client ID from the function node.
4.  **Set Node:** The Set node extracts data from the webhook response body, capturing the entire body (`webhookData`), agreement ID (`agreement_ID`), participant information (`all_participants`), and agreement status (`agreement_status`).  It then keeps only these set values.

## Services:

*   Adobe Sign (indirectly, via webhooks)

## Hashtags:

#n8n #AdobeSign #Webhook #Automation #DataExtraction
