# My Workflow

## Use cases:

- **Automated Prompt Curation**: Automatically extract user input from a chat, categorize and name it, then store it in Airtable as a prompt library entry.
- **Dynamic Prompt Generation**: Generate optimized prompts for AI agents based on incoming chat messages, leveraging a defined role and instructions.
- **Enhanced AI Chatbot**: Improve chatbot interactions by generating new prompts, categorizing existing ones, and storing them for future use, leading to more context-aware and effective responses.

## How it works:

1.  **When chat message received**: The workflow starts when a new chat message is received, triggering the process.
2.  **Generate a new prompt**: Use Google Gemini to creates a new prompt based on a persona as "**expert n8n prompt engineer**" and with the message received in the first node.
3.  **Edit Fields**: It takes the `text` of the response of the prompt generator and pass it to the next node.
4.  **Categorize and name Prompt**: Categorizes the prompt, utilizing Google Gemini to determine its category and name based on a structured output parser.
5.  **set prompt fields**: Sets the values extracted from the LLM (name and category), together with the original prompt received.
6.  **add to airtable**: Adds the categorized prompt and its details (name, prompt content, category) to an Airtable base.
7.  **Return results**: Finally, the workflow returns the generated prompt.

## Services:

*   Google Gemini (PaLM) API
*   Airtable

## Hashtags:

#n8n #automation #AI #promptEngineering #Airtable
