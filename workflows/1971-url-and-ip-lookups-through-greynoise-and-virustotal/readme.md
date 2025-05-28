# URL and IP Threat Intelligence Workflow

## Use cases:

- **Automated Threat Analysis:** Automatically analyze URLs and IP addresses submitted via a web form or API to identify potential threats.
- **Security Incident Response:** Integrate with security incident response workflows to quickly gather information about suspicious URLs or IPs.
- **Proactive Threat Hunting:** Scan lists of URLs or IPs to identify potential threats before they impact the organization.

## How it works:

1.  **Trigger**: The workflow is triggered by either a webhook (API POST request) or a web form submission, accepting a list of URLs/IPs and an email address.
2.  **Data Preparation**:
    *   The webhook receives the data, and the "Item Lists" node splits the data array into individual items for processing.
    *   The "Set Email" node adds the email address from the webhook to each individual item for reporting purposes.
3.  **IP/URL Determination**: The "Is IP?" node checks if the input is an IP address or a URL using a regular expression.
4.  **IP Resolution**:
    *   If the input is a URL, the "DNS Lookup" node queries Google DNS to resolve the URL to an IP address.
    *   The "Set IP From Lookup" node extracts the IP address from the DNS response.
    *   If the input is already an IP, the "Set IP" node assigns the IP address directly.
5.  **Data Enrichment**:
    *   **Greynoise Integration**:
        *   Queries the GreyNoise RIOT and Noise APIs to gather information about the IP address, such as its classification, location, and tags.
        *   "Greynoise Summary" node: Save Greynoise details
    *   **VirusTotal Integration**:
        *   The "Start VirusTotal Scan" node submits the URL to VirusTotal for scanning.
        *   The workflow waits for the scan to complete, checking the status every 5 seconds via the "Wait 5s", "VirusTotal result", "Filter" and "VirusTotal ready?" nodes.
        *   Once the scan is complete, the workflow retrieves the scan results using the "VirusTotal result" node and compile the data by looping until get all results by "Combine looped items" node.
        *   "VirusTotal Summary" node: Save VirusTotal details
6.  **Data Merging**: The "Merge Greynoise results" and "Merge VirusTotal & Greynoise results" nodes combine the data from Greynoise and VirusTotal based on the IP address.
7.  **Reporting**:
    *   The "Send Report Email" node sends an email report containing the VirusTotal and Greynoise results to the email address provided in the initial webhook or form submission.
    *   The "Send Report Slack" node sends a Slack message with the same information to a specified channel.

## Services:

-   VirusTotal API
-   GreyNoise API (Enterprise Edition)
-   Google DNS API
-   Slack API
-   Gmail API

## Hashtags:

#n8n #threatintelligence #automation #security #API
