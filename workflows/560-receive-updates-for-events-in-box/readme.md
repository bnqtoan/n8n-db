# Box File Monitoring Workflow

## Use cases:

*   **Automated Archiving:** Automatically trigger a process to archive a folder when it's moved within Box, ensuring proper data retention policies.
*   **Download Notifications:** Send a notification to a team channel (e.g., Slack) whenever a file is downloaded from a specific Box folder, improving security monitoring.

## How it works:

This workflow is triggered by events happening in Box. Specifically, it listens for two events: when a folder is moved (`FOLDER.MOVED`) or when a file from that folder is downloaded (`FOLDER.DOWNLOADED`). The workflow is configured to monitor a specific folder identified by its `targetId`.  When either of these events occurs, the workflow will trigger (currently the workflow has no further actions to execute after the trigger).

## Services:

*   Box

## Hashtags:

#n8n #automation #Box #filemonitoring #workflow
