# Candidate Resume Analyzer with VLM

## Use cases:

- **Automated Resume Screening:** Quickly assess a large volume of resumes to identify qualified candidates for a specific role, even with "hidden prompts" designed to bypass traditional ATS systems.
- **Enhanced ATS Security:** Mitigate risks associated with malicious or deceptive resumes that attempt to manipulate automated screening processes.
- **Bias Reduction in Hiring:** Leverage AI vision to evaluate resumes as a human would, focusing on the presented information rather than relying on potentially biased text-based analysis.

## How it works:

1.  **Trigger:** The workflow starts when manually triggered.
2.  **Download Resume:** The workflow downloads a candidate's resume in PDF format from Google Drive.
3.  **Convert PDF to Image:** The PDF is converted into an image using the Stirling PDF API. This step is crucial for preventing text extraction failures and bypass hidden prompt issues.
4.  **Resize Converted Image:** The image is resized to reduce processing time for the LLM (Large Language Model).
5.  **Candidate Resume Analyser:** The core of the workflow.
    -   A Langchain LLM Chain node is used to send prompt to the LLM model with instructions to analyze the image of the resume for a specific role (Plumber in this example).
    -   The model use image from the "Resize Converted Image" node to analize.
    -   Google Gemini Chat Model node is used as the LLM.
    -   Structured Output Parser node is used to define the output format for the LLM.
6.  **Should Proceed To Stage 2?** The workflow then checks if the LLM assessed the candidate as qualified based on the structured output, and proceeds based on the outcome.

## Services:

-   **Google Drive:** Used for downloading the resume PDF.
-   **Stirling PDF:** An HTTP API is used to convert PDF files to images.
-   **Google Gemini (PaLM) API:** The Large Language Model used for analyzing the resume image and determining candidate suitability.

## Hashtags:

#n8n #automation #AI #resumeScreening #VLM
