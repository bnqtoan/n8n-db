# My Workflow

## Use cases:

- Extract text content from a PDF file for archiving or indexing.
- Automatically process data from PDF reports received via email or other channels.
- Integrate PDF data into other applications or databases for analysis.

## How it works:

This workflow starts with a manual trigger. Once triggered, it reads a PDF file located at `/data/pdf.pdf`. The "Read PDF" node then extracts the text content from the PDF, making it available for further processing in subsequent nodes (not shown in this example).

1.  **On clicking 'execute'**: This node triggers the workflow manually.
2.  **Read Binary File**: Reads the binary content of the PDF file specified by the file path `/data/pdf.pdf`.
3.  **Read PDF**: Extracts text from the binary data obtained from the "Read Binary File" node.

## Services:

- No external services are directly used in this workflow. It relies on n8n's built-in nodes to read and process the PDF file.

## Hashtags:

#n8n #PDF #Automation #Workflow #DataExtraction
