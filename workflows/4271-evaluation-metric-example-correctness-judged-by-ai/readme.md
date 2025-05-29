# Workflow Evaluation: Assessing AI Answer Correctness

## Use cases:

- **Automated Evaluation of AI Models:** Evaluate the factual correctness of AI-generated answers against a ground truth dataset, enabling continuous monitoring and improvement of AI model performance.
- **QA System Validation:** Implement an automated quality assurance process for question-answering systems, ensuring the accuracy and reliability of responses.
- **Educational Assessment:** Assess student answers in educational settings by comparing them to reference answers and providing detailed feedback on correctness.

## How it works:

1.  **Data Input:** The workflow starts with fetching questions and their reference answers from a Google Sheets dataset using the "When fetching a dataset row" node. Alternatively, the "When chat message received" node receive question from user for instant evaluation.
2.  **AI Agent Interaction (Optional):** For "When fetching a dataset row" , the "Match chat format" node formats the question for the AI Agent. The AI Agent node then utilizes a Langchain agent to generate an answer based on the input question, constrained by a system message to provide concise responses. The agent uses OpenAI's language model ("OpenAI Chat Model") to generate these answers.
3.  **Evaluation Check:** The "Evaluating?" node determines whether the workflow is in evaluation mode to conditionally execute the metric calculation.
4.  **Correctness Calculation:**  If the workflow is running an evaluation: The "Calculate correctness metric" node uses an OpenAI model (GPT-4o-mini) to evaluate the AI-generated output against the reference answer. It provides a detailed analysis and a similarity score from 1 to 5, encapsulated in a JSON format.
5.  **Metric Setting:** The "Set metrics" node stores the similarity score calculated in the previous step as a metric.
6.  **Return chat response:** If the workflow is not running an evaluation: The "Return chat response" is the end of the workflow.

## Services:

-   Google Sheets
-   OpenAI

## Hashtags:

#n8n #AIevaluation #WorkflowAutomation #AICorrectness #QAValidation
