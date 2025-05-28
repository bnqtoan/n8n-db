# My Workflow

## Use cases:

-   **Information Retrieval:** Answer questions about specific data points (e.g., "What notes can you find for Jay Gatsby and what is his email address?") by retrieving information from a pre-existing knowledge base stored in an n8n sub-workflow.
-   **Document Q&A:** Use a workflow to answer question based on a document.

## How it works:

1.  **Manual Trigger:** The workflow is initiated manually via the "When clicking Execute Workflow" node.
2.  **Edit Fields:** A "chatInput" field is created with the value: "What notes can you find for Jay Gatsby and what is his email address?"
3.  **Question and Answer Chain:** This node receives the input question and uses the OpenAI Chat Model to formulate an answer.
4.  **OpenAI Chat Model:** Specifies the language model to be used, which is "gpt-4o-mini" and retrieves the credentials from "OpenAi account".
5.  **Workflow Retriever:** It retrieves information from a sub-workflow, specified by the ID "QacfBRBnf1xOyckC" based on the question.
6.  **Result:** The "Question and Answer Chain" then combines the question, language model and the retrieved information to provide an answer.

## Services:

-   OpenAI

## Hashtags:

#n8n #automation #Q&A #OpenAI #workflow
