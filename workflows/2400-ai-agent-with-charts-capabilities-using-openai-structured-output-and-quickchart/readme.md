# AI Agent with Charts Capabilities using OpenAI Structured Output

## Use cases:

*   **AI-Powered Data Visualization:** Integrate chart generation into AI chatbot conversations. When a user asks for data insights, the AI can generate and display a relevant chart directly within the chat interface.
*   **Dynamic Report Generation:** Automate the creation of reports with embedded charts. The AI agent can analyze data, generate charts based on findings, and compile them into a report.
*   **Interactive Data Exploration:** Allow users to explore data interactively through a conversational interface. Users can ask questions, and the AI agent will generate charts to answer those questions.

## How it works:

1.  **Chat Trigger:** The workflow starts when a chat message is received by the "When chat message received" node.
2.  **AI Agent:** The "AI Agent" node uses an OpenAI Chat Model ("OpenAI Chat Model" node) to process the message and determine if a chart is needed.
3.  **Tool Invocation (Generate a chart):** If the AI Agent determines a chart is necessary, it invokes the "Generate a chart" tool, which triggers the "Execute \"Generate a chart\" tool" node. This node essentially calls a sub-workflow.
4.  **Chart Definition Request:** The "Execute \"Generate a chart\" tool" node triggers the "OpenAI - Generate Chart definition with Structured Output" node. This node sends a request to the OpenAI API to generate a chart definition in JSON format based on the user's query. It uses a predefined JSON schema to ensure the output is compatible with Chart.js and Quickchart.io.
5.  **Chart URL Generation:** The "Set response" node takes the JSON chart definition from OpenAI and constructs a URL for Quickchart.io. Quickchart.io dynamically generates a chart image based on the provided URL parameters.
6.  **Response to AI Agent:** The URL of the generated chart image is then passed back to the AI Agent, which can display the image in the chat conversation.

## Services:

*   **OpenAI API:** Used for natural language processing and generating the chart definition.
*   **Quickchart.io:** Used for dynamically generating chart images from a URL based on a chart definition.

## Hashtags:

#n8n #automation #AIagent #charts #OpenAI
