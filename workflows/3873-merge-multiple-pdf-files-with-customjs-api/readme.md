# Merge PDFs

## Use cases:

- **Combine multiple documents for archiving:** Automatically merge various reports, invoices, or statements into a single PDF file for organized storage.
- **Create consolidated information packages:** Assemble relevant documentation from different sources into a single, easily distributable PDF for clients or internal teams.
- **Generate a single document from web resources:** Merge PDFs fetched from different URLs into one file, useful for creating compilations of articles, guides, or resources.

## How it works:

1.  The workflow starts with a "When clicking ‘Test workflow’" node, which triggers the workflow manually.
2.  Two "HTTP Request" nodes fetch PDF files from the URLs `https://www.intewa.com/fileadmin/documents/pdf-file.pdf` and `https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf`.
3.  The "Merge" node combines the output of the two HTTP Request nodes into a single data stream.
4.  The "Merge PDF1" node (utilizing the `@custom-js/n8n-nodes-pdf-toolkit.mergePdfs` custom node, assumed to be a PDF merging tool) merges the PDFs from the input data into a single PDF. This node utilizes a credential called "CustomJS account".
5.  The "Read/Write Files from Disk" node saves the merged PDF to disk with the filename "test.pdf".
6.  The "Read/Write Files from Disk4" node reads the "test.pdf" file from disk.

## Services:

-   [https://www.intewa.com/](https://www.intewa.com/)
-   [https://www.w3.org/](https://www.w3.org/)
-   `@custom-js/n8n-nodes-pdf-toolkit.mergePdfs` (Likely a custom-built PDF merging service or library)

## Hashtags:

#n8n #PDF #Automation #MergePDF #Workflow
