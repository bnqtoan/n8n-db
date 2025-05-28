# Weekly Shodan Query & Report Accidents (No Function Node)

## Use cases:

- **Proactive Security Monitoring:** Regularly scan your organization's public IPs for unexpected open ports, helping identify potential vulnerabilities before they are exploited.
- **Compliance Auditing:** Automate the process of verifying that your systems adhere to security policies regarding allowed open ports, generating reports for compliance purposes.
- **Incident Detection and Response:** Upon detecting an unexpected open port, automatically create an alert in TheHive, enabling security teams to quickly investigate and respond to potential incidents.

## How it works:

1.  **Schedule Trigger (Every Monday):** The workflow starts on a weekly schedule (every Monday at 5 AM).
2.  **Get Watched IPs & Ports:** Retrieves a list of IP addresses and their associated allowed ports from an internal source (e.g., a security system or database) using an HTTP Request node.
3.  **For each IP:** Processes each IP address individually in a batch.
4.  **Scan each IP:** Queries the Shodan API to identify open ports and services running on the target IP address.
5.  **Split out services:** Extracts each service identified by Shodan to be filtered individually.
6.  **Unexpected port?:** Filters the results to identify ports that are open but not in the list of allowed ports retrieved in step 2.
7.  **Set data to post for each port:** Formats the data of each unexpected port, including the IP address, hostnames, port number, and service description.
8.  **Convert to table:** Convert the formatted data from each port to an HTML table.
9.  **Convert to Markdown:** Converts the HTML table into Markdown format for better readability in alerts and reports.
10. **Create TheHive alert:** Creates a security alert in TheHive, including the Markdown report of unexpected open ports. The alert is tagged with the IP address.

## Services:

-   **Shodan:** Used for external asset discovery and identifying open ports and services.
-   **TheHive:** A Security Incident Response Platform used for incident management and alert aggregation.

## Hashtags:

#n8n #automation #security #shodan #thehive #incidentresponse
