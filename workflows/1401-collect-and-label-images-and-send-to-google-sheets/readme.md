# Image Analysis and Google Sheets Logging Workflow

## Use cases:

*   **Image Monitoring:** Automatically analyze images from a Google Custom Search and log relevant information (image name, link, and detected labels) to a Google Sheet for monitoring specific subjects (e.g., "street" in this case).
*   **Content Moderation:** Use image analysis to identify potentially inappropriate content by detecting specific labels using AWS Rekognition and log the information to a Google Sheet for review.
*   **Data Enrichment:** Enhance a dataset of images by automatically extracting labels and relevant image details, then storing everything in a structured format (Google Sheet).

## How it works:

1.  **HTTP Request:** The workflow starts by making an HTTP request to the Google Custom Search API to retrieve image data based on the query "street".  The configuration specifies that only photo images should be retrieved.  It uses an API key and Custom Search Engine ID for authentication and to define the search scope.
2.  **AWS Rekognition:** The retrieved image data is then passed to the AWS Rekognition node, which analyzes the image and detects labels (objects, concepts, etc.) present in the image. The "binaryData": true parameter indicates it will process the image binary data.
3.  **Set:** The Set node extracts specific data points from the previous two nodes.
    *   `img_name`:  Extracts the title of the image from the Google Custom Search API response.
    *   `img_link`: Extracts the direct link to the image from the Google Custom Search API response.
    *   `img_labels`: Extracts the "Name" attribute from the "Labels" detected by the AWS Rekognition service. Note: the provided workflow JSON has an error; it should be referencing `AWS Rekognition1` node, not `AWS Rekognition`.
4.  **Google Sheets:** Finally, the extracted information (image name, link, and detected labels) is appended as a new row in a specified Google Sheet. The Google Sheets node is authenticated using OAuth2.

## Services:

*   Google Custom Search API
*   AWS Rekognition
*   Google Sheets

## Hashtags:

#n8n #automation #imageanalysis #googlesheets #awsrekognition
