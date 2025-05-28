# My Workflow

## Use cases

*   **Data Extraction from Excel:** This workflow can be used to quickly extract data from a Microsoft Excel sheet for analysis or migration.
*   **Simple Data Backup:** You can use this workflow as a basic way to regularly extract the content of your Excel sheet, saving the result in a different format using other nodes.

## How it works

The workflow starts with a manual trigger. Once executed, it connects to Microsoft Excel using OAuth2 authentication and retrieves all the data from the specified sheet. The retrieved data is then outputted by the "Microsoft Excel" node, which can be further processed by adding more nodes.

## Services

*   Microsoft Excel

## Hashtags

#n8n #automation #excel #dataextraction
