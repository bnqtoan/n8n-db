# Invoice Ninja - New Invoice Trigger

## Use cases:

- Automatically send a welcome email to new clients upon invoice creation in Invoice Ninja.
- Trigger a notification in a team collaboration tool (e.g., Slack) whenever a new invoice is created for tracking purposes.
- Create a backup of new invoice data in a separate database or spreadsheet for auditing and reporting.

## How it works:

This workflow is triggered automatically whenever a new invoice is created in Invoice Ninja. The "Invoice Ninja Trigger" node monitors the Invoice Ninja account for the "create_invoice" event. Once a new invoice is created, the workflow starts. Currently, this workflow only triggers when an invoice is created.  To perform actions using the new invoice, you would need to add more nodes and connect them to the trigger. For example, you could connect an Email node to send a notification, or a Google Sheets node to save the invoice data.

## Services:

- Invoice Ninja

## Hashtags:

#n8n #automation #invoiceNinja #trigger #webhook
