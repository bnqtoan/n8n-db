# My Workflow

## Use cases

- **Automated Code Evaluation:** Automatically assesses the accuracy of handwritten code snippets extracted from images by comparing them to expected answers.
- **Educational Tool:** Can be used in educational settings to evaluate student-submitted handwritten code assignments.
- **Quality Control in Document Processing:** Ensures the accurate extraction and interpretation of code from scanned documents in industries dealing with legacy code or handwritten documentation.

## How it works

This workflow automates the process of evaluating handwritten code extracted from images. Here's a breakdown:

1.  **Dataset Trigger:** The workflow is initiated by the "When fetching a dataset row" node, which reads data, including image URLs and expected code outputs, from a Google Sheets document.
2.  **Webhook conversion:** The "Match webhook format" node is used to reformat the data retrieved to match the format of the webhook URL for image retrieval.
3.  **Image Download:** The "Download image" node fetches the image from the URL provided in the Google Sheets data.
4.  **Code Extraction:** The "Extract code from image" node uses the OpenAI API to identify and extract the handwritten code from the downloaded image. It specifically looks for code in a predefined format.
5.  **Evaluation Check:** The "Evaluating?" node determines if the evaluation process should proceed.
6.  **String Distance Calculation:** The "Calc string distance" node calculates the Levenshtein distance (edit distance) between the extracted code and the expected code from the dataset.  It then computes a similarity score based on this distance.
7.  **Metric Storage:** The "Set metrics" node stores the calculated similarity score as a metric for evaluation purposes.
8.  **Webhook Response:** The "Respond to Webhook" node sends a response, likely indicating the success or failure of the evaluation.

## Services

-   **Google Sheets:** Used as a data source, storing image URLs and expected code outputs.
-   **OpenAI API:** Used for extracting handwritten code from images.

## Hashtags

#n8n #automation #workflow #codeevaluation #handwritingrecognition
