# HR Job Posting and Evaluation with AI

## Use cases:

- **Automated Candidate Screening:** Streamlines the initial screening process by automatically evaluating resumes against job descriptions and assigning qualification scores.
- **Personalized Interview Scheduling:** Automates the scheduling of phone interviews with shortlisted candidates, including personalized email communication.
- **Efficient HR Workflow:** Reduces manual effort in HR processes from job application to interview scheduling, improving overall efficiency and candidate experience.

## How it works:

1.  **Form Submission:** The workflow starts when a candidate submits a job application form via a web form.
2.  **CV Upload and Storage:** The submitted CV is automatically uploaded to Google Drive for secure storage and easy access.
3.  **Airtable Integration:** The applicant's details like name, email, phone number, and CV link are stored in Airtable.
4.  **CV Evaluation with AI:** The workflow downloads the CV from Google Drive, extracts the text and leverages an AI Agent to compare the CV content against the job description fetched from Airtable. The AI Agent assigns a qualification score and provides a reason for the score.
5.  **Shortlisting:**  The workflow uses an IF node to determine if the candidate is shortlisted based on the score.
6.  **Airtable Update:** The candidate is updated on Airtable for either shortlisting or rejection for the position.
7. **Questionnaire Generation:** A tailored questionnaire is generated, designed to gather additional information about the candidate's fit for the role, and this information is stored in Airtable.
8.  **Personalized Email and Interview Scheduling:** If shortlisted, the workflow crafts a personalized email to the candidate, expressing interest in an interview. It uses AI to check the interviewer's availability and schedule a 30-minute phone interview, also updating Airtable with the scheduled time and adding the screening questions.

## Services:

-   **Google Drive:** Used for storing and retrieving candidate CVs.
-   **Airtable:** Used as a database to store applicant information, track the recruitment process, and store job descriptions.
-   **OpenAI (LangChain):** Used to create screening questionnaires, generate personalized emails, and evaluate the candidate's CV.
-   **Google Calendar:** Used to Schedule meetings with the candidate.
-   **SMTP:** Used for sending emails

## Hashtags:

#n8n #HRAutomation #AIrecruiting #WorkflowAutomation #CandidateScreening
