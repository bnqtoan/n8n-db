[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/core-nodes/n8n-nodes-base.compression.md "Edit this page")

# Compression[#](#compression "Permanent link")

Use the Compression node to compress and decompress files. Supports Zip and Gzip formats.

## Node parameters[#](#node-parameters "Permanent link")

This node can be used as an AI tool

This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](../../../../advanced-ai/examples/using-the-fromai-function/).

The node parameters depend on which **Operation** you select. Choose to:

*   **Compress**: Create a compressed file from your input data.
*   **Decompress**: Decompress an existing compressed file.

Refer to the sections below for parameters specific to each **Operation**.

### Compress[#](#compress "Permanent link")

*   **Input Binary Field(s)**: Enter the name of the fields in the input data that contain the binary files you want to compress. To compress more than one file, use a comma-separated list.
*   **Output Format**: Choose whether to format the compressed output as **Zip** or **Gzip**.
*   **File Name**: Enter the name of the zip file the node creates.
*   **Put Output File in Field**: Enter the name of the field in the output data to contain the file.

### Decompress[#](#decompress "Permanent link")

*   **Put Output File in Field**: Enter the name of the fields in the input data that contain the binary files you want to decompress. To decompress more than one file, use a comma-separated list.
*   **Output Prefix**: Enter a prefix to add to the output file name.

## Templates and examples[#](#templates-and-examples "Permanent link")

**Talk to your SQLite database with a LangChain AI Agent 🧠💬**

by Yulia

[View template details](https://n8n.io/workflows/2292-talk-to-your-sqlite-database-with-a-langchain-ai-agent/)

**Transcribing Bank Statements To Markdown Using Gemini Vision AI**

by Jimleuk

[View template details](https://n8n.io/workflows/2421-transcribing-bank-statements-to-markdown-using-gemini-vision-ai/)

**Build a Tax Code Assistant with Qdrant, Mistral.ai and OpenAI**

by Jimleuk

[View template details](https://n8n.io/workflows/2341-build-a-tax-code-assistant-with-qdrant-mistralai-and-openai/)

[Browse Compression integration templates](https://n8n.io/integrations/compression/), or [search all templates](https://n8n.io/workflows/)