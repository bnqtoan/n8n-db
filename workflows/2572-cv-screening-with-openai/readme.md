# CV Screening with OpenAI

## Use cases:
- **Automated Resume Screening:** Quickly evaluate a large number of resumes against a specific job description to identify the most promising candidates.
- **Improve candidate selection:** By providing a more in-depth analysis of candidates, you can make better hiring decisions and improve candidate selection.
- **Streamline Recruitment Process:** Reduce the time and effort spent on manually reviewing resumes by automating the initial screening process.

## How it works:
1. **Manual Trigger:** The workflow starts when you manually trigger it using the "When clicking ‘Test workflow’" node.
2. **Set Variables:** The "Set Variables" node defines variables such as `file_url` (the URL of the CV to download), `job_description` (the description of the job), `prompt` (instructions for OpenAI on how to evaluate the CV), and `json_schema` (instructions on how to format the response).
3. **Download File:** The "Download File" node downloads the CV from the URL specified in the `file_url` variable.
4. **Extract Document PDF:** The "Extract Document PDF" node extracts the text content from the downloaded PDF file.
5. **OpenAI - Analyze CV:** The "OpenAI - Analyze CV" node sends the extracted text and job description to the OpenAI API for analysis.
6. **Parsed JSON:** The "Parsed JSON" node parses the JSON response from OpenAI and formats it into structured data.

## Services:
- OpenAI API: Used for analyzing the CV and job description to determine the candidate's suitability.
- Supabase: While not directly included as a node, the description mentions storing results in Supabase for further processing.
## Hashtags:
#n8n #automation #workflow #HR #OpenAI
