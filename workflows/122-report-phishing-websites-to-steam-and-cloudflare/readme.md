# n8n Workflow: Steam Phishing Detection and Reporting

This workflow automates the process of detecting and reporting potential Steam phishing websites. It receives a domain name via a webhook, validates it, checks if it uses Cloudflare, and then sends email reports to both Cloudflare and Steam if necessary.

## Use cases:

1.  **Automated Phishing Detection:**  Automatically monitor submitted URLs for potential Steam phishing attempts, reducing the manual effort required for threat intelligence.
2.  **Rapid Response:**  Immediately notify Cloudflare and Steam security teams upon detection of a potential phishing site, enabling faster takedown and mitigation.
3.  **Community Watch:** Allow community members to submit suspicious URLs and trigger the workflow to check and report them.

## How it works:

1.  **Webhook Trigger:** The workflow starts with a `Webhook` node, listening for incoming HTTP requests at the `/steam` endpoint. It expects a query parameter named `q` containing the domain name to check (e.g., `/steam?q=example.com`).
2.  **Domain Validation**: The `IF1` node checks if the domain name received from the webhook is valid using a regular expression.
3.  **Install bind-tools (Conditionally):** The `Add bind-tools` node installs the `bind-tools` package if it's not already present on the system. This provides the `dig` command, which is crucial for DNS lookups. This step continues even if it fails to ensure future dig commands can work.
4.  **Check for Nameservers:** The `dig check if domain is valid` node uses the `dig` command to query the domain's name servers. It then uses the `If it has nameservers` node to verify if the domain has nameservers assigned.
5.  **Cloudflare Check:** The `dig check CF` node utilizes the `dig` command to determine if the domain's name servers point to Cloudflare. It counts the number of lines in the output that contain "cloudflare.com.".
6.  **Conditional Branching:** The `IF` node checks if the output of the `dig check CF` node is greater than 0, indicating the domain is using Cloudflare.
7.  **Email Notifications:**
    *   If the domain uses Cloudflare (`IF` node condition is true), the `Mail CloudFlare` node sends an email to `security@cloudflare.com` to report the phishing site.
    *   The `Mail Steam` node sends an email to `security@valvesoftware.com` to report the phishing site, regardless of whether Cloudflare is used or not.

## Services:

*   **Mailgun:**  Used to send email notifications to Cloudflare and Steam.
*   **dig (DNS lookup tool):** Used to query DNS records and determine if a domain is using Cloudflare.

## Hashtags:

#n8n #automation #phishing #security #cloudflare #steam
