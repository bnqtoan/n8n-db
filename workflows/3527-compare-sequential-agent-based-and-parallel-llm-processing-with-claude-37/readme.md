# LLM Chaining examples

## Use Cases

- **Content Summarization and Analysis:** This workflow can be used to automatically summarize the content of a webpage and extract key information like authors and posts.
- **Automated Joke Generation:** The workflow can analyze the content of a webpage and generate a funny joke based on the extracted information.
- **Multi-Step Information Extraction:** The workflow can perform a sequence of tasks on a webpage, such as extracting authors, posts, and then generating a summary.

## How it Works

This workflow demonstrates three different methods for chaining Large Language Models (LLMs) to perform multi-step tasks based on the content of a webpage.

1.  **Data Retrieval:**
    -   The workflow starts with a "When clicking ‘Test workflow’" node, which triggers the workflow manually.
    -   An "HTTP Request" node fetches the content from a specified URL (e.g., `https://blog.n8n.io/`).
    -   A "Markdown" node converts the HTML content into Markdown format.

2.  **LLM Chaining Methods:**

    *   **Naive Chaining (Parallel):**
        -   The workflow takes the markdown and then uses different LLM Chain nodes to execute in parallel tasks (extract authors, posts, etc.)
    *   **Iterative Agent Processing (Sequential):**
        -   Use a  memory buffer so the LLM keeps track of the content
        -   An Agent node receives instructions to preform task and the  content to analyze.
    *   **Parallel Processing:**
        -   The workflow prepares an array of prompts for different tasks (e.g., "What is on this page?", "List all authors").
        -   A "Webhook" node receives the prompt array and executes the tasks in parallel with a  LLM Chain node.

3.  **Output:**

    -   The results from the LLM chains are merged in "Merge" node.

## Services

-   **HTTP Request:** Used to fetch content from a specified URL.
-   **Anthropic API:** Used through the "Anthropic Chat Model" nodes to process the webpage content and generate summaries, extract information, and generate jokes.

## Hashtags

#n8n #automation #LLM #webscraping #contentanalysis
