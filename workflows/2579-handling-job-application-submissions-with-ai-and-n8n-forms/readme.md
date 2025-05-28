# AI-Powered Job Application Workflow

## Use cases:

- **Automated CV Processing:** Automatically extracts information from uploaded CVs, pre-filling application forms and saving time for both applicants and recruiters.
- **Smart Applicant Tracking:** Integrates with Airtable (or other ATS) to store applicant data and CV files, enabling efficient tracking and management of candidates.
- **Enhanced Application Quality:** Uses AI to classify documents, ensuring only valid CVs are processed and improving the overall quality of applications.

## How it works:

1.  **CV Upload:** The workflow starts with a "Step 1 of 2 - Upload CV" Form Trigger that accepts CVs in PDF format.
2.  **Document Classification:** The "Extract from File" node extracts the text content from the PDF, which is then passed to the "Classify Document" node. The AI Text Classifier node determines if the document is a valid CV or Resume. If not it will use the  "File Upload Retry" to prompt the user to re-upload.
3.  **Information Extraction:** The "Application Suitability Agent" node uses an OpenAI Chat Model to extract relevant information from the CV, tailored to a specific job post. This information is structured using the "Structured Output Parser" node.
4.  **Data Storage:** The extracted information, including the cover letter and other details, is saved to an Airtable base using the "Save to Airtable" node. The original CV file is also uploaded and linked to the Airtable record using the "Upload File to Record" node.
5. **Form Redirection:** The workflow complete form flow for step 1 of 2, we'll use a form ending node to redirect the user to step 2 of 2.
6.  **Application Form:** Redirect to "Step 2 of 2 - Application Form" trigger. The extracted data from the first form pre-fills the second form, allowing applicants to review and amend the information.
7.  **Update Data Storage:** Using the same Airtable from before "Save to Airtable1" to update with any new information
8.  **Completion Message:** The workflow ends with a "Form Success" node, displaying a thank you message to the applicant.

## Services:

*   n8n
*   OpenAI
*   Airtable

## Hashtags:

#n8n #automation #workflow #AI #HR #Airtable #JobApplication
