# 🦙👁️👁️ Find the Best Local Ollama Vision Models by Comparison

## Use cases:

- **Image Content Analysis**: Automatically analyze images for object detection, scene understanding, and detailed descriptions, which could be used in content moderation or e-commerce.
- **Document Processing**: Extract data from images of documents, such as tables or forms, and convert them into structured data for further analysis.
- **Comparative Model Performance**: Evaluate and compare the performance of different local Ollama vision models to determine the most suitable model for specific image analysis tasks.

## How it works:

1.  **Trigger**: The workflow is manually triggered.
2.  **Google Drive Image Retrieval**: An image is downloaded from Google Drive using its ID. You need to configure your Google Drive credentials and set the correct image ID.
3.  **Base64 Conversion**: The downloaded image is converted into a Base64 string format.
4.  **Vision Model List**: A predefined list of local Ollama vision models (e.g., "granite3.2-vision", "llama3.2-vision", "gemma3:27b") is used.
5.  **Model Looping**: The workflow loops through each vision model in the list.
6.  **Prompt Generation**: A detailed prompt requesting exhaustive image analysis is created, requesting object inventories, contextual analysis, spatial relationships, and textual element extraction.
7.  **Ollama API Call**: An HTTP request is sent to the local Ollama API for each vision model, passing the Base64 encoded image and the analysis prompt.
8.  **Result Formatting**: The response from the Ollama API, containing the image description, is formatted into a result object.
9.  **Google Docs Update**: The generated image description, along with the model name, is appended to a Google Docs document. You need to configure your Google Docs credentials and set the correct document ID.
10. **Repeat**: Steps 6-9 are repeated for each vision model in the list.

## Services:

-   **Ollama**: Local Large Language Model service.
-   **Google Drive**: Cloud storage service for retrieving the image.
-   **Google Docs**: Cloud-based document processing service for saving the image descriptions.

## Hashtags:

#n8n #automation #workflow #ollama #visionmodel #imagedescription
