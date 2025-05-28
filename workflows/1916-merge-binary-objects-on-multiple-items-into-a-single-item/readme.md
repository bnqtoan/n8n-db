# Image Downloader and Merger

## Use cases:

- **Batch Image Downloading:**  Download multiple images from a list of URLs for archiving or processing.
- **Combining Image Data:**  Aggregate multiple image files into a single item for further processing or storage.
- **Web Scraping Enhancement:**  Download images referenced on a webpage as part of a web scraping workflow.

## How it works:

1.  **Manual Trigger:** The workflow starts when you manually execute it via the "When clicking 'Execute Workflow'" node.
2.  **Set URLs:** The "Set URLs" node creates three items, each containing a JSON object with a `url` property. These URLs point to sample images.
3.  **HTTP Request:** The "HTTP Request" node downloads the images from the URLs specified in the previous node. The `responseFormat` option is set to `file`, which tells the node to return the image data as a binary file.
4.  **Merge items:** The "Merge items" node receive each downloaded image data into a dedicated binary property, and create a list of the binary properties' names. Finally, the nodes outputs one single item with all downloaded images.

## Services:

-   Static image URLs (simulating an external image hosting service)

## Hashtags:

#n8n #automation #imageprocessing #batchdownload #workflow
