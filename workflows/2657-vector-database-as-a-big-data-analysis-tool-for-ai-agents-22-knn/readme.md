# [2/2] KNN classifier (lands dataset)

## Use cases:

- **Automated Land Use Classification:** Classify satellite or aerial imagery to identify different types of land use (e.g., agricultural, residential, industrial) for urban planning, environmental monitoring, or resource management.
- **Image-Based Product Categorization:**  Automatically categorize product images in e-commerce platforms based on visual similarity to existing product classes, improving search and recommendation accuracy.
- **Defect Detection in Manufacturing:**  Classify images of manufactured parts to identify defects based on visual patterns, enabling automated quality control processes.

## How it works:

This workflow classifies an image provided via a URL into predefined land use categories using a K-Nearest Neighbors (KNN) approach.

1.  **Trigger:** The workflow is initiated by an "Execute Workflow Trigger" node, which receives an image URL as input.
2.  **Image URL Setup:** The "Image Test URL" node extracts the image URL from the trigger input.
3.  **Embed image:** The "Embed image" node sends the image URL to Voyage AI's Multimodal Embeddings API to generate an embedding vector representing the image's visual features.
4.  **Variable setup**: The "Qdrant variables + embedding + KNN neigbours" node retrieves the image embedding as well as some variables to prepare for the Qdrant query
5.  **Query Qdrant:** The "Query Qdrant" node queries a Qdrant vector database (where land use images with known categories are stored as vectors) to find the K-nearest neighbor images based on the embedding vector.
6.  **Propagate loop variables:** The "Propagate loop variables" node retrieves the amount of found images from Qdrant based on the query.
7.  **Majority Vote:** The "Majority Vote" node determines the most frequent land use category among the nearest neighbors retrieved from Qdrant.
8.  **Check tie:** The "Check tie" node checks if there is a tie between the two most frequent classes found by the majority vote
9.  **Increase limitKNN:** In case there is a tie between two of the classes from the majority vote, the "Increase limitKNN" increases the amount of images to check from Qdrant.
10. **Return class:** The "Return class" node outputs the predicted land use category.

## Services:

-   **Voyage AI:** Used for generating multimodal embeddings from images.
-   **Qdrant:**  A vector database used to store and query image embeddings for KNN classification.
-   **Google Cloud Storage:** Is used as an image server.

## Hashtags:

#n8n #automation #KNN #imageclassification #landuse
