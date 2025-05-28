# Automated Hugging Face Paper Summary Fetching & Categorization Workflow

## Use cases:

*   **Stay Updated on AI Research:** Automatically fetch and summarize newly published papers on Hugging Face, allowing users to quickly grasp the latest advancements in specific areas of AI.
*   **Categorize and Organize Research:** Categorize papers based on their abstracts using OpenAI, enabling efficient organization and retrieval of relevant research.
*   **Share Research Highlights:** Send summarized and categorized research highlights to a Slack channel, keeping team members informed about key findings.

## How it works:

1.  **Schedule Trigger:** The workflow starts with a scheduled trigger that initiates the process at predefined intervals.
2.  **Request Hugging Face Paper:** Fetches a list of recent papers from Hugging Face using an HTTP Request node.
3.  **Extract Hugging Face Paper:** Extracts relevant information, such as paper titles and URLs, from the HTML content of the Hugging Face page.
4.  **Split Out:** Transform one input into many items
5.  **Loop Over Items:** Iterates over each extracted paper.
6.  **Check Paper URL Existed:** Checks if the paper URL already exists in a Notion database to avoid processing duplicates.
7.  **If:** Routes execution based on whether the paper URL exists in Notion. If the paper exists, the flow loops back to the Loop Over Items node. Otherwise, it proceeds to fetch and analyze the paper.
8.  **Request Hugging Face Paper Detail:** Fetches the detailed information page for the paper using the extracted URL.
9.  **Extract Hugging Face Paper Abstract:** Extracts the abstract from the paper's detail page.
10. **OpenAI Analysis Abstract:** Uses OpenAI to analyze the abstract and categorize the paper (e.g., topic, key concepts).
11. **Store Abstract Notion:** Stores the paper title, URL, abstract, and OpenAI analysis results in a Notion database.
12. **Send Analysis Result Slack:** Sends a summary of the paper, including its title, abstract, category, and a link to the paper, to a specified Slack channel.

## Services:

*   Hugging Face
*   OpenAI
*   Notion
*   Slack

## Hashtags:

#n8n #automation #HuggingFace #AIresearch #OpenAI #Notion #Slack
