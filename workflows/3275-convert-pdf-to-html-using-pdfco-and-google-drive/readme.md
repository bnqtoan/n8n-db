# Automated PDF to HTML Conversion

## Use cases
1. **Web Content Generation**: Automatically convert PDF reports, whitepapers, or documentation into HTML format for easier web publishing.
2. **Document Archiving**: Create browser-friendly HTML versions of PDFs for long-term storage and quick accessibility.
3. **Content Extraction**: Streamline PDF-to-HTML conversion for text processing pipelines or CMS integrations.

## How it works
This workflow triggers when a new PDF is added to a specified Google Drive folder:
1. **Google Drive Trigger** detects new files in a monitored folder
2. **If Node** verifies the file is a PDF (MIME type check)
3. **HTTP Request Node** sends the PDF to PDF.co API for conversion
4. **Code Node** converts the API's HTML response into a binary file
5. **Google Drive Node** saves the resulting HTML file back to Drive

The process ensures PDFs are converted within minutes of upload and stored as web-ready HTML files.

## Services
- Google Drive (file storage/trigger)
- PDF.co API (PDF-to-HTML conversion)

## Hashtags
#n8n #automation #document-management #pdf-processing #google-drive
