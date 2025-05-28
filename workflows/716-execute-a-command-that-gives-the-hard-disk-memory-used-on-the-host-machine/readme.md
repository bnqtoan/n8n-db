# Execute a command that gives the hard disk memory used on the host machine

## Use cases:

- **System Monitoring:** Automatically monitor the hard disk usage of a server and receive alerts when it exceeds a predefined threshold.
- **Proactive Maintenance:** Identify potential disk space issues before they cause service disruptions, allowing for timely intervention and cleanup.
- **Capacity Planning:** Track hard disk usage trends over time to make informed decisions about future storage needs.

## How it works:

1.  **Cron Trigger:** The workflow starts with a `Cron` node, which triggers the workflow at specified times (9 AM and 4 PM).
2.  **Execute Command:** The `Execute Command` node runs the command `df -k / | tail -1 | awk '{print $5}'` on the host machine. This command retrieves the hard disk usage percentage of the root partition.
3.  **IF Condition:** The `IF` node checks if the hard disk usage percentage (obtained from the previous step and converted to an integer) is greater than 80%.
4.  **Twilio Alert (if condition is met):** If the disk usage is above 80%, the `Twilio` node sends an SMS message to a specified phone number, alerting the user about the high disk usage. The message includes the current disk usage percentage.
5.  **NoOp (if condition is not met):** If the disk usage is not above 80%, the workflow goes to the `NoOp` node and does nothing.

## Services:

*   Twilio: For sending SMS alerts.

## Hashtags:

#n8n #automation #systemmonitoring #diskusage #twilio
