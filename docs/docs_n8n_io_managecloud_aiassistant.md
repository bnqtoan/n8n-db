[](https://github.com/n8n-io/n8n-docs/edit/main/docs/manage-cloud/ai-assistant.md "Edit this page")

# AI Assistant[#](#ai-assistant "Permanent link")

The n8n AI Assistant helps you build, debug, and optimize your workflows seamlessly. From answering questions about n8n to providing help with coding and [expressions](../../glossary/#expression-n8n), the AI Assistant can streamline your workflow-building process and support you as you navigate n8n's capabilities.

## Current capabilities[#](#current-capabilities "Permanent link")

The AI Assistant offers a range of tools to support you:

*   **Debug helper**: Identify and troubleshoot node execution issues in your workflows to keep them running without issues.
*   **Answer n8n questions**: Get instant answers to your n8n-related questions, whether they're about specific features or general functionality.
*   **Coding support**: Receive guidance on coding, including SQL and JSON, to optimize your nodes and data processing.
*   **Expression assistance**: Learn how to create and refine [expressions](../../code/expressions/) to get the most out of your workflows.
*   **Credential setup tips**: Find out how to set up and manage node [credentials](../../integrations/builtin/credentials/) securely and efficiently.

## Tips for getting the most out of the Assistant[#](#tips-for-getting-the-most-out-of-the-assistant "Permanent link")

1.  **Engage in a conversation**: The AI Assistant can collaborate with you step-by-step. If a suggestion isn't what you need, let it know! The more context you provide, the better the recommendations will be.

2.  **Ask specific questions**: For the best results, ask focused questions (for example, "How do I set up credentials for Google Sheets?"). The assistant works best with clear queries.
3.  **Iterate on suggestions**: Don't hesitate to build on the assistant's responses. Try different approaches and keep refining based on the assistant's feedback to get closer to your ideal solution.
4.  **Things to try out**:
    *   Debug any error you're seeing
    *   Ask how to setup credentials
    *   "Explain what this workflow does."
    *   "I need your help to write code: \[Explain your code here\]"
    *   "How can I build X in n8n?"

## FAQs[#](#faqs "Permanent link")

### What context does the Assistant have?[#](#what-context-does-the-assistant-have "Permanent link")

The AI Assistant has access to all elements displayed on your n8n screen, excluding actual input and output data values (like customer information). To learn more about what data n8n shares with the Assistant, refer to [AI in n8n](https://docs.n8n.io/privacy-security/privacy/#ai-in-n8n).

### Who can use the Assistant?[#](#who-can-use-the-assistant "Permanent link")

Any user on a Cloud plan can use the assistant.

### How does the Assistant work?[#](#how-does-the-assistant-work "Permanent link")

The underlying logic of the assistant is build with the advanced AI capabilities of n8n. It uses a combination of different [agents](../../glossary/#ai-agent), specialized in different areas of n8n, RAG to gather knowledge from the docs and the community forum, and custom prompts, [memory](../../glossary/#ai-memory) and context.