# Job Applicant Shortlisting and Processing Workflow

## Use Cases

- **Automated Candidate Screening:** Automatically screen job applicants based on their resumes and job descriptions, saving HR staff valuable time.
- **Improved Hiring Efficiency:** Streamline the hiring process by quickly identifying the most suitable candidates, leading to faster hiring decisions.
- **Consistent Evaluation:** Ensure all candidates are evaluated against the same criteria, reducing bias and improving the fairness of the hiring process.

## How it works

This workflow automates the job applicant screening process from receiving an application in ERPNext to notifying the applicant of the outcome.

1.  **Webhook Trigger:** The workflow starts when a new job application is submitted in ERPNext, triggering a webhook.
2.  **Data Extraction and Validation:**
    *   The workflow extracts relevant data from the webhook payload, such as the resume link and job opening.
    *   It checks if a resume is attached and if the application is against a specific job opening. If not, the applicant is either rejected or put on hold in ERPNext.
3.  **Resume Processing:**
    *   The workflow checks the attached file type and downloads the resume.
    *   It converts the PDF resume to text.
4.  **AI-Powered Analysis:**
    *   The workflow retrieves the job description from ERPNext based on the job opening.
    *   It uses a language model (Google Gemini) to analyze the resume text against the job description, providing a fit level, score, rating, and justification.
5.  **ERPNext Update:**
    *   The workflow updates the applicant's record in ERPNext with the AI-generated fit level, score, rating, and justification.
6.  **Conditional Acceptance/Rejection:**
    *   Based on the AI-generated score, the workflow either accepts or rejects the applicant.
    *   If the score is below 80, the applicant is rejected. Otherwise, they are accepted.
7.  **Notification:** The workflow then informs the candidate via email if rejected or WhatsApp if accepted

## Services

-   **ERPNext:** An open-source ERP system used for job application management.
-   **Google Gemini:** An AI language model used to analyze resumes and job descriptions.
-   **Microsoft Outlook:** Used for sending email notifications to rejected applicants.
-   **WhatsApp Business Cloud:** Used for sending notification to Accepted applicants.

## Hashtags

#n8n #automation #recruiting #ERPNext #AI
