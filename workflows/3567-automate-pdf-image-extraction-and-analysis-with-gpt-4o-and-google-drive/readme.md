# Automate PDF Image Extraction & Analysis with GPT-4o and Google Drive

## Use cases:

- **Automated Content Analysis:** Automatically extract images from PDF documents (e.g., research papers, marketing brochures) stored in Google Drive, analyze the images using AI (GPT-4o), and compile the analysis into a text file for review.
- **Image-Based Data Extraction:** Extract visual data from reports or documents, analyze them with GPT-4o to gather insights, and output the analysis for further processing or reporting.
- **Content Moderation:** Monitor incoming PDFs, extract images, and analyze them for inappropriate content using AI, generating reports for moderation teams.

## How it works:

1.  **Trigger:** The workflow is manually triggered using the "When clicking ‘Test workflow’" node (can be replaced by a Google Drive trigger, for example).
2.  **Get PDF File:** Downloads a specified PDF file from Google Drive using the "Get pdf file" node, using the provided Google Drive credentials and a specific `fileId`.
3.  **Extract PDF Images:** Extracts images from the downloaded PDF file using the ConvertAPI via an HTTP Request node ("Extract pdf image"). It converts the PDF to extract images in JPG format.
4.  **Get Image Data:** The "Get image data" node splits the image data into individual items for each image, using the `Files` property.
5.  **Get all img_url:** Extracts the URL of each image from the extracted image data using a Set node ("Get all img_url").
6.  **Analyze Image:** Analyzes each extracted image using the OpenAI GPT-4o model. The "Analyze image" node takes the image URL and sends it to OpenAI's API, prompting for a detailed explanation of the image content.
7.  **Get Image Analyze Content:** Combines the image URL with the AI analysis result using a Set node ("Get image analyze content").
8.  **Integrate all content to a a content:** Integrates the analysis results for all images into a single string using a Code node ("Integrate all content to a a content").
9.  **Output content to a .txt file:** Creates a .txt file containing the compiled analysis from the previous step. The file is generated based on the `content` property.

## Services:

-   **Google Drive:** Used for storing and retrieving the PDF file.
-   **ConvertAPI:** Used to extract images from the PDF file.
-   **OpenAI (GPT-4o):** Used for analyzing the extracted images.

## Hashtags:

#n8n #automation #pdf #imageAnalysis #GPT4o
