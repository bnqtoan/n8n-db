# Dynamically switch between LLMs Template

## Use cases:

- **A/B Testing of LLMs:** Evaluate different LLMs (e.g., `gpt-4o-mini`, `gpt-4o`, `o1`) for customer support responses to identify the most effective model based on sentiment analysis of the generated responses.
- **Fallback Mechanism:** Automatically switch to a different LLM if the primary LLM fails to provide a satisfactory response, ensuring continuity in automated customer support.
- **Cost Optimization:** Use a cheaper LLM for initial responses and switch to a more powerful LLM only when complex or negative sentiment is detected in the customer's input.

## How it works:

1.  **Trigger:** The workflow starts when a chat message is received (`When chat message received` node).
2.  **Set LLM Index:** An index is set to determine which LLM should be used. If no index is given, it starts with index 0 (`Set LLM index` node).
3.  **Generate Response:** Based on the customer's input from the trigger, a response is generated using the selected LLM (`Generate response` node). The node uses an LLM Chain to generate a polite response to the customer.
4.  **Switch Model:** The code dynamically selects an LLM based on index (`Switch Model` node).
5.  **LLM options:** The list of LLMs available for selection are: OpenAI 4o-mini, OpenAI 4o and OpenAI o1.
6.  **Validate Response:** The generated response is validated using sentiment analysis to determine if it meets the required criteria (e.g., acknowledging the issue, using a polite tone, offering a resolution) (`Validate response` node).
7.  **Error Handling:** if the `Switch Model` node encounters an error, the workflow continues on an error output to the `Check for expected error` node.
8.  **Condition Check:** The `Check for expected error` node, checks if the error is the expected error of no more LLMs available. If this is the case, the `Loop finished without results` node is run. If the error is not the expected error, the `Unexpected error` node is run.
9.  **Increment Index:** The index is increased, so the next run uses the next LLM in the list (`Increase LLM index` node).
10. **Return Result:** The final response is returned (`Return result` node) as a string.

## Services:

-   OpenAI API (via LangChain)

## Hashtags:

#n8n #automation #LLM #customersupport #dynamicrouting
