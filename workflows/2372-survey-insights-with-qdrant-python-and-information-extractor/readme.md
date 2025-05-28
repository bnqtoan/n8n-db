# Survey Insights Generator

## Use cases:

-   **Analyze Customer Feedback:** Automatically process survey responses from customers to identify common themes, sentiments, and areas for improvement.
-   **Employee Engagement Surveys:** Analyze employee feedback from surveys to understand engagement levels, identify concerns, and improve workplace satisfaction.
-   **Market Research Analysis:** Process and extract insights from market research surveys to understand consumer preferences, trends, and potential opportunities.

## How it works:

This workflow automates the analysis of survey responses stored in Google Sheets, leveraging vector embeddings and LLMs to extract insights.

1.  **Trigger & Data Extraction**: The workflow is triggered manually, fetching survey data from a specified Google Sheet using the "Get Survey Results" node. The survey's sheet ID and name are stored for later use.
2.  **Data Transformation**: The survey data is transformed into question-answer pairs using the "Convert to Question Answer Pairs" node. This formats the data for subsequent vectorization.
3.  **Vectorization**: Each question-answer pair is converted into a vector embedding using OpenAI's Embeddings API. These embeddings are then stored in a Qdrant vector store ("Qdrant Vector Store" node).
4.  **Insight Generation (Sub-workflow)**: A sub-workflow is triggered ("Trigger Insights" node) to analyze each question individually.
5.  **Question Analysis**:
    -   The sub-workflow fetches survey metadata and questions ("Get Survey Headers" and "Extract Questions" nodes).
    -   For each question, it searches the Qdrant vector store for similar answers using the "Find All Answers" node.
    -   A K-means clustering algorithm is applied to group similar answers ("Apply K-means Clustering Algorithm" node).
    -   Clusters with at least 3 points are processed further ("Only Clusters With 3+ points").
    -   For each significant cluster, the corresponding answers are retrieved from Qdrant ("Get Payload of Points" node) and summarized by an LLM ("Survey Insights Agent" node) to generate insights and determine the sentiment.
6.  **Data Export**: The generated insights, along with the number of responses and participant IDs, are prepared ("Prep Output For Export" and "Prep Values For Export" nodes) and exported to a new sheet within the original Google Sheet ("Export To Sheets" and "Export To Sheets1" nodes). If no clusters were found, a default message is exported.

## Services:

-   Google Sheets: Used for reading survey responses and writing generated insights.
-   OpenAI: Used for creating vector embeddings and summarizing answer clusters with GPT models.
-   Qdrant: A vector database used for storing and querying answer embeddings.

## Hashtags:

#n8n #automation #workflow #surveyanalysis #LLM #GoogleSheets #OpenAI #Qdrant
