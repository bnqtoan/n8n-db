# AI Agent - Cv Resume - Automated Screening, Sorting, Rating and Tracker System

## Use cases:

- **Automated Resume Screening:** Automatically screen incoming resumes based on a predefined job description, reducing the manual effort of HR personnel.
- **Candidate Shortlisting:** Intelligent shortlisting of candidates based on AI-driven analysis, ensuring the most qualified candidates are prioritized.
- **Efficient Candidate Management:** Streamline the candidate management process by automatically sorting resumes into different folders (Rejected, KIV, Shortlisted) based on AI assessment.

## How it works:

1.  **Google Drive Watcher:** The workflow is triggered when a new resume (PDF) is added to the "Unfiltered" folder in Google Drive. (Google Drive - Resume CV File Created node)
2.  **Resume Download:** The resume file is downloaded from Google Drive. (Download Resume File From Gdrive node)
3.  **Resume Extraction:** The text content is extracted from the PDF resume file. (Extract from File node)
4.  **Job Description Retrieval:** The job description is retrieved from a specified Google Docs document. (GDocs - Get Job Desc node)
5.  **AI-Powered Analysis:** An AI Agent (using the Groq - llama 4 AI MODEL) compares the extracted resume text with the job description and makes a decision (REJECTED/KIV/SHORTLISTED), provides a reason, and assigns a score. (AI Agent node)
6.  **Conditional Actions:** Based on the AI Agent's decision:
    -   The resume file is moved to the appropriate Google Drive folder (Rejected, KIV, or Shortlisted). (Gdrive:Move-To-Reject-Folder, Gdrive:Move-To-KIV-Folder, Gdrive:Move-To-Shortlisted-Folder nodes)
    -   The candidate's information, AI verdict, reason, and score are updated in a Google Sheets tracker. (Gsheet: Update Candidate Tracker node)
    -   An email notification is sent to the candidate with the decision and reason. (Gmail:Notification node)

## Services:

-   Google Drive
-   Google Docs
-   Google Sheets
-   Gmail
-   Groq (LLM Model)

## Hashtags:

#n8n #automation #AI #recruitment #HR
