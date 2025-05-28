# Get All Customers and Send to Webhook

## Use cases

-  **Data Synchronization:** Automatically extract customer data from a data store and send it to a webhook for synchronization with other systems or applications.
-  **Real-time Notifications:** Trigger a notification to a third-party service via a webhook whenever customer data is updated or retrieved, enabling real-time alerts.

## How it works

1.  **Manual Trigger:** The workflow starts when you manually click the "execute" button in n8n.
2.  **Set API Key:** The "Set" node defines a secret API key which will be used in the header of the HTTP request.
3.  **Retrieve Customer Data:** The "Customer Datastore" node retrieves all customer information from a data store using the `getAllPeople` operation.
4.  **Send Data via HTTP Request:** The "HTTP Request" node sends a POST request to a specified webhook URL. The request includes the customer's name in the request body and the API key in the header.

## Services

-   Customer Datastore (Likely a custom node for interacting with a customer database or service)
-   [Webhook.site](https://webhook.site/) (for testing purposes)

## Hashtags

#n8n #automation #webhook #customerdata #datasync
