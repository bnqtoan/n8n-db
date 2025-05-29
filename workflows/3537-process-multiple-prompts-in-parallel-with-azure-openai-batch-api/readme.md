# My Workflow

## Use cases:

1.  **Batch Processing of AI Prompts:** This workflow automates the process of sending multiple prompts to an AI service (like Azure OpenAI) for processing in a batch, improving efficiency and reducing individual request overhead.
2.  **Chat Memory Integration:** The workflow uses chat memory to maintain context between prompts, allowing for more coherent and context-aware AI responses. This is valuable for conversational AI applications.
3.  **Automated Fun Fact Generation:** This workflow could be used to automatically generate and deliver fun facts on various topics by feeding different prompts related to those topics to the AI.

## How it works:

1.  **Trigger:** The workflow is triggered by another workflow using the "When Executed by Another Workflow" node. It receives an array of requests and an API version.
2.  **Setup Defaults:** Sets default values for configuration.
3.  **Prepare requests:** The workflow sets up default parameters using the "Setup defaults" and "Set defaults if not set already" nodes. After that, it converts the array of requests from JSON to JSONL format to be compatible with the upload.
4.  **Chat Memory:** Implements chat memory using Langchain nodes (@n8n/n8n-nodes-langchain.memoryManager and @n8n/n8n-nodes-langchain.memoryBufferWindow).
5.  **Batch Request Construction:** It constructs a batch request object from example data and chat memory using "Build batch 'request' object from Chat Memory and execution data" and "Build batch 'request' object for single query".
6.  **File Upload:** The JSONL data is converted to a file and uploaded to the AI service using the "Convert requests jsonl to File", "Change file name and mimetype", and "Upload batch file" nodes.
7.  **Batch Job Creation:** A batch job is created using the uploaded file.
8.  **Polling:** The workflow polls the status of the file upload and the batch job using "File Upload Poll Interval" and "Batch Status Poll Interval" nodes, along with HTTP requests to the AI service ("Track file upload status", "Track batch job progress").
9.  **Response Parsing:** Once the batch job is complete, the output file is retrieved, parsed and splitted, and the results are filtered.
10. **API Version:** The desired API version is defined in the "Set desired 'api-version'" node.
11. **Sub-Workflow Execution:** Executes a sub-workflow ("Execute Workflow 'Process Multiple Prompts in Parallel with Azure OpenAI Batch API'") to process the filtered results.
12. **Filtering and Output:** The results from the AI service are filtered based on some criteria, and then output using "First Prompt Result" and "Second Prompt Result" nodes.

## Services:

*   Azure OpenAI (inferred from node names and descriptions).
*   Langchain

## Hashtags:

#n8n #automation #AI #OpenAI #BatchProcessing
