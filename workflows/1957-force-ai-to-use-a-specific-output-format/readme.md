# My Workflow

## Use cases:

*   **Data Extraction and Structuring:** Automate the process of extracting specific information from unstructured text (like a prompt) and organizing it into a structured format (e.g., JSON) for further analysis or storage.
*   **LLM-Powered Information Retrieval:** Use natural language prompts to retrieve and structure data about specific topics, like geographical data in this case (largest states and their cities).
*   **Error Correction in Data Processing:** Implement a workflow that automatically attempts to correct errors in the output of a Large Language Model (LLM) to ensure data quality and validity.

## How it works:

1.  **Trigger:** The workflow starts with a "When clicking 'Execute Workflow'" trigger node, which initiates the process manually.
2.  **Prompt Definition:** A "Set" node named "Prompt" defines the initial query/instruction for the LLM. In this case, it requests the 5 largest states in the USA by area, along with their 3 largest cities and their populations.
3.  **Initial LLM Processing:** A "Basic LLM Chain" node receives the prompt and utilizes an "OpenAI Chat Model" node ("gpt-4o-mini") to generate an initial response.
4.  **Structured Output Parser:** A "Structured Output Parser" node defines the desired format for the output data (state name and a list of cities with their names and populations).
5.  **Auto-fixing Output Parser:** An "Auto-fixing Output Parser" node validates the output against the defined schema and attempts to fix any errors using another "OpenAI Chat Model" instance.
6.  **Iterative Refinement:** If the initial LLM output is invalid, the "Auto-fixing Output Parser" uses a second "OpenAI Chat Model" instance ("gpt-4o-mini") to refine the response until it matches the defined schema. The result is then passed back to the "Basic LLM Chain" node, completing the loop.

## Services:

*   OpenAI API (via the n8n OpenAI Chat Model node)

## Hashtags:

#n8n #automation #LLM #dataextraction #OpenAI
