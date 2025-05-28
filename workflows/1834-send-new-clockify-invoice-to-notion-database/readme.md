# Clockify Invoice to Notion Database

## Use cases:

*   Automatically log new invoices from Clockify into a Notion database for tracking and reporting.
*   Create a centralized repository of invoice data in Notion, making it easier to manage finances.
*   Trigger further actions in Notion based on new invoices, such as sending notifications or updating project statuses.

## How it works:

1.  The workflow starts with the "On new invoice in Clockify" webhook node. This node listens for a new invoice creation event in Clockify and triggers the workflow when it occurs. The node requires a webhook to be created in Clockify and the URL provided to be pasted into the Clockify webhook settings.
2.  Once a new invoice is created in Clockify, the webhook sends the invoice data to the "Create database page" Notion node.
3.  The "Create database page" Notion node creates a new page in a specified Notion database, populated with information from the Clockify invoice. It specifically extracts the invoice number, issue date, due date, and amount.

## Services:

*   Clockify
*   Notion

## Hashtags:

#n8n #Clockify #Notion #Automation #InvoiceManagement
