# Customer Insights from Trustpilot Reviews

## Use cases:

- **Brand Monitoring:** Automatically gather and analyze customer reviews from Trustpilot to monitor brand sentiment and identify emerging issues or positive feedback trends.
- **Product Improvement:** Extract specific feedback related to product features or performance from customer reviews to guide product development and improvement efforts.
- **Competitive Analysis:** Analyze reviews of competitor companies to understand their strengths and weaknesses and identify opportunities for differentiation.

## How it works:

1.  **Trigger:** The workflow is manually triggered.
2.  **Company Configuration:**  A company ID is defined to specify which company's Trustpilot reviews to fetch.
3.  **Data Clearing (Optional):**  Existing review data for the specified company is cleared from a Qdrant vector store, ensuring a fresh analysis.
4.  **Trustpilot Scraping:**
    *   The workflow scrapes Trustpilot pages for reviews of the specified company (limited to 3 pages for demonstration).
    *   It extracts key information from each review, including author, rating, title, text, date of experience, review date, country, review count, and review URL.
5.  **Data Transformation:** The extracted review data is structured into a suitable format.
6.  **Vector Store Preparation:**
    *   Each review's title and text are combined into a single text for embedding.
    *   Metadata is extracted from the reviews, such as author, ratings, dates, and company ID.
7.  **Vector Embedding and Storage:**
    *   The combined review text is converted into a vector embedding using OpenAI's embedding model.
    *   The review text, metadata, and vector embedding are stored in a Qdrant vector store.
8.  **Insight Subworkflow Trigger:**  A subworkflow is triggered to perform the insights analysis.
9.  **Insight Generation Subworkflow:**

    *   **Review Retrieval:** Relevant reviews for the specified company and date range are retrieved from the Qdrant vector store.
    *   **Clustering:**
        *   A K-means clustering algorithm is applied to the review embeddings to group similar reviews together.
        *   Clusters with fewer than 3 reviews are filtered out.
    *   **Insight Extraction:**
        *   An OpenAI chat model is used to generate insights for each cluster of reviews.
        *   The model summarizes the reviews, determines the overall sentiment, and suggests improvements.
    *   **Data Preparation:**  The extracted insights and relevant metadata are prepared for export.
    *   **Google Sheets Export:** The generated insights are appended to a specified Google Sheet.

## Services:

-   Trustpilot
-   Qdrant
-   OpenAI
-   Google Sheets

## Hashtags:

#n8n #automation #Trustpilot #CustomerFeedback #SentimentAnalysis
