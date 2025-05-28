# My workflow 3

## Use cases:

- **Automated Job Application:** Streamline the job application process by automatically extracting information from a resume, analyzing it, finding suitable job offers, and organizing them for review.
- **Resume Analysis and Skill Matching:** Quickly analyze a resume to identify relevant skills and experience, then match them against specific job requirements or skill databases.
- **Personalized Job Search:** Automate the process of searching for job opportunities based on the skills and experience highlighted in a resume, tailored to individual preferences.

## How it works:

1.  **Manual Trigger:** The workflow starts when triggered manually.
2.  **Download Resume (PDF File):** Downloads a resume in PDF format from Google Drive.
3.  **Read PDF:** Reads the content of the downloaded PDF resume.
4.  **Filter Relevant Information:** Filters the text extracted from the resume, using the Split Out node but without specific parameters. This step likely aims to split the resume text into manageable chunks.
5.  **Analyse Resume:** Analyzes the extracted resume content using Langchain and OpenAI to extract key information, skills, and experience.
6.  **Find Suitable Job Offers:** Uses the analyzed resume information to search for suitable job offers via an HTTP Request node.
7.  **Organise the Job Posts:** Organizes the job posts extracted from the API/Webpage, using the Split Out node but without specific parameters. This step likely aims to split the job posts into manageable chunks.
8.  **Upload Job Posts Organised in a Spreadsheet:** Uploads the organized job posts into a Google Sheets spreadsheet for easy review and application.

## Services:

-   Google Drive
-   Google Sheets
-   OpenAI (via Langchain)
-   HTTP Request (for Job Search, could be any job board or company API)

## Hashtags:

#n8n #automation #resume #jobsearch #googlesheets
