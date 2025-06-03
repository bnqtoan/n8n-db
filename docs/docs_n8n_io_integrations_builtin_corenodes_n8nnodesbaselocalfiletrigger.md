[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/core-nodes/n8n-nodes-base.localfiletrigger.md "Edit this page")

# Local File Trigger node[#](#local-file-trigger-node "Permanent link")

The Local File Trigger node starts a workflow when it detects changes on the file system. These changes involve a file or folder getting added, changed, or deleted.

Self-hosted n8n only

This node isn't available on n8n Cloud.

## Node parameters[#](#node-parameters "Permanent link")

You can choose what event to watch for using the **Trigger On** parameter.

## Changes to a Specific File[#](#changes-to-a-specific-file "Permanent link")

The node triggers when the specified file changes.

Enter the path for the file to watch in **File to Watch**.

## Changes Involving a Specific Folder[#](#changes-involving-a-specific-folder "Permanent link")

The node triggers when a change occurs in the selected folder.

Configure these parameters:

*   **Folder to Watch**: Enter the path of the folder to watch.
*   **Watch for**: Select the type of change to watch for.

## Node options[#](#node-options "Permanent link")

Use the node **Options** to include or exclude files and folders.

*   **Include Linked Files/Folders**: also watch for changes to linked files or folders.
*   **Ignore**: files or paths to ignore. n8n tests the whole path, not just the filename. Supports the [Anymatch](https://github.com/micromatch/anymatch) syntax.
*   **Max Folder Depth**: how deep into the folder structure to watch for changes.

### Examples for Ignore[#](#examples-for-ignore "Permanent link")

Ignore a single file:

1
2

`**/<fileName>.<suffix> # For example, **/myfile.txt`

Ignore a sub-directory of a directory you're watching:

1
2

`**/<directoryName>/** # For example, **/myDirectory/**`

## Templates and examples[#](#templates-and-examples "Permanent link")

**Breakdown Documents into Study Notes using Templating MistralAI and Qdrant**

by Jimleuk

[View template details](https://n8n.io/workflows/2339-breakdown-documents-into-study-notes-using-templating-mistralai-and-qdrant/)

**Build a Financial Documents Assistant using Qdrant and Mistral.ai**

by Jimleuk

[View template details](https://n8n.io/workflows/2335-build-a-financial-documents-assistant-using-qdrant-and-mistralai/)

**Organise Your Local File Directories With AI**

by Jimleuk

[View template details](https://n8n.io/workflows/2334-organise-your-local-file-directories-with-ai/)

[Browse Local File Trigger integration templates](https://n8n.io/integrations/local-file-trigger/), or [search all templates](https://n8n.io/workflows/)