# Process Multiple Prompts in Parallel with Anthropic Claude Batch API

## Use cases:

1.  **Content Generation:** Generate multiple articles or social media posts with different prompts simultaneously, leveraging the Anthropic Claude API for creative content creation.
2.  **Customer Support Automation:** Send a batch of customer queries to Claude and process them in parallel to efficiently generate responses for a customer support system.
3.  **Research and Analysis:** Submit multiple research questions to Claude and collect the results to accelerate data analysis and knowledge discovery.

## How it works:

1.  **Trigger:** The workflow is triggered by the "When Executed by Another Workflow" node, which expects an array of `requests` and an `anthropic-version`.
2.  **Submit Batch:** The "Submit batch" node sends a batch of prompts to the Anthropic Claude API using the `/v1/messages/batches` endpoint. It uses the `anthropic-version` from the trigger and the array of `requests` in the body.
3.  **Check Batch Status:** The "Check batch status" node polls the status of the submitted batch using the ID returned by the "Submit batch" node. It retrieves the status from the `/v1/messages/batches/{id}` endpoint.
4.  **Conditional Processing:** The "If ended processing" node checks the `processing_status` of the batch. If the status is "ended," it proceeds to retrieve the results. Otherwise, it waits for a specified interval.
5.  **Retrieve Results:** The "Get results" node retrieves the results from the `results_url` provided in the batch status response.
6.  **Parse Response:** The "Parse response" node parses the JSONL response (JSON objects separated by newlines) from Anthropic and transforms it into a JSON array.
7.  **Split Out Parsed Results:** The "Split Out Parsed Results" node splits the array from the previous node into individual items.
8.  **Example executions**:
    *   **Using Chat Memory**: This example uses the Langchain Memory nodes to create a chat history with Claude, then calls the model again using the context of the memory.
    *   **Using single query string**: This example constructs the requests from a simple text query.

## Services:

*   Anthropic Claude API

## Hashtags:

#n8n #automation #workflow #Anthropic #Claude #BatchProcessing
