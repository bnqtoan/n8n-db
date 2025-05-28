# Image Metadata Extractor

## Use cases:

*   **Image Analysis:** Quickly retrieve metadata from images hosted online to understand their properties (e.g., dimensions, format).
*   **Content Verification:** Verify the integrity of images by checking their metadata against expected values.
*   **Workflow Integration:** Integrate metadata extraction into larger content management or image processing workflows.

## How it works:

1.  The workflow starts with a Manual Trigger, which is activated when you click the "Execute" button in n8n.
2.  An HTTP Request node fetches an image from a specified URL (`https://picsum.photos/200/300` in this case). The response format is set to "file," meaning the raw image data is downloaded.
3.  The Edit Image node receives the image data and is configured to perform the "information" operation. This operation extracts metadata from the image. The extracted data is then available for further processing or output.

## Services:

*   Picsum Photos API (provides sample images)

## Hashtags:

#n8n #automation #imageprocessing #metadata #httprequest
