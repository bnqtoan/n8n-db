# Automated Resume Review System Using OpenAI + Google Sheets

## Use cases:

- **Automated Candidate Screening:**  Quickly evaluate resumes submitted through a form to identify candidates who closely match the desired skills and experience for a specific job role.
- **Streamlined HR Workflow:** Automate the initial stages of resume review, saving time for HR professionals by providing summarized candidate profiles and preliminary ratings.
- **Data-Driven Hiring Decisions:** Store candidate data, summaries, and evaluation scores in Google Sheets for easy analysis and tracking of the hiring process.

## How it works:

1.  **Submission:** A candidate submits their resume and information through a web form ("On form submission" node).
2.  **File Upload & Extraction:** The submitted resume (PDF) is uploaded to Google Drive ("Upload to google drive" node), and the text is extracted from the PDF ("Resume extraction" node).
3.  **Information Extraction:**  The extracted text is analyzed by two "Information Extractor" nodes ("Personal Info" and "Qualification") to identify:
    *   Personal details such as name, contact information, and location.
    *   Educational qualifications, job history, and skills. Uses OpenAI models.
4.  **Data Merging:** The extracted personal and professional information are merged into a single data structure ("Merge" node).
5.  **Summary Generation:** A concise summary of the candidate's profile is generated based on the extracted data ("Summarizer" node) using a Langchain chain and OpenAI.
6.  **HR Expert Evaluation:** The generated summary and a predefined "wanted profile" are fed to an "HR Expert" node (another Langchain chain and OpenAI) that:
    *   Compares the candidate profile to the desired profile.
    *   Assigns a rating from 1 to 10, indicating the candidate's suitability.
    *   Provides a written justification for the assigned rating.
7.  **Data Storage:**  All extracted information, the generated summary, and the HR expert's evaluation are appended to a Google Sheet ("Google Sheets" node).

## Services:

*   Google Sheets
*   Google Drive
*   OpenAI API (Langchain)

## Hashtags:

#n8n #automation #HR #resume #OpenAI
