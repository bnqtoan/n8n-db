# Job_Search_Automation

## Use cases:

1.  **Automated Job Application:** This workflow can automatically search for jobs, score them based on relevance, summarize the job description, write a cover letter, and store the data in Google Sheets. This streamlines the job application process and saves time.
2.  **Daily Job Alert and Application:** Scheduled to run daily, this workflow can identify new job postings, assess their suitability, and send you an email notification with a tailored cover letter, enabling prompt application to relevant roles.
3.  **Job Market Analysis:** The data collected in Google Sheets can be used to analyze job market trends, identify in-demand skills, and track application progress.

## How it works:

1.  **Schedule Trigger:** The workflow starts based on a predefined schedule.
2.  **Set Job Title:** This node (likely) sets or modifies the job title that will be searched for. *Note: The workflow lacks parameter details for this node, assuming it sets the job title*.
3.  **Get Jobs from Adzuna1:** This node fetches job postings from the Adzuna API based on the job title set in the previous step.
4.  **Split Jobs1:** The job postings received from Adzuna are split into individual items for processing.
5.  **Summarize Job1:** Each job posting is sent to an OpenAI node to generate a summary of the job description.
6.  **Score Job:** Another OpenAI node scores the job based on the summary and other criteria.
7.  **Write Cover Letter1:** Based on the job description summary and score, an OpenAI node generates a personalized cover letter.
8.  **Google Sheets:** The job details, summary, score, and generated cover letter are written to a Google Sheets spreadsheet for tracking and analysis.
9.  **Gmail1:** An email is sent via Gmail, presumably containing the job details and the generated cover letter.

## Services:

*   Adzuna API: Used for fetching job postings.
*   OpenAI: Used for summarizing job descriptions, scoring jobs, and writing cover letters.
*   Google Sheets: Used for storing job search data.
*   Gmail: Used for sending email notifications.

## Hashtags:

#n8n #automation #jobsearch #openai #googlesheets
