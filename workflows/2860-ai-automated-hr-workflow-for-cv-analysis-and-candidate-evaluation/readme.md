# HR-focused automation pipeline with AI

## Use cases:

- Automate the initial screening of job applications by extracting key information from CVs and assessing candidate suitability.
- Streamline the recruitment process by automatically summarizing candidate qualifications and storing them in a structured format for easy review.
- Improve the efficiency of HR teams by automating the data entry and preliminary assessment tasks, allowing them to focus on more strategic activities.

## How it works:

1.  **On form submission:** Triggers the workflow when a candidate submits their application via a web form, including their name, email, and CV (PDF format).
2.  **Extract from File:** Extracts text content from the submitted CV (PDF file).
3.  **Upload CV:** Uploads the CV to a dedicated folder in Google Drive, naming the file with a timestamp and the original filename.
4.  **Personal Data:** Extracts personal information like telephone, city, and birthdate from the CV text using a Langchain information extraction node.
5.  **Qualifications:** Extracts educational qualifications, job history, and skills from the CV text using a Langchain information extraction node.
6.  **Merge:** Combines the extracted personal data and qualifications into a single data structure.
7.  **Summarization Chain:** Summarizes the extracted data (city, birthdate, educational qualification, job history, and skills) using a Langchain summarization chain to create a concise candidate profile.
8.  **Profile Wanted:** Defines the desired candidate profile (e.g., "full-stack web developer with PHP, Python, and Javascript experience in Northern Italy").
9.  **HR Expert:** Uses a Langchain LLM Chain node, acting as an HR expert, to compare the candidate's summary against the desired profile and assigns a rating (1-10) along with a justification for the rating.
10. **Structured Output Parser:** Structured Output Parser to parse the result of the HR Expert chain
11. **Google Sheets:** Appends the extracted data, summary, HR expert rating, and consideration to a Google Sheet for tracking and analysis.

## Services:

-   Google Sheets
-   Google Drive
-   OpenAI
-   Langchain

## Hashtags:

#n8n #automation #HR #recruitment #AI
