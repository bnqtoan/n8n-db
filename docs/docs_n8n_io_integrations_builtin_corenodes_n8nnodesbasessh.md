[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/core-nodes/n8n-nodes-base.ssh.md "Edit this page")

# SSH[#](#ssh "Permanent link")

The SSH node is useful for executing commands using the Secure Shell Protocol.

Credentials

You can find authentication information for this node [here](../../credentials/ssh/).

## Operations[#](#operations "Permanent link")

*   [**Execute** a command](#execute-command)
*   [**Download** a file](#download-file)
*   [**Upload** a file](#upload-file)

Uploading files

To attach a file for upload, you will need to use an extra node such as the [Read/Write Files from Disk](../n8n-nodes-base.readwritefile/) node or the [HTTP Request](../n8n-nodes-base.httprequest/) node to pass the file as a data property.

### Execute Command[#](#execute-command "Permanent link")

Configure this operation with these parameters:

*   **Credential to connect with**: Select an existing or create a new [SSH credential](../../credentials/ssh/) to connect with.
*   **Command**: Enter the command to execute on the remote device.
*   **Working Directory**: Enter the directory where n8n should execute the command.

### Download File[#](#download-file "Permanent link")

*   **Credential to connect with**: Select an existing or create a new [SSH credential](../../credentials/ssh/) to connect with.
*   **Path**: Enter the path for the file you want to download. This path must include the file name. The downloaded file will use this file name. To use a different name, use the **File Name** option. Refer to [Download File options](#download-file-options) for more information.
*   **File Property**: Enter the name of the object property that holds the binary data you want to download.

#### Download File options[#](#download-file-options "Permanent link")

You can further configure this operation with the **File Name** option. Use this option to override the binary data file name to a name of your choice.

### Upload File[#](#upload-file "Permanent link")

*   **Credential to connect with**: Select an existing or create a new [SSH credential](../../credentials/ssh/) to connect with.
*   **Input Binary Field**: Enter the name of the input binary field that contains the file you want to upload.
*   **Target Directory**: The directory to upload the file to. The name of the file is taken from the binary data file name. To enter a different name, use the **File Name** option. Refer to [Upload File options](#upload-file-options) for more information.

#### Upload File options[#](#upload-file-options "Permanent link")

You can further configure this operation with the **File Name** option. Use this option to override the binary data file name to a name of your choice.

## Templates and examples[#](#templates-and-examples "Permanent link")

**Send Email if server has upgradable packages**

by Hostinger

[View template details](https://n8n.io/workflows/2925-send-email-if-server-has-upgradable-packages/)

**Check VPS resource usage every 15 minutes**

by Hostinger

[View template details](https://n8n.io/workflows/2951-check-vps-resource-usage-every-15-minutes/)

**Docker Registry Cleanup Workflow**

by Muzaffer AKYIL

[View template details](https://n8n.io/workflows/2835-docker-registry-cleanup-workflow/)

[Browse SSH integration templates](https://n8n.io/integrations/ssh/), or [search all templates](https://n8n.io/workflows/)