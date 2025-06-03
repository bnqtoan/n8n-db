[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/trigger-nodes/n8n-nodes-base.googledrivetrigger/index.md "Edit this page")

# Google Drive Trigger node[#](#google-drive-trigger-node "Permanent link")

[Google Drive](https://drive.google.com) is a file storage and synchronization service developed by Google. It allows users to store files on their servers, synchronize files across devices, and share files.

Credentials

You can find authentication information for this node [here](../../credentials/google/).

Examples and templates

For usage examples and templates to help you get started, refer to n8n's [Google Drive Trigger integrations](https://n8n.io/integrations/google-drive-trigger/) page.

Manual Executions vs. Activation

On manual executions this node will return the last event matching its search criteria. If no event matches the criteria (for example because you are watching for files to be created but no files have been created so far), an error is thrown. Once saved and activated, the node will regularly check for any matching events and will trigger your workflow for each event found.

## Common issues[#](#common-issues "Permanent link")

For common questions or issues and suggested solutions, refer to [Common issues](common-issues/).