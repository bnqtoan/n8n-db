# My Workflow

## Use cases:

- Automatically process and categorize customer information received via email, storing it in designated Google Drive folders.
- Build a knowledge base from Google Drive documents and use it in a chat interface to answer user questions.
- Manage and store daily sales, addresses, and customer information, utilizing AI to classify and process the data.

## How it works:

1.  The workflow is triggered by a Gmail Trigger, Schedule Trigger, Google Drive Trigger, or incoming chat message.

2.  Based on the trigger, different branches of the workflow are executed:

    *   **Email Processing:**
        *   A Gmail Trigger activates the workflow when a new email arrives.
        *   The email content is classified using the "Text Classifier" node and an OpenAI Chat Model.
        *   Sets daily sales information and address information
        *   Based on the email classification, customer information is stored in specific folders within Google Drive.

    *   **Scheduled Data Processing:**
        *   A Schedule Trigger starts the workflow at a defined interval.
        *   URLs is set for google drive folder
        *   The workflow will then create new folders in Google Drive.
        *   Upload new documents to Google Drive

    *   **Chat Interface:**
        *   A `When chat message received` triggers this process when a new message is sent.
        *   The message is classified and processed using OpenAI Chat Model.

    *   **Knowledge Base Building and Usage:**
        *   Google Drive Trigger activates the workflow when a file is added in google drive.
        *   Files from a specified Google Drive folder are loaded into the vector store.
        *   Recursive Character Text Splitter splits text into smaller chunks

3.  The workflow uses Langchain nodes to classify data and uses OpenAI to extract information.

4.  Workflow store and manage data into Google Drive.

5.  Workflow use different google sheets node.

## Services:

-   Gmail
-   Google Drive
-   Google Sheets
-   OpenAI
-   Pinecone
-   Postgres

## Hashtags:

#n8n #automation #googledrive #gmail #openai #langchain
