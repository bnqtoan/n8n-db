# My Workflow

## Use cases:

- **Random Color Generator:**  When a user asks for a random color, the workflow provides a response, excluding specified colors.
- **AI-Powered Tool Orchestration:** Demonstrates how to integrate an AI Agent with custom tools like a code execution tool to handle specific requests.

## How it works:

1.  The workflow starts either manually via "When clicking ‘Test workflow’" or when a chat message is received through the "When chat message received" trigger.
2.  For manual trigger, the "Debug Input" node sets the `chatInput` to "Return a random color but not green or blue".
3.  The "AI Agent" node receives the `chatInput` and orchestrates the process based on the prompt type.
4.  The "OpenAI Chat Model" node acts as the language model for the "AI Agent".
5.  The "Code Tool" node named "my_color_selector" executes JavaScript code to select a random color from a predefined list, excluding colors specified in the query. The query is constructed from user input.
6.  The AI Agent utilizes the Code Tool to retreive the random color.
7. The results from the Code Tool will be used to answer the user input.

## Services:

-   **OpenAI:** Used through the "OpenAI Chat Model" node as the language model.

## Hashtags:

#n8n #automation #AIagent #OpenAI #randomColor
