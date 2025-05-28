# AI Agent with Charts Capabilities using OpenAI Structured Output and Quickchart

## Use cases:

- **Data Analysis and Visualization:** Allows business users to query a database using natural language and automatically generate charts to visualize the results, enhancing data-driven decision-making.
- **Interactive Reporting:** Enables the creation of interactive reports where users can ask questions about data and receive both textual answers and visual representations.
- **Automated Data Exploration:** Helps teams quickly explore and understand data by automating the process of querying and visualizing data points, identifying trends, and gaining insights.

## How it works:

1.  **Receive Chat Message:** The workflow starts when a chat message is received via the "When chat message received" trigger.
2.  **Extract User Question:** The "Information Extractor - User question" node extracts the core question from the user's input, omitting any specific chart requests.
3.  **AI Agent Interaction:** The "AI Agent" node, configured as an SQL Agent, connects to a database (e.g., PostgreSQL) and formulates an SQL query based on the extracted user question. The agent then executes the query and returns the results in a human-readable format. It uses a "Window Buffer Memory" to keep track of past interactions.
4.  **Classify Chart Requirement:** The "Text Classifier - Chart required?" node determines whether a chart would enhance the understanding of the AI Agent's response. It analyzes the user's request and the data to be visualized.
5.  **Conditional Chart Generation:**
    -   If a chart is deemed necessary, the "Execute \"Generate a chart\" tool" node triggers a sub-workflow. This sub-workflow uses the "OpenAI - Generate Chart definition with Structured Output" node to generate a Chart.js definition based on the data and the user's request. The chart definition is then formatted into a Quickchart.io URL using the "Set response" node.
    -   If a chart is not required, the workflow skips the sub-workflow.
6.  **Prepare Output:** The "User question + Agent initial response" node create the structure of the output, storing both user question and the agent response.
7.  **Return Final Answer** The "Execute Workflow" node allows to return one of two possible output
    -   **Output 1:** If a chart is deemed necessary, the "Set Text + Chart output" node combines the SQL Agent's textual response with the generated chart image (from Quickchart.io) and returns the combined output.
    -   **Output 2:** If a chart is not required, the "Set Text output" node only returns the SQL Agent's textual response.

## Services:

*   **OpenAI:** Used for natural language processing, structured output generation, and text classification.
*   **Quickchart.io:** Used to generate chart images from Chart.js definitions.
*   **PostgreSQL (or other SQL database):** Database to query using the AI SQL Agent.

## Hashtags:

#n8n #automation #workflow #AI #dataVisualization
