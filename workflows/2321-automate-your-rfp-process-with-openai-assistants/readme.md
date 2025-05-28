# My Workflow

## Use cases:
- Automatically generate responses to Request for Proposals (RFPs) by extracting questions and using AI to answer them based on company-specific context.
- Streamline the RFP response process, reducing the manual effort required by sales teams.
- Create a centralized repository of RFP responses in Google Docs, improving collaboration and knowledge sharing.

## How it works:
1.  **Webhook Trigger:** The workflow starts when an RFP document is submitted via a webhook. The document details, including title and submitter's email, are extracted.
2.  **Data Extraction:** The workflow retrieves the RFP document (PDF).
3.  **Set variables:** Variables are set for file title, name, and reply address.
4.  **Google Docs Creation:** A new Google Docs document is created to store the RFP responses, using the title obtained from the webhook request.
5.  **Metadata Addition:** Metadata such as title, date, requestor, and execution ID is added to the response document.
6.  **Question Extraction:** The RFP document is processed using a language model (LLM) to extract all the questions.
7.  **Question Answering Loop:**
    *   The workflow iterates through each extracted question.
    *   An OpenAI Assistant, pre-loaded with company information, generates an answer to the question.
    *   The question and generated answer are recorded in the Google Docs response document.
8.  **Notifications:** Once all questions are answered, email and Slack notifications are sent to inform the submitter and the sales team that the RFP response document is complete.

## Services:
- Google Docs
- OpenAI
- Slack
- Gmail

## Hashtags:
#n8n #automation #RFP #AI #GoogleDocs
