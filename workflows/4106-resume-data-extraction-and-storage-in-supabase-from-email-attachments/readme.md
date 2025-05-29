# Resume-Information-Extractor

## Use cases:

- **Automated Candidate Screening:** Automatically extract key information (name, contact details, experience, skills, education) from resumes received via email and store them in a structured database for efficient candidate filtering.
- **Populating HR Databases:** Streamline the process of adding candidate data to HR databases by automatically parsing resume attachments and pre-filling relevant fields.
- **Resume Parsing for Recruitment Agencies:** Parse resumes received by recruitment agencies to quickly identify suitable candidates for open positions based on specific skills and experience criteria.

## How it works:

1.  **Gmail Trigger:** The workflow starts when a new email arrives in a specified Gmail inbox.  It's configured to download attachments.
2.  **Check if Attachment exists:** This step verifies if any attachment exists
3.  **Extract from File:** Extracts text from the attached file, specifically targeting PDF files. The extracted text is stored in the `attachment_0` property.
4.  **Edit Fields:** Copies the extracted text into a field called `text`.
5.  **Basic LLM Chain:** Uses a Large Language Model (LLM) to analyze the extracted text and identify key information such as name, email, telephone number, experience, skills, and education.  It uses a prompt to instruct the LLM to act as an HR expert and extract the specified details.
6.  **HTTP Request:** Sends the extracted information (name, telephone, email) to a Supabase database via an HTTP POST request.  It uses API keys and authorization tokens for secure access.
7.  **Edit Fields 1/2/3:** Stores `Experience`, `Skill` and `Education` into a new field
8.  **Split Out:** Splits `Experience`, `Skill` and `Education` into single values
9.  **Supabase:** Stores the `Experience`, `Skill` and `Education` values into a dedicated table.

## Services:

*   Gmail
*   OpenRouter
*   Supabase

## Hashtags:

#n8n #automation #resumeParsing #HR #recruitment
