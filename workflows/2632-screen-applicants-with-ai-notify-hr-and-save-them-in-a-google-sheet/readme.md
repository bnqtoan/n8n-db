# AI CV Screening Workflow

## Use cases:

- Automatically screen CVs submitted through a form for a Software Engineer position and provide an AI-powered compatibility rating.
- Notify HR personnel via email when a new CV is received, including key candidate details and the AI's compatibility assessment.
- Maintain a Google Sheets log of all candidate applications, including their contact information, LinkedIn profile, expected salary, and the AI's rating.

## How it works:

1.  **Application Form:** A form is triggered when a candidate submits their application for a Software Engineer position, collecting their full name, email, LinkedIn profile, expected salary, and resume in PDF format.
2.  **Convert Binary to Json:** The PDF resume is converted into text, extracting the textual content for analysis.
3.  **Using AI Analysis & Rating:** This node analyzes the extracted resume text against a predefined job description for a Software Engineer using a large language model.  It generates a compatibility rating (1-10) and a recommendation for the HR team, outputting it in plain text.
4.  **Candidate Lists:** The candidate's information (name, email, LinkedIn, expected salary, AI rating) and the resume file name are appended to a Google Sheets document for record-keeping and easy access.
5.  **Inform HR New CV Received:** An email is sent to the HR department, notifying them of the new application. The email includes the candidate's details (name, email, LinkedIn, expected salary) and the AI's compatibility rating.
6.  **Confirmation of CV Submission:** An automated email is sent to the candidate, confirming that their CV has been successfully received and is under review.

## Services:

-   Google Gemini AI model
-   Gmail
-   Google Sheets

## Hashtags:

#n8n #automation #AICVscreening #HRTech #recruiting
