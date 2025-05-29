# My Workflow

## Use cases:

- **AI Agent Evaluation:** This workflow evaluates whether an AI agent, when answering questions, correctly utilizes specific tools as defined in a dataset.
- **Chatbot Performance Monitoring:**  It can be used to monitor the performance of a chatbot by checking if it calls the appropriate tools for different types of user queries.
- **Dataset-Driven Tool Validation:** This workflow can validate the tool-calling behavior of an AI agent based on a predefined dataset of questions and expected tool usage.

## How it works:

1.  **Trigger:** The workflow starts with either a chat message being received (`When chat message received`) or by fetching a row from a dataset (`When fetching a dataset row`). The dataset includes questions and the specific tools that should be called when answering those questions.
2.  **Input Formatting:** The chat message from the webhook is formatted to match with the agent (`Match chat format`).
3.  **AI Agent Execution:** The `AI Agent` node processes the input question using the `OpenAI Chat Model` (gpt-4o-mini). It has access to tools such as `Calculator` and `Fetch a webpage`. The "Return intermediate steps" option is enabled to track the tools called during the agent's execution.
4.  **Tool Check:** The `Check if tool called` node determines whether the agent called the tool expected in the dataset using this expression `{{ $json.intermediateSteps.filter(x => x.action.tool == $('When fetching a dataset row').item.json.tool_to_call).length > 0 }}`.
5.  **Evaluation:** The `Evaluation` node records whether the correct tool was called based on the output of the previous check. The result (`true` or `false`) is converted to a numerical value.
6.  **Conditional Return:** The `Evaluating?` node checks if the workflow is running in evaluation mode.
7.  **Response:** The `Return chat response` sends the response to the user.

## Services:

-   **OpenAI:** Used via the `OpenAI Chat Model` node to provide language model capabilities to the AI Agent.
-   **Google Sheets:** Used to store the test dataset of questions and expected tool usage.

## Hashtags:

#n8n #automation #AIagent #toolcalling #evaluation
