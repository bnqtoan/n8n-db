# My Workflow

## Use cases:

- **Extract Text from Images and Store in Google Sheets:** Automatically extract text from images hosted online and save the extracted text, along with the image name and link, into a Google Sheet for record-keeping or analysis.
- **Content Moderation:** This workflow can be adapted for basic content moderation by detecting text in images and logging potentially inappropriate content for review.
- **Image Data Archiving:** Create an archive of images and associated text data for future reference or analysis, enabling quick searching and retrieval of information contained within images.

## How it works:

1.  **HTTP Request:** The workflow starts by fetching an image from a specified URL using the "HTTP Request" node. In this case, it's configured to retrieve an image from `https://www.nicepng.com/png/detail/54-542069_motivational-quotes-png.png`.
2.  **AWS Rekognition:** The downloaded image is then sent to AWS Rekognition's `detectText` function. This service identifies and extracts any text present in the image.
3.  **Set:** The "Set" node formats the extracted text, image name, and image URL into a structured JSON format. It extracts the image name from the "HTTP Request" node and constructs a combined text string from the "AWS Rekognition" output.
4.  **Function:** The "Function" node takes the combined extracted text and transforms the text to lower case.
5.  **Google Sheets:** Finally, the structured data (image name, image link, and extracted text) is appended as a new row to a specified Google Sheet using the "Google Sheets" node. The Google sheet ID is `qwertz`.

## Services:

*   AWS Rekognition
*   Google Sheets

## Hashtags:

#n8n #imageprocessing #textdetection #automation #googlesheets
