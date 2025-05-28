# Extract personal data with a self-hosted LLM Mistral NeMo

## Use cases:

*   **Automated Data Extraction from Chat Logs:** Automatically extract structured information (name, contact details, communication type, etc.) from customer service chat logs or messaging platforms. This can help in quickly identifying key details for reporting, analysis, or follow-up actions.
*   **Parsing Information from Emails:** Use the workflow to process emails and extract relevant personal data like names, contact information, and subjects, helping to categorize and prioritize email communication.
*   **Streamlining Data Entry:** Integrate the workflow with internal communication tools to automatically populate databases or CRM systems with structured data extracted from employee interactions or notes.

## How it works:

1.  **Trigger:** The workflow starts when a chat message is received via the "When chat message received" trigger node.
2.  **Basic LLM Chain:** The received message is passed to the "Basic LLM Chain" node, which uses a prompt to instruct the LLM (Mistral NeMo) to extract specific information according to a predefined JSON schema. This node also incorporates an output parser. The current date and time are included in the prompt to provide context.
3.  **Auto-fixing Output Parser:** If the initial output from the LLM does not conform to the expected JSON schema, the "Auto-fixing Output Parser" node attempts to correct the output by re-prompting the LLM with the error details.
4.  **Ollama Chat Model:** This node defines the self-hosted LLM model (Mistral NeMo) and its configuration (temperature, memory usage, etc).
5.  **Structured Output Parser:** The "Structured Output Parser" node validates that the LLM's output matches the defined JSON schema. This schema specifies the expected data structure, including fields like name, surname, communication type, contact details (if provided), timestamp, and subject.
6.  **Extract JSON Output:** The extracted JSON data (if valid) is then outputted by the "Extract JSON Output" node. This data can then be used in subsequent nodes for further processing or storage.
7.  **Error Handling:** If an error occurs during the LLM processing, the workflow continues execution through the "On Error" node.

## Services:

*   **Ollama:** A tool for running LLMs locally.

## Hashtags:

#n8n #automation #LLM #dataextraction #NLP
