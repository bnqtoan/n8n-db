# Airtop Web Agent

## Use cases:

- **Automated Web Research:** Automatically gather information from websites based on a user's prompt, such as finding product details or news articles.
- **Form Filling and Submission:** Automate the process of filling out web forms and submitting them based on user-defined instructions and data.
- **Website Interaction and Task Completion:** Instruct an AI agent to perform specific tasks on a website, such as clicking buttons, navigating menus, or extracting data.

## How it works:

1.  **Form Submission:** The workflow starts when a user submits a form with a prompt and Airtop profile name.
2.  **AI Agent Processing:** The "AI Agent" node receives the prompt and uses a system message that defines its role as a web agent, connected to tools that manage a remote web browser. The agent uses the Airtop Tool nodes to interact with a web browser.
3.  **Browser Initialization**: The agent begins with the "Start browser" tool which takes the initial URL.
4.  **Web Interaction**: The agent then uses tools to either query the current page (`Query`), click on elements (`Click`), load new URLs (`Load URL`), or type into text fields (`Type`). These tools perform actions based on the provided descriptions and AI instructions.
5.  **Session Management**: The "Session" and "Window" nodes manages the Airtop browser session, ensuring it is properly initialized. The "End session" node terminates the session when the agent finishes its task.
6.  **Output Parsing and Delivery:** The agent's final message is parsed by the "Structured Output Parser" to extract the relevant information. The output is then sent via Slack.
7.  **Sub-Workflow:** The "Start browser" node execute the sub-workflow. This workflow simplifies the session management for the agent
8.  **Live View (Optional)**: The "Slack" node allows you to view the agent acting in real time

## Services:

-   **Airtop:** A service that provides remote web browser automation capabilities.
-   **Anthropic:** AI model used as Language model (Claude 3.5 Haiku)
-   **Slack:** A messaging platform used to send the output of the workflow.

## Hashtags:

#n8n #automation #webagent #aiagent #airtop
