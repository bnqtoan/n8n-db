# My Workflow

## Use cases:

- **Real-time Lead Generation:** Instantly capture and process contact information (email, first name, last name) from Icypeas searches to build a lead database.
- **Automated CRM Updates:** Automatically add new leads generated from Icypeas searches to a CRM system like HubSpot or Salesforce, streamlining the sales process.
- **Personalized Email Marketing:** Use the extracted contact information to trigger personalized email campaigns through platforms like Lemlist, improving engagement and conversion rates.

## How it works:

This workflow listens for incoming data from Icypeas via a webhook and extracts relevant contact information.

1.  **Webhook:** The workflow starts with a "Webhook" node, configured to listen for POST requests at a specific URL. This URL needs to be configured within the Icypeas application to send search results to n8n.
2.  **Set:** The "Set" node then extracts the email, first name, and last name from the JSON payload sent by Icypeas. It uses expressions like `{{ $json.body.data.results.emails[0].email }}` to target specific data points within the incoming JSON structure.  It is specified to keep only the values set.
3.  **Further Actions:** The extracted data can then be used in subsequent nodes (not included in the base workflow) to perform actions such as adding the contact to a CRM, sending an email, or updating a database.

## Services:

-   Icypeas ([https://www.icypeas.com/](https://www.icypeas.com/)): Used as the data source, sending search results via webhook.

## Hashtags:

#n8n #automation #webhook #leadgeneration #icypeas
