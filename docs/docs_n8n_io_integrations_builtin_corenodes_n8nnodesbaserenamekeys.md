[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/core-nodes/n8n-nodes-base.renamekeys.md "Edit this page")

# Rename Keys[#](#rename-keys "Permanent link")

Use the Rename Keys node to rename the keys of a key-value pair in n8n.

## Node parameters[#](#node-parameters "Permanent link")

You can rename one or multiple keys using the Rename Keys node. Select the **Add new key** button to rename a key.

For each key, enter the:

*   **Current Key Name**: The current name of the key you want to rename.
*   **New Key Name**: The new name you want to assign to the key.

## Node options[#](#node-options "Permanent link")

Choose whether to use a **Regex** regular expression to identify keys to rename. To use this option, you must also enter:

*   The **Regular Expression** you'd like to use.
*   **Replace With**: Enter the new name you want to assign to the key(s) that match the **Regular Expression**.
*   You can also choose these Regex-specific options:
    *   **Case Insensitive**: Set whether the regular expression should match case (turned off) or be case insensitive (turned on).
    *   **Max Depth**: Enter the maximum depth to replace keys, using `-1` for unlimited and `0` for top-level only.

Regex impacts

Using a regular expression can affect any keys that match the expression, including keys you've already renamed.

## Templates and examples[#](#templates-and-examples "Permanent link")

**Explore n8n Nodes in a Visual Reference Library**

by I versus AI

[View template details](https://n8n.io/workflows/3891-explore-n8n-nodes-in-a-visual-reference-library/)

**Create Salesforce accounts based on Excel 365 data**

by Tom

[View template details](https://n8n.io/workflows/1793-create-salesforce-accounts-based-on-excel-365-data/)

**Convert Reddit threads into short vertical videos with AI**

by Artur

[View template details](https://n8n.io/workflows/3407-convert-reddit-threads-into-short-vertical-videos-with-ai/)

[Browse Rename Keys integration templates](https://n8n.io/integrations/rename-keys/), or [search all templates](https://n8n.io/workflows/)