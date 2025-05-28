# Analyze_email_headers_for_IPs_and_spoofing__3

## Use cases:

1.  **Email Security Monitoring:** Automatically analyze incoming email headers to identify potentially malicious emails, such as phishing attempts or spam, by checking IP reputation and authentication status (SPF, DKIM, DMARC).
2.  **Incident Response:** During a security incident, quickly analyze email headers to trace the origin of suspicious emails and assess the scope of the attack based on IP reputation and authentication failures.
3.  **Threat Intelligence:** Integrate with threat intelligence platforms by extracting and analyzing IP addresses from email headers, enriching the platform with valuable information about potential threats.

## How it works:

1.  **Receive Headers:** The workflow starts by receiving email headers via a webhook.
2.  **Extract and Explode Headers:** The `Extract Email Header from webhook` and `Explode Email Header` nodes extract and parse the email headers, separating them into key-value pairs for analysis.
3.  **Check for `Received` and `Authentication-Results` Headers:** The workflow splits into two paths based on the presence of `Received` and `Authentication-Results` headers using the `Received Headers Present?` and `Authentication Results Present?` nodes.
4.  **IP Analysis (if `Received` Headers are Present):**
    *   `Extract IPs from "received"` extracts IP addresses from the `Received` headers.
    *   `Split Out IPs` splits the extracted IPs into individual items.
    *   `IP Quality Score` queries the IP Quality Score API to retrieve reputation information for each IP address.
    *   `IP-API` retrieves geolocation data for each IP address.
    *   `Fraud Score` analyzes the IP Quality Score data to determine a fraud score and potential spam activity.
    *   `Collect interesting data` consolidates the IP address, fraud score, abuse information, organization, TOR status, ISP, spam activity, and sender reputation.
5.  **Authentication Analysis (if `Authentication-Results` Headers are Present):**
    *   `SPF/DKIM/DMARC from "authentication-results"` extracts SPF, DKIM, and DMARC results from the headers.
    *   The workflow uses different code and switch nodes to extract SPF, DKIM and DMARC from `"received-spf"`, `"dkim-signature"` and `"received-dmarc"` fields.
    *   `Aggregate Authentication Data` combines SPF, DKIM, and DMARC results.
6.  **Data Merging and Response:** The workflow merges the results from both paths (IP analysis and authentication analysis) using `Merge` and `Item Lists` nodes.
7.  **Respond to Webhook:** Finally, the `Respond to Webhook` node sends the combined analysis results as a response to the webhook.

## Services:

*   **IP Quality Score API:** Used for IP reputation analysis and fraud scoring.
*   **IP-API:** Used for IP geolocation data.

## Hashtags:

#n8n #emailsecurity #automation #threatintelligence #security

