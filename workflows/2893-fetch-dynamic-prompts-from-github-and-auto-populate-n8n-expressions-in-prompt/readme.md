# Load Prompts from Github Repo and auto populate n8n expressions

## Use cases:

- **Dynamic Prompt Management:** Automatically update and manage prompts for AI models from a central GitHub repository, ensuring consistency and version control.
- **Personalized Content Generation:** Tailor AI-generated content by dynamically populating prompts with variables like company name, product features, or sector-specific keywords.
- **Streamlined AI Workflow Automation:** Simplify the process of using AI models by automating prompt retrieval, variable replacement, and execution, reducing manual effort.

## How it works:

1.  **Trigger:** The workflow is initiated manually by clicking the "Test workflow" button in n8n.
2.  **Set Variables:** The "setVars" node defines variables such as `Account`, `repo`, `path`, `prompt`, `company`, `product`, `features`, and `sector`. These variables are used to customize the prompt.
3.  **GitHub:** The "GitHub" node fetches a file from a specified GitHub repository. It uses the variables defined in the "setVars" node to dynamically construct the file path.
4.  **Extract from File:** The "Extract from File" node extracts the content (text) from the file fetched from GitHub.
5.  **SetPrompt:** The content extracted from the file and set the "data" with the prompt as a string.
6.  **Check All Prompt Vars Present:** This code node, named "Check All Prompt Vars Present," extracts variables from the prompt. It checks that all are defined in the `setVars` node. The node's output is the success boolean and any "missing keys"
7.  **If:** Checks the boolean value from the "Check All Prompt Vars Present" node, if "success" is not true, it goes to the "Stop and Error" node, if "success" is true it goes to the "replace variables" node.
8.  **Stop and Error:** If not all variables from the prompt are present in the setVars node, the workflow stops and throws an error.
9.  **Replace Variables:** The "replace variables" code node takes the prompt and replaces placeholders enclosed in `{{ }}` with corresponding variables defined in the "setVars" node.
10. **Set Completed Prompt:** The completed prompt is set here so that it may be referenced later in the workflow.
11. **Ollama Chat Model:** Sends the prompt to Ollama to produce an output
12. **AI Agent:** The "AI Agent" node (Langchain Agent) processes the populated prompt and generates a response based on the prompt
13. **Prompt Output:** Finally, the workflow stores the AI-generated output in the node "Prompt Output."

## Services:

-   GitHub: Used for fetching prompt files from a repository.
-   Ollama: Used as the LLM to process the completed prompt.

## Hashtags:

#n8n #automation #GitHub #AI #PromptEngineering
