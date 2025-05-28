# OpenAI-model-examples

## Use cases:
1.  **Content Summarization and Translation:** Automatically generate concise summaries (TL;DR) of articles or documents and translate them into different languages using OpenAI's models. This can be useful for quickly understanding content in a foreign language or for creating short summaries for social media.
2.  **Automated Image Generation from Text:** Create cover images for blog posts or articles by first summarizing the content with ChatGPT and then using the summary as a prompt for DALL-E 2 to generate a comic-style image.
3.  **E-mail client:** Providing short replies to given user messages

## How it works:
This workflow demonstrates various ways to use OpenAI models for text summarization, translation, and image generation. It consists of multiple branches, each showcasing a different OpenAI model and use case.

1.  **Manual Trigger:** The workflow is initiated manually.
2.  **Text Input:** A code node (`Text-example`) provides sample text data.
3.  **Summarization (Davinci & ChatGPT):** The workflow uses both `davinci-003-complete` and `ChatGPT-ex1.1` to create a "TL;DR" summary of the input text.
4.  **Translation (ChatGPT):** The `ChatGPT-ex1.2` node translates the summarized text into German.
5.  **Summarization via HTTP Request (ChatGPT):** The `Code-ex3.1` and `ChatGPT-ex3.1` nodes use the ChatGPT API via HTTP request to generate summaries by constructing an array of system/user messages.
6.  **Image Prompt Generation (ChatGPT):** The `ChatGPT-ex3.2` node generates a DALL-E 2 prompt based on the summarized text, creating a comic-style cover image prompt.
7.  **Image Generation (DALL-E 2):** The `DALLE-ex3.3` node generates four images based on the prompt generated in the previous step.
8.  **HTML with SVG generation (ChatGPT):** The `Set-ex4` node sets the prompt. The `ChatGPT-ex4` node generates HTML code that contains SVG images. The `HTML-ex4` renders the HTML.
9.  **Short replies generation (ChatGPT):** The `ChatGPT-ex` provides short answers to user messages.
*Note: The audio transcription part of the workflow is disabled by default, so you need to manually enable it.*

## Services:

*   OpenAI (ChatGPT, DALL-E 2, Davinci)

## Hashtags:

#n8n #automation #openai #textsummarization #imagegeneration
