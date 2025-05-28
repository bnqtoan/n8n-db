# Zip multiple files

## Use cases:

- **Batch File Archiving:** Automatically compress multiple files (images, PDFs, spreadsheets) into a single zip archive for easier storage or sharing.
- **Data Backup:** Create a zip file of important documents on a recurring schedule as part of a backup strategy.
- **Simplified File Transfer:** Combine multiple files into a single zip file for convenient uploading or emailing.

## How it works:

1.  The workflow starts with an **Execute Workflow Trigger** node, initiating the process. This trigger is a manual start, so other workflows would initiate it.
2.  The **Code Magic** node processes the input files. It extracts the binary data (file content) from each input item and prepares it for the compression node. This code iterates through each input, stores the binary data with a unique key (`data_${index}`), and creates a comma-separated string of these keys.
3.  The **Compression** node takes the binary data prepared by the "Code Magic" node and compresses it into a zip file. The filename is dynamically generated using the current date and time (`yyyy-MM-dd-tt`). The `binaryPropertyName` is set based on the `binary_keys` from the previous node, and picks up the files to be compressed.
4.  The **Prepare Output** node renames the `fileName` property removing all spaces in the name, to prevent errors down the workflow. The output of the Zip file is available under the binary property `data`.

## Services:

- None. The workflow uses n8n's built-in nodes for compression and data manipulation.

## Hashtags:

#n8n #automation #filecompression #ziparchive #workflow
