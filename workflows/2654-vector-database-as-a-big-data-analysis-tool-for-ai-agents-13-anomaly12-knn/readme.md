# [1/3 - anomaly detection] [1/2 - KNN classification] Batch upload dataset to Qdrant (crops dataset)

## Use cases:

1.  **Image Similarity Search:**  Allows users to search for images similar to a query image within a dataset of agricultural crops, enabling quick identification and retrieval of relevant images.
2.  **Anomaly Detection in Agriculture:**  Can be used to identify unusual or anomalous crop images that deviate significantly from the norm, potentially indicating disease, pest infestation, or other issues. By filtering out tomatoes, the system can better identify anomalies among other crops.
3.  **KNN Classification Preparation:** This workflow sets up the initial data ingestion and embedding for a KNN classifier, which can then be used to classify new images based on their similarity to existing ones in the Qdrant vector database.

## How it works:

The workflow automates the process of uploading a dataset of agricultural crop images to Qdrant, a vector database, for similarity search and anomaly detection.

1.  **Trigger:** The workflow is initiated manually via the "When clicking 'Test workflow'" trigger.
2.  **Variable Setup:** Sets up connection details to Qdrant Cloud, including the cluster URL, collection name, Voyage embeddings dimension, and batch size.
3.  **Collection Check:** Checks if a Qdrant collection with the specified name already exists. If not, it creates a new collection with the specified vector size and cosine distance metric.
4.  **Google Cloud Storage:** Retrieves image URLs from a Google Cloud Storage bucket, filtering for a specific prefix (e.g., 'agricultural-crops').
5.  **Image URL and Crop Name Extraction:** Extracts the public image URL and crop name from the Google Cloud Storage object metadata.
6.  **Tomato Filtering:** Filters out images of tomatoes to allow testing for anomalies on other crops.
7.  **Batch Processing Preparation:** Splits the images into batches and generates unique IDs (UUIDs) for each image.
8.  **Data Restructuring:** Reformats the image data into the specific JSON structures required by the Voyage AI and Qdrant APIs.
9.  **Image Embedding Generation:** Uses the Voyage AI multimodal embeddings API to generate vector embeddings for each image based on its public URL.
10. **Batch Upload to Qdrant:** Uploads the image embeddings, UUIDs, and metadata (crop name, image path) to the Qdrant vector database in batches.
11. **Payload Index creation:** Creates an index on crop_name to enable fast filtering and grouping in Qdrant.

## Services:

*   **Google Cloud Storage:**  Used for storing and retrieving the image datasets.
*   **Voyage AI API:**  Generates vector embeddings from the images.
*   **Qdrant:**  Vector database for storing and searching image embeddings.

## Hashtags:

#n8n #automation #workflow #qdrant #vectordatabase #imageprocessing #voyageai #googlestorage
