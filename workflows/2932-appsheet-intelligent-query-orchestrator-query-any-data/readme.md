# Appsheet Community Template-Workflow

## Use cases:

- **AI-Powered App Interaction:** Allows users to interact with their AppSheet applications using natural language, leveraging AI to understand the user's intent and perform actions within the app.
- **Data Exploration and Analysis:** Enables users to explore and analyze data within their AppSheet applications by asking questions and receiving structured responses.
- **Workflow Automation with AppSheet:** Automates tasks and processes within AppSheet based on triggers from external sources like chat messages or other workflows.

## How it works:

1.  **Trigger:** The workflow is triggered either by a new chat message (`When chat message received`) or by another n8n workflow (`When Executed by Another Workflow`).
2.  **Input Processing:** The `Google Gemini Chat Model` & `Structured Output Parser` nodes processes user input or input from the trigger.
3.  **AppSheet Schema Analysis:** The `Appsheet Schema Analyser` node, powered by `Anthropic Chat Model`, explores the AppSheet app's data structure and relationships, utilising `GetListOfWorksheets`, `GetHeaders` and `CallAppsheetAPI`
4.  **Action Execution:** Based on the analysis, the workflow interacts with the AppSheet API via the `AppSheet` node to perform the desired action.
5.  **Reranking:** Then the workflow reranks the output and provides it to the `Final Reranked Output` Node.
6.  **Output:** The result of the action is returned to the user or passed on to the next step in the workflow.

## Services:

-   AppSheet
-   Google Gemini
-   Anthropic
-   Cohere

## Hashtags:

#n8n #AppSheet #Automation #AI #Workflow
