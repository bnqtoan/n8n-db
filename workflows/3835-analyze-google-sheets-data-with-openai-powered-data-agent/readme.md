# ozki: OpenAI CSV Analysis

## Use cases:

- **Data Analysis Automation:** Automate the analysis of data stored in Google Sheets, providing key performance indicators (KPIs) and insights without manual intervention.
- **Real-time Data Insights:** Enable users to quickly obtain analysis results from Google Sheets data through a chat interface, facilitating faster decision-making.
- **Guided Data Exploration:** Guide users through the process of setting up and connecting their Google Sheets data to an AI agent for automated analysis.

## How it works:

1. **Trigger:** The workflow is initiated when a chat message is received (`When chat message received` node).
2. **Agent Setup and Orchestration:** The `Agent` node defines the behavior of the AI agent. It checks for memory tool configuration and Google Sheets credentials. If either is missing, it prompts the user to set them up. Once the setup is complete, it asks for the Google Sheet URL.
3. **Google Sheets Interaction:** The `Google Sheets` node is configured as a tool to read data from the provided Google Sheets URL.
4. **AI-Powered Analysis:** The `OpenAI Model` node, coupled with `Simple Memory`, interacts with the user, processes the data using the OpenAI API, and provides analysis results based on the data. The agent focuses on KPIs relevant to the data type (e.g., sales or telemetry).
5. **Memory management:** The `Simple Memory` node is responsible for keeping the context of the conversation

## Services:

- OpenAI API: Used for natural language processing and data analysis.
- Google Sheets: Used for storing and retrieving the data to be analyzed.

## Hashtags:

#n8n #automation #OpenAI #GoogleSheets #DataAnalysis
