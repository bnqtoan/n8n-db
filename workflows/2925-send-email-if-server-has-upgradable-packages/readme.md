# VPS Upgrade Notify

## Use cases:

- **Daily Server Upgrade Check:** Automatically checks for available package updates on a VPS (Virtual Private Server) and notifies the administrator via email.
- **Proactive Security Maintenance:** Helps maintain server security by identifying and reporting available security updates promptly.
- **Reduce Manual Effort:** Eliminates the need to manually log into the server and check for updates, saving time and effort.

## How it works:

1.  **Schedule Trigger:** The workflow starts every day using the "Run workflow every day" node.
2.  **List Upgradable Packages:** The "List upgradable packages" node connects to a specified server via SSH and executes the command `apt list --upgradable` to list packages with available upgrades. It uses the provided SSH credentials.
3.  **Format as HTML List:** The "Format as HTML list" node takes the output from the SSH command and transforms it into an HTML unordered list (`<ul><li>`). This prepares the data for easy viewing in an email. It filters out the "Listing..." string and any empty lines.
4.  **Check if there are updates:** The "Check if there are updates" node checks if the formatted HTML list is not empty (i.e., if updates are available).
5.  **Send Email through SMTP:** If updates are available (the HTML list is not empty), the "Send Email through SMTP" node sends an email notification. The email contains the list of upgradable packages and prompts the recipient to log in and perform the upgrade. The recipient and sender email addresses and SMTP credentials must be correctly configured.

## Services:

-   **SSH:** Secure Shell for connecting to the server.
-   **SMTP:** Simple Mail Transfer Protocol for sending email notifications.

## Hashtags:

#n8n #automation #server #vps #updates
