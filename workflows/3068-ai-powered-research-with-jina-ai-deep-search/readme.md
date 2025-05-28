# AI-Powered Research with Jina AI Deep Search

## Use cases:

*   **Market Research:** Automate the process of gathering and summarizing information about a specific market trend or competitor, providing quick insights for strategic decision-making.
*   **Academic Research:** Assist students and researchers in exploring topics, generating literature reviews, and identifying key sources, enhancing research efficiency.
*   **Content Creation:** Generate well-structured outlines or drafts for blog posts, articles, or reports based on a specific prompt, accelerating content development.

## How it works:

The workflow automates AI-powered research and generates structured reports using Jina AI's DeepSearch API.

1.  **User Input:** The workflow starts with a "User Research Query Input" node, which receives a research query, presumably via chat.
2.  **AI Research via Jina AI DeepSearch:** The query is sent to the "Jina AI DeepSearch Request" node. This node makes a POST request to the Jina AI DeepSearch API, passing the user's query as content. The prompt instructs the AI to act as an advanced researcher, providing precise and insightful reports.
3.  **Format & Clean AI Response:** The AI-generated response is passed to the "Format & Clean AI Response" node. This Code node extracts, cleans, and formats the AI-generated insights into a readable Markdown output. It formats URLs, structures footnotes, and cleans the overall text.
4.  **Final Output:** The Code Node outputs a formatted string.

## Services:

*   Jina AI DeepSearch API

## Hashtags:

#n8n #AI #Research #Automation #DeepSearch
