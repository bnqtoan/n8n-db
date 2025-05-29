# Recursive Multi-Agent TEMPLATE

## Use cases:

1.  **Content Creation and Refinement:** This workflow can be used to automatically generate and refine written content. The Writing Agent creates an initial draft based on user input, and the Editing Agent iteratively improves it until a satisfactory result is achieved.
2.  **Iterative Problem Solving:** The workflow can facilitate iterative problem-solving by having the Writing Agent propose solutions and the Editing Agent critique and refine them. The process continues until a viable solution is reached.
3.  **Automated Code Review:** In a software development context, the Writing Agent could generate code snippets, and the Editing Agent could perform automated code review, suggesting improvements and identifying potential issues.

## How it works:

1.  **Trigger:** The workflow starts when a chat message is received via the "When chat message received" node.
2.  **Initial Input:** The "chatInput" node captures the incoming chat message.
3.  **Handle Edits:** The "handle edits" node preprocesses the input.
4.  **Writing Agent:** The "Writing Agent" node, powered by an OpenAI Chat Model and a Window Buffer Memory, generates an initial response or content based on the input.
5.  **Editing Agent:** The "Editing Agent" node receives the output from the "Writing Agent" and, using the same OpenAI Chat Model, Window Buffer Memory, and a Structured Output Parser, iteratively refines the content.  It aims to improve the Writing Agent's result. The number of retries is set to 5.
6.  **Variables & Status Check:** The "set variables" node probably manages status flags or loop counters. The "If Status Complete" node checks if the editing process is complete. If not complete, the workflow loops back to the "handle edits" node, continuing the iterative refinement.
7.  **Output:** If the editing process is complete, the "chatOutput" node prepares the final output, and it is sent as a response.
8.  **Memory:** The "Window Buffer Memory" node store the conversation context for each agent.
9.  **AI models:** The "OpenAI Chat Model" node provides language model for the agents. The "Structured Output Parser" node provides a structured format for Editing Agent.

## Services:

*   OpenAI (via the Langchain OpenAI Chat Model node)

## Hashtags:

#n8n #automation #workflow #langchain #openai #agents
