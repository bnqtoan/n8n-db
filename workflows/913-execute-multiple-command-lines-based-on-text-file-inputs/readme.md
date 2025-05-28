# File Processing and Command Execution Workflow

## Use cases:

*   **Dynamic Command Execution:** This workflow can be used to execute commands based on a list of file names stored in a text file. For example, you could use it to process multiple image files, each with a unique name.
*   **Batch Processing of Files:** If you have a series of files that need to be processed in a similar way, this workflow automates the process by reading file names and passing them to a command for processing.
*   **Log File Analysis:** You can adapt this workflow to read log files, extract specific data based on each line, and use that data in commands for debugging or monitoring purposes.

## How it works:

1.  **Manual Trigger:** The workflow starts when you manually execute it.
2.  **Read Binary File:** It reads a text file located at `/home/n8n/filelist.txt`. This file is expected to contain a list of file names, one per line.
3.  **Move Binary Data:** This node converts the binary data read from the file into a JSON format that can be processed by subsequent nodes.
4.  **Function:** A JavaScript function processes the data. It splits the content of the file into an array (`arrData`), discards the first two lines and determine the size of the array without the first two lines, then stores this array and its size in the JSON structure.
5.  **Execute Command:** For each file name in the array, the workflow executes a shell command using the filename. The command `echo "The file name is {{$node["Function"].json["arrData"][$runIndex]}}"` writes the file name to `/home/n8n/n8n-output.txt`. The `$runIndex` variable ensures the correct file name is selected from the `arrData` array in each iteration.
6.  **IF:** A conditional node checks if the current iteration (`$runIndex`) is smaller than the total number of file names (`dataSize`).
    *   If `$runIndex` is smaller than `dataSize`, it continues to `Execute Command` to process the next file name.
    *   If `$runIndex` is equal to or greater than `dataSize`, it goes to the `NoOp` node, effectively ending the loop.
7.  **NoOp:** This node does nothing and serves as the end point of the workflow once all file names have been processed.

## Services:

*   None (The workflow interacts with the local file system and executes commands)

## Hashtags:

#n8n #automation #fileprocessing #commandexecution #batchprocessing
