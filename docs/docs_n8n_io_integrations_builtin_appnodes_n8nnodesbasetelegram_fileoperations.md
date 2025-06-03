[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.telegram/file-operations.md "Edit this page")

# Telegram node File operations[#](#telegram-node-file-operations "Permanent link")

Use this operation to get a file from Telegram. Refer to [Telegram](../) for more information on the Telegram node itself.

This node can be used as an AI tool

This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](../../../../../advanced-ai/examples/using-the-fromai-function/).

## Get File[#](#get-file "Permanent link")

Use this operation to get a file from Telegram using the Bot API [getFile](https://core.telegram.org/bots/api#getfile) method.

Enter these parameters:

*   **Credential to connect with**: Create or select an existing [Telegram credential](../../../credentials/telegram/).
*   **Resource**: Select **File**.
*   **Operation**: Select **Get**.
*   **File ID**: Enter the ID of the file you want to get.
*   **Download**: Choose whether you want the node to download the file (turned on) or not (turned off).

Refer to the Telegram Bot API [getFile](https://core.telegram.org/bots/api#getfile) documentation for more information.