# Read Binary Files from Directory

## Use cases

*   **Image Processing Pipeline:** Automatically process all newly added images in a specific directory for tasks like resizing, watermarking, or format conversion.
*   **Data Archiving:** Read and archive binary files like log files or sensor data stored in a directory for long-term storage or analysis.
*   **File Conversion:** Convert multiple image files of one format to another.

## How it works

This workflow is triggered manually and reads all `.jpg` files located in the `/data/lol/` directory.

1.  **On clicking 'execute'**: This node initiates the workflow when you manually click the "Execute Workflow" button in n8n.
2.  **Read Binary Files**: This node reads all files matching the specified file selector (`/data/lol/*.jpg`). The content of these files will be available as binary data for subsequent nodes in the workflow.

## Services

*   None (This workflow interacts directly with the file system where n8n is running).

## Hashtags

#n8n #automation #files #binarydata #imageprocessing
