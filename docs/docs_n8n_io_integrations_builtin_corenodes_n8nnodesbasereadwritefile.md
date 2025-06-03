[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/core-nodes/n8n-nodes-base.readwritefile.md "Edit this page")

# Read/Write Files from Disk[#](#readwrite-files-from-disk "Permanent link")

Use the Read/Write Files from Disk node to read and write files from/to the machine where n8n is running.

Self-hosted n8n only

This node isn't available on n8n Cloud.

## Operations[#](#operations "Permanent link")

*   [**Read File(s) From Disk**](#read-files-from-disk): Use this operation to retrieve one or more files from the computer that runs n8n.
*   [**Write File to Disk**](#write-file-to-disk): Use this operation to create a binary file on the computer that runs n8n.

Refer to the sections below for more information on configuring the node for each operation.

## Read File(s) From Disk[#](#read-files-from-disk "Permanent link")

Configure this operation with these parameters:

*   **File(s) Selector**: Enter the path of the file you want to read.
    *   To enter multiple files, enter a page path pattern. You can use these characters to define a path pattern:
        *   `*`: Matches any character zero or more times, excluding path separators.
        *   `**`: Matches any character zero or more times, include path separators.
        *   `?`: Matches any character except for path separators one time.
        *   `[]`: Matches any characters inside the brackets. For example, `[abc]` would match the characters `a`, `b`, or `c`, and nothing else.

Refer to [Picomatch's Basic globbing](https://github.com/micromatch/picomatch#basic-globbing) documentation for more information on these characters and their expected behavior.

### Read File(s) From Disk options[#](#read-files-from-disk-options "Permanent link")

You can also configure this operation with these **Options**:

*   **File Extension**: Enter the extension for the file in the node output.
*   **File Name**: Enter the name for the file in the node output.
*   **MIME Type**: Enter the file's MIME type in the node output. Refer to [Common MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) for a list of file extensions and their MIME types.
*   **Put Output File in Field**: Enter the name of the field in the output data to contain the file.

## Write File to Disk[#](#write-file-to-disk "Permanent link")

Configure this operation with these parameters:

*   **File Path and Name**: Enter the destination for the file, the file's name, and the file's extension.
*   **Input Binary Field**: Enter the name of the field in the node input data that will contain the binary file.

### Write File to Disk options[#](#write-file-to-disk-options "Permanent link")

You can also configure this operation with these **Options**:

This operation includes a single option, whether to **Append** data to an existing file instead of creating a new one (turned on) or to create a new file instead of appending to existing (turned off).

## Templates and examples[#](#templates-and-examples "Permanent link")

**Generate SQL queries from schema only - AI-powered**

by Yulia

[View template details](https://n8n.io/workflows/2508-generate-sql-queries-from-schema-only-ai-powered/)

**Talk to your SQLite database with a LangChain AI Agent 🧠💬**

by Yulia

[View template details](https://n8n.io/workflows/2292-talk-to-your-sqlite-database-with-a-langchain-ai-agent/)

**Breakdown Documents into Study Notes using Templating MistralAI and Qdrant**

by Jimleuk

[View template details](https://n8n.io/workflows/2339-breakdown-documents-into-study-notes-using-templating-mistralai-and-qdrant/)

[Browse Read/Write Files from Disk integration templates](https://n8n.io/integrations/readwrite-files-from-disk/), or [search all templates](https://n8n.io/workflows/)

## File locations[#](#file-locations "Permanent link")

If you run n8n in Docker, your command runs in the n8n container and not the Docker host.

This node looks for files relative to the n8n install path. n8n recommends using absolute file paths to prevent any errors.