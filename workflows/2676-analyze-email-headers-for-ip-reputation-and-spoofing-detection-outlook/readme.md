# Email Header Analyzer

## Use cases:
- **Security Analysis:** Analyze email headers to identify potential phishing attempts, spam, or other malicious activities by examining SPF, DKIM, and DMARC records, as well as the sender's IP reputation.
- **Forensic Investigation:** Trace the origin of an email by extracting the originating IP address and geographical location, aiding in investigations of email-based threats.
- **Automated Email Filtering:** Automatically flag or filter emails based on their authentication status and sender reputation, improving email security and reducing the risk of successful phishing attacks.

## How it works:
1.  **Trigger:** The workflow is triggered either by a new email arriving in an Outlook mailbox (when `Trigger on New Email` is enabled) or by an HTTP POST request to a designated webhook URL (`Webhook1`).
2.  **Header Retrieval:**
    -   For Outlook-triggered workflows, the `Retrieve Headers of Email` node fetches the email's headers using the Microsoft Graph API. The `Set Headers Here` node formats the `internetMessageHeaders` into a usable array.
    -   For webhook-triggered workflows, the `Set Webhook Headers Here` node extracts and formats the headers from the POST request body.
3.  **IP Extraction:** The `Extract Received Headers` node isolates "Received" headers, and `Remove Extra Received Headers` keeps only the most recent one. The `Extract Original From IP` node then uses a regular expression to extract the originating IP address from this header, excluding local/private IPs.
4.  **IP Analysis:**
    -   If an IP address is found (`Original IP Found?` is true):
        -   The `Query IP Quality Score API` node queries the IP Quality Score API to assess the IP's reputation, checking for spam or fraudulent activity.
        -   The `Query IP API` node uses the ip-api.com API to retrieve geographical information (country, city, organization) associated with the IP.
    -   If no IP is found, the workflow bypasses the IP analysis.
5.  **Authentication Header Checks:**
    -   The workflow checks for the presence of "Authentication-Results", "Received-SPF", "DKIM-Signature", and "DMARC" headers using `If` nodes.
    -   For each present header, the workflow extracts its value using `Code` nodes (`Extract Authentication-Results Header`, `Extract Received-SPF Header`, `Extract DMARC Header`), and sets a value to either "Pass", "Fail", "Neutral", "Error", or "Unknown" using `Set` nodes (`Determine Auth Values`, `Set SPF Value`, `Set DMARC Value`). If the header is not present, the workflow records this via nodes such as `No SPF Found`, `No DKIM Signature Found`, `No DMARC Header`.
6.  **Result Aggregation and Formatting:** The individual results from SPF, DKIM, and DMARC are merged and aggregated. The `Format Combined Auth Output` and `Format Individual Auth Outputs` node formats these results into a structured JSON, combining the authentication statuses, IP information, and reputation data.
7.  **Response:** Finally, the formatted output is sent back as a response via the `Respond to Webhook` node or `Format Webhook Output` node.

## Services:
- Microsoft Graph API (for retrieving email headers from Outlook)
- IPQualityScore API (for IP reputation analysis)
- ip-api.com (for IP geolocation lookup)

## Hashtags:
#n8n #emailsecurity #automation #phishing #emailanalysis
