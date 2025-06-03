[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainllm.md "Edit this page")

# Basic LLM Chain node[#](#basic-llm-chain-node "Permanent link")

Use the Basic LLM Chain node to set the prompt that the model will use along with setting an optional parser for the response.

On this page, you'll find the node parameters for the Basic LLM Chain node and links to more resources.

Examples and templates

For usage examples and templates to help you get started, refer to n8n's [Basic LLM Chain integrations](https://n8n.io/integrations/basic-llm-chain/) page.

## Node parameters[#](#node-parameters "Permanent link")

### Prompt[#](#prompt "Permanent link")

Select how you want the node to construct the prompt (also known as the user's query or input from the chat).

Choose from:

*   **Take from previous node automatically**: If you select this option, the node expects an input from a previous node called `chatInput`.
*   **Define below**: If you select this option, provide either static text or an expression for dynamic content to serve as the prompt in the **Prompt (User Message)** field.

### Require Specific Output Format[#](#require-specific-output-format "Permanent link")

This parameter controls whether you want the node to require a specific output format. When turned on, n8n prompts you to connect one of these output parsers to the node:

*   [Auto-fixing Output Parser](../../sub-nodes/n8n-nodes-langchain.outputparserautofixing/)
*   [Item List Output Parser](../../sub-nodes/n8n-nodes-langchain.outputparseritemlist/)
*   [Structured Output Parser](../../sub-nodes/n8n-nodes-langchain.outputparserstructured/)

## Chat Messages[#](#chat-messages "Permanent link")

Use **Chat Messages** when you're using a chat model to set a message.

n8n ignores these options if you don't connect a chat model. Select the **Type Name or ID** you want the node to use:

#### AI[#](#ai "Permanent link")

Enter a sample expected response in the **Message** field. The model will try to respond in the same way in its messages.

#### System[#](#system "Permanent link")

Enter a system **Message** to include with the user input to help guide the model in what it should do.

Use this option for things like defining tone, for example: `Always respond talking like a pirate`.

#### User[#](#user "Permanent link")

Enter a sample user input. Using this with the AI option can help improve the output of the agent. Using both together provides a sample of an input and expected response (the **AI Message**) for the model to follow.

Select one of these input types:

*   **Text**: Enter a sample user input as a text **Message**.
*   **Image (Binary)**: Select a binary input from a previous node. Enter the **Image Data Field Name** to identify which binary field from the previous node contains the image data.
*   **Image (URL)**: Use this option to feed an image in from a URL. Enter the **Image URL**.

For both the **Image** types, select the **Image Details** to control how the model processes the image and generates its textual understanding. Choose from:

*   **Auto**: The model uses the auto setting, which looks at the image input size and decide if it should use the Low or High setting.
*   **Low**: The model receives a low-resolution 512px x 512px version of the image and represents the image with a budget of 65 tokens. This allows the API to return faster responses and consume fewer input tokens. Use this option for use cases that don't require high detail.
*   **High**: The model can access the low-resolution image and then creates detailed crops of input images as 512px squares based on the input image size. Each of the detailed crops uses twice the token budget (65 tokens) for a total of 129 tokens. Use this option for use cases that require high detail.

## Templates and examples[#](#templates-and-examples "Permanent link")

**Chat with PDF docs using AI (quoting sources)**

by David Roberts

[View template details](https://n8n.io/workflows/2165-chat-with-pdf-docs-using-ai-quoting-sources/)

**Respond to WhatsApp Messages with AI Like a Pro!**

by Jimleuk

[View template details](https://n8n.io/workflows/2466-respond-to-whatsapp-messages-with-ai-like-a-pro/)

**⚡AI-Powered YouTube Video Summarization & Analysis**

by Joseph LePage

[View template details](https://n8n.io/workflows/2679-ai-powered-youtube-video-summarization-and-analysis/)

[Browse Basic LLM Chain integration templates](https://n8n.io/integrations/basic-llm-chain/), or [search all templates](https://n8n.io/workflows/)

## Related resources[#](#related-resources "Permanent link")

Refer to [LangChain's documentation on Basic LLM Chains](https://js.langchain.com/docs/tutorials/llm_chain/) for more information about the service.

View n8n's [Advanced AI](../../../../../advanced-ai/) documentation.

## AI glossary[#](#ai-glossary "Permanent link")

*   **completion**: Completions are the responses generated by a model like GPT.
*   **hallucinations**: Hallucination in AI is when an LLM (large language model) mistakenly perceives patterns or objects that don't exist.
*   **vector database**: A vector database stores mathematical representations of information. Use with embeddings and retrievers to create a database that your AI can access when answering questions.
*   **vector store**: A vector store, or vector database, stores mathematical representations of information. Use with embeddings and retrievers to create a database that your AI can access when answering questions.

## Common issues[#](#common-issues "Permanent link")

Here are some common errors and issues with the Basic LLM Chain node and steps to resolve or troubleshoot them.

### No prompt specified error[#](#no-prompt-specified-error "Permanent link")

This error displays when the **Prompt** is empty or invalid.

You might see this error in one of two scenarios:

1.  When you've set the **Prompt** to **Define below** and haven't entered anything in the **Text** field.
    *   To resolve, enter a valid prompt in the **Text** field.
2.  When you've set the **Prompt** to **Connected Chat Trigger Node** and the incoming data has no field called `chatInput`.
    *   The node expects the `chatInput` field. If your previous node doesn't have this field, add an [Edit Fields (Set)](../../../core-nodes/n8n-nodes-base.set/) node to edit an incoming field name to `chatInput`.