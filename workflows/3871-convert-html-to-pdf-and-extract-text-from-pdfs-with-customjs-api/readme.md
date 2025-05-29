# pdf to text

## Use cases:

- **Automated Data Extraction:** Extract text from PDF documents (e.g., invoices, reports) and use it for data analysis or storage in a database.
- **Content Archiving:** Convert legacy PDF documents into text format for improved searchability and accessibility.
- **Document Processing Automation:** Extract text from PDFs received via email or other sources, then process and route the text based on its content.

## How it works:

The workflow starts with a manual trigger.
1. **Manual Trigger:** The workflow is initiated manually using the "When clicking ‘Test workflow’" node.
2. **HTML to PDF Conversion:** An HTML snippet ("<h1>Hello World</h1>") is converted into a PDF document using the "HTML to PDF" node.
3. **PDF to Text Conversion (HTML generated PDF):** The "Convert PDF into Text" node extracts the text content from the PDF generated in the previous step.
4. **Define PDF URL:** The "Code" node sets a static URL to a PDF document.
5. **PDF to Text Conversion (URL based PDF):** The "Convert PDF into Text1" node fetches a PDF from a given URL and converts it to text.

## Services:

- CustomJS API (n8n-nodes-pdf-toolkit)
- NLBK (indirectly, as the workflow uses a URL from this site to download a PDF)

## Hashtags:

#n8n #automation #PDF #textExtraction #workflow
