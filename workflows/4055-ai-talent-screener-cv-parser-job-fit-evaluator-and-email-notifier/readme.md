# Automated Candidate Evaluation Workflow

## Use cases:

- **Streamline Initial Candidate Screening:** Automatically extract information from resumes submitted through a form, evaluate their fit against job descriptions, and shortlist candidates for further review.
- **Improve Hiring Efficiency:** Reduce the time spent by HR personnel on manually reviewing resumes and assessing candidate suitability.
- **Standardize Candidate Evaluation:** Ensure consistent evaluation criteria are applied to all candidates, minimizing bias and improving fairness.

## How it works:

1.  **Form Submission:** The workflow starts when a candidate submits a form ("On form submission" node), including their CV.
2.  **Upload CV to Google Drive:** The submitted CV is uploaded to Google Drive ("Upload CV" node).
3.  **Extract Data from File:** Extracts the submitted file ("Extract from File" node).
4.  **Extract Applicant Details:** Extracts key information from the extracted data using an information extraction model ("Applicant's Details" node).
5.  **Add Applicant Details to Google Sheets:** The extracted details are added to a Google Sheet for record-keeping ("Add Applicant's Details in Google Sheet" node).
6.  **Summarize Applicant Profile:** Uses a summarization chain to create a concise summary of the applicant's profile ("Summarize Applicant's Profile" node).
7.  **Fetch Job Description:** Retrieves the relevant job description from a Google Sheet ("Get Job Description from Google Sheets" node).
8.  **Summarize Job Role Description:** Condenses the fetched job description into a summary ("Summarize Job Role Description" node").
9.  **Semantic Fit & Evaluation:** An AI model evaluates the semantic fit of the candidate's profile against the job description summary ("Semantic Fit & Evaluation by HR Expert" node).
10. **Structured Output Parser:** Parse the output of the LLM Chain for structured output
11. **Update Evaluation Results:** The evaluation results are updated in a Google Sheet ("Update Evaluation Results in Google Sheets" node).
12. **Notify TA for Approval:** An email is sent to the Talent Acquisition team with the evaluation results, requesting approval to proceed ("Notify TA for Approval via Email" node).
13. **Approval Check:** An IF condition node checks the approval status.
14. **Send Emails:**
    - If approved, a shortlist email is sent to the candidate ("Send Shortlist Email to Candidate" node).
    - If rejected, a rejection email is sent to the candidate ("Send Rejection Email to Candidate" node).

## Services:

-   Google Sheets
-   Google Drive
-   OpenAI API (via n8n Langchain nodes)
-   Email (SMTP)

## Hashtags:

#n8n #automation #recruiting #HR #AI
