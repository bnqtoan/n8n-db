# Hubspot Trigger Workflow

## Use cases:

- **Real-time data capture:** Automatically trigger actions in n8n whenever a new event occurs in Hubspot.
- **Lead enrichment:** Immediately enrich lead data in other systems upon creation or update in Hubspot.

## How it works:

This workflow is triggered by a Hubspot event. It uses the `Hubspot Trigger` node to listen for real-time updates within Hubspot. Whenever a defined event occurs in your Hubspot account, the workflow is executed.

1.  **Hubspot Trigger:** This node actively listens for events within your specified Hubspot application (identified by `appId`). It is configured to handle a maximum of 5 concurrent requests, and authenticate using the provided credentials.

## Services:

- Hubspot

## Hashtags:

#n8n #automation #Hubspot #trigger #CRM
