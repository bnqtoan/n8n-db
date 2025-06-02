[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.googletranslate.md "Edit this page")

# Google Translate node[#](#google-translate-node "Permanent link")

Use the Google Translate node to automate work in Google Translate, and integrate Google Translate with other applications. n8n has built-in support for a wide range of Google Translate features, including translating languages.

On this page, you'll find a list of operations the Google Translate node supports and links to more resources.

Credentials

Refer to [Google Translate credentials](../../credentials/google/) for guidance on setting up authentication.

This node can be used as an AI tool

This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](../../../../advanced-ai/examples/using-the-fromai-function/).

## Operations[#](#operations "Permanent link")

*   Language
    *   Translate data

## Templates and examples[#](#templates-and-examples "Permanent link")

**Translate PDF documents from Google drive folder with DeepL**

by Milorad Filipovic

[View template details](https://n8n.io/workflows/2179-translate-pdf-documents-from-google-drive-folder-with-deepl/)

**Translate text from English to German**

by Harshil Agrawal

[View template details](https://n8n.io/workflows/743-translate-text-from-english-to-german/)

**🉑 Generate Anki Flash Cards for Language Learning with Google Translate and GPT**

by Samir Saci

[View template details](https://n8n.io/workflows/3195-generate-anki-flash-cards-for-language-learning-with-google-translate-and-gpt/)

[Browse Google Translate integration templates](https://n8n.io/integrations/google-translate/), or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.