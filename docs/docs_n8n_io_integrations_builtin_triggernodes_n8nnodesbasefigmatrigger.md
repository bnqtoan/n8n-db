[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/trigger-nodes/n8n-nodes-base.figmatrigger.md "Edit this page")

# Figma Trigger (Beta) node[#](#figma-trigger-beta-node "Permanent link")

[Figma](https://www.figma.com/) is a prototyping tool which is primarily web-based, with more offline features enabled by desktop applications for macOS and Windows.

Supported Figma Plans

Figma doesn't support webhooks on the free "Starter" plan. Your team needs to be on the "Professional" plan to use this node.

Credentials

You can find authentication information for this node [here](../../credentials/figma/).

Examples and templates

For usage examples and templates to help you get started, refer to n8n's [Figma Trigger integrations](https://n8n.io/integrations/figma-trigger-beta/) page.

## Events[#](#events "Permanent link")

*   **File Commented**: Triggers when someone comments on a file.
*   **File Deleted**: Triggers when someone deletes an individual file, but not when someone deletes an entire folder with all files.
*   **File Updated**: Triggers when someone saves or deletes a file. A save occurs when someone closes a file within 30 seconds after making changes.
*   **File Version Updated**: Triggers when someone creates a named version in the version history of a file.
*   **Library Publish**: Triggers when someone publishes a library file.