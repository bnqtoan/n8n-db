# Get Airtable data in Obsidian Notes

## Use cases:

- **Answering Questions About Airtable Data within Obsidian:** A user can highlight a question in their Obsidian notes about data stored in Airtable, and the workflow will fetch relevant information from Airtable and provide an answer using an AI agent.
- **Summarizing Airtable Records:** If you have a large number of records in Airtable, you can ask the AI agent to summarize the records based on a specific criteria.
- **Automated Data Retrieval and Integration:** If you need to reference Airtable data frequently while working in Obsidian, this workflow automates the process of retrieving and integrating that data into your notes.

## How it works:

1.  **Webhook Trigger (Webhook Set Up in Obsidian):** The workflow starts when a POST request is sent to a specific webhook URL. This is triggered from Obsidian using a plugin like the "Post Webhook Plugin". The data sent in the request (highlighted text/question) is captured.
2.  **AI Agent:** The highlighted text from Obsidian is passed to the AI Agent node. This node prepares and formats the request for the language model.
3.  **OpenAI Chat Model:** The AI agent uses the OpenAI Chat Model (specifically gpt-4o-mini) to process the query against data from Airtable.
4.  **Airtable:** The Airtable node searches for records in a specified Airtable base and table based on request from the AI Agent.
5.  **Respond to Obsidian:** The AI Agent will then generate the response back to Obsidian to display the information from Airtable.

## Services:

-   Airtable: Used for storing and retrieving structured data.
-   OpenAI: Used for natural language processing and generating responses.
-   Obsidian: Used for knowledge management

## Hashtags:

#n8n #automation #Airtable #Obsidian #AI
