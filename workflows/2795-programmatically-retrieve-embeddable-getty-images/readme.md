# Getty Images Editorial Search and Embed

## Use cases:

1.  **Automated Content Creation:** Automatically find and embed relevant Getty Images into blog posts or articles based on a search term.
2.  **Social Media Content Enrichment:** Enhance social media posts with visually appealing and licensed images sourced directly from Getty Images.
3.  **Internal Communications:** Quickly find and embed images into internal communication channels, like company newsletters or intranet articles.

## How it works:

1.  **Trigger:** The workflow starts with a manual trigger, initiating the image search process.
2.  **Search Term Input:** A "Set" node allows you to input the search term for the Getty Images Editorial Search.
3.  **Getty Images Search:** An HTTP Request node sends a search query to the Getty Images API using the provided search term.
4.  **Parse Results:** The HTML node parses the search results page from Getty Images to extract the URL of the first image.
5.  **Check for Results:** The "If" node verifies if an image URL was successfully extracted. If no results are found, the workflow stops and throws an error.
6.  **Extract Image ID:** If a result is found, a "Set" node extracts the Getty Image ID from the URL.
7.  **Get Photo Details:** An HTTP Request node uses the extracted Image ID to retrieve the photo details from the Getty Images API.
8.  **Get Image Source:** The HTML node extract the image source from the returned photo details.
9.  **Request Embed Code:** Another HTTP Request node requests the embed code for the image from Getty Images using the Image ID.
10. **Extract Iframe Snippet:** The "Set" node extracts the embeddable iframe snippet from the response.
11. **Content Management System (CMS) Integration:** A "No Op" node acts as a placeholder for integrating the embed code into a CMS or other platform.
12. **Image Preview:** The workflow retrieves the image binary data for preview purposes.

## Services:

*   Getty Images API
*   Any CMS platform (via placeholder node)

## Hashtags:

#n8n #automation #gettyimages #imageembedding #contentcreation
