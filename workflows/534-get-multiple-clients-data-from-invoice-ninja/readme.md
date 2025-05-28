# Get All Invoice Ninja Invoices

## Use cases:

*   **Invoice Overview:** Retrieve a comprehensive list of all invoices stored in Invoice Ninja to gain a quick overview of your billing status.
*   **Data Export:** Export invoice data from Invoice Ninja for reporting, analysis, or integration with other systems.
*   **Backup and Archiving:** Regularly fetch all invoices from Invoice Ninja to create backups for archival purposes.

## How it works:

This workflow consists of two nodes:

1.  **On clicking 'execute'**: This is a manual trigger node that initiates the workflow when you click the "Execute Workflow" button in n8n.
2.  **Invoice Ninja**: This node connects to your Invoice Ninja account (using the provided credentials) and retrieves all invoices using the "getAll" operation. The retrieved invoice data is then outputted by the workflow.

## Services:

*   Invoice Ninja

## Hashtags:

#n8n #automation #invoiceNinja #invoices #dataExtraction
