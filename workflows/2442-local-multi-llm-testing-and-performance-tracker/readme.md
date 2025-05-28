# Testing Mulitple Local LLM with LM Studio

## Use cases:
- **Compare LLM Performance:** Evaluate and compare the performance of multiple local LLMs hosted on LM Studio based on metrics like readability, response time, and conciseness.
- **Fine-tune LLM prompts:** Test different system prompts to optimize LLM responses for specific tasks, such as ensuring concise and easily understandable language.
- **Automated LLM testing:** Automate the process of sending prompts to LLMs, collecting responses, and analyzing the results to identify the best model or prompt configuration for a given use case.

## How it works:
1. **Receive Chat Message:** The workflow is triggered when a chat message is received via webhook.
2. **Get Models from LM Studio:** An HTTP request is sent to the LM Studio server to retrieve a list of available LLM models.
3. **Extract Model IDs:** The `Extract Model IDsto Run Separately` node splits the list of models into individual items, allowing the workflow to iterate through each model.
4. **Capture Start Time:** Records the start time before sending the prompt to the LLM.
5. **Add System Prompt:** A system prompt is added to the input message to guide the LLM's response, focusing on specific qualities like conciseness and readability.
6. **LLM Response Analysis:** Utilizes an LLM Chain node to generate a response from the LLM, using the input message and system prompt.
7. **Capture End Time:** Records the end time after receiving the response from the LLM.
8. **Get Time Difference:** Calculates the time elapsed between sending the prompt and receiving the response.
9. **Prepare Data for Analysis:** Combines the LLM response, prompt, model ID, start time, end time, and time difference into a single data structure for analysis.
10. **Analyze LLM Response Metrics:** Uses a Code node to calculate metrics such as word count, sentence count, average sentence length, average word length, and Flesch-Kincaid readability score of the LLM response.
11. **Save Results to Google Sheets:** Appends the analyzed data to a Google Sheet, including the prompt, response, model ID, timestamps, and calculated metrics.

## Services:
- LM Studio (local LLM server)
- Google Sheets

## Hashtags:
#n8n #automation #LLM #LMStudio #textAnalysis
