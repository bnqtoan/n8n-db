[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/core-nodes/n8n-nodes-base.ftp.md "Edit this page")

# FTP[#](#ftp "Permanent link")

The FTP node is useful to access and upload files to an FTP or SFTP server.

Credentials

You can find authentication information for this node [here](../../credentials/ftp/).

To connect to an SFTP server, use an SFTP credential. Refer to [FTP credentials](../../credentials/ftp/) for more information.

## Operations[#](#operations "Permanent link")

*   [**Delete**](#delete) a file or folder
*   [**Download**](#download) a file
*   [**List**](#list) folder content
*   [**Rename**](#rename) or move a file or folder
*   [**Upload**](#upload) a file

Uploading files

To attach a file for upload, you'll need to use an extra node such as the [Read/Write Files from Disk](../n8n-nodes-base.readwritefile/) node or the [HTTP Request](../n8n-nodes-base.httprequest/) node to pass the file as a data property.

## Delete[#](#delete "Permanent link")

This operation includes one parameter: **Path**. Enter the remote path that you would like to connect to.

### Delete options[#](#delete-options "Permanent link")

The delete operation adds one new option: **Folder**. If you turn this option on, the node can delete both folders and files. This configuration also displays one more option:

*   **Recursive**: If you turn this option on and you delete a folder or directory, the node will delete all files and directories within the target directory.

## Download[#](#download "Permanent link")

Configure this operation with these parameters:

*   **Path**: Enter the remote path that you would like to connect to.
*   **Put Output File in Field**: Enter the name of the output binary field to put the file in.

## List[#](#list "Permanent link")

Configure this operation with these parameters:

*   **Path**: Enter the remote path that you would like to connect to.
*   **Recursive**: Select whether to return an object representing all directories / objects recursively found within the FTP/SFTP server (turned on) or not (turned off).

## Rename[#](#rename "Permanent link")

Configure this operation with these parameters:

*   **Old Path**: Enter the existing path of the file you'd like to rename in this field.
*   **New Path**: Enter the new path for the renamed file in this field.

### Rename options[#](#rename-options "Permanent link")

This operation adds one new option: **Create Directories**. If you turn this option on, the node will recursively create the destination directory when renaming an existing file or folder.

## Upload[#](#upload "Permanent link")

Configure this operation with these parameters:

*   **Path**: Enter the remote path that you would like to connect to.
*   **Binary File**: Select whether you'll upload a binary file (turned on) or enter text content to be uploaded (turned off). Other parameters depend on your selection in this field.
    *   **Input Binary Field**: Displayed if you turn on **Binary File**. Enter the name of the input binary field that contains the file you'll upload in this field.
    *   **File Content**: Displayed if you turn off **Binary File** Enter the text content of the file you'll upload in this field.

Uploading files

To attach a file for upload, you'll need to use an extra node such as the [Read/Write Files from Disk](../n8n-nodes-base.readwritefile/) node or the [HTTP Request](../n8n-nodes-base.httprequest/) node to pass the file as a data property.

## Templates and examples[#](#templates-and-examples "Permanent link")

**Working with Excel spreadsheet files (xls & xlsx)**

by n8n Team

[View template details](https://n8n.io/workflows/1826-working-with-excel-spreadsheet-files-xls-and-xlsx/)

**Download a file and upload it to an FTP Server**

by amudhan

[View template details](https://n8n.io/workflows/663-download-a-file-and-upload-it-to-an-ftp-server/)

**Explore n8n Nodes in a Visual Reference Library**

by I versus AI

[View template details](https://n8n.io/workflows/3891-explore-n8n-nodes-in-a-visual-reference-library/)

[Browse FTP integration templates](https://n8n.io/integrations/ftp/), or [search all templates](https://n8n.io/workflows/)