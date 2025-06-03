[](https://github.com/n8n-io/n8n-docs/edit/main/docs/workflows/export-import.md "Edit this page")

# Export and import workflows[#](#export-and-import-workflows "Permanent link")

n8n saves workflows in JSON format. You can export your workflows as JSON files or import JSON files into your n8n library. You can export and import workflows in several ways.

Sharing credentials

Exported workflow JSON files include [credential](../../glossary/#credential-n8n) names and IDs. While IDs aren't sensitive, the names could be, depending on how you name your credentials. HTTP Request nodes may contain authentication headers when imported from cURL. Remove or anonymize this information from the JSON file before sharing to protect your credentials.

## Copy-Paste[#](#copy-paste "Permanent link")

You can copy and paste a workflow or parts of it by selecting the nodes you want to copy to the clipboard (`Ctrl + c` or `cmd +c`) and pasting it (`Ctrl + v` or `cmd + v`) into the Editor UI.

To select all nodes or a group of nodes, click and drag: [![Select a group of nodes](../../_images/workflows/export-import/selectingnodes.gif)](https://docs.n8n.io/_images/workflows/export-import/selectingnodes.gif)

## From the Editor UI menu[#](#from-the-editor-ui-menu "Permanent link")

From the top navigation bar, select the three dots in the upper right ![Workflow menu icon](/_images/common-icons/three-dots-horizontal.png) to see the following options:

[![Import/Export menu](/_images/courses/level-one/chapter-six/l1-c6-import-export-menu.png)](https://docs.n8n.io/_images/courses/level-one/chapter-six/l1-c6-import-export-menu.png)

_Import & Export workflows menu_

*   **Download**: Downloads your current workflow as a JSON file to your computer.
*   **Import from URL**: Imports workflow JSON from a URL, for example, [this workflow JSON file on GitHub](https://raw.githubusercontent.com/n8n-io/demo-setup/main/n8n/backup/workflows/srOnR8PAY3u4RSwb.json).
*   **Import from File**: Imports a workflow as a JSON file from your computer.

## From the command line[#](#from-the-command-line "Permanent link")

*   Export: See the [full list of commands](../../hosting/cli-commands/#export-workflows-and-credentials) for exporting workflows or credentials.
*   Import: See the [full list of commands](../../hosting/cli-commands/#import-workflows-and-credentials) for importing workflows or credentials.