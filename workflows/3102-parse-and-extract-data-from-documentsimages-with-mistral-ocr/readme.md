# Document Parsing with Mistral OCR

## Use cases:

- **Automated Invoice Processing:** Extract data from invoices (PDFs or images) to automatically populate accounting software or databases.
- **Bank Statement Analysis:** Parse bank statements to identify transactions, balances, and other key financial information.
- **Document Archiving and Search:** Convert scanned documents into searchable text to improve document management and retrieval.

## How it works:

This workflow demonstrates how to use the Mistral OCR API to extract text from documents and images. It outlines three primary approaches:

1.  **Publicly Hosted Files:** The workflow begins with the "When clicking ‘Test workflow’" node, which triggers the workflow. The "Document URL" and "Image URL" nodes define the public URLs of a sample PDF and image. The "Mistral DOC OCR1" and "Mistral IMAGE OCR1" nodes sends request to Mistral OCR with publicly hosted url to extract content.
2.  **Privately Hosted via Mistral Cloud:** The workflow downloads files from Google Drive using the "Import PDF" and "Import Image" nodes. These files are then uploaded to Mistral Cloud using the "Mistral Upload" and "Mistral Upload1" nodes with the purpose set to 'ocr'. Subsequently, "Mistral Signed URL" and "Mistral Signed URL1" generate signed URLs for secure access to the uploaded files. Finally, the signed URLs are passed to "Mistral DOC OCR" and "Mistral IMAGE OCR" nodes for OCR processing.
3. **Document Understanding:** This workflow uses "Document URL1" to set the URL of a publicly hosted document. The "Document Understanding" node extracts information from the document by querying the Mistral Small latest model. It also uses the "Image URL1" node to sets the URL of a publicly hosted image, and the "Document Mis-Understanding?" node extracts information from the image by querying the Pixtral Large latest model.

## Services:

-   **Mistral AI API:** For OCR processing and document understanding.
-   **Google Drive:** For retrieving document and image files (optional).

## Hashtags:

#n8n #automation #OCR #MistralAI #documentprocessing
