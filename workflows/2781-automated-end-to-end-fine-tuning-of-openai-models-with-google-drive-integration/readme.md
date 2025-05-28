# Fine-tuning with OpenAI models

## Use cases:

- **Train a custom AI model:** Fine-tune an OpenAI model with specific data from Google Drive to tailor its responses to a particular domain or task.
- **Chatbot Development:** Create a chatbot that leverages a fine-tuned OpenAI model for more accurate and relevant responses based on a specific knowledge base.
- **Automated content generation:** Automatically train an OpenAI model with content from a Google Drive document to generate new content that aligns with the style and topic of the training data.

## How it works:

1.  **Trigger:** The workflow starts either manually by clicking 'Test workflow' or automatically when a chat message is received.
2.  **Download Training Data:**
    *   **Manual Trigger:** It downloads a `.jsonl` file from Google Drive, specified by its file ID (`1wvlEcbxFIENvqL-bACzlLEfy5gA6uF9J`). This file contains the training data for fine-tuning the OpenAI model.
    *   **Chat Message Trigger:** The workflow listens for incoming chat messages using a Chat Trigger.
3.  **Upload File to OpenAI:** The downloaded `.jsonl` file is then uploaded to OpenAI using the "Upload File" node. The `purpose` is set to `fine-tune`.
4.  **Create Fine-tuning Job:**  An HTTP Request node sends a POST request to the OpenAI API to create a fine-tuning job. This request includes the ID of the uploaded file and the base model to fine-tune (`gpt-4o-mini-2024-07-18`).
5.  **Chatbot Interaction (When chat message received):** An AI Agent node receives messages and interacts with the OpenAI Chat Model node, using a fine-tuned model (`ft:gpt-4o-mini-2024-07-18:n3w-italia::AsVfsl7B`) to generate responses.

## Services:

-   Google Drive
-   OpenAI API

## Hashtags:

#n8n #openai #finetuning #automation #googledrive
