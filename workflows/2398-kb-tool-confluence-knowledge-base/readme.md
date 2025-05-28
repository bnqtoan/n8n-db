# Confluence Knowledge Base Search Tool for IT Support

## Use cases:

- **Automated IT Support**: When a user asks a question in Slack related to IT, this workflow can automatically search a Confluence knowledge base for relevant articles and provide a summary with a link to the full article.
- **Password Reset Assistance**: Specifically designed to help users with password reset requests by providing a direct link to the password reset instructions within Confluence.
- **Enhanced AI Agent Responses**:  Improves the context and accuracy of AI agent responses by integrating real-time knowledge base search results, providing more informative and helpful answers to user queries.

## How it works:

1.  **Receive Query**: The workflow is triggered by an "Execute Workflow Trigger" node, which receives a query (presumably from a parent workflow initiated by a user's question). The sticky note references this is from an AI Agent workflow where a Slack message is passed.
2.  **Search Confluence**: The "Query Confluence" node uses an HTTP Request node to search a Confluence instance using the Confluence REST API. It constructs a CQL (Confluence Query Language) query using the received query as the search text.  Authentication is handled via HTTP Basic Auth using stored credentials.
3.  **Return Tool Response**: The "Return Tool Response" node extracts key information from the Confluence search results (title, link, and a content snippet) and formats it into a structured response that can be easily used by a parent workflow.  It also provides a prompt about sending a password reset link when appropriate. The response is assigned to a `response` variable.
4.  **Output format**:
    ```
    "Title": "Title of content so AI Agent will know the name of the content"
    "Link": "Link to URL of KB article. Great for giving back to user to self help"
    "Content": Truncated output of content so that the large language model will have more context in it's final response.
    When users request the password, make sure to send them the link above to reset it in markdown.
    ```

## Services:

-   **Confluence**:  The workflow interacts with a Confluence instance via its REST API to search for relevant knowledge base articles.

## Hashtags:

#n8n #automation #confluence #itsupport #knowledgebase
