# My Workflow

## Use cases:
- Automatically generate a summary of a podcast episode.
- Extract key topics and questions from a podcast transcript for further research or discussion.
- Create and send a weekly digest email with episode summaries, discussed topics, and related questions.

## How it works:

1.  **Trigger**: The workflow starts when you manually execute it using the "When clicking 'Execute Workflow'" node.
2.  **Podcast Episode Transcript**: A code node contains the podcast transcript as a string.
3.  **Summarize Transcript**: This node uses the Langchain Summarization Chain and `OpenAI Chat Model` to summarize the podcast transcript provided by the previous node.
4.  **Extract Topics & Questions**: Extracts key topics and questions from the summary using the `OpenAI Chat Model`. This node is configured with a predefined schema to ensure a structured output.
5.  **Topics**: The questions are split into individual items to be processed.
6.  **AI Agent**: This node uses the Langchain Agent to research and explain each topic by using Wikipedia.
7.  **Wikipedia**: This tool allows the AI Agent to use Wikipedia for researching each topic.
8.  **Format topic text & title**: Formats the extracted topics and questions into HTML to generate episode digest.
9.  **Send Digest**: Sends an email via Gmail containing the podcast summary, the researched topics with explanations, and the extracted questions.

## Services:

*   OpenAI API
*   Gmail
*   Wikipedia

## Hashtags:

#n8n #automation #podcast #summary #openai #gmail
