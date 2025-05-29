# Perplexity Researcher

## Use cases:

- **Content Research:** Quickly gather in-depth information on a specific topic or field to aid in content creation, academic research, or general knowledge acquisition.
- **Writing Preparation:**  Use the workflow to find relevant materials and insights, to assist in pre-writing tasks, brainstorming, or identifying key arguments.
- **Answer complex questions:** The Workflow leverages the Perplexity AI sonar model to answer complex questions from the user

## How it works:

1.  **Trigger:** The workflow is initiated when executed by another n8n workflow, receiving a query as input.
2.  **Set Prompt Variables:** A system prompt is defined to instruct the language model on its role, which involves providing in-depth explanations and discussions on various topics. The user query is also stored in a variable.
3.  **Perplexity Research Content1 (HTTP Request):**  The workflow sends a POST request to the Perplexity AI `/chat/completions` endpoint. It uses the "sonar" model and includes both the system and user prompts in the message body.  The request is configured with parameters like `max_tokens`, `temperature`, `top_p`, and `search_domain_filter` to control the AI's response. Authentication is handled via HTTP Header.
4.  **Extract API Response:**  The workflow extracts the content of the AI's response from the `choices[0].message.content` field of the JSON response.

## Services:

-   Perplexity AI API ([https://api.perplexity.ai/chat/completions](https://api.perplexity.ai/chat/completions))

## Hashtags:

#n8n #automation #AI #research #contentcreation
