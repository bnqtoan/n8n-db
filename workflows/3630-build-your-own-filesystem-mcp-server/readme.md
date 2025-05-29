# FileSystem MCP Server

## Use cases:

- **AI-Powered File Management:** Enables an AI agent (like Claude) to interact with a file system, listing directories, searching for files, reading content, and creating/writing files based on natural language commands.
- **Automated File System Tasks:** Facilitates the creation of automated workflows where an AI agent can dynamically manage files based on external triggers or data changes. For example, automatically creating a folder when a new customer is added or backing up files based on a schedule.
- **Integration with Chatbots:** Allows users to interact with a file system through a chatbot interface. They can ask the bot to perform file-related tasks, and the workflow will execute those tasks on their behalf.

## How it works:

This workflow acts as a FileSystem MCP (Model Context Protocol) server, allowing an AI agent to interact with the file system. It leverages the MCP Server Trigger to receive commands from an AI agent and then uses a series of tools to execute those commands:

1.  **MCP Server Trigger (FileSystem MCP Server):** Listens for requests from an MCP client (e.g., an AI agent like Claude).
2.  **Execute Command Tools (ListDirectory, CreateDirectory, SearchDirectory):** These tools allow the AI agent to list directories, create new directories, and search the file system for specific files. They execute Linux commands like `ls`, `mkdir`, and `find` within a controlled environment.
3.  **Custom Workflow Tools (ReadFiles, WriteFiles):** These tools handle reading and writing files. They receive instructions from the AI agent and trigger another n8n workflow that executes the file operations.
4.  **Workflow Execution (When Executed by Another Workflow):** triggered from the custom tools (ReadFiles, WriteFiles). The workflow perform conditional operations depending on the value of the `operation` parameter. If the value is `writeOneOrMultipleFiles` the content is written to the file system through a bash command. Otherwise, if the value is `readOneOrMultipleFiles` the content of the file is read through a bash command.
5.  **Switch (Operation):** Routes the execution flow based on the operation requested by the AI agent (`readOneOrMultipleFiles` or `writeOneOrMultipleFiles`).
6.  **Execute Command (writeOneOrMultipleFiles, readOneOrMultipleFiles):** Executes the final file system commands (either writing or reading), composing the correct syntax depending on the parameters passed.

## Services:

-   Linux File System

## Hashtags:

#n8n #automation #filesystem #mcp #AIagent
