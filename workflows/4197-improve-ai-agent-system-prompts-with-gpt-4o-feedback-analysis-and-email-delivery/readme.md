# System Prompt Tuner

## Use cases:

- **Optimize AI Agent Performance:** Improve the effectiveness of AI agents by refining their system prompts based on observed behavior and user feedback.
- **Troubleshoot Agent Issues:** Identify and correct shortcomings in an AI agent's performance by analyzing what's working and what's not.
- **Iterative Agent Improvement:** Continuously refine AI agent prompts through a feedback loop, ensuring they stay aligned with desired outcomes.

## How it works:

1.  **User Inputs:** The workflow starts with a form where users provide details about the AI agent, including its name, purpose, current system prompt, what's working well, what's not, and optionally, a sample input/output.
2.  **AI Agent (LLM Prompt):** The user input is fed into a Langchain LLM Agent node which then generates an improved system prompt. It uses the input information to identify gaps and shortcomings in the agent's behavior.
3.  **OpenAI Chat Model:** The AI Agent node sends a request to the OpenAI API (specifically, the GPT-4o model) to generate the refined system prompt based on the provided context and instructions.
4.  **Structured Output Parser:** The AI Agent node uses the Structured Output Parser to ensure that the response from the OpenAI API is formatted as JSON with `updated_system_prompt` and `summary_of_improvements` fields.
5.  **Gmail:** The improved system prompt, the original prompt, and a summary of improvements are then sent to the user via email.

## Services:

-   OpenAI API (GPT-4o)
-   Gmail

## Hashtags:

#n8n #automation #AIagent #SystemPrompt #LLM
