# [3/3] Anomaly detection tool (crops dataset)

## Use cases:

- **Detecting diseases or pests in crops:** Farmers or agricultural experts can use this workflow to quickly identify potential anomalies in crop images, indicating disease outbreaks or pest infestations, allowing for timely intervention and prevention of widespread damage.
- **Identifying new or unknown crop varieties:** This workflow can help researchers or agricultural organizations identify potentially new or undocumented crop varieties by comparing their images against a database of known crops.
- **Quality control in agriculture:**  Ensuring the quality and consistency of agricultural products by identifying anomalies in crop appearance, which can be related to maturity, damage, or other quality issues.

## How it works:

1.  The workflow starts with an **"Execute Workflow Trigger"** node, which receives an image URL as input (specifically, the `imageURL` parameter under `query`).
2.  The **"Image URL hardcode"** node extracts the `imageURL` from the input data.
3.  The **"Variables for medoids"** node defines variables needed to connect to Qdrant like cloud URL, the collection name, and the type of cluster center.
4.  The nodes **"Total Points in Collection"**, **"Each Crop Counts"**, and **"Info About Crop Labeled Clusters"** query the Qdrant database to determine how many different crop classes are available in the Qdrant collection.
5.  The **"Embed image"** node uses the Voyage AI API to generate an embedding vector for the input image based on it's URL.
6.  The **"Get similarity of medoids"** node queries the Qdrant database using the generated embedding vector to find the most similar crop clusters based on the parameters is_medoid and crop_name.
7.  The **"Compare scores"** node compares the similarity scores from Qdrant with a threshold. If the image's similarity score is below the threshold for all known crop types, the workflow flags the image as a potential anomaly, otherwise, it returns the most similar crop to the one provided.

## Services:

-   **Voyage AI API:** Used for generating embedding vectors from images.
-   **Qdrant:** Vector database used for storing crop image embeddings and performing similarity searches.
-   **Google Cloud Storage:** In the pinned data example, the images are stored in google cloud storage.

## Hashtags:

#n8n #automation #cropdetection #anomalydetection #AI
