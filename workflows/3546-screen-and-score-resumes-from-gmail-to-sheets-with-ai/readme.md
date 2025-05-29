# Resume Screener from Gmail to Sheets

## Use cases:

- **Automated Resume Screening:** Automatically extract resumes from Gmail attachments, analyze them using AI, and record the evaluation in a Google Sheet for streamlined candidate management.
- **Lead Generation:** Automatically capture the details of any lead information submitted in the from of a resume, this could be from job applicants or other business opportunites.
- **Candidate Scoring:** Automatically grade, score, and shortlist candidate to give you a score to assist in finding the right talent faster.

## How it works:

1.  **Trigger on New Email Received:** The workflow starts when a new email with an attachment is received in the specified Gmail inbox. The trigger is configured to only look for unread emails that have attachments.
2.  **Extract text from PDF File:** Extracts the text content from the PDF attachment found in the email.
3.  **AI Agent to evaluate Resume:** Sends the extracted text to an AI Agent (Langchain) connected to the OpenAI Chat Model (GPT 4o-mini). The agent is configured to analyze the resume, extract name, email, and LinkedIn profile, and provide a score based on the resume's details.
4.  **Structured Output Parser:** Parse the output from the AI Agent into structured JSON
5.  **Add Resume Evaluation to Google Sheets:** Appends the extracted information (name, email, LinkedIn, score, and the original resume text) to a specified Google Sheet. The workflow uses the Google Sheets node to append a new row with the extracted and analyzed data.

## Services:

-   Gmail
-   OpenAI
-   Google Sheets
-   Google Drive

## Hashtags:

#n8n #automation #resumeScreening #AIScoring #googleSheets
