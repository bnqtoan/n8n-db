# Reliable Structured Output from AI Agent Without the Structured Output Parser - with OpenAI & Switch node

## Use cases:

- **Nutritional Information Chatbot:** Users can ask about the nutritional content of different foods, and the workflow provides a structured JSON response with details like calories, protein, carbs, fats, and a healthiness score.
- **Recipe Analyzer:** Integrate this workflow into a recipe app to automatically extract and present nutritional information for each ingredient or the entire recipe.
- **Dietary Tracking Tool Enhancement:** Enhance a dietary tracking application by automatically populating nutritional data for logged food items, improving user experience and data accuracy.

## How it works:

1.  **Chat Input:** The workflow starts when a chat message is received via webhook (`When chat message received` node). This message contains the user's query about a food item.
2.  **AI Agent Processing:** The `AI Agent` node receives the chat input and uses a pre-defined system message to instruct the AI to act as a nutrition expert. It's configured to return the information in a specific JSON format, including the food name, calorie count, protein, carbs, fat, sodium, and a healthiness score. Critically, it's set up to handle schema validation errors by using an "Error Prompt" if the output doesn't match the expected structure.
3.  **Output Validation:** The `Validate Output + Set aiRunIndex` node validates the AI's response to ensure it matches the expected JSON schema. It checks for the presence of required fields, their data types, and the range of the `healthyScore`. If the validation fails, it returns a structured error message. The `aiRunIndex` variable is set to keep track of the number of times the AI agent has been run.
4.  **Schema Validation and Error Handling (Switch Node):** The `Switch` node routes the workflow based on the validation results.
    *   If the output schema is invalid (`invalidSchema`), and the AI has not exceeded the retry limit (`aiRunIndex < 3`), the workflow formats an error prompt and sends it back to the AI Agent.
    *   If the output schema is valid (`validSchema`), the workflow proceeds to the `Valid Schema Output` node.
    *   If none of the conditions are met (`extra`), the workflow proceed to the `Set schemaValidationError & lastAgentOutput` node
5.  **Error Prompt Generation (Invalid Schema):** If the schema is invalid, the `Format Schema Error Prompt` node creates a detailed error message, including the expected schema and the AI's previous response, and sends it back to the AI agent.
6.  **Output Formatting and Chat Response:** Once the output schema is Valid, the `Valid Schema Output` node stores the validated nutritional data. Otherwise, the flow proceeds to two `set` nodes:
    *   **Set schemaValidationError & lastAgentOutput**: Stores the error validation output and the agent last output in two separated variables.
    *   **Set chat Output**: The response, with valid data or an error validation message, is delivered as a chat response.

## Services:

-   **OpenAI API:** Used via the "@n8n/n8n-nodes-langchain.lmChatOpenAi" node for natural language processing and structured data extraction.

## Hashtags:

#n8n #automation #AIagent #nutrition #workflow
