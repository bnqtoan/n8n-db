# My workflow 6

## Use cases:

- **PDF Processing Automation:** Automatically extract specific pages from a PDF document retrieved from a URL for further processing or archiving.
- **Data Extraction Pipeline:** Build a pipeline to extract data from specific pages of PDF reports hosted online for analysis.
- **Content Aggregation:** Extract relevant content from specific pages of multiple online PDF documents to create a summary or aggregated report.

## How it works:

1.  The workflow is initiated manually using the "When clicking ‘Test workflow’" trigger node.
2.  The "HTTP Request" node retrieves a PDF file from the specified URL (`https://www.sldttc.org/allpdf/21583473018.pdf`).
3.  The "Extract Pages From PDF1" node (using the `@custom-js/n8n-nodes-pdf-toolkit.ExtractPages` custom node) extracts pages 2 and 3 from the downloaded PDF. The extracted data is stored in a field named `data`.

## Services:

-   PDF Toolkit (via custom node)
-   Web server hosting the PDF file

## Hashtags:

#n8n #automation #PDF #DataExtraction #Workflow
