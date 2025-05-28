# My Workflow

## Use cases:

- **Credential Audit:** Identify which workflows are using specific credentials (e.g., "Which workflows use the 'Marketing Team Slack' credential?").
- **Dependency Analysis:** Determine the workflows that rely on a particular service or API, which is helpful when planning updates or migrations (e.g., "Which workflows depend on Google Sheets?").
- **Security Review:** Discover workflows that might have access to sensitive data through their credentials, aiding in security assessments and access control (e.g., "Find workflows that use credentials with 'admin' in their name").

## How it works:

1.  **Trigger:** The workflow starts either manually using the "When clicking 'Test workflow'" node or automatically via the "Chat Trigger" node (likely a webhook for a chat service).

2.  **Fetch Workflows from n8n:** The "n8n" node queries the n8n API to retrieve a list of all workflows and stores the data. An n8n API key is required to make this work

3.  **Map Workflows & Credentials:** The "Map Workflows & Credentials" node extracts the workflow ID, workflow name, and a list of unique credentials used by each workflow. It uses a JavaScript expression to process the workflow data and identify credentials.

4.  **Save to Database:** The "Save to Database" node uses a Python script to store the extracted workflow ID, workflow name, and credential information into an SQLite database named `n8n_workflow_credentials.db`. It creates the table `n8n_workflow_credentials` if it doesn't exist and updates the table if the workflow is updated.

5.  **Chat Trigger (Optional):** The "Chat Trigger" node allows users to interact with the workflow through a chat interface.

6.  **Workflow Credentials Helper Agent:** An agent determines which database to query, and what language model to use.

7.  **Query Workflow Credentials Database (AI Tool):** The "Query Workflow Credentials Database" node, another Python script, executes SQL queries against the `n8n_workflow_credentials.db` database. It receives SQL query from the agent, executes it, and returns the results.

8.  **OpenAI Chat Model:** The "OpenAI Chat Model" node is used to generate responses based on the database query results, using the OpenAI API.

9.  **Window Buffer Memory:** The "Window Buffer Memory" node, connected to the OpenAI Chat Model, uses a memory buffer so that the chat model is aware of previous turns in the conversation.

## Services:

*   n8n API
*   SQLite
*   OpenAI API

## Hashtags:

#n8n #automation #workflow #credentials #security #langchain #agent
