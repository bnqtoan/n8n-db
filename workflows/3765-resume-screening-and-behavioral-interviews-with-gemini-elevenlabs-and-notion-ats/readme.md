# Resume Screening & Behavioral Interviews with Gemini, Elevenlabs, & Notion ATS copy

## Use Cases:

- **Automated Resume Screening:**  Quickly evaluate a large volume of job applications by automatically extracting key information from resumes and comparing it against job descriptions, saving recruiters significant time and effort.
- **AI-Powered Behavioral Interviews:**  Conduct initial screening interviews using an AI voice agent, assessing candidates based on pre-defined criteria and providing a consistent and objective evaluation.
- **Streamlined ATS Integration:**  Automatically update a Notion-based Applicant Tracking System (ATS) with candidate information, resume analysis, interview results, and audio recordings, providing a centralized view of each candidate's profile.

## How it works:

1.  **Application Submission:** The workflow starts when a candidate submits an application through a form (Application Form 1 of 3, Application Form 2 of 3, Application form 3 of 3), including their resume.
2.  **Data Extraction and Resume Processing:**
    *   Application data and the resume are uploaded to Google Drive (Upload CV).
    *   The resume's text is extracted (Extract Resume).
    *   Personal data (Applicant Personal Data) and qualifications (Applicant Qualifications) are extracted using AI (Gemini).
    *   A summary of the applicant's education, job history, and skills is generated (Applicant Summary) using AI (Gemini).
3.  **Job Description Retrieval and Summary:**
    *   The job description is retrieved from a Notion database (Get Job Description) based on the "Job Code" provided in the application form.
    *   A summary of the job description is created using AI (Gemini) (Job Description Summary).
4.  **Resume Evaluation and Scoring:**
    *   An "HR Expert" AI (Gemini) node compares the applicant's qualifications to the job description and assigns a score (1-10) and evaluation (HR Expert).
    *   A structured output parser extracts the score and evaluation from the HR Expert's output (Structured Output Parser).
5.  **ATS Record Creation:**
    *   A new applicant record is created in a Notion ATS database (Create Applicant Record) with the extracted information, resume score, and AI-generated summaries.
    *   Applicant data is also backed up to a Google Sheet (Applicant Data Backup).
    *   A link to the uploaded resume is added to the Notion record.
6.  **AI Behavioral Interview:**
    *   Candidates are invited to an AI-powered behavioral interview. When the Elevenlabs conversation is completed, it triggers the ElevenLabs Web Hook.
    *   The full transcript of the interview is sent to an AI Agent (AI Agent) (Google Gemini Model) for evaluation using a criteria defined in a Notion DB.
    *   The audio file of the interview is downloaded (Extract\_Audio) and uploaded to Google Drive (Upload Audio to Drive).
    *   The applicant record is found in the Notion ATS database (Applicant Record) and updated with the AI Agent's evaluation (Update\_Applicant\_Record). A link to the conversation audio file in Google Drive is also added to the Notion record (Link Audio in Notion).

## Services:

*   Google Drive
*   Google Sheets
*   Notion
*   ElevenLabs
*   Google Gemini (PaLM) API

## Hashtags:

#n8n #automation #recruiting #AI #ATS
