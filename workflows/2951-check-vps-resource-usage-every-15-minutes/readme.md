# System Resource Monitoring and Alerting

## Use cases:

- **Server Monitoring:** Automatically monitor CPU, RAM, and disk usage of a server and receive email alerts when resource usage exceeds predefined thresholds.
- **Proactive Issue Detection:** Identify potential performance bottlenecks before they impact applications by tracking resource consumption patterns.
- **Capacity Planning:** Gather data on resource usage trends to make informed decisions about server upgrades or scaling.

## How it works:

This workflow is designed to monitor system resources (CPU, RAM, and Disk usage) on a remote server and send an email notification if any of these resources exceeds a defined threshold (80%).

1.  **Schedule Trigger:** The workflow starts with a `Schedule Trigger` node, which triggers the workflow every 15 minutes.
2.  **Check Resource Usage (SSH):** Three `SSH` nodes execute commands to retrieve the current CPU, RAM, and Disk usage percentages. These commands are:
    -   `Check RAM usage`: `free | awk '/Mem:/ {printf "%.2f", (1 - $7/$2) * 100}'`
    -   `Check Disk usage`: `df -h | awk '$NF=="/" {printf "%.2f", $5}'`
    -   `Check CPU usage`: `top -bn 1 | grep "Cpu(s)" | sed "s/.*, *\\([0-9.]*\\)%* id.*/\\1/\" | awk '{print 100 - $1}'`
    The workflow uses a shared `SSH Password account` credential to connect to the remote server.
3.  **Merge Check Results:** A `Merge` node combines the output from the three `SSH` nodes into a single JSON object, using a custom SQL query.
4.  **Check Results Against Thresholds:** The `IF` node evaluates the CPU, RAM, and Disk usage against the threshold of 80%.  If *any* of the resources usage is greater than or equal to 80%, the workflow continues.
5.  **Send Email:** If the resource usage exceeds the threshold, the `Send Email` node sends an email notification containing the details of the CPU, RAM and Disk usage.  It's *critical* to update the `toEmail` and `fromEmail` parameters.

## Services:

-   **SSH:** Secure Shell for executing commands on a remote server.
-   **SMTP:** Simple Mail Transfer Protocol for sending email notifications.

## Hashtags:

#n8n #automation #servermonitoring #resourceusage #emailalert
