# AI-Powered Fact-Checking Workflow

## Use cases:

-   **Automated Fact-Checking for Articles:** Automatically analyze articles or documents to identify and flag potential factual inaccuracies before publication.
-   **Content Improvement:** Help writers and editors improve the accuracy of their content by providing a detailed list of incorrect factual statements, allowing for targeted revisions.
-   **Agentic Workflow Integration:** Integrate this workflow into a larger agentic system to automatically assess and refine content quality as part of a continuous improvement loop.

## How it works:

1.  **Input:** The workflow starts either manually via the "When clicking ‘Test workflow’" trigger or automatically via the "When Executed by Another Workflow" trigger, accepting a text and corresponding facts.
2.  **Text Splitting:** The "Code" node splits the input text into individual sentences while preserving dates and list items using a custom JavaScript function. This ensures accurate fact-checking on a sentence-by-sentence basis.
3.  **Fact Assignment:** The "Edit Fields" node defines the article text and facts to be used in the process.
4.  **Sentence Fact-Checking:** The "Split Out1" node splits the sentences and sends them to the "Basic LLM Chain4" and "Merge" nodes. The "Basic LLM Chain4" uses an Ollama Chat Model (bespoke-minicheck:latest) to determine if each sentence of the article is correct, given the known "facts."
5.  **Combining the Data:** Merge the original sentences with the results from the ollama chat model for later processing.
6.  **Filtering and Aggregation:** Sentences from the split, and fact checking from the LLM Chain are merged and filtered by the "Filter" node. The "Aggregate" node aggregates all of the sentences, and whether they are correct or not.
7.  **Summarization:** The "Basic LLM Chain" node analyzes aggregated list of statements (sentences) and their fact-checking results and provides a summary of factual errors using a defined prompt.
8.  **Output:** The results are presented as the summary.

## Services:

-   **Ollama:** Local Large Language Model server. Requires a configured Ollama API credential.
-   **bespoke-minicheck:latest:** A specialized Ollama model for fact-checking.
-   **qwen2.5:1.5b:** A specialized Ollama model for fact summarization.

## Hashtags:

#n8n #automation #factchecking #LLM #AI
