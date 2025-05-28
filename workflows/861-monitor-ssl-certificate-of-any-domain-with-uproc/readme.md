# Get SSL Certificate

## Use cases:

-   **SSL Certificate Expiry Monitoring:** Automatically monitor the SSL certificate expiry status of a specific domain and receive notifications when it expires.
-   **Scheduled Certificate Checks:** Schedule regular checks of SSL certificates for multiple domains to ensure continuous security and prevent website downtime due to expired certificates.
-   **Proactive Security Maintenance:** Integrate with domain management systems to proactively identify and address SSL certificate issues before they impact users.

## How it works:

1.  **Trigger:** The workflow is manually triggered by clicking 'execute'.
2.  **Create Domain Item:** A Function Item node sets the domain to be checked to `n8n.io`.
3.  **Get SSL Certificate:** The "Get SSL Certificate" node (using the Uproc tool) retrieves the SSL certificate information for the specified domain. It dynamically uses the domain from the "Create Domain Item" node.
4.  **Certificate Has Expired?**: An IF node checks if the `valid` property from the "Get SSL Certificate" node is false.
5.  **Send Expired Alarm:** If the certificate has expired (the condition in the IF node is true), a Telegram message is sent to a specified chat ID, notifying that the certificate for the domain has expired.

## Services:

-   **Telegram:** Used to send notifications about expired SSL certificates.
-   **Uproc:** Used to retrieve SSL certificate information.

## Hashtags:

#n8n #automation #ssl #certificate #monitoring
