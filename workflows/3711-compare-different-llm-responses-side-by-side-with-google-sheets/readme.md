# Easily Compare LLMs Using OpenAI and Google Sheets

## Use cases:

- **A/B Testing LLMs:** Evaluate the performance of different language models (e.g., `gpt-4.1` vs. `mistralai/mistral-large`) for a specific task or application before deploying one to production.
- **Model Selection for Specific Tasks:** Determine which LLM provides the best responses for a particular use case by comparing their outputs side-by-side in a chat interface and logging the results to a Google Sheet.
- **Team-Based LLM Evaluation:** Enable non-technical stakeholders to easily evaluate LLM responses based on real-world needs and criteria, using a Google Sheet for collaborative assessment.

## How it works:

1.  The workflow starts with a "When chat message received" trigger, capturing the user's input.
2.  The "Define Models to Compare" node stores an array of model IDs to be tested.
3.  The "Split Models into Items" node iterates over the array of models, preparing variables for each model.
4.  Inside the "Loop Over Items" node, each model is queried independently:
    *   The "Set model, sessionId, chatInput, sessionIdBase" node defines the model being used, a unique session ID, user input, and the base session ID.
    *   The "Simple Memory" and "Chat Memory Manager" nodes handle memory context for each model.
    *   The "AI Agent" node uses the Langchain Agent and a Chat Model (OpenRouter) to generate a response to the input prompt.
    *   The "Prepare Data for Chat and Google Sheets" node formats the model's response for both the chat UI and Google Sheets, including the model's answer, context, and session information.
5.  The "Group Model Outputs for Evaluation" node aggregates the outputs of both models.
6.  The "Add Model Results to Google Sheet" node logs the responses, context, and session data to a Google Sheet for evaluation.
7.  The "Concatenate Chat Answers" node formats the answers to be displayed in a chat interface
8.  The "Set Output for Chat UI" sets the output of the workflow to concatenated model answers for easy comparison.

## Services:

-   **OpenRouter:** Used to access and compare different LLMs.
-   **Google Sheets:** Used to log model responses, context, and session data for evaluation.

## Hashtags:

#n8n #LLM #automation #workflow #ModelEvaluation
