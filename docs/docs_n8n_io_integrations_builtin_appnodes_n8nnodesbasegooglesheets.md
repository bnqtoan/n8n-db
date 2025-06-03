[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/index.md "Edit this page")

# Google Sheets[#](#google-sheets "Permanent link")

Use the Google Sheets node to automate work in Google Sheets, and integrate Google Sheets with other applications. n8n has built-in support for a wide range of Google Sheets features, including creating, updating, deleting, appending, removing and getting documents.

On this page, you'll find a list of operations the Google Sheets node supports and links to more resources.

Credentials

Refer to [Google Sheets credentials](../../credentials/google/) for guidance on setting up authentication.

## Operations[#](#operations "Permanent link")

*   **Document**
    *   [**Create**](document-operations/#create-a-spreadsheet) a spreadsheet.
    *   [**Delete**](document-operations/#delete-a-spreadsheet) a spreadsheet.
*   **Sheet Within Document**
    *   [**Append or Update Row**](sheet-operations/#append-or-update-row): Append a new row, or update the current one if it already exists.
    *   [**Append Row**](sheet-operations/#append-row): Create a new row.
    *   [**Clear**](sheet-operations/#clear-a-sheet) all data from a sheet.
    *   [**Create**](sheet-operations/#create-a-new-sheet) a new sheet.
    *   [**Delete**](sheet-operations/#delete-a-sheet) a sheet.
    *   [**Delete Rows or Columns**](sheet-operations/#delete-rows-or-columns): Delete columns and rows from a sheet.
    *   [**Get Row(s)**](sheet-operations/#get-rows): Read all rows in a sheet.
    *   [**Update Row**](sheet-operations/#update-row): Update a row in a sheet.

## Templates and examples[#](#templates-and-examples "Permanent link")

**Scrape business emails from Google Maps without the use of any third party APIs**

by Akram Kadri

[View template details](https://n8n.io/workflows/2567-scrape-business-emails-from-google-maps-without-the-use-of-any-third-party-apis/)

**Automated Web Scraping: email a CSV, save to Google Sheets & Microsoft Excel**

by Mihai Farcas

[View template details](https://n8n.io/workflows/2275-automated-web-scraping-email-a-csv-save-to-google-sheets-and-microsoft-excel/)

**Fully Automated AI Video Generation & Multi-Platform Publishing**

by Juan Carlos Cavero Gracia

[View template details](https://n8n.io/workflows/3442-fully-automated-ai-video-generation-and-multi-platform-publishing/)

[Browse Google Sheets integration templates](https://n8n.io/integrations/google-sheets/), or [search all templates](https://n8n.io/workflows/)

## Related resources[#](#related-resources "Permanent link")

Refer to [Google Sheet's API documentation](https://developers.google.com/sheets/api) for more information about the service.

## Common issues[#](#common-issues "Permanent link")

For common questions or issues and suggested solutions, refer to [Common issues](common-issues/).

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.