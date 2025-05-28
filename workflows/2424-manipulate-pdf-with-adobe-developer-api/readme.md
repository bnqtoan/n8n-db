# Adobe PDF Services API Wrapper

## Use cases:

- **Automated PDF Data Extraction:** Automatically extract tables, text, or other elements from PDF documents for data analysis or integration into other systems.
- **PDF Splitting and Manipulation:** Split PDF documents into smaller parts based on page ranges for archiving, distribution, or specific processing needs.
- **Document Processing Pipeline:** Integrate this workflow into a larger document processing pipeline, where PDFs are automatically processed and transformed based on predefined rules.

## How it works:

This workflow automates interactions with the Adobe PDF Services API to extract data and manipulate PDF documents. Here's a step-by-step breakdown:

1.  **Trigger:** The workflow is initiated manually ("When clicking ‘Test workflow’").
2.  **Load PDF and Set Parameters:** The workflow loads a PDF file from Dropbox ("Load a test pdf file") and sets the desired operation and parameters for the Adobe API call ("Adobe API Query"). These parameters specify what type of extraction to perform (e.g., "extractpdf", "splitpdf") and other settings, such as which elements to extract from the PDF.
3.  **Authentication:** The workflow retrieves an access token from the Adobe API using a "Custom Auth" credential ("Authenticartion (get token)"). This credential stores the client ID and client secret required for authentication.
4.  **Create Asset:** The workflow creates an asset on the Adobe PDF Services API ("Create Asset"), providing the PDF file and its media type. The access token obtained in the previous step is used for authorization.
5.  **Upload PDF File:** The workflow uploads the PDF file to the generated asset endpoint using the uploadUri provided in the Create Asset step.
6.  **Process Query:** The workflow submits a processing request to the Adobe API ("Process Query"). This request includes the asset ID of the uploaded PDF and the parameters defined earlier.  It specifies the endpoint (e.g., splitpdf or extractpdf) and associated JSON payload.
7.  **Wait and Download:** After submitting the processing request, the workflow waits for 5 seconds ("Wait 5 second"). Then, the workflow attempts to download the processed result ("Try to download the result") from the URL provided in the response from the Adobe API.
8.  **Error Handling** A switch node cheks the state of the request, if its still in progress, re-run the download node.
9.  **Output:** The result which could be a JSON or a ZIP file, will be available via the "Forward response to origin workflow" node.

## Services:

-   **Adobe PDF Services API:** Used for PDF processing tasks such as extracting data, splitting documents, and other manipulations.
-   **Dropbox:** Used for loading the initial PDF file.

## Hashtags:

#n8n #automation #pdf #adobe #api #documentprocessing
