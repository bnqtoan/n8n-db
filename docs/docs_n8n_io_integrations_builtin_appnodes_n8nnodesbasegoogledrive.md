[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.googledrive/index.md "Edit this page")

# Google Drive node[#](#google-drive-node "Permanent link")

Use the Google Drive node to automate work in Google Drive, and integrate Google Drive with other applications. n8n has built-in support for a wide range of Google Drive features, including creating, updating, listing, deleting, and getting drives, files, and folders.

On this page, you'll find a list of operations the Google Drive node supports and links to more resources.

Credentials

Refer to [Google Drive credentials](../../credentials/google/) for guidance on setting up authentication.

## Operations[#](#operations "Permanent link")

*   **File**
    *   [**Copy**](file-operations/#copy-a-file) a file
    *   [**Create from text**](file-operations/#create-from-text)
    *   [**Delete**](file-operations/#delete-a-file) a file
    *   [**Download**](file-operations/#download-a-file) a file
    *   [**Move**](file-operations/#move-a-file) a file
    *   [**Share**](file-operations/#share-a-file) a file
    *   [**Update**](file-operations/#update-a-file) a file
    *   [**Upload**](file-operations/#upload-a-file) a file
*   **File/Folder**
    *   [**Search**](file-folder-operations/#search-files-and-folders) files and folders
*   **Folder**
    *   [**Create**](folder-operations/#create-a-folder) a folder
    *   [**Delete**](folder-operations/#delete-a-folder) a folder
    *   [**Share**](folder-operations/#share-a-folder) a folder
*   **Shared Drive**
    *   [**Create**](shared-drive-operations/#create-a-shared-drive) a shared drive
    *   [**Delete**](shared-drive-operations/#delete-a-shared-drive) a shared drive
    *   [**Get**](shared-drive-operations/#get-a-shared-drive) a shared drive
    *   [**Get Many**](shared-drive-operations/#get-many-shared-drives) shared drives
    *   [**Update**](shared-drive-operations/#update-a-shared-drive) a shared drive

## Templates and examples[#](#templates-and-examples "Permanent link")

**Ask questions about a PDF using AI**

by David Roberts

[View template details](https://n8n.io/workflows/1960-ask-questions-about-a-pdf-using-ai/)

**Chat with PDF docs using AI (quoting sources)**

by David Roberts

[View template details](https://n8n.io/workflows/2165-chat-with-pdf-docs-using-ai-quoting-sources/)

**RAG Chatbot for Company Documents using Google Drive and Gemini**

by Mihai Farcas

[View template details](https://n8n.io/workflows/2753-rag-chatbot-for-company-documents-using-google-drive-and-gemini/)

[Browse Google Drive integration templates](https://n8n.io/integrations/google-drive/), or [search all templates](https://n8n.io/workflows/)

## Common issues[#](#common-issues "Permanent link")

For common questions or issues and suggested solutions, refer to [Common issues](common-issues/).

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.