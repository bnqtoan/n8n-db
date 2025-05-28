# My Workflow

## Use cases:

- **Dynamic Document Updates:** Automatically update images in Google Docs templates with new URLs from a database or other source, ensuring content remains current without manual editing.
- **Personalized Marketing Materials:** Generate customized brochures or flyers by replacing placeholder images with client-specific visuals fetched from a URL.
- **Automated Report Generation:**  Regularly update reports with the latest charts or graphs by replacing images in a Google Docs template with dynamically generated image URLs.

## How it works:

1.  The workflow starts with a manual trigger.
2.  **Own Datasource:** Represents your data source (e.g., a database, spreadsheet) that contains the image URLs.
3.  **Image URL:** Sets the image URL from your data source.
4.  **Find & Copy Docx Template:** (Optional) If a Google Docs template exists, this node copies it to a new document, obtaining a unique `documentId`. If removed, you would need to set the document ID manually in the next nodes.
5.  **Find Image ID in Docx:**  Retrieves the `imageObjectId` of the image in the Google Doc that you want to replace.
6.  **Replace Image in Docx:** Replaces the image in the Google Doc with the provided image URL, using the `imageObjectId` from the previous step and the `url` from the "Image URL" node.
7.  **Make file shareable publically (optional):** Sets sharing permission to anyone can edit
8.  **Download File - Docx:** Downloads the updated Google Doc as a `.docx` file.
9.  **Download File - PDF:** Downloads the updated Google Doc as a `.pdf` file.

## Services:

*   Google Docs API
*   Google Drive API
*   Picsum Photos API (as example url)

## Hashtags:

#n8n #GoogleDocs #GoogleDrive #automation #imageReplacement
