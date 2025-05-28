# Technical Analyst Leader

## Use Cases

-   **Real-time Financial Analysis:**  Provide immediate analysis of financial data based on chat messages or other triggers, delivering insights to traders or analysts.
-   **Automated Investment Research:** Automatically gather and analyze data related to specific stocks or financial instruments, aiding in making informed investment decisions.
-   **Customized Financial Reporting:** Generate reports based on specific parameters or questions, providing tailored insights to users.

## How it Works

This workflow acts as a technical analyst, gathering financial data, analyzing it using various tools, and providing responses. Here's a breakdown:

1.  **Trigger:** The workflow starts either when a chat message is received ("When chat message received" node) or when executed by another workflow ("When Executed by Another Workflow" node).
2.  **Agent Orchestration:** A "Technical Analyst Leader" (Langchain Agent node) is the core component. It utilizes several tools and an AI language model (Sonnet 37, Sonnet 3_7, Perplexity Sonar) to analyze information.
3.  **Information Gathering:** The Agent node uses tools like "Technical Analysis Tool", "Perplexity Tool", and "Gmail" to gather the necessary data for analysis. "Window Buffer Memory" is used to preserve the context of the conversation.
4.  **Data Processing:**  The Agent may utilize "Lookup Exchange" (Langchain Chain LLM) to retrieve stock information. This data passes through a "Structured Output Parser". TradingView charts are downloaded. Analyst questions and responses are extracted.
5.  **Response Generation:** Finally, the extracted information is used to respond to the query, with the result stored using the "Set 'response' value" node.

## Services

-   **TradingView:** Used for accessing chart data.
-   **Perplexity:**  Likely used to retrieve information from the web or a knowledge base.
-   **Gmail:** Used for sending emails.
-   **OpenRouter:** Used for accessing the Sonnet AI Language Models.

## Hashtags

#n8n #automation #finance #trading #AI
