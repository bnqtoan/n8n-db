# AI File Manager

## Use cases:

1.  **Automated File Organization:** Automatically sorts newly added files in a directory into existing or newly created subfolders based on file names and content hints, streamlining file management and reducing manual effort.
2.  **Dynamic Folder Creation:** Suggests new folder names for better organization when existing folders are not suitable for the files, improving folder structures over time.
3.  **Simplified Content Management:** Integrates with cloud storage or local directories to offer an intelligent file management solution that leverages AI to categorize and sort files effectively.

## How it works:

The workflow begins by monitoring a specified folder for newly added files using the "Local File Trigger". When a file is added, the "Set Variables" node defines the target directory. The "Get Files and Folders" node then uses shell commands to list all files and folders in the directory. These lists are formatted into arrays using the "Files and Folders to Array" node. The "If Has Target Files..." node checks if any files are present. If files exist, the workflow sends the list of files and folders to the "AI File Manager" node, which leverages the Mistral AI model to determine which folder each file should be moved to, or suggests new folders to be created if necessary. The AI's suggestions are parsed by the "Structured Output Parser", and then the "Get Suggestions to List" node split the output for each file. Finally, the "Move Files into Folders" node executes shell commands to move the files into their suggested subdirectories.

## Services:

*   Mistral AI API: Used for analyzing file names and suggesting folder placements.
*   Local File System: The workflow monitors and manipulates files and folders on the local file system.

## Hashtags:

#n8n #automation #filemanagement #AI #MistralAI
