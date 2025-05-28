# 🌐 Confluence Page AI Powered Chatbot

## Use cases:

*   **Instant Answers from Confluence:** Allow users to ask questions about content stored in Confluence pages and receive instant, context-aware answers.
*   **Telegram-Based Confluence Assistant:** Integrate with Telegram to provide a chatbot interface for querying Confluence content, making information accessible on the go.
*   **Learning and Support:** Use the chatbot as a learning tool for internal documentation, providing new employees or team members with a quick way to find information.

## How it works:

1.  **Trigger:** The workflow is initiated when a chat message is received via the "When chat message received" node.
2.  **Define Confluence Page IDs:** The "Globals" node sets the IDs of specific Confluence pages to be used.
3.  **Search Confluence by ID:** The "Search By ID" node queries Confluence to search for content by page ID based on the global parameter `page_id_n8n`.
4.  **Split Results:** The "Split Out" node processes the search results, separating them for further processing.
5.  **Extract Page Schema:** "Page Schema" node extract specific details from the search result, such as `id`,`title`, `url` and others.
6.  **Get Page Storage View:** The "Confluence Page Storage View" node fetches the content of a Confluence page in the storage format.
7.  **Convert HTML to Markdown:** The "HTML to Markdown" node converts the HTML content from Confluence into Markdown format, which is easier for the AI model to process.
8.  **AI Agent for Question Answering:** The "AI Agent" node uses a Large Language Model (LLM) to answer user questions based on the provided Confluence content. The agent responds with "I don't know" if the answer is not found in the context.
9.  **Memory Buffer:** The "Window Buffer Memory" node stores chat history for context in ongoing conversations.
10. **AI Model Selection:** The "gpt-4o-mini" node specifies the OpenAI language model to use for generating responses.
11. **Format Chat Response:** The "Chat Response" node formats the output from the AI Agent.
12. **Send Telegram Message:** Finally, the "Send Telegram Message" node sends the AI-generated response to a specified Telegram chat ID.

## Services:

*   Confluence API
*   OpenAI API
*   Telegram API

## Hashtags:

#n8n #automation #confluence #chatbot #telegram
