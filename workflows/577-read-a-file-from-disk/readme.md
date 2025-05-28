# My Workflow

## Use cases:

- **Local File Processing:** This workflow can be used as a foundation for automating local file processing tasks. For example, it could be triggered manually to read a specific image file for further processing or analysis within n8n.
- **Testing File Handling:** The workflow provides a simple way to test the "Read Binary File" node within your n8n instance. It can be used to quickly read and verify the contents of a local file for development or troubleshooting purposes.

## How it works:

1.  The workflow starts with a "Manual Trigger" node, which is executed when you manually click the "Execute Workflow" button in the n8n interface.
2.  The "Read Binary File" node then reads the binary data from the specified file path `/data/picture.jpg`. The content of the file is then available for subsequent nodes in the workflow.

## Services:

- Local File System

## Hashtags:

#n8n #automation #fileprocessing #binarydata
