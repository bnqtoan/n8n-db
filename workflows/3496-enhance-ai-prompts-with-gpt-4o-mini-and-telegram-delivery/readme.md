# Optimize Prompt

## Use cases:

- **Prompt Enhancement for AI Models:** Improve the quality and effectiveness of prompts used for AI models (like GPT-3 or similar) to get more accurate and relevant responses. This is useful for users who might not be skilled at crafting effective prompts or want to automate the process of prompt refinement.
- **Refining User Queries for Chatbots:** When integrating chatbots into a system, user queries can often be vague or poorly worded. This workflow can be used to automatically refine these queries before they are passed to the chatbot, leading to better understanding and more accurate responses.
- **Standardizing Prompts for Consistent Results:** In scenarios where multiple individuals or systems are generating prompts for the same task, this workflow can enforce a standard format and level of detail, ensuring consistent and predictable results.

## How it works:

1.  **Trigger Activation:** The workflow is initiated when executed by another n8n workflow, receiving an input query (`When Executed by Another Workflow` node).
2.  **AI-Powered Prompt Enhancement:** The input query is passed to an `AI Agent` node which uses an `OpenAI Chat Model` to enhance the prompt. The AI Agent is configured with a system message that instructs it to refine the prompt by adding clarity, context, and specific details about the desired outcome, length, format, and style. The memory node helps the AI remember previous interactions and generate better output.
3.  **Splitting the output into chunks:** The refined prompt is split into smaller chunks to accommodate the message size limits of Telegram. This is done by the `Split into chunks1` node.
4.  **Delivery via Telegram:** The optimized prompt is sent back to the user via Telegram (`Telegram3` node). The `chatId` is dynamically retrieved from the initial trigger data, ensuring the response is sent to the correct user.

## Services:

-   **Telegram:** Used to send the optimized prompt back to the user.
-   **OpenAI (or compatible service):** Powers the AI Agent, providing the natural language processing capabilities to refine and improve the prompt.

## Hashtags:

#n8n #automation #AI #promptengineering #workflow
