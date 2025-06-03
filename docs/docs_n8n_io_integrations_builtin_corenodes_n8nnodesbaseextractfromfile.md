[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/core-nodes/n8n-nodes-base.extractfromfile.md "Edit this page")

# Extract From File[#](#extract-from-file "Permanent link")

A common pattern in n8n workflows is to receive a file, either from and [HTTP Request node](../n8n-nodes-base.httprequest/) (for files you are fetching from a website), a [Webhook Node](../n8n-nodes-base.webhook/) (for files which are sent to your workflow from elsewhere), or from a local source. Data obtained in this way is often in a binary format, for example a spreadsheet or PDF.

The Extract From File node extracts data from a binary format file and converts it to JSON, which can then be easily manipulated by the rest of your workflow. For converting JSON back into a binary file type, please see the [Convert to File](../n8n-nodes-base.converttofile/) node.

## Operations[#](#operations "Permanent link")

Use the **Operations** drop-down to select the format of the source file to extract data from.

*   **Extract From CSV**: The "Comma Separated Values" file type is commonly used for tabulated data.
*   **Extract From HTML**: Extract fields from standard web page HTML format files.
*   **Extract From JSON**: Extract JSON data from a binary file.
*   **Extract From ICS**: Extract fields from iCalendar format files.
*   **Extract From ODS**: Extract fields from ODS spreadsheet files.
*   **Extract From PDF**: Extract fields from Portable Document Format files.
*   **Extract From RTF**: Extract fields from Rich Text Format files.
*   **Extract From Text File**: Extract fields from a standard text file format.
*   **Extract From XLS**: Extract fields from a Microsoft Excel file (older format).
*   **Extract From XLSX**: Extract fields from a Microsoft Excel file.
*   **Move File to Base64 String**: Converts binary data to a text-friendly [base64](https://datatracker.ietf.org/doc/html/rfc4648#section-4) format.

## Example workflow[#](#example-workflow "Permanent link")

In this example, a Webhook node is used to trigger the workflow. When a CSV file is sent to the webhook address, the file data is output and received by the Extract From File node.

[View workflow file](/_workflows/integrations/builtin/core-nodes/n8n-nodes-base.extractfromfile/webhook-example.json)

Set to operate as 'Extract from CSV', the node then outputs the data as a series of JSON 'row' objects:

1
2
3
4
5
6
7
8

`{   "row": {   "0": "apple",   "1": "1",   "2": "2",   "3": "3"   }   ...`

Receiving files with a webhook

Select the Webhook Node's **Add Options** button and select **Raw body**, then enable that setting to get the node to output the binary file that the subsequent node is expecting.

## Node parameters[#](#node-parameters "Permanent link")

### Input Binary Field[#](#input-binary-field "Permanent link")

Enter the name of the field from the node input data that contains the binary file. The default is 'data'.

### Destination Output Field[#](#destination-output-field "Permanent link")

Enter the name of the field in the node output that will contain the extracted data.

This parameter is only available for these operations:

*   Extract From JSON
*   Extract From ICS
*   Extract From Text File
*   Move File to Base64 String

## Templates and examples[#](#templates-and-examples "Permanent link")

**Building Your First WhatsApp Chatbot**

by Jimleuk

[View template details](https://n8n.io/workflows/2465-building-your-first-whatsapp-chatbot/)

**Extract text from a PDF file**

by amudhan

[View template details](https://n8n.io/workflows/585-extract-text-from-a-pdf-file/)

**Scrape and store data from multiple website pages**

by Miquel Colomer

[View template details](https://n8n.io/workflows/1073-scrape-and-store-data-from-multiple-website-pages/)

[Browse Extract From File integration templates](https://n8n.io/integrations/extract-from-file/), or [search all templates](https://n8n.io/workflows/)