# [2/3] Set up medoids (2 types) for anomaly detection (crops dataset)

## Use cases:

- **Anomaly Detection Setup:** This workflow prepares a Qdrant vector database for anomaly detection in a dataset of crop images by identifying cluster centers (medoids) and establishing threshold scores.
- **Crop Image Classification Enhancement:** By setting medoids and thresholds, the workflow helps in more accurately classifying crop images, allowing for detection of atypical or anomalous images within specific crop categories.
- **Dynamic Thresholding for Image Data:** This can be used in scenarios where anomaly detection thresholds need to be dynamically calculated based on the characteristics of the data clusters, rather than using fixed global thresholds.

## How it works:

The workflow automates the process of setting up medoids and threshold scores in a Qdrant vector database for anomaly detection in crop image data. Here's a breakdown:

1.  **Trigger and Variable Initialization:** The workflow is initiated manually via the "When clicking ‘Test workflow’" trigger. It then sets up variables for Qdrant cluster connection details, and parameters for medoid calculations (e.g., `furthestFromCenter`).
2.  **Data Preparation:**
    *   Fetches the total number of points in the Qdrant collection using the "Total Points in Collection" node.
    *   Retrieves facet counts for crop names, to understand the distribution of crop types in the dataset using "Crop Counts" node.
    *   Two methods are used to get the cluster's centres:
        *   A-"**Distance Matrix Approach**": Call the Qdrant's [distance matrix API](https://qdrant.tech/documentation/concepts/explore/?q=distance+#distance-matrix) for each cluster, find the most similar point to other points within a cluster, based on the **Cosine** distance.
        *   B-"**Multimodal Embedding Model Approach**":
            *  Hardcoded crop descriptions are embedded using the Voyage AI model, and the nearest point to this embedding in Qdrant is chosen as the cluster representative.
3.  **Setting Medoids and Thresholds**:
    *   Calculates the similarity score between each medoid and the furthest point in its cluster.
    *   Updates the Qdrant database with the medoid flags (`is_medoid` or `is_text_anchor_medoid`) and the calculated threshold scores for each crop cluster.

The workflow uses two approaches (distance matrix and text embedding) to identify cluster centers and calculate corresponding threshold scores.

## Services:

-   **Qdrant:** A vector database used for storing and querying image embeddings.
-   **Voyage AI:** Used to generate embeddings for text descriptions of crops (multimodal embeddings).
-   **scipy:** Used to calculate distances.

## Hashtags:

#n8n #automation #workflow #anomalyDetection #vectorDatabase
