# Write a file to the host machine

## Use cases:

*   **Download and Store Files:** Automatically download files from a URL (e.g., images, documents) and save them to a specific directory on your server or computer.
*   **Backup Website Assets:** Periodically download website assets like logos or configuration files and store them locally as a backup.

## How it works:

1.  The workflow starts with a "Manual Trigger" node, which is activated when you click the "Execute" button in n8n.
2.  The "HTTP Request" node then fetches a file from the specified URL (`https://docs.n8n.io/assets/img/n8n-logo.png`). The `responseFormat` is set to "file", indicating that the response should be treated as a binary file.
3.  Finally, the "Write Binary File" node takes the file received from the "HTTP Request" node and writes it to the specified path (`/Users/tanay/Desktop/n8n-logo.png`) on the host machine.

## Services:

*   None

## Hashtags:

#n8n #automation #filedownload #http #filesystem
