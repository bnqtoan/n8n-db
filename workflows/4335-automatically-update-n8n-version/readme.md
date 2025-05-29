# Update n8n Version

## Use cases:

- **Automatic Version Check:** Regularly checks for new n8n versions and prepares a flag file for a subsequent update script.
- **Scheduled Updates:** Can be scheduled to run during off-peak hours to minimize disruption.
- **Conditional Execution:** Only prepares the update flag if a newer version is available, preventing unnecessary updates.

## How it works:

1.  **Schedule Trigger:** The workflow starts with a "Schedule Trigger" node, configured to run at 5 AM every day.
2.  **Get the latest n8n version:** The workflow retrieves the latest n8n version from the npm registry using an "HTTP Request" node.
3.  **Get Local n8n version:** An "HTTP Request" node fetches the current n8n version from the local n8n instance via its settings API.
4.  **If:** The "If" node compares the latest version with the local version. If they are different, the workflow proceeds.
5.  **SSH1:** An "SSH" node connects to a remote server (presumably hosting the n8n instance) and executes a command that writes a boolean value to a `check_update.txt` file.  This file acts as a flag for a separate update process. The condition `{{ $prevNode.outputIndex ? false : true }}` ensures the value written to the file is `true` regardless of which branch of the "If" node is executed.

## Services:

-   npm Registry ([https://registry.npmjs.org/](https://registry.npmjs.org/))
-   SSH
-   Local n8n instance (via its REST API)

## Hashtags:

#n8n #automation #versioncontrol #scheduledtasks #SSH
