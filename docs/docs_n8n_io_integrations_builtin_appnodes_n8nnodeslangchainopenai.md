[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-langchain.openai/index.md "Edit this page")

# OpenAI node[#](#openai-node "Permanent link")

Use the OpenAI node to automate work in OpenAI and integrate OpenAI with other applications. n8n has built-in support for a wide range of OpenAI features, including creating images and assistants, as well as chatting with models.

On this page, you'll find a list of operations the OpenAI node supports and links to more resources.

OpenAI Assistant node

The OpenAI node replaces the OpenAI assistant node from version 1.29.0 on.

Credentials

Refer to [OpenAI credentials](../../credentials/openai/) for guidance on setting up authentication.

## Operations[#](#operations "Permanent link")

*   **Assistant**
    *   [**Create an Assistant**](assistant-operations/#create-an-assistant)
    *   [**Delete an Assistant**](assistant-operations/#delete-an-assistant)
    *   [**List Assistants**](assistant-operations/#list-assistants)
    *   [**Message an Assistant**](assistant-operations/#message-an-assistant)
    *   [**Update an Assistant**](assistant-operations/#update-an-assistant)
*   **Text**
    *   [**Message a Model**](text-operations/#message-a-model)
    *   [**Classify Text for Violations**](text-operations/#classify-text-for-violations)
*   **Image**
    *   [**Analyze Image**](image-operations/#analyze-image)
    *   [**Generate an Image**](image-operations/#generate-an-image)
*   **Audio**
    *   [**Generate Audio**](audio-operations/#generate-audio)
    *   [**Transcribe a Recording**](audio-operations/#transcribe-a-recording)
    *   [**Translate a Recording**](audio-operations/#translate-a-recording)
*   **File**
    *   [**Delete a File**](file-operations/#delete-a-file)
    *   [**List Files**](file-operations/#list-files)
    *   [**Upload a File**](file-operations/#upload-a-file)

## Templates and examples[#](#templates-and-examples "Permanent link")

**AI agent chat**

by n8n Team

[View template details](https://n8n.io/workflows/1954-ai-agent-chat/)

**Building Your First WhatsApp Chatbot**

by Jimleuk

[View template details](https://n8n.io/workflows/2465-building-your-first-whatsapp-chatbot/)

**Scrape and summarize webpages with AI**

by n8n Team

[View template details](https://n8n.io/workflows/1951-scrape-and-summarize-webpages-with-ai/)

[Browse OpenAI integration templates](https://n8n.io/integrations/openai/), or [search all templates](https://n8n.io/workflows/)

## Related resources[#](#related-resources "Permanent link")

Refer to [OpenAI's documentation](https://beta.openai.com/docs/introduction) for more information about the service.

Refer to [OpenAI's assistants documentation](https://platform.openai.com/docs/assistants/how-it-works/objects) for more information about how assistants work.

For help dealing with rate limits, refer to [Handling rate limits](../../rate-limits/).

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.

## Using tools with OpenAI assistants[#](#using-tools-with-openai-assistants "Permanent link")

Some operations allow you to connect tools. [Tools](https://docs.n8n.io/advanced-ai/examples/understand-tools/) act like addons that your AI can use to access extra context or resources.

Select the **Tools** connector to browse the available tools and add them.

Once you add a tool connection, the OpenAI node becomes a [root node](../../../../glossary/#root-node-n8n), allowing it to form a [cluster node](../../../../glossary/#cluster-node-n8n) with the tools [sub-nodes](../../../../glossary/#sub-node-n8n). See [Node types](../../node-types/#cluster-nodes) for more information on cluster nodes and root nodes.

### Operations that support tool connectors[#](#operations-that-support-tool-connectors "Permanent link")

*   **Assistant**
    *   [**Message an Assistant**](assistant-operations/#message-an-assistant)
*   **Text**
    *   [**Message a Model**](text-operations/#message-a-model)

## Common issues[#](#common-issues "Permanent link")

For common questions or issues and suggested solutions, refer to [Common issues](common-issues/).