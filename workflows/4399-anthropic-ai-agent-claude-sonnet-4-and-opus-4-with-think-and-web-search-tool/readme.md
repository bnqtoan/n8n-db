# Agent AI Anthropic Opus 4 and Sonnet 4

## Use Cases

- **Intelligent Chatbot:** Dynamically selects the most appropriate Anthropic model (Opus 4 or Sonnet 4) to respond to user queries in a chatbot, optimizing for response quality and resource utilization.
- **Automated Customer Support:** Routes customer inquiries to different AI models based on complexity, ensuring efficient and accurate support.  Simple inquiries go to Sonnet 4, complex ones to Opus 4.
- **Dynamic Content Generation:**  Chooses between different AI models to generate content based on the content's purpose (e.g., Sonnet for standard content, Opus for more sophisticated and nuanced content).

## How it Works

1.  **Chat Trigger:** The workflow starts when a chat message is received via the "When chat message received" trigger.
2.  **Anthropic Routing Agent:** The received message is passed to the "Anthropic Routing Agent," which determines whether Claude Sonnet 4 or Claude Opus 4 is the best model to respond to the prompt. This decision is based on a system message that defines when each model should be utilized (e.g., Opus 4 for complex tasks and Sonnet 4 for standard tasks).  The agent returns the original prompt and the selected model.
3.  **Structured Output Parser:** Parses the output from the routing agent, ensuring it is in a valid JSON format containing the prompt and the model name.
4.  **AI Agent:** This Agent orchestrates the interaction with the chosen language model and any tools needed (see tools section). It uses the original prompt received from the routing agent. The Agent uses a system message that allows it to use a web_search tool if needed.
5.  **AI Tools**: The agent leverages the following AI tools. Think, Calculator, and web_search to respond to a prompt.
6.  **Anthropic Model Selection:** Based on the output of the Router, the workflow uses an Anthropic language model node, that uses the model provided by the Router. The chosen model (Opus 4 or Sonnet 4) generates a response.
7.  **Memory:** The Agent leverages "Simple Memory1", which buffers past information.
8.  **Web Search**: The web search tool uses the Anthropic API to search the web.

## Services

*   **Anthropic API:** Used for both the Routing Agent (to choose between models) and the Language Model node (to generate the final response using either Opus 4 or Sonnet 4).
*   **Web Search Tool**: Searches the web

## Hashtags

#n8n #automation #AI #Anthropic #Chatbot #Workflow #Agent
