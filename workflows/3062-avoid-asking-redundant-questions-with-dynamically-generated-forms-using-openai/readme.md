# Dynamic Form with AI

## Use cases:

- **AI Consultancy Lead Qualification:**  Capture initial lead information (name, company, etc.) and a free-form description of their needs. Dynamically generate a follow-up form with only unanswered questions to efficiently gather essential details for qualification.
- **Customer Support Issue Triage:** Allow customers to describe their issue. Use AI to identify missing information and create a dynamic form asking only for the necessary details to resolve the problem.
- **Project Requirements Gathering:**  Collect initial project requirements via a broad question.  AI analyzes the response and generates a form with specific questions about unaddressed aspects of the project scope, timeline, or budget.

## How it works:

1.  **Get Basic Information:** The workflow starts with a "Get Basic Information" form to collect initial details like name, company, job title, and email.
2.  **Get Business Overview:**  A "Get Business Overview" form takes an open-ended answer explaining the current situation and reasons for seeking AI automation.
3.  **Analyse Response:** The "Analyse Response" node uses an OpenAI Chat Model to analyze the "Business Overview" and the "Basic Information" provided by the user in forms "Get Basic Information" and "Get Business Overview" to identify if a pre-defined set of questions have been already answered by the user.
4.  **Structured Output Parser:** The output from the Large Language Model is then parsed into a structured JSON format.
5.  **Split Out Analysis:** The JSON data is split into individual question responses
6.  **Remove Already Answered Questions:** A filter node "Remove Already Answered Questions" filters out any questions that have been marked as already answered.
7.  **Prepare For Form Generation:** The "Prepare for Form Generation" node transforms the questions into the format required by the dynamic form node.
8.  **Aggregate For Form Generation:** The "Aggregate For Form Generation" aggregates all the items into an array which is used to populate the form node.
9.  **Clarification Questions:** The "Clarification Questions" form is dynamically generated based on the filtered questions. It presents the user with only the questions deemed unanswered by the AI.
10. **End Form:** A completion form "End Form" completes the flow with a thank you message.

## Services:

*   OpenAI

## Hashtags:

#n8n #automation #AI #dynamicforms #workflow
